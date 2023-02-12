import React from 'react';
import Accordion from './accordion/accordions';
import GrandParent from './context/GrandParent';
import IncrementorDecrementor from './incrementDecrement/IncrementorDecrementor';
import Authenticator from './loginUsingContext/Authenticator';

function App() {
    return(
     <>
     <IncrementorDecrementor />
     <Accordion />
     <GrandParent />
     <Authenticator />
     </>
    )

}

export default App;