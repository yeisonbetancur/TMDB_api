import axios from 'axios';
import express from "express"
import dotenv from "dotenv";

dotenv.config();

const KEY=process.env.KEY


 export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: KEY,
  },
});
class datas {
  static async search({ query, page, language, genre, region, include_adult = false },media_type) {

    try {const response = await api.get(`/search/${media_type}`, {
      params:{
        page:page,
        language:language,
        query:query,
        region:region,
        include_adult:include_adult
      },
    });
    let finalData = response.data.results;

    if (genre){
      const genreList = await api.get(`genre/${media_type}/list`)

      let genereList = genreList.data.genres.filter((genere) =>{
        if (genere.name == genre){
          return genere
        };
      })

      console.log(genereList[0].id)

      
     finalData = finalData.filter((content)=>{
        console.log(content)
        return content.genre_ids.includes(genereList[0].id)
      })
    }

    return finalData;
  }
  catch(e){
    return `Error en la petición, codigo ${e.response.status}`
  }
}

static async getTrending(time_window="day", media_type) {
  try {
    console.log("CUELA")
    const response = await api.get(`/trending/${media_type}/${time_window}`);
      return response.data;
  }
  catch (e) { return `Error en la petición, codigo ${e.response.status}`; }

}
}
export default datas