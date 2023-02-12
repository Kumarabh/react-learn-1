import React from 'react';
import accordionData from '../../data/accordionData';
import Accordion from './accordion';

function Accordions () {

    return (
        <>
        <div className="container border mt-4 p-3">
            <h5 className='text-center'>Accordions 😋</h5>

            {
                accordionData.map((element) => {
                    const {id, header, description} = element;
                    return (
                            <Accordion key = {id} {...element} />
                    )
                })
            }

        </div>
        </>
    )

}

export default Accordions;