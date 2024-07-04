import express from 'express';
import  { api }  from './db.js';


const PORT = 3000;

const expressApp = express();

expressApp.use(express.json());

expressApp.get("/movie/:id", async (req, res) => { 
  const id = req.params.id
  try{
    const { data } = await api.get(`/movie/${id}`);
    res.send(data);
  }
  catch (e){
    console.log(e)
        res.status(404).send("Movie not found");
        return;
  }
  });
  expressApp.get("/movie/popular",async (req,res)=>{
    const {data} = await api.get ("/movie/popular")
    res.send(data)
  } )


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
 expressApp.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 