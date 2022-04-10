import { Grid, IconButton, Typography } from "@material-ui/core";
import * as React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CloseIcon from "@material-ui/icons/Close";
import { history } from "../../services/history";
import EditIcon from "@material-ui/icons/Edit";
import ErrorModal from "../modals/ErrorModal";
import QuestionModal from "../modals/QuestionModal";
import AnswerModal from "../modals/AnswerModal";
import TitleModal from "../modals/TitleModal";

const useStyles = makeStyles((theme) =>
  createStyles({
    row: {
      display: "grid",
      gridTemplateColumns: "95% 4%",
      alignItems: "center",
    },
    card: {
      paddingLeft: 15,
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 15,
    },
    boderLine: {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
    main: {
      paddingLeft: 10,
      paddingTop: 15,
    },
    text: {
      width: "70%",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textAlign: "center",
      cursor: "pointer",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

export interface ProlemPageProps {
  readonly problem: Problem | undefined;
}

const ProlemPage: React.FC<ProlemPageProps> = (props) => {
  const { problem } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState<
    "title" | "question" | "answer" | undefined
  >(undefined);
  const handleCancel = () => {
    history.go(-1);
  };
  const createMarkup = (data: string) => {
    return { __html: data };
  };
  return (
    <>
      <Card className={classes.card}>
        <div className={classes.row}>
          <div className={classes.center}>
            <Typography
              // color="secondary"
              variant="h5"
              align="center"
              className={classes.text}
              onClick={() => setOpen("title")}
            >
              {problem?.title}
            </Typography>
          </div>
          <IconButton onClick={handleCancel}>
            <CloseIcon />
          </IconButton>
        </div>
      </Card>
      <div className={classes.boderLine}></div>
      <Grid container xs={12} spacing={1} className={classes.main}>
        <Grid item xs={12} md={6} lg={6}>
          <Card className={classes.card}>
            <Grid container xs={12} justifyContent="space-between">
              <Grid item>
                <Typography variant="h5">Question</Typography>
              </Grid>
              <Grid item>
                <IconButton onClick={() => setOpen("question")}>
                  <EditIcon />
                </IconButton>
              </Grid>
            </Grid>
            <div className={classes.boderLine}></div>
            <Typography>
              <div
                dangerouslySetInnerHTML={createMarkup(problem?.question || "")}
                className="editor"
              ></div>
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Card className={classes.card}>
            <Grid container xs={12} justifyContent="space-between">
            <Grid item>
                <Typography variant="h5">Answer</Typography>
              </Grid>
              <Grid item>
                <IconButton onClick={() => setOpen("answer")}>
                  <EditIcon />
                </IconButton>
              </Grid>
            </Grid>
            <div className={classes.boderLine}></div>

            <Typography>
              <div
                dangerouslySetInnerHTML={createMarkup(problem?.answer || "")}
                className="editor"
              ></div>
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <ErrorModal />
      <QuestionModal
        isOpen={open === "question"}
        onClose={() => setOpen(undefined)}
        problem={problem}
      />
      <AnswerModal
        isOpen={open === "answer"}
        onClose={() => setOpen(undefined)}
        problem={problem}
      />
      <TitleModal
        isOpen={open === "title"}
        onClose={() => setOpen(undefined)}
        problem={problem}
      />
    </>
  );
};

export default ProlemPage;
