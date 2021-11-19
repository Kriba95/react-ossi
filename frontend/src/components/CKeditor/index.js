import React, {  } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// CKEditor Docs
// https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html

let editorData =  "<p>Hello from CKEditor 5! <b> Hellos </b></p>";


const TextEditor = () => {
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use! ", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </>
  );
};

export default TextEditor;
