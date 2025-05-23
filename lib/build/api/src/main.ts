import express from 'express'
import dotenv from 'dotenv'
import WPData from './lib/wp-data'

dotenv.config()

const app = express()
const port = process.env.PORT || 3002



app.get('/posts', (req, res) => {
  // fetch function of posts
  const post = new WPData();
  const postData = post.getPostById(1, '/wp-json/wp/v2/posts');
  res.send(postData);
})

app.get('/', (req, res) => {
  res.send('API is running 🚀')
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
