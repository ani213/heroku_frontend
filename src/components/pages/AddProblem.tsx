import * as React from "react";
import MainTemplate from "../template/MainTemplate";
import TextField from "@material-ui/core/TextField";
import SimpleTabs, { TabPanel } from "../tabs/Tab";
import { useTab } from "../../hooks";
import { Box, Button, Typography } from "@material-ui/core";
import { useProblem } from "../../store/problem/hooks";
import PreLoader from "../Loaders/Preloader";
import { useLoading } from "../../store/layout/hooks";
import QuillEditor from "../editor/QuillEditor";

export interface AddProblemProps {}

const AddProblem: React.FC<AddProblemProps> = (props) => {
  const [, , createProblem] = useProblem();
  const [isLoading]=useLoading()
  const [state, setState] = React.useState<Problem>({
    title: "",
    question: "",
    answer: "",
  });
  const handleSubmit = () => {
    createProblem(state);
  };
  const [tab, setTab] = useTab();
  return (
    <>
      <MainTemplate>
        <SimpleTabs tab={tab} setTab={setTab}>
          <TabPanel value={tab} index={0}>
            <Box sx={{ marginTop: 20 }}>
              <TextField
                variant="outlined"
                label="Title"
                onChange={(e) => setState({ ...state, title: e.target.value })}
                fullWidth
                value={state?.title}
                minRows={10}
                multiline
                autoFocus
              />
            </Box>
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Typography variant="h6" gutterBottom>
              Problem:
            </Typography>
            <QuillEditor
              onEditorChange={(data) => setState({ ...state, question: data })}
              data={state.question}
            />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <Typography variant="h6" gutterBottom>
              Solution:
            </Typography>
            <QuillEditor
              data={state.answer}
              onEditorChange={(data) => setState({ ...state, answer: data })}
            />
          </TabPanel>
        </SimpleTabs>
        <Box sx={{ marginTop: 10 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            disabled={!state.title||isLoading}
            onClick={handleSubmit}
          >
          {isLoading? <PreLoader />:"Submit"}
          </Button>
        </Box>
      </MainTemplate>
    </>
  );
};

export default AddProblem;
