const mongoose = require("mongoose")

const connected=mongoose.connect("mongodb+srv://hkale6888:harsh@cluster0.zubhrcj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

module.exports={connected}