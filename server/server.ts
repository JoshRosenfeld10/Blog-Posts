import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb"}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());
app.use(express.json())

// Every route inside postRoutes starts with /posts
app.use('/posts', postRoutes)

app.use('/', (req, res) => {
    res.send("Posts API");
})

// Connect to database
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.CONNECTION_URL as string)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));
