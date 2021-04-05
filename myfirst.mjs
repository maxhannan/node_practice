import http from 'http'
import uc from 'upper-case' 
import events from 'events'

import myDateTime from './myDateTime.mjs'

http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello Max </h1>')
  res.write(`<h3>The Date and time are ${myDateTime()}</h3>`)
  res.write(uc.upperCase("Hello World"));
  res.end()
}).listen(8080)
