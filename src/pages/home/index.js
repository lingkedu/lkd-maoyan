import React, { Component } from 'react'
import './index.scss'
import {Route,Redirect} from 'react-router-dom'
import Comming from './Comming.js'
import Hot from './Hot.js'
import Nav from './Nav.js'
export default class Home extends Component {
    render() {
        return (
            <div className="container">
                 <Nav/>
                 {/* <Redirect from  = "/home" to = "/home/hot" exact/> */}
                 <Route path='/home/hot' component={Hot}></Route>
                 <Route path='/home/comming' component={Comming}></Route>
            </div>
        )
    }
}
