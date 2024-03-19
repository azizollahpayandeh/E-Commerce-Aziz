const mongoose = require("mongoose")

const connectToDB = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            return true
        } else {
            await mongoose.connect(process.env.MONGO_URL)
            console.log("connect to data base successfully");
            
        }

    } catch (err) {
        console.log("DB connection has erro ->", err);
        
    }
};

export default connectToDB;