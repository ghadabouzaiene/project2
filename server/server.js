const express = require('express')
const dbConnect = require('./helpers/dbConnect')
const config = require('config')
const app = express()
const cors = require('cors')

const PORT = config.get('SERVER_CONFIG.PORT') || 5500
dbConnect()
//middlewares
app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use('/api/user', require('./routes/userRoutes'))


app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`)
})