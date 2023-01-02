const { Router } = require('express')
const {
    findallposts,
    createnewpost
} = require('../../Controllers/posts')

const route = Router()

route.get('/' , async (req, res) => {
    const posts = await findallposts(req.query)
    res.status(200).send(posts)
 })



 
 route.post('/' , async (req, res) => {
    console.log(`POST /api/posts`, req.body)
     const { userid , title , body } = req.body
     if((!userid) || (!title) || (!body)){
         return res.status(400).send({
             error: 'Need userid,title,body to create a post'
         })
     }
     const post = await createnewpost(userid , title, body)
     res.status(201).send(post)
 })








module.exports = {
    postsRoute: route
}