import React, { useContext } from 'react';
import { DataContext } from './GrandParent';

const GrandChild = () => {
const messageFromGrandParent = useContext(DataContext);

    return (
        <>
        <div className="container border shadow-sm p-4 bg-light">
        <h6 className='text-center text-info'>Secret code: {messageFromGrandParent}</h6>
        </div>
        </>
    );
}

export default GrandChild;