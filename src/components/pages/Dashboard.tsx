import { Grid, Typography } from "@material-ui/core";
import * as React from "react";
import MainTemplate from "../template/MainTemplate";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { useNavigate } from "react-router-dom";
import RouteService from "../../services/route.services";
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
  })
);

export interface DashboardProps {
  readonly problems: ReadonlyArray<Problem>;
}

const Dashboard: React.FC<DashboardProps> = (props) => {
  const { problems } = props;
  const classes = useStyles();
  const navigate=useNavigate();
  const handleClick = (data: Problem) => {
    navigate(RouteService.problem.build({id:data._id||""}))
  };
  return (
    <>
      <MainTemplate>
        <Typography variant="h5" align="center">
          Problems
        </Typography>
        <Grid container xs={12} spacing={1}>
          {problems.map((ele, index) => {
            return (
              <Grid item xs={12} key={ele._id} onClick={() => handleClick(ele)}>
                <Card className={classes.card}>
                  <div className={classes.row}>
                    <Typography>
                      <b>{index + 1}.</b>
                    </Typography>
                    <Typography>{ele.title}</Typography>
                  </div>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        
      </MainTemplate>
    </>
  );
};

export default Dashboard;
