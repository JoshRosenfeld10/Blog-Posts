import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import postRoutes from './routes/posts.ts'

const app = express();

app.use(bodyParser.json({ limit: "30mb"}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());
app.use(express.json())

// Every route inside postRoutes starts with /posts
app.use('/posts', postRoutes)

// Connect to database
const CONNECTION_URL = 'mongodb+srv://joshrosenfeld:joshrosenfeld123@cluster0.dhb97zt.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));
