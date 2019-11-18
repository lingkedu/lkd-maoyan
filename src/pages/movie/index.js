import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMovies, getComingMovies } from '../../actions'
import '../../assets/style/list.css'

import { homeFilter } from '../../filters/index';

import BScroll from 'better-scroll';

import _ from 'loadsh'

import { Toast } from 'antd-mobile';
class Movie extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         movie: []
    //     }
    // }

    componentDidMount() {
        this.props.getMovies()

        // const {movie} = this.state
        // console.log(7898,this.props)
        // this.setState({
        //     movie:this.props
        // })

        let count = 0
        const bs = new BScroll('.page', {
            pullUpLoad: {
                threshold: 30 // 举例底部多少的时候开始加载
            }
        })
        /* ! pullingUp 上拉加载事件  better-scroll提供的 */
        // bs.on( 事件名称，事件处理程序)
        bs.on('pullingUp', () => { // 上拉加载必须有一个选项要配置   pullUpload
            const { movies } = this.props

            // 1. id分组
            const movieIds = movies.movieIds.slice(12)
            const ids = _.chunk(movieIds, 10)
            //   console.log("兵哥: mounted -> ids", ids[ count ])

            if (count == ids.length) {

                Toast.offline('数据已经加载完了', 1);
                bs.finishPullUp() // 必须告诉他拉动结束了
                return;
            }

            if (count < ids.length) {
                // 可以啦 - 可以进行数据请求了
                // console.log('进行数据请求')           
                this.props.getComingMovies(ids[count].join(','))
                this.setState({
                    movie: []
                })
            }
            Toast.loading('Loading...', 1, () => {
                // console.log('Load complete !!!');
              });
            bs.finishPullUp() // 必须告诉他拉动结束了
            count++
        })
    }

    changeMovie = () => {
        const { movies } = this.props
        return movies && movies.movieList.map((item, index) => {
            return <div className="item" key={index}>
                <div className="main-block">
                    <div className="avatar" >
                        <div className="default-img-bg">
                            <img src={homeFilter.imgFilter(item.img)}
                            ></img>
                        </div>
                    </div>
                    <div className="mb-outline-b content-wrapper">
                        <div className="column content">
                            <div className="box-flex movie-title">
                                <div className="title line-ellipsis v2dimax_title">{item.nm}</div>
                                <span className="version v2d imax"></span>
                            </div>
                            <div className="detail column">
                                <div className="score line-ellipsis">
                                    <span className="score-suffix">观众评 </span>
                                    <span className="grade">{item.sc}</span>
                                </div>
                                <div className="actor line-ellipsis">主演: {item.star} </div>
                                <div className="show-info line-ellipsis">{item.showInfo}</div>
                            </div>
                        </div>
                        <div className="button-block" >
                            <div className={item.globalReleased && 'btn normal' || 'btn pre'}>
                                <span className="fix">
                                    {item.globalReleased && '购买' || '预售'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        })
    }



    render() {
        return (
            <div className="tab-content">
                <div className="page n-hot active" >
                    <div className="list-wrap">
                        {this.changeMovie()}
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(
    state => state.movieReducer,
    dispatch => bindActionCreators({ getMovies, getComingMovies }, dispatch)
)(Movie)