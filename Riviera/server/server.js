const express = require('express')
const mongoose = require('mongoose')
const cors = require ('cors')
require('dotenv').config()

// creates an app object that has it's own methods such as app. get() and app. post() that allow you to register route handlers
const app = express()

//middleware
app.use(cors())
app.use(express.json())

//import routes
const menuCategoryRoutes = require('./routes/menuCategory')
const menuContentRoutes = require('./routes/menuContent')
const reservationRoutes = require('./routes/reservation')

//use routes
app.use('/api', menuCategoryRoutes, menuContentRoutes, reservationRoutes)

//define server port
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

//database connection
mongoose.connect(process.env.DATABASE)
.then(() => console.log('DB Connected'))
.catch(err => {
    console.log(`DB Connection Error: ${err.message}`)
})