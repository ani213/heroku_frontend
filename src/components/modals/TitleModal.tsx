import { Button, Grid, TextField } from "@material-ui/core";
import * as React from "react";
import BaseModal, { BaseModalAction, BaseModalContent } from "./BaseModal";
import ErrorModal from "./ErrorModal";

export interface TitleModalProps {
  readonly isOpen: boolean;
  readonly onClose?: () => void;
  readonly problem?:Problem;
}

const TitleModal: React.FC<TitleModalProps> = (props) => {
  const [state,setState]=React.useState<string>("");
  const { isOpen, onClose, problem} = props;
  return (
    <>
      <BaseModal
        isOpen={isOpen}
        title={"Title"}
        color="secondary"
        align="center"
        maxWidth="md"
        fullWidth
      >
        <BaseModalContent dividers>
          <Grid container xs={12} >
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                label="Title"
                onChange={(e) => setState(e.target.value)}
                fullWidth
                value={state||problem?.title}
                minRows={4}
                multiline
                autoFocus
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
export default TitleModal;
