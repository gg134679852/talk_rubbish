const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const TalkRubbish = require('./talk_rubbish')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine','handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
  res.render('index')
})
app.post('/', (req, res) => {
  const options = req.body
  const talkRubbish = TalkRubbish(options)
  res.render('index', { talkRubbish })
})

app.listen(port,()=>{
  console.log(`localhost:${port}`)
}
)