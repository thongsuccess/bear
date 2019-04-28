import React, { Component } from 'react';

const HOC = High => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                str: 'thong'
            }
        }
        render() {
            return <High {...this.state}></High>
        }
    }
}
export default HOC;