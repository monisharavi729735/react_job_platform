import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import AddJobPage from './pages/AddJobPage'
import NotFoundPage from './pages/NotFoundPage'
import SingleJobPage, {jobLoader} from './pages/SingleJobPage'

import {
        Route,
        createRoutesFromElements,
        createBrowserRouter,
        RouterProvider,
} from 'react-router-dom'
import React from 'react'


const App = () => {
  
  const addJob = async(newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path="/job/:id" element={<SingleJobPage />} loader={jobLoader}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App
