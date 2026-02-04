const url = 'https://isaks-bookbase-default-rtdb.europe-west1.firebasedatabase.app/games/'

export const getAllGames = async () => {

  const response = await fetch(url + '.json')
  if (!response.ok) throw new Error(response.status)

  const games = await response.json()
  return games

}

export const postGame = async game => {
  const newGame = { ...game, favorite: false };
  const options = {
    method: 'POST',
    body: JSON.stringify(newGame),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }
  const response = await fetch(url + '.json', options);
  if (!response.ok) throw new Error(response.status);
  const newGames = await response.json()
  return newGames
}

export const deleteGame = async (id) => {
  const options = {
    method: 'DELETE'
  }
  const response = await fetch(`${url}${id}.json`, options);
  if (!response.ok) throw new Error(response.status);
 // const deletedGame = await response.json()
     
}
export const toggleFav = async (id, favorite) => {

  const options = {
    method: 'PATCH',
    body: JSON.stringify({ favorite: !favorite }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }

  }
  const response = await fetch(`${url}${id}.json`, options);
  if (!response.ok) throw new Error(response.status);
  const data = await response.json()
  console.log(data)



}





