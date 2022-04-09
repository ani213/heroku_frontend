import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideError, setTheme, showError } from './action';
import {  errorModalYNSelector, getErrorSelector, isLoadingSelector, themeSelector } from './selector';

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

export function useTheme():[MyTheme,(data:MyTheme)=>void]{
    const theme=useSelector(themeSelector);
    const dispatch=useDispatch();
    const getTheme=React.useCallback((data:MyTheme)=>dispatch(setTheme(data)),[dispatch])
    return [theme,getTheme]
}