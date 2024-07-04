import express from "express";
import datas from "../api.js";

const tvRouter = express.Router();

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