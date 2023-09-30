//apikey = ea298db0
const btn = document.querySelector('#search_btn');
const loader = document.getElementById('loader');
const render = document.getElementById('display');
function searchMovies(){
    const apikey = document.querySelector('#apikey').value;
    const movieTitle = document.querySelector('#movie').value;
    console.log(apikey,movieTitle);
if(!apikey || !movieTitle){
    showError('* Both fields are required')
}
  loader.style.display = "block"
  renderMovies(apikey,movieTitle)
}

btn.addEventListener("click",searchMovies)

function showError(error){
    const errorMassage = document.querySelector('#error');
    errorMassage.innerHTML = error;
}

async function renderMovies(apikey,movieTitle){
    const url = `https://www.omdbapi.com/?s=${movieTitle}&apikey=${apikey}`
    let rawData =await fetch(url);
    let data = await rawData.json() // console.log(data);
    const movies = data.Search;
    render.innerHTML = '';
    console.log(data.Search);
    movies.forEach((movie, index) => {
        const card = document.createElement('div');
        card.className ='card';
        card.innerHTML = `<img src="${movie.Poster}" alt="${movie.Title}" id="card_img" />
        <div class="title">
          <p id="card_number">${index+1}</p>
          <p id="card_title">${movie.Title}</p>
        </div>
        <div class="discription">
          <p id="date">Release :  ${movie.Year}</p>
          <p id="type">Categorie : ${movie.Type}</p>
        </div>
        `;
        render.append(card)
    });
    loader.style.display = "none"
}