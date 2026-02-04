
import { Game } from "./modules/gameClass.js"
import { getAllGames, postGame, deleteGame, toggleFav } from "./modules/gamebase.js"
import { azOrder, filterFavAll, firstOrLast } from "./modules/filter.js"
//flytta toggle och delete till gamebase
//lägg till ränsning till fav

const form = document.querySelector('form')
const gamesDiv = document.querySelector('#games')
const favDiv = document.querySelector('#fav')
const gameClass = document.querySelector('.gameClass')

const filterSelect = document.querySelector('#filter');
const sortSelect = document.querySelector('#sort');

let games = []



sortSelect.addEventListener('change', e => {
    console.log(sortSelect.value)

    const filGames = filterFavAll(games, filterSelect.value);
    const orderFunc = firstOrLast(filGames, sortSelect.value)
    const sortedGames = azOrder(orderFunc, sortSelect.value);
    gamesDiv.innerHTML = ' '
    sortedGames.forEach(sortedGame => sortedGame.showGame(gamesDiv))
})
filterSelect.addEventListener('change', e => {
    console.log(filterSelect.value)
    const filGames = filterFavAll(games, filterSelect.value);
    const sortedGames = azOrder(filGames, sortSelect.value);
    gamesDiv.innerHTML = ' '
    sortedGames.forEach(sortedGame => sortedGame.showGame(gamesDiv))
})



gameClass.addEventListener('click', async (e) => {


    if (e.target.classList.contains('delete')) {
        console.log('trash')

        const trash = e.target.closest('.delete');
        if (!trash) return;

        const gameEl = trash.closest('.game');
        const gameId = gameEl.dataset.id;

        await deleteGame(gameId);
        getAllGames()
            .then(addGame)
    }
    else if (e.target.classList.contains('heart')) {
        console.log('heart')

        const heart = e.target.closest('.heart');
        if (!heart) return;

        const heartEl = heart.closest('.game');
        const gameId = heartEl.dataset.id;
        const gameFav = heartEl.dataset.favorite
        // console.log(gameId)
        //console.log(typeof gameFav)
        await toggleFav(gameId, gameFav === 'true');

        getAllGames()
            .then(addGame)


    }
})



const addGame = data => {
    games = []
    for (const key in data) {
        games.push(new Game(key, data[key].favorite, data[key].Studio, data[key].Title))
    }
    console.log(games)
    gamesDiv.innerHTML = ''
    games.forEach(game => game.showGame(gamesDiv))

}

getAllGames()
    .then(addGame)
form.addEventListener('submit', async e => {
    e.preventDefault()
   
    const formData = new FormData(form)
    console.log(formData.get('Title'))
    console.log(formData.get('Studio'))
    const formObj = {}

    formData.forEach((value, key) => {

        formObj[key] = value;
    })
   
    console.log(formObj)
   await postGame(formObj)
    getAllGames()
        .then(addGame)

 form.reset()
})

