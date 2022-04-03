import { BrowserHistory } from 'history';
import * as React from 'react';
import { useSelector } from 'react-redux';
import {Route,Routes, unstable_HistoryRouter as ReactRouter, Navigate } from 'react-router-dom';
import PageNotFound from '../components/pages/PageNotFound';
import RouteService from '../services/route.services';
import { isVarificationYNSelector } from '../store/user/selector';
import { ProtectedRoute } from './ProtectedRoute';

const ConnectedLoginPage=React.lazy(()=>import("../containers/pages/ConnectedLoginPage"));
const ConnectedRegisterPage=React.lazy(()=>import('../containers/pages/ConnectedRegisterPage'))
const ConnectedVarificationPage=React.lazy(()=>import('../containers/pages/ConnectedVarificationPage'))
const ConnectedChangePasswordPage=React.lazy(()=>import('../containers/pages/ConnectedChangePasswordPage'))


interface RouterProps  {
  history : BrowserHistory
  }
  const Router: React.FC<RouterProps> = ({ history }) => {
    const isVarification=useSelector(isVarificationYNSelector);
    return(
        <>
         <ReactRouter history={history}>
            <Routes>
              <Route path="/" element={<Navigate to={RouteService.login.getPath()} replace/>}/>
              <Route  path={RouteService.login.getPath()} element={<ConnectedLoginPage />} />
              <Route path={RouteService.register.getPath()} element={<ConnectedRegisterPage />}/>
              <Route path="*" element={<PageNotFound />}/>
              <Route path={RouteService.varification.getPath()} element={isVarification? <ConnectedVarificationPage />:<Navigate to={RouteService.login.getPath()}/>}/>
              <Route path={RouteService.changePassword.getPath()} element={isVarification? <ConnectedChangePasswordPage />:<Navigate to={RouteService.login.getPath()}/>}/>

              <Route element={<ProtectedRoute unauthorizedRedirect='/login'/>}>
                
              </Route>
              
            </Routes>
         </ReactRouter>
        </>
    )
}
export default Router;