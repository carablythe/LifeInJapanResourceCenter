import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';
import { useAuth0 } from "@auth0/auth0-react"
import AddResource from '../components/AddResource'
import EditResource from '../components/EditResource'
// import EditResource from '../components/EditResource'


const Home = () => {
  const [resources, setResources] = useState([]); useParams()
  const [query, setQuery] = useState([])
  const {isAuthenticated } = useAuth0()


// adapted below searchbar filter from https://www.youtube.com/watch?v=x7niho285qs

  const handleQuery = (event) => {
    const queryWord = event.target.value
    const newQuery = resources.filter((resource) => {
      if (resource.topic.includes(queryWord))
      {
        return resource;
      }
      else if (resource.topic.toLowerCase().includes(queryWord.toLowerCase()))
      {
        return resource;
      }
      else if  (resource.category.includes(queryWord))
      {
        return resource;
      }
      else if  (resource.category.toLowerCase().includes(queryWord.toLowerCase()))
      {
        return resource;
      }
      else if  (resource.subcategory.includes(queryWord))
      {
        return resource;
      }
      else if (resource.subcategory.toLowerCase().includes(queryWord.toLowerCase()))
      {
      return resource;
      }
      else {return null}
    })
     setQuery(newQuery)
    }


  const getResources = () => {
    axios
      .get('https://lifeinjapanresourcesbackend.onrender.com/api/resources')
      .then(
        (response) => setResources(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
    }


  const handleCreateResource = (addResource) => {
    axios
      .post('https://lifeinjapanresourcesbackend.onrender.com/api/resources', addResource)
      .then((response) => {
        console.log(response)
        getResources()
       })
    }

  const handleUpdateResource = (editResource) => {
      console.log(editResource)
      axios
        .put('https://lifeinjapanresourcesbackend.onrender.com/api/resources/' + editResource.id, editResource)
          .then(() => {
            getResources()
           })
      }
  
  
  const handleDeleteResource = (event) => {
          axios
            .delete('https://lifeinjapanresourcesbackend.onrender.com/api/resources/' + event.target.value)
              .then(() => {
                getResources()
                  })
          }


  useEffect(() => {
   getResources()
   }, [])

  return (
    <>
      <aside className = "home">
        <div>
          <h3 className = "welcome"> Welcome! </h3>
          <h4>As a long-term resident of Japan, I would like to share what I have learned through my ups and downs of living in this beautiful country!  </h4>
          <h4>I hope the resources you find on this site are informative and allow for smoother transitions and an easier time navigating through life here.</h4>
          <h4>Also, feel free to add new resources to this site. <i>(login required)</i></h4>
          <h4>Thank you!</h4>
          <h4>-Cara</h4>
        </div>
        <div className="search"><b>Search Topic:</b>
        <input placeholder="Enter Query..." className="searchBar"
              onChange={handleQuery} />
        </div>
          <br/>
        {query.length !== 0 && (
        <div className="resourcesSearchReturn">
           <h4 className="searchResults">Search Results:</h4>
          {query.map((resource) => {
            return (
            <div className="resource" key={resource.id}>
            <h4>Topic: {resource.topic}</h4>
            <p>Category: {resource.category}</p>
            <p>Subcategory: {resource.subcategory}</p>
            <p>
            <a href= {resource.URL} target="_blank"
            rel="noreferrer">
            <em>Visit this Link/URL</em></a>
            </p>
            <p>Description: {resource.description}</p>
            <br />
            {isAuthenticated && (
               <EditResource handleUpdateResource={handleUpdateResource} id={resource.id} />
            )}
              <br />
             {isAuthenticated && (
            <button onClick={handleDeleteResource} value={resource.id}> Delete Your Resource/</button>
            )}
             <br />
            ----------------------------
            </div>
           )
          })}
        </div>
      )}
        <br/>
        {isAuthenticated && (
        <AddResource handleCreate = {handleCreateResource}/>
        )}
        <br/>
      </aside>
    </>
  )
}

export default Home
