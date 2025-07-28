const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors({origin: 'http://localhost:5173'}))
app.use(express.json())

app.get('/', (req, res) => {
  res.send(`Hello Maciej! App works on port ${port}.`)
})

app.get('/get_test', (req, res) => {
  res.send('This is a test "GET" endpoint.')
})

app.post('/post_test', (req, res) => {
  res.send('This is a test "POST" endpoint.')
})

app.post('/receive_and_return_test', (req, res) => {
  const message = req.body.message || 'No message received'
  res.send(`Received message: ${message}`)
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
