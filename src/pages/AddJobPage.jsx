import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const AddJobPage = ({addJobSubmit}) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Full-Time');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('Under ₹3 LPA');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      type,
      salary,
      description,
      location,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone
      }
    }

    addJobSubmit(newJob)

    toast.success('Added a new job successfully')

    return navigate('/jobs')
  }

  return (
    <>
    <section className="bg-pink-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Job Type</label>
              <select id="type" name="type" className="border rounded w-full py-2 px-3" required
                value={type}
                onChange={(e) => setType(e.target.value)} 
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Job Listing Name</label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="e.g., Software Engineer in Bengaluru"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add job duties, expectations, requirements, etc."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="salary" className="block text-gray-700 font-bold mb-2">Salary</label>
              <select id="salary" name="salary" className="border rounded w-full py-2 px-3" required
               value={salary}
               onChange={(e) => setSalary(e.target.value)}
              >
                <option value="Under ₹3 LPA">Under ₹3 LPA</option>
                <option value="₹3 LPA - ₹5 LPA">₹3 LPA - ₹5 LPA</option>
                <option value="₹5 LPA - ₹7 LPA">₹5 LPA - ₹7 LPA</option>
                <option value="₹7 LPA - ₹10 LPA">₹7 LPA - ₹10 LPA</option>
                <option value="₹10 LPA - ₹15 LPA">₹10 LPA - ₹15 LPA</option>
                <option value="₹15 LPA - ₹20 LPA">₹15 LPA - ₹20 LPA</option>
                <option value="Over ₹20 LPA">Over ₹20 LPA</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>Location</label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='City, State (e.g., Mumbai, Maharashtra)'
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 font-bold mb-2">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="e.g., Tata Consultancy Services"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company_description" className="block text-gray-700 font-bold mb-2">Company Description</label>
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Brief about your company, services, etc."
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="contact_email" className="block text-gray-700 font-bold mb-2">Contact Email</label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="contact_phone" className="block text-gray-700 font-bold mb-2">Contact Phone</label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone number (e.g., +91 9876543210)"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default AddJobPage
