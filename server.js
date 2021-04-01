const http = require ('http'); // CRIA O HTTP
const app = require ('./app'); // PEGA O APP
const port = process.env.PORT || 3000; // DEFINE A PORTA PADRAO

const server = http.createServer(app);//CRIAR O SERVER E PASSA O APP
server.listen(port);

