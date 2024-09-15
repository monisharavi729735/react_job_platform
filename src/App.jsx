import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

import {Route,
        createBrowserRouter,
        createRoutesFromElements,
        RouterProvider} from 'react-router-dom'
import React from 'react'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <HomeCards />
    <JobListings />
    <ViewAllJobs />
    </>
  )
}

export default App
