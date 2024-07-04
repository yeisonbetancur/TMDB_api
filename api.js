import axios from 'axios';
import express from "express"

 export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'c2d4f11f761a019124d3e50af0d31580',
  },
});

class datas {
  static async search({ query, page, language, genre, region },media_type) {

    try {const response = await api.get(`/search/${media_type}`, {
      params:{
        page:page,
        language:language,
        query:query,
        region:region
      },
    });
    let finalData = response.data.results;
    
    console.log("nea")
    if (genre){
      const genreList = await api.get(`genre/${media_type}/list`)
      console.log("entro")

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
    console.log(e)
  }
}
}
export default datas