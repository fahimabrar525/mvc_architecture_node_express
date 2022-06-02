const express = require("express");
const app = express();

const userRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route");
const PORT = 3000;

app.use(express.urlencoded({extended: true}));

app.use(userRouter);
app.use(productRouter);

app.use((req,res,next)=>{
    res.status(404).json({
        "message": "Invalid request"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})