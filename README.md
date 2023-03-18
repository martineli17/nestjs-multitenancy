# Multitancy

##### O cenário de uma aplicação ser multitenancy é a necessidade de atender vários clientes ao mesmo tempo.
##### Existem algumas abordagens para que uma aplicação consiga atender a este requisito, como: 
- criar banco de dados específico para cada cliente: essa abordagem tem alguns pontos negativos, como o de aumentar a complexibilidade de alterações no schema das tabelas.
- criar um deploy para cada cliente: essa abordagem tem alguns pontos negativos, como o de aumentar a complexibilidade de deploys e monitoramento.
- criar, em cada tabela, uma coluna que referencia a qual cliente aquele registro pertence : <b>ESSE É O CENÁRIO APRESENTADO NESTE PROJETO.</b>

## Exemplo de como implementar
1. Pode ser criada uma entidade base, que terá essa propriedade e, todas as demais entidades herdarão dessa. Assim, quando essa entidade for mapeada para o banco, a coluna referente ao cliente estará presente. Neste exemplo, não foi criada uma entidade base, sendo assim, a propriedade ficou diretamente na própria entidade.
   - [Entidade](https://github.com/martineli17/nestjs-multitenancy/blob/master/src/domain/entities/contract.entity.ts)

2. É necessário criar uma entidade que fará referência a sua tabela de clientes e, além disso, registrar os mesmos no banco de dados.
   - [Endpoint de criação de um cliente](https://github.com/martineli17/nestjs-multitenancy/blob/master/src/application/controllers/tenancy.controller.ts)
   
3. O ideal seria inserir o TenancyId diretamente no token de autenticação do usuário (JWT) e, a cada requisição, recuperar essa informação diretamente do Token. Porém, para simplificar este exemplo, o TenancyId é informado via Headers e, para obter essa informação a cada request, foi implementado um Middleware que recupera o ID informado no header e define no serviço de usuário.
   - [Middleware](https://github.com/martineli17/nestjs-multitenancy/blob/master/src/application/middlewares/request.middleware.ts)
   - [Service](https://github.com/martineli17/nestjs-multitenancy/blob/master/src/services/user.service.ts)

## Conclusão
##### A abordagem de apenas adicionar mais uma propriedade que faz referência a qual cliente aquele registro pertence é mais simples e menos complexo.
##### Assim, quando algum registro for adicionado ou retornado, basta informar o TenancyId e assim o usuário terá acesso a registros somente do cliente ao qual ele pertence.
