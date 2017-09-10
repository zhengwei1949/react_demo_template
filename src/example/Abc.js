import React,{Component} from 'react'
import ReactDOM from 'react-dom'
//所有的组件都要继承自Component这个类
let a = 123;
//一定要是规范的属性
let obj = {
    name:"xiaoMing",
    htmlFor:"20",
    "data-a":"200",
    "data-m":200
};

export default class Abc extends Component{
    render(){
        return (
            <div className="abc" {...obj}>
                <h1>Hello World{a}</h1>
                <div>{this.props.name}222</div>
                <label htmlFor="abc"></label><input  id ="abc" type="text" />
                <p>wfwef</p>
            </div>
        )
    }
}

