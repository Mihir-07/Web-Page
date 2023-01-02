
function loadposts()
{
   $.get("/api/posts" , (posts) => {
       for( let p of posts)
       {
           $('#posts-container').append($(`
           <div  class=" card  m-4 col-3" style="width: 18rem;">
           <div  class="card-body">
           
             <h2 class="card-title font-weight-bolder">${p.title}</h2>
             <h6 class="card-subtitle mb-2 text-muted">${p.id}</h6>
             <p class="card-text">${p.body.substr(0,200)}
              <a  href = "">...read more  </a></p>
            
              <div>
              <button id="like" class=" both selected">🔺</button>
              <button id="dislike" class ="both">🔻</button>
              </div>
              
           </div>
         </div>
           `)
           )
      
       }
   })
}

