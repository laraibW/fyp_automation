import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import mainRoutes from './Routes/mainroutes.js';

const app = express();
//app.use(bodyParser.json({ limit: '30mb', extended: true }))
//app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/login',mainRoutes)
const CONNECTION_URL='mongodb+srv://fyp_Admin:432432qwe!@cluster0.b3yok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
