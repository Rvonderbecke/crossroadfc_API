import express from 'express'
import 'dotenv/config';
import 'express-async-errors';
const app = express();

import connectDB from './db/connect.js';

//routers
import authRouter from './routes/authRoutes.js'
import taekwondoRouter from './routes/taekwondoRoutes.js'
//middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js';
import authenticateUser from './middleware/auth.js'

app.use(express.json());

app.get('/api/v1', (req, res) => {
    console.log('someone connected')
    res.json({ msg: 'Hello dear' });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/taekwondo',taekwondoRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 5000


const start = async () => {
    try {
        await connectDB(process.env.MONGODB)
        app.listen(port, () => {
            console.log(`Connected on PORT: ${port}`)
        })
        
    } catch (err) {
        console.log(err.message)
    }
}
start();