/*入口文件*/
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
// console.log(1)
// import Hello from '../example/Hello.js'
import Abc from '../example/Abc.js'
import Bcd from '../example/Bcd.js'
import Life from '../example/Life.js'
import Ceshi from '../example/Ceshi.js'
import ClickEvent from '../example/ClickEvent.js'
import Combination from '../example/Combination.jsx';


let arr = [2,3,4];

ReactDOM.render(
    <div>
       <Combination />
    </div>,
    document.getElementById('app')
)