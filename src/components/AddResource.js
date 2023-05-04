import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";

const AddResource = (props) => {
  let emptyResource = { topic: '', category: '', subcategory: '', URL: '', description: '', }
  const [resource, setResource] = useState(emptyResource)
  const [resources, setResources] = useState([])
  const { isAuthenticated } = useAuth0()

  const getResources = () => {
    axios
      .get('https://lifeinjapanresourcesbackend.onrender.com/api/resources')
      .then(
        (response) => setResources(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
    }

  const handleChange = (event) => {
    setResource({ ...resource, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(resource)
  }

  useEffect(() => {
   getResources()
   }, [])

  return (
      isAuthenticated && (
    <>
    <details>
    <summary class = "clickHere"><b>Click Here to Add a Resource to this Site</b></summary>
      <h5><em>Keep in mind this site is for information purposes only, so please try to share mainly fact-based resources.</em></h5>
      <form onSubmit={handleSubmit}>
        <label htmlFor="topic">Topic:</label>
          <br/>
          <input type="text" name="topic" value={resource.topic} onChange={handleChange} />
          <br/>
          <label htmlFor="category">Category: Subcategory:</label>
           <select className = "option" name="category" value={resource.category} onChange={handleChange}>
           {resources.map((resource) => {
             return(
              <option className = "option">{resource.category}: {resource.subcategory}</option>
            )
          })}
              </select>
          <br/>
        <label htmlFor="URL">Link/URL:</label>
          <input type="text" name="URL" value={resource.URL} onChange={handleChange} />
            <br />
        <label htmlFor="description">Description:</label>
          <textarea name="description" value={resource.description} onChange={handleChange} >  </textarea>
            <br />
        <input className = "submit" type="submit"/>
      </form>
     </details>
     </>
    ) : null
   )
  }

export default AddResource


// might use later:
//
// <label htmlFor="category">Category:</label>
//   <select className = "option" name="category" value={resource.category} onChange={handleChange}>
//   <>
//     <option className = "option">Immigration</option>
//     <option className = "option">Employment</option>
//     <option className = "option">Housing</option>
//     <option className = "option">Taxes</option>
//     <option className = "option">Medical Care</option>
//     <option className = "option">Legal Matters</option>
//     <option className = "option">Childcare</option>
//     <option className = "option">School System</option>
//     <option className = "option">Translation / Language</option>
//     <option className = "option">Other Category</option>
//   </select>
//     <br />
// <label htmlFor="subcategory">Subcategory:</label>
//
//  { resource.category === "Immigration"? {
//    return(
//   <select className = "option" name="subcategory" value={resource.subcategory} onChange={handleChange}>
//   <option className = "option">Work Visas</option>
//   <option className = "option">Student Visas</option>
//   <option className = "option">Spousal Visas</option>
//   <option className = "option">Investor Visas</option>
//   <option className = "option">Highly Skilled Work Visas</option>
//   <option className = "option">Permanent Residency</option>
//   <option className = "option">Other</option>
//   </select>
//    )}
//   : resource.category === "Employment" ? {
//      return(
//   <select className = "option" name="subcategory" value={resource.subcategory} onChange={handleChange}>
//   <option className = "option">Visa Sponsorship</option>
//   <option className = "option">Work Culture in Japan</option>
//   <option className = "option">Part-time Work</option>
//   <option className = "option">Full-time Work</option>
//   <option className = "option">Other</option>
//   </select>
// )}
//   : resource.category === "Housing" ? {
//    return(
//   <select className = "option" name="subcategory" value={resource.subcategory} onChange={handleChange}>
//   <option className = "option">Renting</option>
//   <option className = "option">Buying a Condo</option>
//   <option className = "option">Buying a House</option>
//   <option className = "option">Other</option>
//   </select>
//   )}
//   : return null
// }
//
