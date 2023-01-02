const { Router } = require("express")
const {
     createanonuser,
     getuserbyid,
     getuserbyUsername

} = require('../../Controllers/users')
const route = Router()



route.get('/:id' , async(req, res) => {
  let user;
 
 if(isNaN(parseInt(req.params.id)))
 {
  user = await getuserbyUsername(req.params.id)
 }   
 else{
    user = await getuserbyid(req.params.id)
 }

 if(user)
 {
     res.status(200).send(user)
 }
 else{
     res.status(404).send({
         error: 'No such userid or username'
     })
 }

})
 route.post('/' , async (req, res) => {
   const user = await createanonuser()
   res.status(201).send(user)
 })
module.exports = {
    usersRoute: route
}