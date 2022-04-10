import _ from 'lodash';
import { createSelector } from 'reselect';
import { ApplicationState } from '../../models/ApplicationState';
const stateKey = 'Problem';

const getProblemState = (state:ApplicationState) => _.get(state, stateKey);
export const getProblemSelector=createSelector(getProblemState,(state):ReadonlyArray<Problem>=>_.get(state,"problems"));
export const getProblemByIdSelector=createSelector(getProblemState,(state)=>_.get(state,"problem"));
