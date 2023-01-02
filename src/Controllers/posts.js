const { Posts, Users} = require('../db/models')

async function createnewpost(userid,title,body){
    const post = await Posts.create({
        title,
        body,
        userid
    })

    return post
}

async function findallposts(query)
{
    let where = {}
  if (query.userId) { where.userId = query.userId }
  
  const posts = await Posts.findAll({
      include: [ Users ],
      where
  })

  return posts
}

module.exports = {
    createnewpost,
    findallposts
}

// async function  task()
// {
//     console.log(
//         await createnewpost(
//         1,
//        "title goes here",
//        "Body of the posts goes here"
//          )
//     ),
//     console.log(
//         await createnewpost(
//         2,
//        "title  again goes here",
//        "Body of the posts again  goes here"
//          )
//     )
// }
// task()

