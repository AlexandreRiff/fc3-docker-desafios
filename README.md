# Curso Full Cycle 3.0 | Docker

## Desafios

- Desafio Go
- Desafio Nginx com Node.js

## Desafio Go

### Enunciado

> Esse desafio é muito empolgante principalmente se você nunca trabalhou com a linguagem Go!
> Você terá que publicar uma imagem no docker hub. Quando executarmos: `docker run <seu-user>/fullcycle`.
> Temos que ter o seguinte resultado: **Full Cycle Rocks!!**
> Se você perceber, essa imagem apenas realiza um print da mensagem como resultado final, logo, vale a pena dar uma conferida no próprio site da Go Lang para aprender como fazer um _"olá mundo"_.
> Lembrando que a Go Lang possui imagens oficiais prontas, vale a pena consultar o Docker Hub.
> A imagem de nosso projeto Go precisa ter menos de **2MB =)**
> **Dica:** No vídeo de introdução sobre o Docker quando falamos sobre o sistema de arquivos em camadas, apresento uma imagem _"raiz"_, talvez seja uma boa utilizá-la.
> Suba o projeto em um repositório Git remoto e coloque o link da imagem que subiu no Docker Hub.
> Compartilhe o link do repositório do Git remoto para corrigirmos seu projeto.
> Divirta-se!

### Imagem Docker Hub

https://hub.docker.com/r/alexandreriff/fullcycle

### Uso

```sh
docker run alexandreriff/fullcycle
```

## Desafio Nginx com Node.js

### Enunciado

> Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.
> O retorno da aplicação node.js para o nginx deverá ser: `<h1>Full Cycle Rocks!</h1>` - Lista de nomes cadastrada no banco de dados.
> Gere o docker-compose de uma forma que basta apenas rodarmos:
> `docker-compose up -d` que tudo deverá estar funcionando e disponível na porta: **8080**. Não esqueça de colocar o volume na aplicação para o ambiente de desenvolvimento. Suba tudo em um repositório e faça a entrega. _A linguagem de programação para este desafio é Node/JavaScript._

### Instalação

1. Clone o repositório para a sua máquina local:

```shell
 git clone https://github.com/AlexandreRiff/fc3-docker-desafios.git
```

2. Navegue até o diretório do projeto:

```shell
cd fc3-docker-desafios
```

3. Construa e Suba os Containers:

```shell
cd desafio-nginx-nodejs && docker compose up -d --build
```

### Uso

- Acesse a aplicação no seu navegador:

```
http://localhost
```
