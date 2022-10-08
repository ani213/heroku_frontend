import _ from 'lodash';
import { createSelector } from 'reselect';
import { ApplicationState } from '../../models/ApplicationState';
const stateKey = 'Layout';

const getLayoutState = (state:ApplicationState) => _.get(state, stateKey);
export const getErrorSelector=createSelector(getLayoutState,(state):ERROR|undefined=>_.get(state,"error"));
export const errorModalYNSelector=createSelector(getLayoutState,(state):boolean=>_.get(state,"errorModalYN"));
export const isLoadingSelector=createSelector(getLayoutState,(state):boolean=>_.get(state,"isLoading"));
export const notificationSelector=createSelector(getLayoutState,(state)=>_.get(state,"notification"));
export const isNavbarSelector=createSelector(getLayoutState,(state)=>_.get(state,"isNavbarOpen"));
