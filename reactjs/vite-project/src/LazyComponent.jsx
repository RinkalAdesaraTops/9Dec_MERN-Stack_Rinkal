import React, { lazy, Suspense } from 'react'
const Home = lazy(()=>import('./Home'))
const Contact = lazy(()=>import('./Contact'))
// import Home from './Home'
// import Contact from './Contact'

const LazyComponent = () => {
  return (
    <div>
       <Suspense fallback={<div>Home page loading...Plz wait...</div>}>
            <Home />
        </Suspense> 
        <Suspense fallback={<h3>Contact loading...</h3>}>
            <Contact />
        </Suspense>
    </div>
  )
}

export default LazyComponent
