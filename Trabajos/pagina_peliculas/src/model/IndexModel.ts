//Conseguir las películas
import MovieInterface from '../types/MovieInterface'
import { TrailerInterface } from '../types/TrailerInterface'

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
                'X-RapidAPI-Key': 'eca3618d41mshf99d75c05f98e4dp1c6859jsn490062084ac6',
                'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
              }
        });

        response.then((data) => {
            resolve(data.json());
        }).catch((error) => {
            reject(error);
        });
       });
    }

    public async getTrailer(id: number): Promise<TrailerInterface>{
        return await new Promise ((resolve, reject) =>{

            const response = fetch(`https://imdb-top-100-movies.p.rapidapi.com/top${id}`,{
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'eca3618d41mshf99d75c05f98e4dp1c6859jsn490062084ac6',
                    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
                  }
            });
       
            response.then((data) => {
                resolve(data.json());
            }).catch((error) =>{
                reject(error);
            });
        });

    }
                   
}

       
    
