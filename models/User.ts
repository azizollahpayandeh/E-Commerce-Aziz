const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    poassword: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "USER",
    },
    refreshToken: {
        type: String,
    },
    
})