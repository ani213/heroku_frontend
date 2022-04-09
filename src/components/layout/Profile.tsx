import {
  Avatar,
  Button,
  Dialog,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
} from "@material-ui/core";
import * as React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useTheme } from "../../store/layout/hooks";
import { useLogout } from "../../store/user/hooks";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      minWidth: 180,
      minHeight: 250,
    },
    avtar: {
      width: 100,
      height: 100,
    },
    spaceTop: {
      marginTop: 10,
    },
  })
);

export interface ProfileProps {
  readonly open: boolean;
  readonly onClose?: () => void;
  readonly name: string;
  readonly lastName?: string;
}

const Profile: React.FC<ProfileProps> = (props) => {
  const { open, onClose, name, lastName } = props;
  const classes = useStyles();
  const [theme, setTheme] = useTheme();
 const [logout]=useLogout()
  
  const handleChange = (e: any) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      <Dialog
        onClose={onClose}
        aria-labelledby="simple-dialog-title"
        open={open}
        maxWidth="sm"
      >
        <div className={classes.root}>
          <Grid
            container
            xs={12}
            justifyContent="center"
            className={classes.spaceTop}
            spacing={1}
          >
            <Grid container item xs={12} justifyContent="center">
              <Grid item>
                <Avatar className={classes.avtar}>
                  <Typography variant="h2">{name[0].toUpperCase()}</Typography>
                </Avatar>
              </Grid>
            </Grid>
            <Typography align="center" variant="h6">
              {name} {lastName}
            </Typography>
            <Grid item xs={12} justifyContent="center" container>
              <Grid item>
                <FormControlLabel
                  control={
                    <Switch
                      color="primary"
                      checked={theme === "dark" ? true : false}
                      onChange={handleChange}
                    />
                  }
                  label="Dark"
                />
              </Grid>
            </Grid>
            <Grid item xs={12} justifyContent="center" container>
              <Grid item xs={9}>
                <Button fullWidth variant="contained" color="primary" onClick={logout}>
                  Logout
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </>
  );
};
export default Profile;
