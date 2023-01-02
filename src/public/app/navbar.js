let navlinks = $('.navbar-nav .nav-link')

navlinks.click(( ev ) => {
   let componenturl = `/components/${ $(ev.target).attr('data-component')}.html`
   $('#content').load(componenturl)
})