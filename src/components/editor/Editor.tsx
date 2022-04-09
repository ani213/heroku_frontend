import * as React from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// const editorConfiguration:any = {
//   height:600
// };

export interface EditorProps {
  readonly onEditorChange:(data:string)=>void;
  readonly data?:string;
}

const Editor: React.FC<EditorProps> = (props) => {
  const {onEditorChange,data}=props;
  return (
    <>
      <CKEditor
        
        editor={ClassicEditor}
        // config={ editorConfiguration }
        data={data}
        onReady={(editor) => {
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onEditorChange(data)
        }}
        onBlur={(event, editor) => {
        }}
        onFocus={(event, editor) => {
        }}
      />
    </>
  );
};

export default Editor;
