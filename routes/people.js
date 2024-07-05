import express from "express";
import {api} from "../api.js"
import datas from "../api.js"

const peopleRouter = express.Router();

peopleRouter.get("/:id", async(req,res)=>{
  const id = req.params.id;
  try {
    console.log("entrop")
    const { data } = await api.get(`/person/${id}`);
    res.send(data);
  } catch (e) {
    res.status(404).send("people not found");
    return;
  }
})

peopleRouter.get("/", async (req, res) => {
  const api_params = {
    query: req.query.query,
    page: req.query.page,
    language: req.query.language,
    genre: req.query.genre,
    region: req.query.region,
    include_adult:req.query.include_adult
  };
  res.send(await datas.search({...api_params},"person"))
});
export default peopleRouter