import express from 'express';
import moviesRouter from './routes/movies.js';
import tvRouter from './routes/tv.js';
import peopleRouter from './routes/people.js';
import datas from './api.js';
import dotenv from "dotenv";

dotenv.config()

const PORT = process.env.PORT||3000;

const expressApp = express();

expressApp.use(express.json());

try{
  expressApp.listen(PORT,()=>
    console.log(`aca esta el servidor: ${PORT}`))
}catch(e){
  console.log(e)
}

  expressApp.use("/api/movies",moviesRouter)
/*   expressApp.use("/api/movies",moviesRouter) */

expressApp.use("/api/tv",tvRouter)

expressApp.use("/api/people",peopleRouter)

expressApp.get('/api/trending/:type', async (req, res) => {
  const media_type = req.params.type
  const time_window = req.query.time_window

  res.send(await datas.getTrending(time_window, media_type));

})

