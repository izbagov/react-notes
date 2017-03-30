import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteGrid from './NoteGrid';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    var localNotes = JSON.parse(localStorage.getItem('notes'));
    if(localNotes) {
      this.setState({ notes: localNotes })
    }
  }

  componentDidUpdate() {
    this._updateLocalStorage();
  }

  handleNoteAdd(newNote) {
    var newNotes = this.state.notes.slice();
    newNotes.unshift(newNote);
    this.setState({ notes: newNotes });
  }

  handleNoteDelete(note) {
    var noteId = note.id;
    var newNotes = this.state.notes.filter(function(note){
      return note.id !== noteId;
    });
    this.setState({ notes: newNotes });
  }

  render() {
    return (
      <div className="Note-App">
        <NoteEditor onNoteAdd={this.handleNoteAdd.bind(this)} />
        <NoteGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete.bind(this)} />
      </div>
    );
  }

  _updateLocalStorage() {
    var notes = JSON.stringify(this.state.notes);
    localStorage.setItem('notes', notes);
  }

}

export default App;
