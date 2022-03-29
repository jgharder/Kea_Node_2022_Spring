import { Router } from "express";

const router = Router();
const movies = [
    {id: 1, title: "Die Hard "},
    {id: 2, title: "Die Hard, Megahard"}
]

router.get("/moveies", (req, res)=>{
    res.send({data: movies})
});

export default router;
