const express = require('express');
const cors = require('cors');

const app = express();
const corsOptions = {
    origin : 'http://localhost:8081',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// app.use(costomMiddleware)

// //api
// app.get('/',(req, res)=>{
//     console.log('Home Page');
//     res.json({message:'hello world'})
// });

// app.get('/about',auth,(req, res, next)=>{
//     console.log('About Page');
//     res.json({message:'this about page'})
//     next();
    
// });


// routers
const router = require('./routes/productRoutes.js');
app.use('/api/products', router);   

// api
// app.get('/', (req, res) => {
//     res.json({
//         name: 'Basit',
//         email: 'basit@gmail.com',
//     })
// })

//port
const PORT = process.env.PORT || 8080;

//server
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})

// function costomMiddleware(req, res, next){
//     console.log("this is costom middleware");
//     next();
// }

// function auth(req, res, next){
//     if(req.query.admin==='true'){
//         next();
//     }
//     else {
//         res.send('Auth is required')
//     }
// }

