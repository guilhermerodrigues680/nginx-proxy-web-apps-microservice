# NGINX Proxy Web Apps / Microservices

Este repositório contém um `docker-compose` que sobe 4 containers, sendo eles:

1. NGINX: Proxy
2. Microservice: API em Javascript usando Node.js
3. Microservice: API em Java usando Spring
4. NGINX: Site estático

Destes 4 containers, somente o `NGINX: Proxy` está acessivel externamente pela porta 8087.
Os demais containers são acessiveis somente pela rede interna `backend`

A configuração realizada no `NGINX: Proxy` faz com que ele tenha acesso a esses serviços da rede interna. E assim através das rotas abaixo conseguimos acessar cada serviço:

- http://localhost:8087/nodejs -> Acessa o Microservice Node.js
- http://localhost:8087/spring -> Acessa o Microservice Spring
- http://localhost:8087/site -> Acessa o site estático

Os microservices possuem somente a rota `/hello` implementada, assim para obter uma respostas, acesse:

- http://localhost:8087/nodejs/hello
- http://localhost:8087/spring/hello
- http://localhost:8087/site

## Subindo os containers

```sh
# Remova os containers e imagens anteriores
docker-compose down --rmi all

# Suba os containers
docker-compose up -d --build

# Observe se todos subiram
docker-compose ps
```