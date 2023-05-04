import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { useAuth0 } from "@auth0/auth0-react"
import AddQuestion from '../components/AddQuestion'
import EditQuestion from '../components/EditQuestion'


const Forum = () => {
  const [questions, setQuestions] = useState([]); useParams()
  const {isAuthenticated } = useAuth0()


  const getQuestions = () => {
    axios
      .get('https://lifeinjapanresourcesbackend.onrender.com/api/forum')
      .then(
        (response) => setQuestions(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
    }


  const handleCreateQuestion = (addQuestion) => {
    axios
      .post('https://lifeinjapanresourcesbackend.onrender.com/api/forum', addQuestion)
      .then((response) => {
        console.log(response)
        getQuestions()
      })
    }


  const handleUpdateQuestion = (editQuestion) => {
    console.log(editQuestion)
    axios
      .put('https://lifeinjapanresourcesbackend.onrender.com/api/forum' + editQuestion.id, editQuestion)
      .then((response) => {
        getQuestions()
      })
    }


  const handleDeleteQuestion = (event) => {
        axios
          .delete('https://lifeinjapanresourcesbackend.onrender.com/api/forum' + event.target.value)
            .then((response) => {
              getQuestions()
                })
            }

  useEffect(() => {
   getQuestions()
  }, [])


  return (
    <>
     <aside className = "forum">
      <div className="questions">
        <h3 className ="forumTitle">Questions? Comments? Please post them here:</h3>
        {questions.map((question) => {
          return (
            <div className="question" key={question.id}>
            <h4>Name: </h4>
            <p className= "posting"> {question.name}</p>
            <h4>Question/Comment:</h4>
            <p className= "posting">{question.question}</p>
            <EditQuestion handleUpdateQuestion={handleUpdateQuestion} id={question.id} />
            <br />
             {isAuthenticated && (
            <button onClick={handleDeleteQuestion} value={question.id}> Delete Your Question</button>
            )}
            <br />
            ----------------------------
            </div>
             )
         })}
      </div>
      <AddQuestion handleCreate={handleCreateQuestion} />
      </aside>
        <br />
    </>
  )
}

export default Forum
