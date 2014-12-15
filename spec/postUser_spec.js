var frisby = require('frisby');

frisby.create('Teste de POST sem sucesso')
  .post('http://apifrisbypost.keeptesting.com.br/user',
  { headers: {'Content-Type': 'x-www-form-urlencoded' }})
  .expectStatus(409)
  .expectJSON({
    code: 'InvalidArgument',
    message: 'Email precisa ser informado'
  })
.toss();
