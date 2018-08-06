import React from 'react'

class DelayedButton extends React.Component{

  myOnClick = (event) => {
    event.persist()
    let myCB = this.props.onDelayedClick
    setTimeout(function(){return myCB(event)}, this.props.delay)
  }

  render(){
    return (
      <div>
        dbutton:
        <button
          onClick={this.myOnClick}
        >
        </button>
      </div>
    )
  }
}

export default DelayedButton
