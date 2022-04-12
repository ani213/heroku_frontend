import * as React from "react";
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

export interface QuillEditorProps {
  readonly onEditorChange:(data:string)=>void;
  readonly data?:string;
}

const QuillEditor: React.FC<QuillEditorProps> = (props) => {
  const {onEditorChange,data}=props;
  return (
    <>
      <ReactQuill 
      value={data}
    onChange={onEditorChange} />
    </>
  );
};

export default QuillEditor;
