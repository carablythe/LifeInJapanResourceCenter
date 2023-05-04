import React, { useState} from 'react'

const AddQuestion = (props) => {
  let emptyQuestion = { name: '', comment: '' }
  const [question, setQuestion] = useState(emptyQuestion)

  const handleChange = (event) => {
    setQuestion({ ...question, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(question)
  }
  return (
    <>
      <details>
      <summary class = "clickHere"><b>Click Here to Ask a Question or Add a Comment</b></summary>
         <br />
      <form onSubmit={handleSubmit}>
        <input type="text" name="name"
        placeholder= "Your Name"
        value={question.name} onChange={handleChange} />
          <br/>
        <textarea name="question"
        placeholder= "Your Question/Comment" value={question.question} onChange={handleChange}>
        </textarea>
          <br />
        <input className = "submit" type="submit"/>
      </form>
      </details>
    </>
  )
}

export default AddQuestion
