import mongoose from "mongoose";
import dotenv from 'dotenv';

// dotenv.config();

const connectDB = async () => {

    const URL = process.env.connection_string;

    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database connected Successfully!');
    } catch(err) {
        console.log('Connectivity Error:', err);
    }
}


export default connectDB;