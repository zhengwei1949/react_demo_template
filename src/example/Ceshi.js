import React,{Component} from 'react'

export default class Ceshi extends Component{
    // 数据是有两种：
    // 闹钟 颜色 价格 当前的时间
    //<input type="checkbox" /> 打勾 state状态
    constructor(props){
        super(props);
        this.state = {
            a:100
        }
    }
    //this --> 代表的是当前这个组件
    //this.props --> 可以拿到所有的父组件传过来的数据
    render(){
        return <h1>{this.props.name} --- {this.props.age} -- {this.state.a}</h1>
    }
}
