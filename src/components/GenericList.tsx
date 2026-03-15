import React from 'react';
import Loading from './Loading';

export interface GenericListProps<T> {
    list: T[] | undefined;
    children?: React.ReactNode;
    loadingUI?: React.ReactNode;
    emptyUI?: React.ReactNode;
}

const GenericList = <T,>(props: GenericListProps<T>)=> {
   if(!props.list) 
    return props.loadingUI?props.loadingUI:<Loading />;
    else if(props.list.length === 0)
    return props.emptyUI?props.emptyUI:`no data found`;
    else return props.children;
};

export default GenericList;