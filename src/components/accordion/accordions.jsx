import React from 'react';
import accordionData from '../../data/accordionData';
import Accordion from './accordion';

function Accordions () {

    return (
        <>
        <div className="container border mt-2">
            <h4 className='text-center'>Accordions 😋</h4>

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