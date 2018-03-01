import React, { Component } from 'react';

import './style.css'

class Logo extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		rotValue: 0
  	};
  }

  cudeRotation = () => {
  	let { rotValue } = this.state;

		if (rotValue === 360) {
			rotValue = 0;
		}
	  rotValue++;
	  
	  this.setState({
	  	rotValue: rotValue
	  });

	  document.querySelector('.cube').style.transform =
	    'rotateY(' + rotValue + 'deg)'+
	    'rotateX(' + rotValue + 'deg)';
  }

  componentDidMount() {
    // setInterval(this.cudeRotation, 50);
  }

	render() {
		return (
			<div className="Logo">
        <div className="cube">
          <div className="side side-red">
            <table className="tableStyle sideStyleRed">
              <tbody><tr><td></td></tr></tbody>
            </table>
            <div className="sideLabel">Y</div>
          </div>
          <div className="side side-orange">
            <table className="tableStyle sideStyleOrange">
              <tbody><tr><td></td></tr></tbody>
            </table>
            <div className="sideLabel">Y</div>
          </div>
          <div className="side side-white">
            <table className="tableStyle sideStyleWhite">
              <tbody><tr><td></td></tr></tbody>
            </table>
            <div className="sideLabel">Y</div>
          </div>
          <div className="side side-yellow">
            <table className="tableStyle sideStyleYellow">
              <tbody><tr><td></td></tr></tbody>
            </table>
            <div className="sideLabel">Y</div>
          </div>
          <div className="side side-green">
            <table className="tableStyle sideStyleGreen">
              <tbody><tr><td></td></tr></tbody>
            </table>
            <div className="sideLabel">Y</div>
          </div>
          <div className="side side-blue">
            <table className="tableStyle sideStyleBlue">
              <tbody><tr><td></td></tr></tbody>
            </table>
            <div className="sideLabel">Y</div>
          </div>
        </div>
      </div>
		);
	}
}

export default Logo;
