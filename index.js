const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors())

let allProducts = [
    {name:'Rice',price:45000,id:'1'},
    {name:'Kpomo',price:700,id:'2'},
    {name:'Beans',price:40000,id:'3'},
    {name:'Indomie',price:3700,id:'4'}
]

app.get('/products',(req,res)=>{
    res.send({allProducts})
})

app.get('/products/:id',(req,res)=>{
    console.log(req.params.id);
    let singleProduct = allProducts.find((product)=>product.id==req.params.id)
    // console.log(singleProduct);
    res.status(200).json({singleProduct})
})
app.listen(4900,()=> {
    console.log('app listening on PORT 4900');
})