$(() => {
    $('#navbar').load("/components/navbar.html" , loginifneeded)
    
    $('#footer').load("/components/footer.html")

    $('#content').load("/components/all-posts.html  " )

    loginifneeded()
})


function loginifneeded()
{
    window.currentuser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if(!currentuser)
    {
        $.post('/api/users' , {} , (user) => {
            if (user)
            {
                console.log("Registered As" , user.username)
                window.localStorage.user = JSON.stringify(user)
                currentuser = user
                $('#nav-username').text(currentuser.username)
               
            }
        })
    }
    else{
        console.log("Resuming As", currentuser.username)
        $('#nav-username').text(currentuser.username)

    }
}

