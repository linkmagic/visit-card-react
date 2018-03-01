import React, { Component } from 'react';

import './style.css';
import Typewriter from '../Typewriter';

class TabsEditor extends Component {

	render() {
		return (
			<div className="tabsEditor">
			  <div className="tabs">
			    <div className="tab">Short.Info</div>  
			  </div>
			  <div className="editor">
			    <div className="editorLines">
			      <span className="editorLineNum">1</span>
			      <span className="editorLineNum">2</span>
			      <span className="editorLineNum">3</span>
			      <span className="editorLineNum">4</span>
			      <span className="editorLineNum">5</span>
			      <span className="editorLineNum">6</span>
			      <span className="editorLineNum">7</span>
			      <span className="editorLineNum">8</span>
			      <span className="editorLineNum">9</span>
			      <span className="editorLineNum">10</span>
			    </div>
			    <Typewriter/>
		  </div>
		  <div className="statusBarEditor">
		    <span className="statusBarEditor__cursor">Line 9, Column 4</span>
		    <span className="statusBarEditor__encoding">UTF-8</span>
		    <span className="statusBarEditor__language">JS (Babel)</span>
		    <span className="statusBarEditor__lineEnd">LF (Unix)</span>
		  </div>
		</div>
		);
	}
}

export default TabsEditor;
