import React from 'react'

function SearchBar (){
  return (
    <div className='flex gap-4 my-10 justify-center px-10'>
        <select className='w-64 py-3 pl-4 bg-pink-600 font-semibold rounded-2xl'>
            <option value="" disabled hidden selected> Job Role</option>
            <option value="iOS Developer">iOS Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Android Developer">Android Developer</option>
            <option value="Developer Advocate">Developer Advocate</option>
        </select>
        <select className='w-64 py-3 pl-4 bg-pink-600 font-semibold rounded-2xl'>
            <option value="" disabled hidden selected> Job Type</option>
            <option value="iOS Developer">Full Time</option>
            <option value="Frontend Developer">Part Time</option>
            <option value="Backend Developer">Contract</option>
        </select>
        <select className='w-64 py-3 pl-4 bg-pink-600 font-semibold rounded-2xl'>
            <option value="" disabled hidden selected>Location</option>
            <option value="iOS Developer">Remote</option>
            <option value="Frontend Developer">In-Office</option>
            <option value="Backend Developer">Hybrid</option>
        </select>
        <select className='w-64 py-3 pl-4 bg-pink-600 font-semibold rounded-2xl'>
            <option value="" disabled hidden selected> Experience</option>
            <option value="iOS Developer">Junior</option>
            <option value="Frontend Developer">Mid Level</option>
            <option value="Backend Developer">Senior</option>
        </select>
        <button className='w-64 bg-purple-800 text-white font-bold py-3 rounded-full'>Search</button>
    </div>
  )
}

export default SearchBar