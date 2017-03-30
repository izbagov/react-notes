import React, { Component } from 'react';
import Note from './Note';
import Masonry from 'react-masonry-component';

class NoteGrid extends Component {

  render() {

    const masonryOptions = {
        itemSelector: '.note',
        columnWidth: 220,
        gutter: 10,
        isFitWidth: true
    };

    return (
        <Masonry className='NotesGrid' options={masonryOptions}>
        	{
        		this.props.notes.map(note =>
              <Note key={note.id} color={note.color} onDelete={this.props.onNoteDelete.bind(null, note)}>
                {note.text}
              </Note>
        		)
        	}
        </Masonry>
    );
  }
}

export default NoteGrid;