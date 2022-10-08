import { Grid, MenuItem, Select, Typography } from "@material-ui/core";
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
  }
  return (
    <>
      <Grid container xs={12}>
        <Grid container item xs={12} md={6} spacing={1} alignItems="center">
          <Grid item>
            <Typography>Sort By</Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Select
              variant="outlined"
              fullWidth
              value={sortBy.sort}
              onChange={handleSort}
            >
              {sortList.map((ele) => (
                <MenuItem key={ele.label} value={ele.value}>
                  {ele.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} md={3}>
            <Select
              variant="outlined"
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
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Sort;
