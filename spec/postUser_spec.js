var frisby = require('frisby');

frisby.create('Teste de POST com sucesso')
  .post('http://apifrisbypost.keeptesting.com.br/user',
  { email: 'stefanfk@gmail.com' },
  { json: true },
  { headers: {'Content-Type': 'x-www-form-urlencoded' }})
  .expectStatus(200)
  .expectJSON({
    email: 'stefanfk@gmail.com'
  })
  .inspectBody()
.toss();
