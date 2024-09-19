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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage />} />
      <Route path='*' element={<NotFoundPage />} />
      <Route path="/job/:id" element={<SingleJobPage />} loader={jobLoader}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
}

export default App
