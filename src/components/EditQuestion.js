import React, { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react"

const EditQuestion = (props) => {
  let emptyQuestion = {id: props.id, name: '', question: '' }
  const [question, setQuestion] = useState(emptyQuestion)
  const {isAuthenticated } = useAuth0()

  const handleChange = (event) => {
    setQuestion({ ...question, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdateQuestion(question)
  }


  return (
      isAuthenticated && (
    <>
      <details>
        <summary class = "clickHere"><b>Click Here to Edit Your Question</b></summary>
          <br />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder= "Edit Your Name"
            value={question.name}
            onChange={handleChange}/>
            <br />
          <textarea
            name="question"
            placeholder= "Edit Your Question/Comment"
            value={question.question}
            onChange={handleChange}>
            </textarea>
              <br />
          <input className = "submit" type="submit" />
        </form>
      </details>
    </>
    ): null
  )
}

export default EditQuestion
