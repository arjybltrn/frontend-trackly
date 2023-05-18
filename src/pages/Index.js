import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"

const Index = (props) => {

    const [ newForm, setNewForm ] = useState({
        jobTitle: "",
        company: "",
        notes: "",
    })

    //handleChange function for form
    const handleChange = (e) => {
        setNewForm({ ...newForm, [e.target.name]: e.target.value})
    }

    //handleSubmit function for form
    const handleSubmit = (e) => {
        e.preventDefault()
        props.createJob(newForm)
        setNewForm({
            jobTitle: "",
            company: "",
            notes: "",
        })
    }

   const loaded = () => {
    return props.job.map((posting) => (
      <div key={posting._id} className="posting">
        <Link to={`/jobs/${posting._id}`}><h1>{posting.name}</h1></Link>
        <img src={posting.image} alt={posting.name} />
        <h3>{posting.title}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.jobTitle}
          name="jobTitle"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.company}
          name="company"
          placeholder="company"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.notes}
          name="notes"
          placeholder="notes"
          onChange={handleChange}
        />
        <input type="submit" value="Create New Job" />
      </form>

      {props.job ? loaded() : loading()}
  </section>
  )
}

export default Index