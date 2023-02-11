import React, { useState } from 'react';
import Button from '@material-ui/core/Button/Button';

function App() {

    let [state, setState] = useState(0);

    const increase = () => {state < 10 ? setState(state + 1) : alert('invalid operation')}
    const decrease = () => { state !== 0 ? setState(state - 1) : alert('invalid operation.')}

    return(
        <>
            <div className="d-flex flex-column align-items-center mx-auto w-25">
            <span className='text-md'>{state}</span>
            <Button onClick={increase}>Increment</Button>
            <Button  onClick ={decrease}>Decrement</Button>
            </div>
        </>
    )

}

export default App;