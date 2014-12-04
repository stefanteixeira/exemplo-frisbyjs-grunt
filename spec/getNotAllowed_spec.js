var frisby = require('frisby');

// HTTP Status 405: Method Not Allowed
// Veja a lista dos status aqui: http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
frisby.create('Verificar que GET nao eh permitido')
  .get('http://apifrisbypost.keeptesting.com.br/user')
  .expectStatus(405)
  .expectJSON({
    code: 'MethodNotAllowedError',
    message: 'GET is not allowed'
  })
.toss();
