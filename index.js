import express from 'express';
import movieRouter from './routes/movie.js';
import moviesRouter from './routes/movies.js';
import {api} from "./api.js"

const PORT = 3000;

const expressApp = express();

expressApp.use(express.json());

try{
  expressApp.use("/movie",movieRouter)
  expressApp.listen(PORT,()=>
    console.log(`aca esta el servidor: ${PORT}`))
}catch(e){
  console.log(e)
}
expressApp.get("/moviees/genre", async (req,res)=>{
  const genreList = await api.get("genre/movie/list")
  res.send(genreList.data.genres)
})

  expressApp.use("/movies",moviesRouter)




//  expressApp.get("/movie/:id", (req, res) => {
//     const movie = .find((movie) => movie.id === req.params.id);
//     if (!movie) {
//         res.status(404).send("User not found");
//         return;
//     }
//     console.log(req.params.id);
//     res.send(movie);
// });
/*  
expressApp.post("/accounts", (req, res) => {
  const {guid,name} = req.body;

  if (!guid || !name) return res.status(400).send();

  const user = db.find((user) => user.guid === guid);

  if (user) return res.status(409).send("User already exists");

  db.push({guid,name});
  return res.send()
});

expressApp.patch("accounts/:guid", (req, res) => {
  const {guid} = req.params;

  const {name}=req.body;

  if (!name) return res.state(400).send()

  const user = db.find((user) => user.guid === guid);

  if (!user) res.status(404).send("User not found");

  user.name = name;

  return res.send();
});

expressApp.delete("/accounts/:guid", (req, res) => {
  const {guid} = req.params;
  const userIndex = db.findIndex((user) => user.guid === guid);

  if (userIndex === -1) res.status(404).send("User not found");
  db.splice(userIndex, 1);
  res.send("User deleted");
});


 */
/*  expressApp.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});  */