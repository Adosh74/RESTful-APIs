import dotenv from 'dotenv';


dotenv.config();

const {
    PORT,
    MONGO_URI,
} = process.env;


export default {
    port: PORT,
    db_uri: MONGO_URI,
}