import React, { useEffect, useState } from 'react';

function WebsiteTitle() {

    const [counter, setCounter] = useState(0);
    const [websiteTitle, setWebsiteTitle] = useState('website title goes here !');

    useEffect(() => {
        if(counter === 3)
        setWebsiteTitle('www.3TimesCounter.com')
        else 
        setWebsiteTitle('Counter should be 3 to disclose website title')
    }, [counter])
    return (
        <>
        <div className="container bg-light mt-4 p-2 text-center border">
            <h6>{websiteTitle}</h6>
            <button className="btn btn-outline-secondary" onClick={() => {setCounter(counter + 1)}}>
            You tried {counter}
        </button>
        </div>
        
        </>
    )

}

export default WebsiteTitle;
