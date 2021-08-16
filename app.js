const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')
const HmacSHA256 = require('crypto-js/hmac-sha256')

app.use(express.static('public'))
app.use(express.json())

const CAPTCHA_ID= '[Enter your CAPTCHA ID]'
const CAPTCHA_KEY = '[Enter your CAPTCHA KEY]'

app.get('/', (req, res) => {
  res.render('index.html')
})

app.post('/login', async (req, res) => {
})

app.listen(port, () => {
  console.log(`GeeTest demo listening at http://localhost:${port}`)
})
