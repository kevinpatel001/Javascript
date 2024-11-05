
const movie=[
{
    name : "movie one" , type: "action", release :2001
},

{
    name : "movie two" , type: "horror", release :1998
},

{
    name : "movie three" , type: "romance", release :2010
},

{
    name : "movie four" , type: "horror", release :2005
},

{
    name : "movie five" , type: "sci", release :1995
},

{
    name : "movie six" , type: "action", release :1997
},

{
    name : "movie seven" , type: "comdey", release :2015
},


]

const newMovies= movie.filter(search=>{return search.type==="action"});

console.log(newMovies);
