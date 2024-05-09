import React from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import JobCards from "./components/JobCards"
import SearchBar from "./components/SearchBar"
import jobDummyData from "./jobDummyData"
function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Header/>
        <SearchBar/>
          {jobDummyData.map((job)=>
          (
            <JobCards key={job.id} {...job}/>
          ))}
       </div>
    </>
  )
}

export default App

