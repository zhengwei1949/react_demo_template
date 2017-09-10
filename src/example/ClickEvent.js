// react中的事件支持和使用
import React, {Component} from 'react';

// 直接在js中定义样式，内嵌样式
let style = {
    backgroundColor: 'blue'
}

export default class ClickEvent extends Component {
    // 设置默认属性和默认状态
    constructor(props) {
        super(props);
        // 初始化state
        this.state = {
            liked: false,
            myVal:'abc'
        };
    }

    //让别人用我们组件的时候更加的规范
    static propTypes = {
        a:React.PropTypes.string.isRequired
    }

    // 单击事件处理方法
    handleClick(pm1,pm2,pm3,e) {
        console.log(pm1);
        console.log(pm2);
        console.log(pm3);
        console.log(e);
        this.setState({ liked: !this.state.liked });
    }

    componentWillMount(){

    }

    //U盘 在生命周期函数里面加
    componentDidMount() {
        // console.log(this.props.list);
        window.addEventListener('resize',function(){
            console.log('窗口大小改变');
        })
    }

    componentWillUnMount(){
        window.removeEventListener('resize')
    }
    // 用箭头函数去定义自己的方法
    handleMouseOver=()=>{
        console.log(this);
    }
    //点击button按钮，弹出1
    myFn=()=>{
        alert(1)
    }

    myFn1=(e)=>{
        console.log(e.target);//事件对象
        // console.log(this.refs.x);
    }
    handleChange = (e)=>{
        // console.log(e.target.value);
        //state,父组件传进来的props中的任意一个东西的值变了，render方法重新调用
        this.setState({
            myVal:e.target.value
        })

    }
    render() {
        const text = this.state.liked ? 'like' : 'haven\'t liked';

        let arr = [2,3,4]

        // return；里面是要渲染的html页面
        return (
            <div ref="bcd">
                {this.props.a}
                <input type="button" value="点击获取span的innerHTML" onClick={this.myFn1} ref="x" />
                <span ref="ceshi">abc123</span>
                <p  onMouseOver={this.handleMouseOver} onClick={this.handleClick.bind(this,23,"dfdf",function(){})}>
                You {text} this. Click to toggle.
                <input type="button" onClick={this.myFn} value="点击弹出1" ref="mn" />
                {/*如果给一个input加上一个value，就会变成受控表单*/}
                <input type="text" value={this.state.myVal} onChange={this.handleChange} />
                </p>
                <h3>{this.state.myVal}</h3>

                <input type="text" defaultValue={this.state.myVal}   />



                <ul>
                    {arr.map(function(item,index){return <li key={index}>{item}</li>})}
                </ul>
            </div>
        );
    }
}
