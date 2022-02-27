import React, { Component } from 'react'

 class ClassCounter extends Component {
     constructor(props) {
       super(props)
       this.state = {
          count: 0
       }
     }
     increamentCount = () => {
         this.setState({
             count:this.state.count+1
         })
     }
  render() {
    return (
      <div>
          <h1>ClassCounter</h1>
          <button onClick={this.increamentCount}>Cont {this.state.count}</button>
        </div>
    )
  }
}

export default ClassCounter