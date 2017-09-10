## jsx语法
- () --> 包着render里面的return
- {} --> 里面写js的
- < --> 里面写html的
### 组件注意事项
- 文件名和组件名一定要是大写
```jsx 
//创建组件Abc
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
//所有的组件都要继承自Component这个类
let a = 123;
let obj = {
    name:"xiaoMing",
    htmlFor:"20"
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

```


```jsx 
//使用组件Abc
/*入口文件*/
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
// console.log(1)
// import Hello from '../example/Hello.js'
import Abc from '../example/Abc.js'

ReactDOM.render(
    <div>
        <Abc name="abc"></Abc>
        <p>我是内容</p>
    </div>,
    document.getElementById('app')
)
```

## 和之前写法不一样的
- 一定要是闭合标签
- for --> htmlFor 
- class --> className

## 属性扩展

beforeCreate
created 
beforeMounted
mounted




props 
state