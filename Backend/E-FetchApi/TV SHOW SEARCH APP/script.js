function searchShow (queryString){
   // let url = "http://api.tvmaze.com/search/shows?q=" + queryString
   let url = "http://api.tvmaze.com/search/shows?q=" + queryString
    fetch(url)
    .then((response)=>response.json())
    .then((data)=> data);
      
    
}

//searchShow('humble')
var searchInput = document.querySelector('#searchInput')
var output = document.querySelector('#output')
searchInput.addEventListener('keyup', ()=>{
    searchShow(searchInput.value)
    var movies = searchShow(searchInput.value)
    console.log(movies)
  //  let list = document.createElement('li')
   // list.innerHTML = movies
   //var result = output.append(list)
})
