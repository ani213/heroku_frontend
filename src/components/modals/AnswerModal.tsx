import { Button, Grid } from "@material-ui/core";
import * as React from "react";
import Editor from "../editor/Editor";
import BaseModal, { BaseModalAction, BaseModalContent } from "./BaseModal";
import ErrorModal from "./ErrorModal";

export interface AnswerModalProps {
  readonly isOpen: boolean;
  readonly onClose?: () => void;
  readonly problem?:Problem;
}

const AnswerModal: React.FC<AnswerModalProps> = (props) => {
  const [state,setState]=React.useState<string>("");
  const { isOpen, onClose, problem} = props;
  return (
    <>
      <BaseModal
        isOpen={isOpen}
        title={"Answer"}
        color="secondary"
        align="center"
        fullScreen={true}
        onClose={onClose}
      >
        <BaseModalContent dividers>
          <Grid container xs={12}>
            <Grid item xs={12}>
              <Editor
              onEditorChange={(data:string)=>{setState(data)}}
               data={state||problem?.answer}
              />
            </Grid>
          </Grid>
        </BaseModalContent>
        <BaseModalAction>
          <Button variant="contained"  onClick={onClose}>Cancel</Button>
          <Button variant="contained" color="primary" disabled={!state}>Submit</Button>
        </BaseModalAction>
      </BaseModal>
      <ErrorModal />
    </>
  );
};
export default AnswerModal;
