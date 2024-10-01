


require('dotenv').config()
const express = require('express')
const app = express()
// const port  = 3000
const githubData = {
  "login": "Aayush8730",
  "id": 141347357,
  "node_id": "U_kgDOCGzKHQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/141347357?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Aayush8730",
  "html_url": "https://github.com/Aayush8730",
  "followers_url": "https://api.github.com/users/Aayush8730/followers",
  "following_url": "https://api.github.com/users/Aayush8730/following{/other_user}",
  "gists_url": "https://api.github.com/users/Aayush8730/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Aayush8730/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Aayush8730/subscriptions",
  "organizations_url": "https://api.github.com/users/Aayush8730/orgs",
  "repos_url": "https://api.github.com/users/Aayush8730/repos",
  "events_url": "https://api.github.com/users/Aayush8730/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Aayush8730/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-08-03T15:23:05Z",
  "updated_at": "2024-08-13T19:02:10Z"
}
// console.log( typeof app)

app.get('/', function(req,res){
     res.send('Hello World!!')
})

app.listen(process.env.PORT ,function(){
     console.log(`Listening on the port`)
})

app.get('/github' ,(req,res) => {
    res.json(githubData)
})


app.get('/login', function(req,res){
  res.send('<h1>Login at Chai aur Code</h1>')
})

