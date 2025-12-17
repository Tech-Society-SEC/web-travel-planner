require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./db')
const authRoutes = require('./routes/auth')
const contactRoutes = require('./routes/contact')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/contact', contactRoutes)

const PORT = process.env.PORT || 5000

connectDB(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => console.log('Server running on port', PORT))
}).catch(err => {
  console.error('DB connect error', err)
  process.exit(1)
})
