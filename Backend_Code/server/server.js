import express from 'express'
import cors from "cors";
const app= express();
app.use(cors({origin: 'http://localhost:5173'}))
app.get("/",(req,res)=>{
    res.send("server is ready");
}); 

app.get("/jokes",(req , res)=>{
const jokes=[{
    id:1,
    title:"jokes 1",
    content:"i'm rishu",
},{
    id:2,
    title:"jokes 1",
    content:"hahahah",
},{
    id:3,
    title:"jokes 1",
    content:"hahahah",
},{
    id:4,
    title:"jokes 1",
    content:"hahahah",
},
]
res.send(jokes);

})
const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(` http://localhost:${port}`);
})