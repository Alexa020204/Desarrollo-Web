import { MoviesStarwars, TitleResultsResult} from "../types/MoviesInterface"
export default class IndexModel{
    constructor (){
        console.log('IndexModel')
    }

        
   public async getMovies(): Promise<TitleResultsResult[]>{
    return await new Promise ((resolve, reject)=> {
        const response = fetch('https://imdb146.p.rapidapi.com/v1/find/?query=starwars',
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '96eac3d943msh39121728d11ddbep18fdc2jsn7ab6928a8cfe',
                'X-RapidAPI-Host': 'imdb146.p.rapidapi.com',
            }
            }
         );
        
        response
            .then(async (data)=> {
                const movies: Promise<MoviesStarwars> = await data.json();
                resolve((await movies).titleResults.results);
                
            })
            .catch ((error)=>  {
                reject(error);
            });
    });
   }

    


}

   