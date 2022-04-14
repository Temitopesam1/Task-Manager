const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const app = express()
const connectDB = require("./config/db")
const notFound = require("./middleware/notFound")
const eHMw = require("./middleware/eHMw")


// parse requests of content-type - application/json (middleware)
app.use(express.json());
app.use(express.static("./public"))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));





// Routes
app.use("/api/v1/tasks", require("./routes/tasks"))

app.use(notFound)
app.use(eHMw)


const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.DATABASE_URI)
        app.listen(port, console.log(`server is listening in port ${port}...`))

    }
    catch (error){
        console.log(error)
    }
}
start()
