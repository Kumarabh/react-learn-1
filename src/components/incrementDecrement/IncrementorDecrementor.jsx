import React, { useState } from 'react';
import Button from '@material-ui/core/Button/Button';

function IncrementorDecrementor() {

    let [state, setState] = useState(0);

    const increase = () => {state < 10 ? setState(state + 1) : alert('invalid operation')}
    const decrease = () => { state !== 0 ? setState(state - 1) : alert('invalid operation.')}

    return(
        <>
            <div className='container mt-4 border'>
                <h5 className='text-center'>Incrementor decrementor </h5>

                <div className="container d-flex flex-column align-items-center w-50 mt-4 bg-light shadow-sm">
                    <span className='text-md' style={{fontSize: '24px'}}>{state}</span>
                    <Button onClick={increase}>Increment</Button>
                    <Button onClick={decrease}>Decrement</Button>
                </div>
            </div>

        </>

    )

}

export default IncrementorDecrementor;