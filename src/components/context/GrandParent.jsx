import React from 'react';
import GrandChild from './Child';
const DataContext = React.createContext('');

const GrandParent = () => {
    const secretCode = '48494r4j8r4jf48jf89j489fj498fj489fj';

    return (
        <>
        <div className="container-fluid p-3">
        <DataContext.Provider value={secretCode}>
        <GrandChild />
        </DataContext.Provider>
        </div>
        </>
    );
}

export default GrandParent;
export {DataContext}
