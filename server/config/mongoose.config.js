const mongoose = require("mongoose");
const dbName = "PetShelter";

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log(`Connected to ${dbName} database!`))
.catch((err)=>console.log("Something went wrong when connecting to your database", err));