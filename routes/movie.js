import express from "express";
import  {api}  from "../api.js";

const movieRouter = express.Router();

movieRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { data } = await api.get(`/movie/${id}`);
    res.send(data);
  } catch (e) {
    console.log(e);
    res.status(404).send("Movie not found");
    return;
  }
});

movieRouter.get("/popular", async (req, res) => {
  const { data } = await api.get("/movie/popular");
  res.send(data);
});

export default movieRouter;

