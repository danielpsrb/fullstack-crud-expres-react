import express from  'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import ProductRoute from './routes/ProductRoute.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(ProductRoute);

app.listen(5000, ()=> console.log('Server Up and Running on Port 5000'))