import Express from "express"
import Cors from "cors"

const app = Express();
const port = 4000;
app.use(Cors());
app.use(Express.static('public'))
app.use('/images',Express.static('images'))

app.get("/",(req,res)=>{
    res.send("This is a hello world")
})

app.listen(port, ()=>{
    console.log("Listening on port "+port)
})
