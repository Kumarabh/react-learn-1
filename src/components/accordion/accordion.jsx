import React, { useState } from 'react';

function Accordion (props) {

    const [show, setShow] = useState(false);
    return (
        <>
            <div className="container-fluid d-flex p-4 shadow-sm bg-light">

                <div className="w-75">
                    <h5>{props.header}</h5>
                </div>
                <div className="w-25 text-end">
                    <i className='shadow bg-white' style={{ fontSize: '15px', padding: '5px' }} onClick={() => { setShow(!show) }}>{show ? '-' : '+'}</i>
                </div>

            </div>
            <div className="container-fluid p-2 ease-in-out">
                <p>{show && props.description}</p>
            </div>
        </>
    )
}

export default Accordion