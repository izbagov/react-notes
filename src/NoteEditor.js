import React, { Component } from 'react';
import './css/editor.css';

class NoteEditor extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
	}

	textChange(event) {
		this.setState({
			text: event.target.value
		})
	}

	handleNoteAdd() {
		var newNote = {
			text: this.state.text,
			color: 'yellow',
			id: Date.now()
		};

		this.props.onNoteAdd(newNote);
		this.setState({ text: '' });
	}

	render() {
		return (
		  <div className="note-editor">
		  	<textarea placeholder="Enter your note here.." value={this.state.text} onChange={this.textChange.bind(this)} className="textarea" />
		  	<button className="add-button" onClick={this.handleNoteAdd.bind(this)}>Add</button>
		  </div>
		);
	}
}

export default NoteEditor;