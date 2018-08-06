import React from 'react'

class CoordinatesButton extends React.Component{

  myOnClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return (
      <div>
        coButton:
        <button
        onClick={this.myOnClick}
        >
        </button>
      </div>
    )
  }
}

export default CoordinatesButton
