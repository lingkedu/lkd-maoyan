import { GET_MOVIES , GET_COMING_MOVIES} from './actiontype'
import request from './request'
export const getMovies = () => {
    return async dispatch => {
        // 先进行数据请求
      const result = await request({
        url: '/ajax/movieOnInfoList',
        params: {
          token: ''
        }
      })
      // console.log("零刻度: getMovies -> result", result)
    // 发送action
      dispatch({
        type: GET_MOVIES,
        payload: result.data 
      })
    }
}


export const getComingMovies = (movieIds) => {
  // console.log(零刻度---,movieIds)
  return async dispatch => {
      // 先进行数据请求
      // console.log(零刻度---)
    const result2 = await request({
      url: '/ajax/moreComingList',
      params: {
        token: '',
        movieIds:movieIds
      }
    })
    // console.log("零刻度", result2)
  // 发送action
    dispatch({
      type: GET_COMING_MOVIES,
      payload:result2.data 
    })
  }
}


