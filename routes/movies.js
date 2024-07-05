import express from "express";
import datas from "../api.js";
import { api } from "../api.js";


const moviesRouter = express.Router();

moviesRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
    try {
      const { data } = await api.get(`/movie/${id}`);
      res.send(data);
    } catch (e) {
      
      res.status(404).send("Movie not found");
      return;
    }
});

moviesRouter.get("/", async (req, res) => {
  const api_params = {
    query: req.query.query,
    page: req.query.page,
    language: req.query.language,
    genre: req.query.genre,
    region: req.query.region,
  };
  res.send(await datas.search({...api_params},"movie"))
});



export default moviesRouter 