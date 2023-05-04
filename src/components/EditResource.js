import React, { useState } from 'react'

const EditResource = (props) => {
  let emptyResource = {id: props.id, topic: '', category: '', subcategory: '', URL: '', description: ''}
  const [resource, setResource] = useState(emptyResource)


  const handleChange = (event) => {
    setResource({ ...resource, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(resource)
  }


  return (
    <>
      <details>
        <summary class = "clickHere"><b>Click Here to Edit This Resource</b></summary>
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="topic">Topic:</label>
          <input type="text" name="topic" value={resource.topic} onChange={handleChange} />
          <br />
          <label htmlFor="category">Category:</label>
          <input type="text" name="category" value={resource.category} onChange={handleChange} />
          <br />
          <label htmlFor="subcategory">Subcategory:</label>
          <input type="text" name="subcategory" value={resource.subcategory} onChange={handleChange} />
          <br />
          <label htmlFor="url">Link/URL:</label>
          <input type="text" name="url" value={resource.URL} onChange={handleChange} />
          <br />
          <label htmlFor="description">Description:</label>
          <input type="text" name="description" value={resource.description} onChange={handleChange} />
          <input className = "submit" type="submit" />
        </form>
      </details>
    </>
  )
}

export default EditResource
