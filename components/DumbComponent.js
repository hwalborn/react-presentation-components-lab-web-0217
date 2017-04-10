import React from 'react'

class DumbComponent extends React.Component{
  constructor(){
    super()
    this.state = {
      mood: 'happy'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      mood: 'sad'
    })
  }

  render(){
    return(
      <div onClick={this.handleClick}>
        <h1>{this.state.mood}</h1>
      </div>
    )
  }
}

export default DumbComponent
