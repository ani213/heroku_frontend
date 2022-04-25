import { Grid, Typography } from "@material-ui/core";
import * as React from "react";
import MainTemplate from "../template/MainTemplate";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { useNavigate } from "react-router-dom";
import RouteService from "../../services/route.services";
import Pagination from "@material-ui/lab/Pagination";
import { useLoading } from "../../store/layout/hooks";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) =>
  createStyles({
    row: {
      display: "grid",
      gridTemplateColumns: "3% 97%",
    },
    card: {
      paddingLeft: 15,
      paddingTop: 10,
      paddingBottom: 10,
      cursor: "pointer",
    },
    spaceTop: {
      marginTop: 20,
    },
    contentContatiner: {
      minHeight: "70vh",
    },
    text: {
      color: theme.palette.text.disabled,
      fontStyle: "italic",
    },
    center:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      width:"100%",
      height:"70vh"
    }
  })
);

export interface DashboardProps {
  readonly problems: ReadonlyArray<Problem>;
  readonly title: string;
}
const dummy = ["", "", "", "", "", "", "", "", ""];
const Dashboard: React.FC<DashboardProps> = (props) => {
  const { problems, title } = props;
  const [isLoading] = useLoading();
  const [page, setPage] = React.useState<number>(1);
  const classes = useStyles();
  const navigate = useNavigate();
  const handleClick = (data: Problem) => {
    navigate(RouteService.problem.build({ id: data._id || "" }));
  };
  const handlePage = (e: any, page: number) => {
    setPage(page);
  };
  const selectedProblems = React.useMemo(() => {
    return problems.slice((page - 1) * 10, page * 10);
  }, [page, problems]);

  return (
    <>
      <MainTemplate>
        <Typography variant="h5" align="center">
          {title}
        </Typography>
        <div className={classes.contentContatiner}>
          <Grid container xs={12} spacing={1}>
            {selectedProblems.map((ele, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  key={ele._id}
                  onClick={() => handleClick(ele)}
                >
                  <Card className={classes.card}>
                    <Typography>
                      <b>{index + 1}.</b> {ele.title}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
            {
              isLoading &&
              dummy.map((ele, index) => (
                <Grid item xs={12} key={index + "loading"}>
                  <Card className={classes.card}>
                    <Skeleton variant="text" />
                  </Card>
                </Grid>
              ))}
            {problems.length === 0 && !isLoading && (
              <div className={classes.center}>
                <Typography variant="h3" className={classes.text}>
                  No Data Avilable
                </Typography>
              </div>
            )}
          </Grid>
        </div>
        <Grid
          container
          xs={12}
          justifyContent="center"
          className={classes.spaceTop}
        >
          {problems.length > 0 && (
            <Grid item>
              <Pagination
                count={Math.ceil(problems.length / 10)}
                color="primary"
                onChange={handlePage}
              />
            </Grid>
          )}
        </Grid>
      </MainTemplate>
    </>
  );
};

export default Dashboard;
