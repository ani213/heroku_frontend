import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@material-ui/core";
import * as React from "react";
import { useSortBy } from "../../store/layout/hooks";
import { byList, sortList } from "../constant/sort";

export interface SortProps {
  readonly onSort?:(data:SortBY)=>void;
}

const Sort: React.FC<SortProps> = (props) => {
  const {onSort}=props
  const [sortBy, sortAction] = useSortBy();
  const handleSort = (e:any) => {
    sortAction({...sortBy,sort:e.target.value})
    if(onSort){
      onSort(sortBy);
    }
  };
  const handleBy=(e:any)=>{
    sortAction({...sortBy,by:e.target.value})
    if(onSort){
      onSort(sortBy);
    }
  }
  return (
    <>
      <Grid container xs={12}>
        <Grid container item xs={12} md={6} spacing={1} alignItems="center">
          <Grid item xs={12} md={5}>
          <FormControl variant="outlined"  fullWidth color="primary">
          <InputLabel id="demo-simple-select-outlined-label" color="primary">Sort By</InputLabel>
            <Select
              variant="outlined"
              label="Sort By"
              fullWidth
              value={sortBy.sort}
              onChange={handleSort}
              color="primary"
            >
              {sortList.map((ele) => (
                <MenuItem key={ele.label} value={ele.value} >
                 {ele.label}
                </MenuItem>
              ))}
            </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
          <FormControl variant="outlined" fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">Order</InputLabel>
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
      </Grid>
    </>
  );
};
export default Sort;
