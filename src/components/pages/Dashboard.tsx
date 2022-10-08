import { Grid, IconButton, Tooltip, Typography } from "@material-ui/core";
import * as React from "react";
import MainTemplate from "../template/MainTemplate";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { useNavigate } from "react-router-dom";
import RouteService from "../../services/route.services";
import Pagination from "@material-ui/lab/Pagination";
import { useLoading } from "../../store/layout/hooks";
import Skeleton from "@material-ui/lab/Skeleton";
import moment from "moment";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Sort from "../sort/Sort";
import { useProblem } from "../../store/problem/hooks";

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
      transition: "transform .2s",
      "&:hover": {
        transform: "scale(1.007)",
        background: theme.palette.action.hover,
      },
    },
    spaceTop: {
      marginTop: 20,
    },
    contentContatiner: {
      minHeight: "60vh",
      marginTop: 15,
    },
    text: {
      color: theme.palette.text.disabled,
      fontStyle: "italic",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "70vh",
    },
    row_line: {
      display: "flex",
      justifyContent: "space-between",
      paddingRight: 30,
      flexWrap: "wrap",
      alignItems: "center",
    },
    createText: {
      fontSize: 12,
    },
  })
);

export interface DashboardProps {
  readonly problems: ReadonlyArray<Problem>;
  readonly title: string;
  readonly getProblems?: () => void;
}

const dummy = ["", "", "", "", "", "", "", "", ""];
const Dashboard: React.FC<DashboardProps> = (props) => {
  const { problems, title, getProblems } = props;
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
  const handleSorting = (data: SortBY) => {
    if (getProblems) {
      getProblems();
    }
  };
  const ToolTipText = (
    createdAt: string,
    updateAt: string,
    firstName: string,
    lastName?: string
  ) => {
    return (
      <>
        <Typography className={classes.createText}>
          Created At : {moment(createdAt).format("DD/MM/YYYY HH:mm A")}
        </Typography>
        <Typography className={classes.createText}>
          Updated At : {moment(updateAt).format("DD/MM/YYYY HH:mm A")}
        </Typography>
        <Typography className={classes.createText}>
          Created By :{" "}
          <b>
            {firstName} {lastName}
          </b>
        </Typography>
      </>
    );
  };

  return (
    <>
      <MainTemplate>
        <Typography variant="h5" align="center">
          {title} ( {problems.length} )
        </Typography>
        <Sort onSort={handleSorting} />
        <div className={classes.contentContatiner}>
          <Grid container xs={12} spacing={1}>
            {!isLoading &&
              selectedProblems.map((ele: Problem, index) => {
                const { user_id } = ele;
                return (
                  <Grid
                    item
                    xs={12}
                    key={ele._id}
                    onClick={() => handleClick(ele)}
                  >
                    <Card className={classes.card}>
                      <Typography className={classes.row_line}>
                        <div>{ele.title} </div>
                        <div>
                          <Tooltip
                            title={ToolTipText(
                              ele.createdAt,
                              ele.updatedAt,
                              user_id && user_id.firstName,
                              user_id?.lastName
                            )}
                            arrow
                            placement="left"
                          >
                            <IconButton>
                              <InfoOutlinedIcon color="primary" />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </Typography>
                    </Card>
                  </Grid>
                );
              })}
            {isLoading &&
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
