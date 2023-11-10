// imports
const express = require('express')
const app = express()
const PORT = 8000

// static files
app.use(express.static('public'))
app.use('/css', express.static(`${__dirname}/public/css`))
app.use('/js', express.static(`${__dirname}/public/js`))
app.use('/img', express.static(`${__dirname}/public/img`))
app.use('/fonts', express.static(`${__dirname}/public/fonts`))

// set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
	res.render('index')
})

app.listen(PORT, () => console.info(`listening on port ${PORT}`))
