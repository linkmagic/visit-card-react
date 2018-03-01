import React, { Component } from 'react';

import './style.css'

class MenuBar extends Component {
	render() {
		return (
			<div className="MenuBar">
	      
	      <div className="indent"></div>

	      <a className="MenuBar__Button">
	        <svg className="MenuBarIcon" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
	          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
	          <path d="M0 0h24v24H0z" fill="none"/>
	        </svg>
	        <div className="ToolTip">Home</div>
	      </a>
	      
	      <a className="MenuBar__Button">
	        <svg className="MenuBarIcon" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
	          <path d="M0 0h24v24H0z" fill="none"/>
	          <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"/>
	        </svg>
	        <div className="ToolTip">Skills</div>
	      </a>
	      
	      <a className="MenuBar__Button">
	        <svg className="MenuBarIcon" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
	          <path d="M0 0h24v24H0z" fill="none"/>
	          <path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"/>          
	        </svg>
	        <div className="ToolTip">Projects</div>
	      </a>
	      
	      <a className="MenuBar__Button">
	        <svg className="MenuBarIcon" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
	          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
	          <path d="M0 0h24v24H0z" fill="none"/>
	        </svg>
	        <div className="ToolTip">Contact</div>
	      </a>
	    </div>
		);
	}
}

export default MenuBar;
