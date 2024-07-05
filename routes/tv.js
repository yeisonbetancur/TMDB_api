import express from "express";
import datas from "../api.js";
import { api } from "../api.js";

const tvRouter = express.Router();

tvRouter.get("/:id", async(req,res)=>{
  const id = req.params.id;
  try {
    console.log("entrop")
    const { data } = await api.get(`/tv/${id}`);
    res.send(data);
  } catch (e) {
    res.status(404).send("Tv show not found");
    return;
  }
})

tvRouter.get("/", async (req, res) => {
  const api_params = {
    query: req.query.query,
    page: req.query.page,
    language: req.query.language,
    genre: req.query.genre,
    region: req.query.region,
  };
  res.send(await datas.search({...api_params},"tv"))
});

export default tvRouter