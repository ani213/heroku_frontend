import { Avatar, Grid, Typography } from "@material-ui/core";
import * as React from "react";
import MainTemplate from "../template/MainTemplate";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import RouteService from "../../services/route.services";
import { useSelectProblemType } from "../../store/problem/hooks";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      cursor: "pointer",
      paddingTop: 15,
      paddingBottom:15
    },
    avatar: {
      width: 150,
      height: 150,
    },
    spaceTop:{
        marginTop:15
    }
  })
);

export interface ProblemTypesProps {
  readonly problemTypes?: ReadonlyArray<ProblemType>;
}
const ProblemTypes: React.FC<ProblemTypesProps> = (props) => {
  const { problemTypes } = props;
  const[,selectProblemTypes]=useSelectProblemType();
  const navigate = useNavigate();
  const classes = useStyles();
  const handleClick=(data:ProblemType)=>{
    selectProblemTypes(data);
    navigate(RouteService.categoryItem.build({id:data._id}))
  }
  return (
    <>
      <MainTemplate>
        <Grid container xs={12} spacing={2}>
          {problemTypes?.map((ele) => (
            <Grid item xs={12} md={4} key={ele._id}>
              <Card className={classes.card} onClick={()=>handleClick(ele)}>
                <Grid item container xs={12} justifyContent="center">
                  <Grid item>
                    <Avatar className={classes.avatar}>{ele.title}</Avatar>
                  </Grid>
                </Grid>
                <div className={classes.spaceTop}>
                    <Typography variant="h5" align="center">{ele.title}</Typography>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </MainTemplate>
    </>
  );
};

export default ProblemTypes;
