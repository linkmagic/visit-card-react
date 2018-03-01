import React, { Component } from 'react';

import './style.css';

class Typewriter extends Component {

  setupTypewriter = (t) => {
	  var HTML = t.innerHTML;

	  t.innerHTML = '';

	  var cursorPosition = 0,
	      tag = "",
	      writingTag = false,
	      tagOpen = false,
	      typeSpeed = 100,
	      tempTypeSpeed = 0;

	  var type = function() {
	    if (writingTag === true) {
	      tag += HTML[cursorPosition];
	    }

	    if (HTML[cursorPosition] === '<') {
	      tempTypeSpeed = 0;
	      if (tagOpen) {
	        tagOpen = false;
	        writingTag = true;
	      } else {
	        tag = '';
	        tagOpen = true;
	        writingTag = true;
	        tag += HTML[cursorPosition];
	      }
	    }
	    if (!writingTag && tagOpen) {
	      tag.innerHTML += HTML[cursorPosition];
	    }
	    if (!writingTag && !tagOpen) {
	      if (HTML[cursorPosition] === ' ') {
	        tempTypeSpeed = 0;
	      }
	      else {
	        tempTypeSpeed = (Math.random() * typeSpeed) + 50;
	      }
	      t.innerHTML += HTML[cursorPosition];
	    }
	    if (writingTag === true && HTML[cursorPosition] === '>') {
	      tempTypeSpeed = (Math.random() * typeSpeed) + 50;
	      writingTag = false;
	      if (tagOpen) {
	        var newSpan = document.createElement('span');
	        t.appendChild(newSpan);
	        newSpan.innerHTML = tag;
	        tag = newSpan.firstChild;
	      }
	    }

	    cursorPosition += 1;
	    if (cursorPosition < HTML.length - 1) {
	      setTimeout(type, tempTypeSpeed);
	    }
	  };

	  return {
	    type: type
	  };
	}

  componentDidMount() {
    var idTypewriter = document.getElementById('typewriter');
    var typer = this.setupTypewriter(idTypewriter);
	  typer.type();
  }

	render() {
		return (
      <pre id="typewriter">
        <span className="var-highlight">var</span><span className="var-name-highlight"> object</span><span className="sign-equal-highlight"> =</span><span className="sign-other-highlight"> &#x7b;</span>
			  <span className="obj-field-highlight">name</span><span className="sign-other-highlight">:</span> <span className="string-highlight">'Yevhen Sapsai'</span><span className="sign-other-highlight">,</span>
			  <span className="obj-field-highlight">type</span><span className="sign-other-highlight">:</span> <span className="string-highlight">'Front-end Developer'</span><span className="sign-other-highlight">,</span>
			  <span className="obj-field-highlight">location</span><span className="sign-other-highlight">:</span> <span className="string-highlight">'Kyiv, Ukraine'</span><span className="sign-other-highlight">,</span>
			  <span className="obj-field-highlight">skills</span><span className="sign-other-highlight">: &#x5b;</span><span className="string-highlight">'HTML5'</span><span className="sign-other-highlight">,</span><span className="string-highlight">'CSS3'</span><span className="sign-other-highlight">,</span><span className="string-highlight">'ES6'</span><span className="sign-other-highlight">,</span>
				<span className="string-highlight">'React'</span><span className="sign-other-highlight">,</span><span className="string-highlight">'Redux'</span><span className="sign-other-highlight">,</span>
				<span className="string-highlight">'Gulp'</span><span className="sign-other-highlight">,</span><span className="string-highlight">'Webpack'</span><span className="sign-other-highlight">,</span>
				<span className="string-highlight">'Git'</span><span className="sign-other-highlight">&#x5d;;</span>
				<span className="sign-other-highlight">&#x7d;</span>
			</pre>
		);
	}
}

export default Typewriter;
