import React, { Component } from 'react';
import ReactSummernote from 'react-summernote';

import $ from 'jQuery'

import 'react-summernote/dist/react-summernote.css'; // import styles
import 'react-summernote/lang/summernote-fi-FI'; // you can import any other locale

// Import bootstrap(v3 or v4) dependencies
// import 'bootstrap/js/modal';
// import 'bootstrap/js/dropdown';
// import 'bootstrap/js/tooltip';
// import 'bootstrap/dist/css/bootstrap.css';


class RichTextEditor extends Component {
  onChange(content) {
    console.log('onChange', content);
  }

  render() {
    return (
      <ReactSummernote
        value="Default value"
        options={{
          lang: 'fi-',
          height: 350,
          dialogsInBody: true,
          toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['fontname', ['fontname']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['fullscreen', 'codeview']]
          ]
        }}
        onChange={this.onChange}
      />
    );
  }
}

export default RichTextEditor;