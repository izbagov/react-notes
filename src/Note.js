import React, { Component } from 'react';
import './css/note.css';

class Note extends Component {
  render() {
  	var style = {
  		backgroundColor: this.props.color
  	}
    return (
      <div className="note" style={style}>
      	<span className="delete-note" onClick={this.props.onDelete}>x</span>
      	{this.props.children}
      </div>
    );
  }
}

export default Note;