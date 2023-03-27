import express from 'express';
import routes from './src/routes/crmRoute.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config.js';

const app = express();
const PORT = config.port;
mongoose.set('strictQuery', true);
/// mongoose connection ///
// mongoose.Promise = global.Promise;
mongoose.connect(config.db_uri,{
    useNewUrlParser: true
}, err => {
    if (err){
        console.error(err);
    }
    console.info(`database connected successfully`);
});


/// body-parser setup ///
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

routes(app);
app.get('/', (req, res) => {
    res.send(`<h3>Node and express server is running on prot:${PORT}</h3>`);
});

app.listen(PORT, () => {
    console.log(`server is running go to http://localhost:${PORT}`);
});