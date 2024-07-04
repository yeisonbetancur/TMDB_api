import express from "express";
import { api } from "../api.js";

const moviesRouter = express.Router();

moviesRouter.get("/", async (req, res) => {
  const api_params = {
    query: req.query.query,
    page: req.query.page,
    language: req.query.language,
    genre: req.query.genre,
    region: req.query.region,
  };
  res.send(await datas.search({...api_params}))
});

class datas {
  static async search({ query, page, language, genre, region }) {

    try {const response = await api.get("/search/movie", {
      params:{
        page:page,
        language:language,
        query:query,
        region:region
      },
    });
    let finalData = response.data.results;
    
    console.log("nea")
    const genreList = await api.get("genre/movie/list")
    if (genre){
      console.log("entro")

      let genereList = genreList.data.genres.filter((genere) =>{
        if (genere.name == genre){
          return genere
        };
      })

      console.log(genereList[0].id)

      
     finalData = finalData.filter((movie)=>{
        console.log(movie)
        return movie.genre_ids.includes(genereList[0].id)
      })
      console.log ()
    }

    return finalData;
  }
  catch(e){
    console.log(e)
  }
}
}

export default moviesRouter 