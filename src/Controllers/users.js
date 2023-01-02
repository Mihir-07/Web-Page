const { Users } = require('../db/models')
const { getrandomuser } = require('../utils/username')

 async function createanonuser()
 {
      const user = await Users.create({
          username: getrandomuser(),
      })

      return user
 } 

 async function getuserbyid(id)
 {
    if (!id) throw new Error('user id not provided')
    
       return await Users.findOne({ where: { id } })
 }
 async function getuserbyUsername(username)
 {
       return await Users.findOne({ where: { username }})
 }
 module.exports = {
     createanonuser,
     getuserbyid,
     getuserbyUsername
 }