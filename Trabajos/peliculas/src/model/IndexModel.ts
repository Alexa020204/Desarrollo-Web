//Conseguir las películas
import MovieInterface from '../types/MovieInterface'

export default class IndexModel{
    constructor (){
        console.log('IndexModel')
    }

    // Como viene de afuera nos conectamos a una interface
    //La función que va a llamar 
    //await --> es un sistema que se debe esperar
    public async getMovies(): Promise<MovieInterface[]> {
        //reject --> devuelve si no logro obtener lo que se necesita
       return await new Promise ((resolve, reject) => {
        const response = fetch('https://imdb-top-100-movies.p.rapidapi.com/',{
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '96eac3d943msh39121728d11ddbep18fdc2jsn7ab6928a8cfe',
              'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }
        })

        response.then((data) => {
            resolve(data.json())
        }).catch((error) => {
            reject(error)
        })
       })
    }

       
    
}