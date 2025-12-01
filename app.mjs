import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/api/classData', (req, res) => {
  // Use an ES module-compatible URL to send the local JSON file
  res.sendFile(new URL('./stuData.json', import.meta.url))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})