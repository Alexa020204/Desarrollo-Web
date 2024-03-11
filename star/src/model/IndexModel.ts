import {TitleResults} from '../types/MoviesInterface'

export default class IndexModel{
    constructor (){
        console.log('IndexModel')
    }

    public async getMovies(): Promise<TitleResults[]>{
        return await new Promise ((resolve, reject)=>{
            const response =fetch('https://imdb146.p.rapidapi.com/v1/find/', {
                method: 'GET',
                params: {query:'starwars'},
                headers: {
                    'X-RapidAPI-Key': '96eac3d943msh39121728d11ddbep18fdc2jsn7ab6928a8cfe',
                    'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
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
  
   