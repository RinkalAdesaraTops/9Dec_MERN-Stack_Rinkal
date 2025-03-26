import React, { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BootstrapExample from './BootstrapExample'
import MaterialUIExample from './MaterialUIExample'
import LifecycleClass from './LifecycleClass'
import LifecycleFunc from './LifecycleFunc'
import Crud from './Crud'
import UserCRUD from './UserCRUD'
import UseRefExample from './UseRefExample'
import UseContextExample from './UseContextExample'
import ContextExample from './ContextExample'

function App() {
  return (
    <Fragment>
    {/* <React.Fragment>
     <> */}
      <div>
        <h3>My Vite project</h3>
        {/* <BootstrapExample /> */}
        {/* <MaterialUIExample /> */}
        {/* <LifecycleClass /> */}
        {/* <LifecycleFunc /> */}
        {/* <Crud /> */}
        {/* <UserCRUD /> */}
        {/* <UseRefExample /> */}
        {/* <ContextExample /> */}
        <UseContextExample />
      </div>
      
      {/* // </>
      </React.Fragment> */}
      </Fragment>
  )
}

export default App
