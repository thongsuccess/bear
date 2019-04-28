import React, { Component } from 'react';
import * as config from './config'; //将所有的config文件下的抛出
import NoStateComponent from './NoStateComponent'
import High from './Hoc';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['北京', '上海', '江苏']
        }
    }
    render() {
        const { list } = this.state;
        console.log('props', this.props);
        const { str } = this.props;

        return (
            <div>
                姓名：{`${str}'-------'我是高阶组件的参数`}
                <br/>
                年龄:{config.obj.age}
                性别:{config.obj.sex}
                {/* {config.fun()} 这种的适用于初始页面 正常页面没有这种操作的 */}
                <NoStateComponent arr={list}></NoStateComponent>
            </div>
        )
    }
}
export default High(Index);