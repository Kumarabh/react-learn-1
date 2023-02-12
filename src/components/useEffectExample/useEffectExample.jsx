import React, { useEffect, useState } from 'react';

function UseEffectExample () {

    const [state, setState] = useState(0);

    useEffect(() => {console.log('STATE CHANGED / USE EFFECT Hook triggerd/ Rendered again')}, [state])

    return (
        <>
            <div className="d-flex container flex-column align-items-center w-25 border p-2 bg-light mt-4">
            <p>{state}</p>
            <button className='btn btn-outline-primary' onClick={() => {setState(state + 1)}}>Click me</button>
            </div>
        </>
    )

}

export default UseEffectExample;