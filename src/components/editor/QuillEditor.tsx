import * as React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
  editor: {
    "& .ql-toolbar": {
      borderColor: theme.palette.primary.main,
      background: theme.palette.grey[100],
    },
    "& > .ql-container, & .ql-editor": {
      minHeight: 250,
      zIndex: 0,
    },
    "&.disabled .editor .ql-container": {
      borderColor: theme.palette.primary.main,
    },
    
  },
}));

export interface QuillEditorProps {
  readonly onEditorChange: (data: string) => void;
  readonly data?: string;
}

const QuillEditor: React.FC<QuillEditorProps> = (props) => {
  const classes = useStyles(props);
  const { onEditorChange, data } = props;
  return (
    <>
      <ReactQuill
        className={clsx(classes.editor)}
        value={data}
        onChange={onEditorChange}
        placeholder={"Write something awesome..."}
      />
    </>
  );
};

export default QuillEditor;
