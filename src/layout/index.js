import React, { Component } from 'react'
import Tab from '../components/common/tab'
import TabBar from '../components/common/tabbar'
import { Route, Switch, Redirect,withRouter } from "react-router-dom"
import Home from './../pages/home';
import Mine from './../pages/mine';
import Cinema from './../pages/cinema';
import NotFound from './../pages/notfound';
import City from './../pages/home/City';
import Search from './../pages/home/Search';
 class LayOut extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tabFlag: false,
            title: {
                '/home': '猫眼电影',
                '/mine':'私人影院',
                '/cinema':'影院',
                '/City':"城市",
                '/Search':'搜索内容',
                '/home/hot':'猫眼电影',
                '/home/comming':'猫眼电影',

            },
            arr: ['/mine','/City','/Search'],
        }
    }

// 第一次渲染
componentDidMount() {
    this.changeTabFlag()
    this.changehomeHot()
   
}

// 更新渲染
componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
    this.changeTabFlag(nextProps)
    this.changehomeHot(nextProps)
}


// 控制tab 返回箭头
changeTabFlag = (nextProps) => {
    const { pathname } = nextProps && nextProps.location || this.props.location
    const f = this.state.arr.some(item => item == pathname)
    if (f) {
        this.setState({
            tabFlag: true,
        })
    } else {
        this.setState({
            tabFlag: false,
        })
    }
}

//  编程式导航
changehomeHot = (nextProps) => {
    const {pathname} = nextProps && nextProps.location || this.props.location
    const {push,replace} = nextProps && nextProps.history ||this.props.history
    if(pathname=='/home'){
        push('/home/hot')
    }
}

    render() {
        const {tabFlag,title} = this.state
        const { pathname } = this.props.location
        return (
            <div className='layout'>
                <Tab tabFlag={tabFlag} title={title[pathname]} {...this.props}/>
                <Switch>
                    <Redirect from="/" to="/home" exact />
                    <Route path="/home" component={Home} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/cinema" component={Cinema} />
                    <Route path="/City" component={City} />
                    <Route path="/Search" component={Search} />
                    <Route component={NotFound} />
                </Switch>
                <TabBar />
            </div>
        )
    }
}


export default withRouter(LayOut)