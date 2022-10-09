import {
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import * as React from "react";
import { useSearchInput, useSortBy } from "../../store/layout/hooks";
import { byList, searchList, sortList } from "../constant/sort";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      // paddingRight: 69,
    },
    relative: {
      position: "relative",
    },
    search: {
      position: "absolute",
      borderRadius: "0px 4px 4px 0px",
      borderColor: "rgba(0, 0, 0, 0.23)",
      padding: "15px",
      border: "1px solid",
      right: "-55px",
    },
    input_search: {
      "& div": { borderRadius: "4px 0px 0px 4px" },
    },
  })
);
//problems/search?search=40&id=6208ba31b6027ec2b647b470&sort=type

export interface SortProps {
  readonly onSort?: (data: SortBY) => void;
  readonly onSearch?: (data: Search) => void;
  readonly onChange?: (data: string) => void;
}

const Sort: React.FC<SortProps> = (props) => {
  const classes = useStyles();
  const { onSort, onSearch, onChange } = props;
  const [sortBy, sortAction] = useSortBy();
  const [state, setState] = useSearchInput();
  const handleSort = (e: any) => {
    sortAction({ ...sortBy, sort: e.target.value });
    if (onSort) {
      onSort(sortBy);
    }
  };
  const handleBy = (e: any) => {
    sortAction({ ...sortBy, by: e.target.value });
    if (onSort) {
      onSort(sortBy);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({...state});
    }
  };
  const handleChange = (e: any) => {
    setState({...state,search:e.target.value});
    if (onChange) {
      onChange(e.target.value);
    }
  };
  const handleSearchBy=(e:any)=>{
      setState({...state,type:e.target.value});
      if (onSearch) {
        onSearch({...state,type:e.target.value});
      }
  }
  console.log(state);
  return (
    <>
      <Grid
        container
        xs={12}
        justifyContent="space-between"
        className={classes.root}
        md={12}
      >
        <Grid container item xs={12} md={6} spacing={1} alignItems="center">
          <Grid item xs={12} md={5}>
            <FormControl variant="outlined" fullWidth color="primary">
              <InputLabel
                id="demo-simple-select-outlined-label"
                color="primary"
              >
                Sort By
              </InputLabel>
              <Select
                variant="outlined"
                label="Sort By"
                fullWidth
                value={sortBy.sort}
                onChange={handleSort}
                color="primary"
              >
                {sortList.map((ele) => (
                  <MenuItem key={ele.label} value={ele.value}>
                    {ele.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                Order
              </InputLabel>
              <Select
                label="Order"
                fullWidth
                value={sortBy.by}
                onChange={handleBy}
              >
                {byList.map((ele) => (
                  <MenuItem key={ele.label} value={ele.value}>
                    {ele.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={5} spacing={1}>
          <Grid item md={4}>
            <FormControl variant="outlined" fullWidth color="primary">
              <InputLabel
                id="demo-simple-select-outlined-label"
                color="primary"
              >
                Search By
              </InputLabel>
              <Select
                variant="outlined"
                label="Search By"
                fullWidth
                value={state?.type}
                onChange={handleSearchBy}
                color="primary"
              >
                {searchList.map((ele) => (
                  <MenuItem key={ele.label} value={ele.value}>
                    {ele.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl
              variant="outlined"
              fullWidth
              className={classes.relative}
            >
              <TextField
                variant="outlined"
                label="Search"
                className={classes.input_search}
                value={state.search}
                onChange={handleChange}
              />
              <IconButton className={classes.search} onClick={handleSubmit}>
                <SearchOutlined color="primary" />
              </IconButton>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Sort;
