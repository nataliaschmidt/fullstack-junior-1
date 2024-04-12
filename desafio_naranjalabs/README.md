# Desafio Técnico Full Stack Jr

Nome: Natália Klein Schmidt
<br>
Linkedin: https://www.linkedin.com/in/nataliakschmidt/
<br>
Github: https://github.com/nataliaschmidt
<br>
Telefone: (51) 98155-4523
<br>
Email: nataliak.schmidt@gmail.com

# Iniciando a aplicação
- Clone este repositório
```
git clone git@github.com:nataliaschmidt/fullstack-junior-1.git
```

- Entre na pasta do repositório que você acabou de clonar e navega até a pasta desafio_naranjalabs para rodar os comandos
```
cd desafio_naranjalabs

npm install
npm run dev
```

- A aplicação estará rodando na porta 3000


# Rotas Back end
### Para acessar as rotas, é necessário incluir um cabeçalho (headers) com a chave "secret" e o valor "naranja-labs". Caso contrário, a requisição retornará um status 401 e uma mensagem de não autorizado
```

{
    "message": "Unauthorized. Invalid credential."
}

```

## Rota /jobs
Retorna todos os trabalhos
```

[
    {
        "id": 1,
        "job": "Full Stack Developer",
        "level": "Junior",
        "status": "open"
    },
    {
        "id": 2,
        "job": "Frontend Developer",
        "level": "Junior",
        "status": "closed"
    },
    {
        "id": 3,
        "job": "Backend Developer",
        "level": "Junior",
        "status": "closed"
    },
    {
        "id": 4,
        "job": "Full Stack Developer",
        "level": "Senior",
        "status": "closed"
    }
]

```

## Rota /jobs?level=Junior
Retorna apenas os trabalho com o level de Junior
```

[
    {
        "id": 1,
        "job": "Full Stack Developer",
        "level": "Junior",
        "status": "open"
    },
    {
        "id": 2,
        "job": "Frontend Developer",
        "level": "Junior",
        "status": "closed"
    },
    {
        "id": 3,
        "job": "Backend Developer",
        "level": "Junior",
        "status": "closed"
    }
]

```

## Rota /job/[id]
Caso pesquise por um trabalho com o id inexistente, retorna uma mensagem de erro
```

{
    "message": "No job was found."
}

```

Quando o id é existente retorna o trabalho correspondente ao id da pesquisa
```
// /job/2

{
    "id": 2,
    "job": "Frontend Developer",
    "level": "Junior",
    "status": "closed"
}
```

## Rota /job/submit
Essa rota deverá receber um body seguindo o exemplo:
```
{
  "name": "Natália",
  "age": 25,
  "phone": "123456789",
  "state":"São Paulo",
  "city": "São Paulo"
}
```
A requisição sendo realizada com sucesso, receberá a mensagem:
```
{
    "message": "Thank you for your application, Natália"
}
```

Caso seja realizada uma requisição com o body vazio ou faltando campo, receberá a mensagem:
```
// Requisição
{}

// Retorno
{
    "message": "Incomplete request body. All fields are required."
}



// Requisição
{
  "name": "Candidato",
  "phone": "123456789",
  "state":"São Paulo",
  "city": "São Paulo"
}

// Retorno
{
    "message": "Field age is required"
}
```
