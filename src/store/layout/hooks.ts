import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNotification, hideError, navbarTogle, searchInput, showError, sortByAction } from './action';
import {  errorModalYNSelector, getErrorSelector, isLoadingSelector, isNavbarSelector, notificationSelector, searchInputSelector, sortBySelector } from './selector';

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
export function useNavebarSlider(): [boolean, () => void] {
    const isOpen = useSelector(isNavbarSelector);
    const dispatch = useDispatch();
    const navbarAction = React.useCallback(
        () => dispatch(navbarTogle()),
        [dispatch]
    );
    return [isOpen, navbarAction];
}

export function useSortBy(): [SortBY, (data:SortBY) => void] {
    const sortBy = useSelector(sortBySelector);
    const dispatch = useDispatch();
    const sortAction = React.useCallback(
        (data:SortBY) => dispatch(sortByAction(data)),
        [dispatch]
    );
    return [sortBy, sortAction];
}

export function useSearchInput(): [Search, (data:Search) => void] {
    const search = useSelector(searchInputSelector);
    const dispatch = useDispatch();
    const searchAction = React.useCallback(
        (data:Search) => dispatch(searchInput(data)),
        [dispatch]
    );
    return [search, searchAction];
}