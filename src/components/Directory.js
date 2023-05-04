import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Directory = () => {
  const [resources, setResources] = useState([])
  const [showImmigration, setShowImmigration] = useState(false);
  const [showEmployment, setShowEmployment] = useState(false);
  const [showHousing, setShowHousing] = useState(false);
  const [showTaxes, setShowTaxes] = useState(false);
  const [showMedicalCare, setShowMedicalCare] = useState(false);
  const [showLegalMatters, setShowLegalMatters] = useState(false);
  const [showChildcare, setShowChildcare] = useState(false);
  const [showSchoolSystem, setShowSchoolSystem] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showOther, setShowOther] = useState(false);


  const revealImmigration = () => {
    setShowImmigration(true); setShowEmployment(false); setShowHousing(false);
    setShowTaxes(false); setShowMedicalCare(false); setShowLegalMatters(false);
    setShowChildcare(false); setShowSchoolSystem(false); setShowTranslation(false); setShowOther(false);
  }
  const revealEmployment = () => {
    setShowImmigration(false); setShowEmployment(true); setShowHousing(false);
    setShowTaxes(false); setShowMedicalCare(false); setShowLegalMatters(false);
    setShowChildcare(false); setShowSchoolSystem(false); setShowTranslation(false); setShowOther(false);
  }

  const revealHousing = () => {
    setShowImmigration(false); setShowEmployment(false); setShowHousing(true);
    setShowTaxes(false); setShowMedicalCare(false); setShowLegalMatters(false);
    setShowChildcare(false); setShowSchoolSystem(false); setShowTranslation(false); setShowOther(false);
  }

  const revealTaxes = () => {
    setShowImmigration(false); setShowEmployment(false); setShowHousing(false);
    setShowTaxes(true); setShowMedicalCare(false); setShowLegalMatters(false);
    setShowChildcare(false); setShowSchoolSystem(false); setShowTranslation(false); setShowOther(false);
  }

  const revealMedicalCare = () => {
    setShowImmigration(false); setShowEmployment(false); setShowHousing(false);
    setShowTaxes(false); setShowMedicalCare(true); setShowLegalMatters(false);
    setShowChildcare(false); setShowSchoolSystem(false); setShowTranslation(false); setShowOther(false);
  }

  const revealLegalMatters = () => {
    setShowImmigration(false); setShowEmployment(false); setShowHousing(false);
    setShowTaxes(false); setShowMedicalCare(false); setShowLegalMatters(true);
    setShowChildcare(false); setShowSchoolSystem(false); setShowTranslation(false); setShowOther(false);
  }

  const revealChildcare = () => {
    setShowImmigration(false); setShowEmployment(false); setShowHousing(false);
    setShowTaxes(false); setShowMedicalCare(false); setShowLegalMatters(false);
    setShowChildcare(true); setShowSchoolSystem(false); setShowTranslation(false); setShowOther(false);
  }

  const revealSchoolSystem = () => {
    setShowImmigration(false); setShowEmployment(false); setShowHousing(false);
    setShowTaxes(false); setShowMedicalCare(false); setShowLegalMatters(false);
    setShowChildcare(false); setShowSchoolSystem(true); setShowTranslation(false); setShowOther(false);
  }

  const revealTranslation = () => {
    setShowImmigration(false); setShowEmployment(false); setShowHousing(false);
    setShowTaxes(false); setShowMedicalCare(false); setShowLegalMatters(false);
    setShowChildcare(false); setShowSchoolSystem(false); setShowTranslation(true); setShowOther(false);
  }

  const revealOther = () => {
    setShowImmigration(false); setShowEmployment(false); setShowHousing(false);
    setShowTaxes(false); setShowMedicalCare(false); setShowLegalMatters(false);
    setShowChildcare(false); setShowSchoolSystem(false); setShowTranslation(false); setShowOther(true);
  }


  const getResources = () => {
    axios
      .get('https://japanresources.herokuapp.com/api/resources')
      .then(
        (response) => setResources(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
    }


    useEffect(() => {
     getResources()
     }, [])



    return (
      <>
      <aside className= "directoryMenu">
          <div>
            <h3 className="directoryTitle" >Resource Directory:</h3>
            <ul className="dropdown" >

             <li className="resourceCategory" onClick = {() => revealImmigration()}><b>Immigration</b>
              {showImmigration ?  (
                <ul className="resourceSubcategory" >
                 <li className="resourceSubcategoryLI" >
                  <details>
                   <summary className="resourceSubcategory">Work Visas</ summary>
                    {resources.filter((resource, index) => {
                      if (resource.subcategory === "Work Visas")
                        {return resource}
                      else {return null}
                    }).map((resource, index) => {
                       return (
                         <ul className="resourceUL" >
                           <li className="resourceLI" >
                             <em>Topic:</em> {resource.topic}<br/>
                             <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                             <em>Description:</em> {resource.description}
                           </li>
                         </ul>
                     )})}
                  </details>
                 </li>


                 <li className="resourceSubcategoryLI" >
                  <details>
                   <summary className="resourceSubcategory">Student Visas</ summary>
                    {resources.filter((resource, index) => {
                      if (resource.subcategory === "Student Visas")
                        {return resource}
                      else {return null}
                    }).map((resource, index) => {
                       return (
                         <ul className="resourceUL" >
                           <li className="resourceLI" >
                             <em>Topic:</em> {resource.topic}<br/>
                             <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                             <em>Description:</em> {resource.description}
                           </li>
                         </ul>
                     )})}
                  </details>
                 </li>

                 <li className="resourceSubcategoryLI" >
                  <details>
                   <summary className="resourceSubcategory">Spousal Visas</ summary>
                    {resources.filter((resource, index) => {
                      if (resource.subcategory === "Spousal Visas")
                        {return resource}
                      else {return null}
                    }).map((resource, index) => {
                       return (
                         <ul className="resourceUL" >
                           <li className="resourceLI" >
                             <em>Topic:</em> {resource.topic}<br/>
                             <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                             <em>Description:</em> {resource.description}
                           </li>
                         </ul>
                     )})}
                  </details>
                 </li>

                 <li className="resourceSubcategoryLI" >
                  <details>
                   <summary className="resourceSubcategory">Investor Visas</ summary>
                    {resources.filter((resource, index) => {
                      if (resource.subcategory === "Investor Visas")
                        {return resource}
                      else {return null}
                    }).map((resource, index) => {
                       return (
                         <ul className="resourceUL" >
                           <li className="resourceLI" >
                             <em>Topic:</em> {resource.topic}<br/>
                             <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                             <em>Description:</em> {resource.description}
                           </li>
                         </ul>
                     )})}
                  </details>
                 </li>

                 <li className="resourceSubcategoryLI" >
                  <details>
                   <summary className="resourceSubcategory">Highly Skilled Worker Visas</ summary>
                    {resources.filter((resource, index) => {
                      if (resource.subcategory === "Highly Skilled Worker Visas")
                        {return resource}
                      else {return null}
                    }).map((resource, index) => {
                       return (
                         <ul className="resourceUL" >
                           <li className="resourceLI" >
                             <em>Topic:</em> {resource.topic}<br/>
                             <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                             <em>Description:</em> {resource.description}
                           </li>
                         </ul>
                     )})}
                  </details>
                 </li>

                 <li className="resourceSubcategoryLI" >
                  <details>
                   <summary className="resourceSubcategory">Permanent Residency</ summary>
                    {resources.filter((resource, index) => {
                      if (resource.subcategory === "Permanent Residency")
                        {return resource}
                      else {return null}
                    }).map((resource, index) => {
                       return (
                         <ul className="resourceUL" >
                           <li className="resourceLI" >
                             <em>Topic:</em> {resource.topic}<br/>
                             <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                             <em>Description:</em> {resource.description}
                           </li>
                         </ul>
                     )})}
                  </details>
                 </li>

                 <li className="resourceSubcategoryLI" >
                  <details>
                   <summary className="resourceSubcategory">Other</ summary>
                    {resources.filter((resource, index) => {
                      if (resource.category === "Immigration" &&
                      resource.subcategory === "Other")
                        {return resource}
                      else {return null}
                    }).map((resource, index) => {
                       return (
                         <ul className="resourceUL" >
                           <li className="resourceLI" >
                             <em>Topic:</em> {resource.topic}<br/>
                             <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                             <em>Description:</em> {resource.description}
                           </li>
                         </ul>
                     )})}
                  </details>
                 </li>
                </ul>
                ) : null}
               </li>

               <li className="resourceCategory" onClick = {() => revealEmployment()}><b>Employment</b>
                {showEmployment ?  (
                  <ul className="resourceSubcategory" >
                   <li className="resourceSubcategoryLI" >
                    <details>
                     <summary className="resourceSubcategory">Visa Sponsorship</ summary>
                      {resources.filter((resource, index) => {
                        if (resource.subcategory === "Visa Sponsorship")
                          {return resource}
                        else {return null}
                      }).map((resource, index) => {
                         return (
                           <ul className="resourceUL" >
                             <li className="resourceLI" >
                               <em>Topic:</em> {resource.topic}<br/>
                               <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                               <em>Description:</em> {resource.description}
                             </li>
                           </ul>
                       )})}
                    </details>
                   </li>


                   <li className="resourceSubcategoryLI" >
                    <details>
                     <summary className="resourceSubcategory">Work Culture in Japan</ summary>
                      {resources.filter((resource, index) => {
                        if (resource.subcategory === "Work Culture in Japan")
                          {return resource}
                        else {return null}
                      }).map((resource, index) => {
                         return (
                           <ul className="resourceUL" >
                             <li className="resourceLI" >
                               <em>Topic:</em> {resource.topic}<br/>
                               <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                               <em>Description:</em> {resource.description}
                             </li>
                           </ul>
                       )})}
                    </details>
                   </li>

                   <li className="resourceSubcategoryLI" >
                    <details>
                     <summary className="resourceSubcategory">Part-time Work</ summary>
                      {resources.filter((resource, index) => {
                        if (resource.subcategory === "Part-time Work")
                          {return resource}
                        else {return null}
                      }).map((resource, index) => {
                         return (
                           <ul className="resourceUL" >
                             <li className="resourceLI" >
                               <em>Topic:</em> {resource.topic}<br/>
                               <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                               <em>Description:</em> {resource.description}
                             </li>
                           </ul>
                       )})}
                    </details>
                   </li>

                   <li className="resourceSubcategoryLI" >
                    <details>
                     <summary className="resourceSubcategory">Full-time Work</ summary>
                      {resources.filter((resource, index) => {
                        if (resource.subcategory === "Part-time Work")
                          {return resource}
                        else {return null}
                      }).map((resource, index) => {
                         return (
                           <ul className="resourceUL" >
                             <li className="resourceLI" >
                               <em>Topic:</em> {resource.topic}<br/>
                               <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                               <em>Description:</em> {resource.description}
                             </li>
                           </ul>
                       )})}
                    </details>
                   </li>

                   <li className="resourceSubcategoryLI" >
                    <details>
                     <summary className="resourceSubcategory">Other</ summary>
                      {resources.filter((resource, index) => {
                        if (resource.category === "Employment" &&
                        resource.subcategory === "Other")
                          {return resource}
                        else {return null}
                      }).map((resource, index) => {
                         return (
                           <ul className="resourceUL" >
                             <li className="resourceLI" >
                               <em>Topic:</em> {resource.topic}<br/>
                               <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                               <em>Description:</em> {resource.description}
                             </li>
                           </ul>
                       )})}
                    </details>
                   </li>
                  </ul>
                  ) : null}
                 </li>

                 <li className="resourceCategory" onClick = {() => revealHousing()}><b>Housing</b>
                  {showHousing ?  (
                    <ul className="resourceSubcategory" >
                     <li className="resourceSubcategoryLI" >
                      <details>
                       <summary className="resourceSubcategory">Renting</ summary>
                        {resources.filter((resource, index) => {
                          if (resource.subcategory === "Renting")
                            {return resource}
                          else {return null}
                        }).map((resource, index) => {
                           return (
                             <ul className="resourceUL" >
                               <li className="resourceLI" >
                                 <em>Topic:</em> {resource.topic}<br/>
                                 <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                 <em>Description:</em> {resource.description}
                               </li>
                             </ul>
                         )})}
                      </details>
                     </li>


                     <li className="resourceSubcategoryLI" >
                      <details>
                       <summary className="resourceSubcategory">Buying a Condo</ summary>
                        {resources.filter((resource, index) => {
                          if (resource.subcategory === "Buying a Condo")
                            {return resource}
                          else {return null}
                        }).map((resource, index) => {
                           return (
                             <ul className="resourceUL" >
                               <li className="resourceLI" >
                                 <em>Topic:</em> {resource.topic}<br/>
                                 <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                 <em>Description:</em> {resource.description}
                               </li>
                             </ul>
                         )})}
                      </details>
                     </li>

                     <li className="resourceSubcategoryLI" >
                      <details>
                       <summary className="resourceSubcategory">Buying a House</ summary>
                        {resources.filter((resource, index) => {
                          if (resource.subcategory === "Buying a House")
                            {return resource}
                          else {return null}
                        }).map((resource, index) => {
                           return (
                             <ul className="resourceUL" >
                               <li className="resourceLI" >
                                 <em>Topic:</em> {resource.topic}<br/>
                                 <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                 <em>Description:</em> {resource.description}
                               </li>
                             </ul>
                         )})}
                      </details>
                     </li>


                     <li className="resourceSubcategoryLI" >
                      <details>
                       <summary className="resourceSubcategory">Other</ summary>
                        {resources.filter((resource, index) => {
                          if (resource.category === "Housing" &&
                          resource.subcategory === "Other")
                            {return resource}
                          else {return null}
                        }).map((resource, index) => {
                           return (
                             <ul className="resourceUL" >
                               <li className="resourceLI" >
                                 <em>Topic:</em> {resource.topic}<br/>
                                 <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                 <em>Description:</em> {resource.description}
                               </li>
                             </ul>
                         )})}
                      </details>
                     </li>
                    </ul>
                    ) : null}
                   </li>


                   <li className="resourceCategory" onClick = {() => revealTaxes()}><b>Taxes</b>
                    {showTaxes?  (
                      <ul className="resourceSubcategory" >
                       <li className="resourceSubcategoryLI" >
                        <details>
                         <summary className="resourceSubcategory">Income Taxes</ summary>
                          {resources.filter((resource, index) => {
                            if (resource.subcategory === "Income Taxes")
                              {return resource}
                            else {return null}
                          }).map((resource, index) => {
                             return (
                               <ul className="resourceUL" >
                                 <li className="resourceLI" >
                                   <em>Topic:</em> {resource.topic}<br/>
                                   <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                   <em>Description:</em> {resource.description}
                                 </li>
                               </ul>
                           )})}
                        </details>
                       </li>


                       <li className="resourceSubcategoryLI" >
                        <details>
                         <summary className="resourceSubcategory">Residential Tax</ summary>
                          {resources.filter((resource, index) => {
                            if (resource.subcategory === "Residential Tax")
                              {return resource}
                            else {return null}
                          }).map((resource, index) => {
                             return (
                               <ul className="resourceUL" >
                                 <li className="resourceLI" >
                                   <em>Topic:</em> {resource.topic}<br/>
                                   <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                   <em>Description:</em> {resource.description}
                                 </li>
                               </ul>
                           )})}
                        </details>
                       </li>

                       <li className="resourceSubcategoryLI" >
                        <details>
                         <summary className="resourceSubcategory">Property Tax</ summary>
                          {resources.filter((resource, index) => {
                            if (resource.subcategory === "Property Tax")
                              {return resource}
                            else {return null}
                          }).map((resource, index) => {
                             return (
                               <ul className="resourceUL" >
                                 <li className="resourceLI" >
                                   <em>Topic:</em> {resource.topic}<br/>
                                   <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                   <em>Description:</em> {resource.description}
                                 </li>
                               </ul>
                           )})}
                        </details>
                       </li>

                       <li className="resourceSubcategoryLI" >
                        <details>
                         <summary className="resourceSubcategory">Sales Tax</ summary>
                          {resources.filter((resource, index) => {
                            if (resource.subcategory === "Sales Tax")
                              {return resource}
                            else {return null}
                          }).map((resource, index) => {
                             return (
                               <ul className="resourceUL" >
                                 <li className="resourceLI" >
                                   <em>Topic:</em> {resource.topic}<br/>
                                   <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                   <em>Description:</em> {resource.description}
                                 </li>
                               </ul>
                           )})}
                        </details>
                       </li>

                       <li className="resourceSubcategoryLI" >
                        <details>
                         <summary className="resourceSubcategory">Nenkin System</ summary>
                          {resources.filter((resource, index) => {
                            if (resource.subcategory === "Nenkin System")
                              {return resource}
                            else {return null}
                          }).map((resource, index) => {
                             return (
                               <ul className="resourceUL" >
                                 <li className="resourceLI" >
                                   <em>Topic:</em> {resource.topic}<br/>
                                   <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                   <em>Description:</em> {resource.description}
                                 </li>
                               </ul>
                           )})}
                        </details>
                       </li>

                       <li className="resourceSubcategoryLI" >
                        <details>
                         <summary className="resourceSubcategory">Other</ summary>
                          {resources.filter((resource, index) => {
                            if (resource.category === "Taxes" &&
                            resource.subcategory === "Other")
                              {return resource}
                            else {return null}
                          }).map((resource, index) => {
                             return (
                               <ul className="resourceUL" >
                                 <li className="resourceLI" >
                                   <em>Topic:</em> {resource.topic}<br/>
                                   <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                   <em>Description:</em> {resource.description}
                                 </li>
                               </ul>
                           )})}
                        </details>
                       </li>
                      </ul>
                      ) : null}
                     </li>

                     <li className="resourceCategory" onClick = {() => revealMedicalCare()}><b>Medical Care</b>
                      {showMedicalCare?  (
                        <ul className="resourceSubcategory" >
                         <li className="resourceSubcategoryLI" >
                          <details>
                           <summary className="resourceSubcategory">Hospitals</ summary>
                            {resources.filter((resource, index) => {
                              if (resource.subcategory === "Hospitals")
                                {return resource}
                              else {return null}
                            }).map((resource, index) => {
                               return (
                                 <ul className="resourceUL" >
                                   <li className="resourceLI" >
                                     <em>Topic:</em> {resource.topic}<br/>
                                     <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                     <em>Description:</em> {resource.description}
                                   </li>
                                 </ul>
                             )})}
                          </details>
                         </li>

                         <li className="resourceSubcategoryLI" >
                          <details>
                           <summary className="resourceSubcategory">Insurance</ summary>
                            {resources.filter((resource, index) => {
                              if (resource.subcategory === "Insurance")
                                {return resource}
                              else {return null}
                            }).map((resource, index) => {
                               return (
                                 <ul className="resourceUL" >
                                   <li className="resourceLI" >
                                     <em>Topic:</em> {resource.topic}<br/>
                                     <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                     <em>Description:</em> {resource.description}
                                   </li>
                                 </ul>
                             )})}
                          </details>
                         </li>

                         <li className="resourceSubcategoryLI" >
                          <details>
                           <summary className="resourceSubcategory">Surgery</ summary>
                            {resources.filter((resource, index) => {
                              if (resource.subcategory === "Surgery")
                                {return resource}
                              else {return null}
                            }).map((resource, index) => {
                               return (
                                 <ul className="resourceUL" >
                                   <li className="resourceLI" >
                                     <em>Topic:</em> {resource.topic}<br/>
                                     <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                     <em>Description:</em> {resource.description}
                                   </li>
                                 </ul>
                             )})}
                          </details>
                         </li>

                         <li className="resourceSubcategoryLI" >
                          <details>
                           <summary className="resourceSubcategory">Childbirth</ summary>
                            {resources.filter((resource, index) => {
                              if (resource.subcategory === "Childbirth")
                                {return resource}
                              else {return null}
                            }).map((resource, index) => {
                               return (
                                 <ul className="resourceUL" >
                                   <li className="resourceLI" >
                                     <em>Topic:</em> {resource.topic}<br/>
                                     <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                     <em>Description:</em> {resource.description}
                                   </li>
                                 </ul>
                             )})}
                          </details>
                         </li>

                         <li className="resourceSubcategoryLI" >
                          <details>
                           <summary className="resourceSubcategory">Vaccinations</ summary>
                            {resources.filter((resource, index) => {
                              if (resource.subcategory === "Vaccinations")
                                {return resource}
                              else {return null}
                            }).map((resource, index) => {
                               return (
                                 <ul className="resourceUL" >
                                   <li className="resourceLI" >
                                     <em>Topic:</em> {resource.topic}<br/>
                                     <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                     <em>Description:</em> {resource.description}
                                   </li>
                                 </ul>
                             )})}
                          </details>
                         </li>

                         <li className="resourceSubcategoryLI" >
                          <details>
                           <summary className="resourceSubcategory">Emergency Services</ summary>
                            {resources.filter((resource, index) => {
                              if (resource.subcategory === "Emergency Services")
                                {return resource}
                              else {return null}
                            }).map((resource, index) => {
                               return (
                                 <ul className="resourceUL" >
                                   <li className="resourceLI" >
                                     <em>Topic:</em> {resource.topic}<br/>
                                     <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                     <em>Description:</em> {resource.description}
                                   </li>
                                 </ul>
                             )})}
                          </details>
                         </li>

                         <li className="resourceSubcategoryLI" >
                          <details>
                           <summary className="resourceSubcategory">Other</ summary>
                            {resources.filter((resource, index) => {
                              if (resource.category === "Medical Care" &&
                              resource.subcategory === "Other")
                                {return resource}
                              else {return null}
                            }).map((resource, index) => {
                               return (
                                 <ul className="resourceUL" >
                                   <li className="resourceLI" >
                                     <em>Topic:</em> {resource.topic}<br/>
                                     <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                     <em>Description:</em> {resource.description}
                                   </li>
                                 </ul>
                             )})}
                          </details>
                         </li>
                        </ul>
                        ) : null}
                       </li>

                       <li className="resourceCategory" onClick = {() => revealLegalMatters()}><b>Legal Matters</b>
                        {showLegalMatters ?  (
                          <ul className="resourceSubcategory" >
                           <li className="resourceSubcategoryLI" >
                            <details>
                             <summary className="resourceSubcategory">Marriage</ summary>
                              {resources.filter((resource, index) => {
                                if (resource.subcategory === "Marriage")
                                  {return resource}
                                else {return null}
                              }).map((resource, index) => {
                                 return (
                                   <ul className="resourceUL" >
                                     <li className="resourceLI" >
                                       <em>Topic:</em> {resource.topic}<br/>
                                       <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                       <em>Description:</em> {resource.description}
                                     </li>
                                   </ul>
                               )})}
                            </details>
                           </li>


                           <li className="resourceSubcategoryLI" >
                            <details>
                             <summary className="resourceSubcategory">Divorce</ summary>
                              {resources.filter((resource, index) => {
                                if (resource.subcategory === "Divorce")
                                  {return resource}
                                else {return null}
                              }).map((resource, index) => {
                                 return (
                                   <ul className="resourceUL" >
                                     <li className="resourceLI" >
                                       <em>Topic:</em> {resource.topic}<br/>
                                       <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                       <em>Description:</em> {resource.description}
                                     </li>
                                   </ul>
                               )})}
                            </details>
                           </li>

                           <li className="resourceSubcategoryLI" >
                            <details>
                             <summary className="resourceSubcategory">Child Custody</ summary>
                              {resources.filter((resource, index) => {
                                if (resource.subcategory === "Child Custody")
                                  {return resource}
                                else {return null}
                              }).map((resource, index) => {
                                 return (
                                   <ul className="resourceUL" >
                                     <li className="resourceLI" >
                                       <em>Topic:</em> {resource.topic}<br/>
                                       <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                       <em>Description:</em> {resource.description}
                                     </li>
                                   </ul>
                               )})}
                            </details>
                           </li>

                           <li className="resourceSubcategoryLI" >
                            <details>
                             <summary className="resourceSubcategory">Employee Rights</ summary>
                              {resources.filter((resource, index) => {
                                if (resource.subcategory === "Employee Rights")
                                  {return resource}
                                else {return null}
                              }).map((resource, index) => {
                                 return (
                                   <ul className="resourceUL" >
                                     <li className="resourceLI" >
                                       <em>Topic:</em> {resource.topic}<br/>
                                       <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                       <em>Description:</em> {resource.description}
                                     </li>
                                   </ul>
                               )})}
                            </details>
                           </li>

                           <li className="resourceSubcategoryLI" >
                            <details>
                             <summary className="resourceSubcategory">International Lawyers</ summary>
                              {resources.filter((resource, index) => {
                                if (resource.subcategory === "International Lawyers")
                                  {return resource}
                                else {return null}
                              }).map((resource, index) => {
                                 return (
                                   <ul className="resourceUL" >
                                     <li className="resourceLI" >
                                       <em>Topic:</em> {resource.topic}<br/>
                                       <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                       <em>Description:</em> {resource.description}
                                     </li>
                                   </ul>
                               )})}
                            </details>
                           </li>


                           <li className="resourceSubcategoryLI" >
                            <details>
                             <summary className="resourceSubcategory">Other</ summary>
                              {resources.filter((resource, index) => {
                                if (resource.category === "Legal Matters" &&
                                resource.subcategory === "Other")
                                  {return resource}
                                else {return null}
                              }).map((resource, index) => {
                                 return (
                                   <ul className="resourceUL" >
                                     <li className="resourceLI" >
                                       <em>Topic:</em> {resource.topic}<br/>
                                       <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                       <em>Description:</em> {resource.description}
                                     </li>
                                   </ul>
                               )})}
                            </details>
                           </li>
                          </ul>
                          ) : null}
                         </li>

                         <li className="resourceCategory" onClick = {() => revealChildcare()}><b>Childcare</b>
                          {showChildcare ?  (
                            <ul className="resourceSubcategory" >
                             <li className="resourceSubcategoryLI" >
                              <details>
                               <summary className="resourceSubcategory">Nursery Schools (hoikuen)</ summary>
                                {resources.filter((resource, index) => {
                                  if (resource.subcategory === "Nursery Schools (hoikuen)")
                                    {return resource}
                                  else {return null}
                                }).map((resource, index) => {
                                   return (
                                     <ul className="resourceUL" >
                                       <li className="resourceLI" >
                                         <em>Topic:</em> {resource.topic}<br/>
                                         <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                         <em>Description:</em> {resource.description}
                                       </li>
                                     </ul>
                                 )})}
                              </details>
                             </li>


                             <li className="resourceSubcategoryLI" >
                              <details>
                               <summary className="resourceSubcategory">Kindergartens (youchien)</ summary>
                                {resources.filter((resource, index) => {
                                  if (resource.subcategory === "Kindergartens (youchien)")
                                    {return resource}
                                  else {return null}
                                }).map((resource, index) => {
                                   return (
                                     <ul className="resourceUL" >
                                       <li className="resourceLI" >
                                         <em>Topic:</em> {resource.topic}<br/>
                                         <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                         <em>Description:</em> {resource.description}
                                       </li>
                                     </ul>
                                 )})}
                              </details>
                             </li>

                             <li className="resourceSubcategoryLI" >
                              <details>
                               <summary className="resourceSubcategory">Home Supporters/ Babysitting Services</ summary>
                                {resources.filter((resource, index) => {
                                  if (resource.subcategory === "Home Supporters/Babysitting Services")
                                    {return resource}
                                  else {return null}
                                }).map((resource, index) => {
                                   return (
                                     <ul className="resourceUL" >
                                       <li className="resourceLI" >
                                         <em>Topic:</em> {resource.topic}<br/>
                                         <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                         <em>Description:</em> {resource.description}
                                       </li>
                                     </ul>
                                 )})}
                              </details>
                             </li>


                             <li className="resourceSubcategoryLI" >
                              <details>
                               <summary className="resourceSubcategory">Government Support</ summary>
                                {resources.filter((resource, index) => {
                                  if (resource.subcategory === "Government Support")
                                    {return resource}
                                  else {return null}
                                }).map((resource, index) => {
                                   return (
                                     <ul className="resourceUL" >
                                       <li className="resourceLI" >
                                         <em>Topic:</em> {resource.topic}<br/>
                                         <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                         <em>Description:</em> {resource.description}
                                       </li>
                                     </ul>
                                 )})}
                              </details>
                             </li>


                             <li className="resourceSubcategoryLI" >
                              <details>
                               <summary className="resourceSubcategory">Other</ summary>
                                {resources.filter((resource, index) => {
                                  if (resource.category === "Childcare" &&
                                  resource.subcategory === "Other")
                                    {return resource}
                                  else {return null}
                                }).map((resource, index) => {
                                   return (
                                     <ul className="resourceUL" >
                                       <li className="resourceLI" >
                                         <em>Topic:</em> {resource.topic}<br/>
                                         <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                         <em>Description:</em> {resource.description}
                                       </li>
                                     </ul>
                                 )})}
                              </details>
                             </li>
                            </ul>
                            ) : null}
                           </li>


                           <li className="resourceCategory" onClick = {() => revealSchoolSystem()}><b>School System</b>
                            {showSchoolSystem ?  (
                              <ul className="resourceSubcategory" >
                               <li className="resourceSubcategoryLI" >
                                <details>
                                 <summary className="resourceSubcategory">Elementary Schools</ summary>
                                  {resources.filter((resource, index) => {
                                    if (resource.subcategory === "Elementary Schools")
                                      {return resource}
                                    else {return null}
                                  }).map((resource, index) => {
                                     return (
                                       <ul className="resourceUL" >
                                         <li className="resourceLI" >
                                           <em>Topic:</em> {resource.topic}<br/>
                                           <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                           <em>Description:</em> {resource.description}
                                         </li>
                                       </ul>
                                   )})}
                                </details>
                               </li>


                               <li className="resourceSubcategoryLI" >
                                <details>
                                 <summary className="resourceSubcategory">Junior High Schools</ summary>
                                  {resources.filter((resource, index) => {
                                    if (resource.subcategory === "Junior High Schools")
                                      {return resource}
                                    else {return null}
                                  }).map((resource, index) => {
                                     return (
                                       <ul className="resourceUL" >
                                         <li className="resourceLI" >
                                           <em>Topic:</em> {resource.topic}<br/>
                                           <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                           <em>Description:</em> {resource.description}
                                         </li>
                                       </ul>
                                   )})}
                                </details>
                               </li>

                               <li className="resourceSubcategoryLI" >
                                <details>
                                 <summary className="resourceSubcategory">High Schools</ summary>
                                  {resources.filter((resource, index) => {
                                    if (resource.subcategory === "High Schools")
                                      {return resource}
                                    else {return null}
                                  }).map((resource, index) => {
                                     return (
                                       <ul className="resourceUL" >
                                         <li className="resourceLI" >
                                           <em>Topic:</em> {resource.topic}<br/>
                                           <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                           <em>Description:</em> {resource.description}
                                         </li>
                                       </ul>
                                   )})}
                                </details>
                               </li>


                               <li className="resourceSubcategoryLI" >
                                <details>
                                 <summary className="resourceSubcategory">Cram Schools (juku)</ summary>
                                  {resources.filter((resource, index) => {
                                    if (resource.subcategory === "Cram Schools (juku)")
                                      {return resource}
                                    else {return null}
                                  }).map((resource, index) => {
                                     return (
                                       <ul className="resourceUL" >
                                         <li className="resourceLI" >
                                           <em>Topic:</em> {resource.topic}<br/>
                                           <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                           <em>Description:</em> {resource.description}
                                         </li>
                                       </ul>
                                   )})}
                                </details>
                               </li>


                               <li className="resourceSubcategoryLI" >
                                <details>
                                 <summary className="resourceSubcategory">Other</ summary>
                                  {resources.filter((resource, index) => {
                                    if (resource.category === "School System" &&
                                    resource.subcategory === "Other")
                                      {return resource}
                                    else {return null}
                                  }).map((resource, index) => {
                                     return (
                                       <ul className="resourceUL" >
                                         <li className="resourceLI" >
                                           <em>Topic:</em> {resource.topic}<br/>
                                           <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                           <em>Description:</em> {resource.description}
                                         </li>
                                       </ul>
                                   )})}
                                </details>
                               </li>
                              </ul>
                              ) : null}
                             </li>

                             <li className="resourceCategory" onClick = {() => revealTranslation()}><b>Translation & Language Services</b>
                              {showTranslation ?  (
                                <ul className="resourceSubcategory" >
                                 <li className="resourceSubcategoryLI" >
                                  <details>
                                   <summary className="resourceSubcategory">Translators</ summary>
                                    {resources.filter((resource, index) => {
                                      if (resource.subcategory === "Translators")
                                        {return resource}
                                      else {return null}
                                    }).map((resource, index) => {
                                       return (
                                         <ul className="resourceUL" >
                                           <li className="resourceLI" >
                                             <em>Topic:</em> {resource.topic}<br/>
                                             <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                             <em>Description:</em> {resource.description}
                                           </li>
                                         </ul>
                                     )})}
                                  </details>
                                 </li>


                                 <li className="resourceSubcategoryLI" >
                                  <details>
                                   <summary className="resourceSubcategory">Interpreters</ summary>
                                    {resources.filter((resource, index) => {
                                      if (resource.subcategory === "Interpreters")
                                        {return resource}
                                      else {return null}
                                    }).map((resource, index) => {
                                       return (
                                         <ul className="resourceUL" >
                                           <li className="resourceLI" >
                                             <em>Topic:</em> {resource.topic}<br/>
                                             <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                             <em>Description:</em> {resource.description}
                                           </li>
                                         </ul>
                                     )})}
                                  </details>
                                 </li>

                                 <li className="resourceSubcategoryLI" >
                                  <details>
                                   <summary className="resourceSubcategory">Japanese Language Schools</ summary>
                                    {resources.filter((resource, index) => {
                                      if (resource.subcategory === "Japanese Language Schools")
                                        {return resource}
                                      else {return null}
                                    }).map((resource, index) => {
                                       return (
                                         <ul className="resourceUL" >
                                           <li className="resourceLI" >
                                             <em>Topic:</em> {resource.topic}<br/>
                                             <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                             <em>Description:</em> {resource.description}
                                           </li>
                                         </ul>
                                     )})}
                                  </details>
                                 </li>


                                 <li className="resourceSubcategoryLI" >
                                  <details>
                                   <summary className="resourceSubcategory">Other</ summary>
                                    {resources.filter((resource, index) => {
                                      if (resource.category === "Translation & Language Services" &&
                                      resource.subcategory === "Other")
                                        {return resource}
                                      else {return null}
                                    }).map((resource, index) => {
                                       return (
                                         <ul className="resourceUL" >
                                           <li className="resourceLI" >
                                             <em>Topic:</em> {resource.topic}<br/>
                                             <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                             <em>Description:</em> {resource.description}
                                           </li>
                                         </ul>
                                     )})}
                                  </details>
                                 </li>
                                </ul>
                                ) : null}
                               </li>

                               <li className="resourceCategory" onClick = {() => revealOther()}><b>Other Category</b>
                                {showOther ?  (
                                  <ul className="resourceSubcategory" >
                                   <li className="resourceSubcategoryLI" >
                                    <details>
                                     <summary className="resourceSubcategory">Other</ summary>
                                      {resources.filter((resource, index) => {
                                        if (resource.category === "Other" &&
                                        resource.subcategory === "Other")
                                          {return resource}
                                        else {return null}
                                      }).map((resource, index) => {
                                         return (
                                           <ul className="resourceUL" >
                                             <li className="resourceLI" >
                                               <em>Topic:</em> {resource.topic}<br/>
                                               <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a><br/>
                                               <em>Description:</em> {resource.description}
                                             </li>
                                           </ul>
                                       )})}
                                    </details>
                                   </li>
                                     </ul>
                                   ): null}
                               </li>
                    </ul>
           </div>
       </aside>
     </>
    )
}

export default Directory



//
// Using?
//
//
// {resources.map((resource) => {
//   return (
//     <ul className="resourceCategory" value={resource.id}>
//     <li className="resourceCategory" value="resourceCategory">{resource.category}
//     )
//  }).filter((resource) => {
//   if (resource.category = "resourceCategory")
//   {return (
//       <ul className="resourceSubCategory">
//       <li className="resourceSubCategory" value="resourceSubCategory">
//       {resource.subcategory}
//     )
//   }
//   else {return (null)}
// }).filter((resource) => {
//       if (resources.subcategory = "resourceSubCategory")
//       {return (
//          <ul className="resourceUL" >
//           <li className="resourceLI" >
//                <em>Topic:</em> {resource.topic}
//                <br/>
//               <a href= {resource.URL} target="_blank" rel="noreferrer"> <em>Visit this Link/URL</em></a>
//                <br/>
//                <em>Description:</em> {resource.description}
//                </li>
//             </ul>
//            )}
//       })
//       </li>
//      </ul>
//      </li>
//     </ul>
//   }

//


//
//
