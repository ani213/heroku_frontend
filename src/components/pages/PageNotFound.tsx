import { Grid, Typography } from "@material-ui/core";
import * as React from "react";
import gif from "../../assets/404.gif";
const PageNotFound: React.FC<any> = (props) => {
  return (
    <>
      <Grid container justifyContent="center" xs={12}>
        <Grid item xs={12}>
          <img src={gif} alt="gif" />
        </Grid>
      </Grid>
      <Grid container  xs={12} justifyContent="center">
          <Grid item xs={6}>
          <Typography variant="h1" align="center">
            404
          </Typography>
          </Grid>
          <Grid item xs={10}>
          <Typography variant="h3" align="center">
            Page Not Found
          </Typography>
          </Grid>
        </Grid>
    </>
  );
};
export default PageNotFound;
