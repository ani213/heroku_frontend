import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNotification, hideError, showError } from './action';
import {  errorModalYNSelector, getErrorSelector, isLoadingSelector, notificationSelector } from './selector';

export function useError():[{readonly error:ERROR|undefined;readonly isOpen:boolean},(data:ERROR)=>void,()=>void]{
    const error=useSelector(getErrorSelector);
    const errorModalYN=useSelector(errorModalYNSelector);
    const dispatch=useDispatch();
    const showErrormessage=React.useCallback((data:ERROR)=>dispatch(showError(data)),[dispatch])
    const hideErrormessage=React.useCallback(()=>dispatch(hideError()),[dispatch])
    return [{error:error,isOpen:errorModalYN},showErrormessage,hideErrormessage]
}
export function useLoading():[boolean]{
    const isLoading=useSelector(isLoadingSelector);
    return[isLoading]
}

export function useNotification():[string|undefined,(data:string|undefined)=>void]{
    const notification=useSelector(notificationSelector);
    const dispatch=useDispatch();
    const setNotification=React.useCallback((data:string|undefined)=>dispatch(addNotification(data)),[dispatch])
    return[notification,setNotification]
}

