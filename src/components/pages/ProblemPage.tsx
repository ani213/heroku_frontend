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

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useUserContext } from "../../store/user/hooks";
import Notification from "../layout/Notification";

const useStyles = makeStyles((theme) =>
  createStyles({
    row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems:"center",
      width:"100%"
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
      width: "80%",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      // textAlign: "center",
      cursor: "pointer",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      paddingTop: theme.spacing(7),
    },
  })
);

export interface ProlemPageProps {
  readonly problem: Problem | undefined;
}

const ProlemPage: React.FC<ProlemPageProps> = (props) => {
  const { problem } = props;
  const classes = useStyles();
  const [user]=useUserContext();
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
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <div className={classes.row}>
              {/* <div> */}
                <Typography
                  // color="secondary"
                  variant="h5"
                  // align="center"
                  className={classes.text}
                  onClick={() => setOpen("title")}
                >
                  {problem?.title}
                </Typography>
              {/* </div> */}
              <div>
                <IconButton color="inherit" onClick={handleCancel}>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.content}>
        <div className={classes.toolbar}>
          <Grid container xs={12} spacing={1} className={classes.main}>
            <Grid item xs={12} md={6} lg={6}>
              <Card className={classes.card}>
                <Grid container xs={12} justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h5">Problem</Typography>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={() => setOpen("question")} disabled={problem?.user_id!==user?._id}>
                      <EditIcon />
                    </IconButton>
                  </Grid>
                </Grid>
                <div className={classes.boderLine}></div>
                <Typography>
                  <div
                    dangerouslySetInnerHTML={createMarkup(
                      problem?.question || ""
                    )}
                    className="editor"
                  ></div>
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Card className={classes.card}>
                <Grid container xs={12} justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h5">Solution</Typography>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={() => setOpen("answer")} disabled={problem?.user_id!==user?._id}>
                      <EditIcon />
                    </IconButton>
                  </Grid>
                </Grid>
                <div className={classes.boderLine}></div>

                <Typography>
                  <div
                    dangerouslySetInnerHTML={createMarkup(
                      problem?.answer || ""
                    )}
                    className="editor"
                  ></div>
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
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
      <Notification />

    </>
  );
};

export default ProlemPage;
