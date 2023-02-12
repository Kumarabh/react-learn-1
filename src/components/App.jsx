import React from 'react';
import Accordion from './accordion/accordions';
import GrandParent from './context/GrandParent';
import IncrementorDecrementor from './incrementDecrement/IncrementorDecrementor';
import Authenticator from './loginUsingContext/Authenticator';
import UseEffectExample from './useEffectExample/useEffectExample';
import WebsiteTitle from './website-title-use-effect/WebsiteTitle';

function App() {
    return(
     <>
     <IncrementorDecrementor />
     <Accordion />
     <GrandParent />
     <Authenticator />
     <UseEffectExample />
     <WebsiteTitle />
     </>
    )

}

export default App;