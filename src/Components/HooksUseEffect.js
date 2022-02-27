import React, { Component } from 'react'

 class HooksuseEffect extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          count: 0,
          name: ' '
       }
     }
     componentDidMount() {
        document.title =`Clicked $ {this.state.count}times`
     }
     componentDidUpdate(prevProps, prevState) {
       if(prevState.count != this.state.count) {
        console.log('Update Document Title')
        document.title=`Cliked ${this.state.count}`
       }
     }
  render() {
    return (
      <div>
          <h1>HooksuseEffect</h1>
          <input type="text" 
          value={this.state.name} 
          onChange={e => {this.setState({name:e.target.value})
        }} />
        <button onClick={()=>this.setState({count:this.state.count +1})}>Clicked {this.state.count}</button>
      </div>
    )
  }
}

export default HooksuseEffect