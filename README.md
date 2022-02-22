# Backend-Authentication_and_Protect-Signup-Signin-Users

# Authentication:-
Authentication is restricting some parts of the application to only those users who identify themselves. Users identifying themselves also helps developers serve them better as it allows developers to show things relevant to them like in e-commerce applications we can know your preferences and show you products which match your preference.

# Question):- What is the difference between Authentication and Authorisation ?
Answer):- Authentication has users identify themselves and after we know the identity then they may or may not be able to access certain parts of the application for e.g :- in a bank a person from home loan department may not be able to handle cashiering work or vice versa and we may also have super users which can be branch manager who may have access to all departments inside the bank and this is generally referred to as RBAC ( Role Based Access Control ) and we will look into authorisation in the next lecture.

# Question):- How do we authenticate a user?
Answer):- The most common way is When a user signs up we associate a token with the user and that token is sent to the frontend and frontend then sends that token with every request that needs authentication ( or you may send it with every request ) and backend tries to find the associated user and then all actions are associated with that user.

Here we are going to accomplish this token based authentication using json web tokens

# Question):- What is JSON web tokens ?
Answer):- we take the details we want the token to have in a JSON format and then encrypt it with a Secret which is stored on the server and that generates a token which is then send to the client and then when the client sends the token back we decrypt the token using the secret and then the json information is retrieved as the final result.
