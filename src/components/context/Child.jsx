import React, { useContext } from 'react';
import { DataContext } from './GrandParent';

const GrandChild = () => {
const messageFromGrandParent = useContext(DataContext);

    return (
        <>
        <h5 className='text-center'>Secret code: {messageFromGrandParent}</h5>
        </>
    );
}

export default GrandChild;