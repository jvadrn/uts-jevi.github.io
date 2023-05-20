var express = require('express')
var app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const e = require('express')
const { data } = require('jquery')
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('pages/index')
})

app.get('/acount', function (req, res) {
  res.render('pages/acount')
})
app.get('/transaksi', function (req, res) {
  res.render('pages/transaksi')
})
app.get('/kas-masuk', function (req, res) {
  res.render('pages/kas-masuk')
})
app.get('/kas-keluar', function (req, res) {
  res.render('pages/kas-keluar')
})

app.get('/laporan', function (req, res) {
  res.render('pages/laporan')
})

app.listen(8000)
console.log('succses run')
