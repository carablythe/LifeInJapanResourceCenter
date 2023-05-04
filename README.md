# Life in Japan: Resource Center
Full-stack resource directory app for foreign residents of Japan
by Cara Phillips

SEI Final Project, began March-April 2022  (last update May 2023)

APP URL: https://japanresources.netlify.app


# Frontend:
 using React, Node

https://github.com/carablythe/LifeInJapanResourceCenter


# Backend:
 using django, Python

https://lifeinjapanresourcesbackend.onrender.com/

https://github.com/carablythe/LifeInJapanResourcesBackEnd


#TECHNOLOGIES USED:
Multiple full-CRUD and partial-CRUD models, created with django, Python, React, Axios, Node and SASS. Components were created for the resource directory, the navbar, and for adding to and editing each of the models: the resources themselves and the question/comment forum.

#SUCCESSES:
1. Learning some new tricks with SASS.
2. Getting user authentication set up for the first time, albeit just with Auth0, but it's a start.
3. Organizing my database entries into categories, subcategories, and topics in a directory and also through a search function.
4. Getting the send message to admin form to actually send an email to the admin.
5. Setting up multiple models without too much trouble on Django.

#CHALLENGES:  
1. Diving the database entries into categories and subcategories in the directory component without repetition.
2. Figuring out how to get the categories and subcategories to match in the AddResource component.
3. Getting the "Safe Exit" button to appear on top of all other divs.
4. Getting the delete button to be accessible only to those who are logged in AND also for its route to work properly.


#UNSOLVED PROBLEMS:  
1. The directory component is very long, detailed code, as I could not figure out a DRY version.
2. Preventing duplicate categories/subcategories from appearing in the dropdown menu in the AddResource component.
3. Making sure the original poster is the only one able to delete or edit their post.

#STRETCH/FUTURE GOALS:
In addition to the unsolved problems, I hope to get the database populated with as many resources as I can to help foreign residents living in Japan, particularly those going through difficult times. I would also like to get an advice column from admins going.  It would be nice if the pages were available in multiple languages, which is a super stretch goal and will require assistance from volunteers.
