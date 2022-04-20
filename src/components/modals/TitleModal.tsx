import { Button, Grid, TextField } from "@material-ui/core";
import * as React from "react";
import { useLoading } from "../../store/layout/hooks";
import { useProblem } from "../../store/problem/hooks";
import PreLoader from "../Loaders/Preloader";
import BaseModal, { BaseModalAction, BaseModalContent } from "./BaseModal";
import ErrorModal from "./ErrorModal";

export interface TitleModalProps {
  readonly isOpen: boolean;
  readonly onClose?: () => void;
  readonly problem?: Problem;
}

const TitleModal: React.FC<TitleModalProps> = (props) => {
  const [, , , updateProblem] = useProblem();
  const [state, setState] = React.useState<string>("");
  const { isOpen, onClose, problem } = props;
  const [isLoading]=useLoading();
  const handleSubmit = () => {
    let res: Problem = { ...problem, title: state };
    updateProblem(res, onClose);
  };
  React.useEffect(() => {
    if (problem) {
      setState(problem?.title);
    }
  }, [problem]);
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
          <Grid container xs={12}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Title"
                onChange={(e) => setState(e.target.value)}
                fullWidth
                value={state}
                minRows={4}
                multiline
                autoFocus
              />
            </Grid>
          </Grid>
        </BaseModalContent>
        <BaseModalAction>
          <Button variant="contained" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={!state||isLoading}
            onClick={handleSubmit}
          >
           {isLoading? <PreLoader /> : "Submit"}
          </Button>
        </BaseModalAction>
      </BaseModal>
      <ErrorModal />
    </>
  );
};
export default TitleModal;
