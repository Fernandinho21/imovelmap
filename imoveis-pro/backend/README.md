# Imóveis Pro - Backend

## Estrutura do Projeto

```
backend/
├── server.js                 # Arquivo principal do servidor
├── package.json              # Dependências do projeto
├── config/
│   └── database.js           # Configuração do MongoDB
├── models/
│   └── Imovel.js             # Schema do imóvel
├── controllers/
│   └── imovelController.js   # Lógica de negócio
├── routes/
│   └── imoveis.js            # Rotas da API
├── middleware/
│   ├── upload.js             # Configuração de upload
│   └── validacao.js          # Validações de entrada
└── uploads/
    └── imoveis/              # Pasta para armazenar fotos
```

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Produção

```bash
npm start
```

## Endpoints da API

### Listar Imóveis
- **GET** `/api/imoveis` - Listar todos os imóveis
- **Querystring**:
  - `tipo`: aluguel | venda
  - `categoria`: apartamento | casa | comercial | terreno | kitnet
  - `preco_min`: número
  - `preco_max`: número
  - `page`: número (padrão: 1)
  - `limit`: número (padrão: 12)

### Obter Imóvel
- **GET** `/api/imoveis/:id` - Obter detalhes de um imóvel

### Buscar Imóveis
- **GET** `/api/imoveis/busca?termo=valor` - Buscar por termo

### Criar Imóvel
- **POST** `/api/imoveis` - Criar novo imóvel
- **Body**: Dados do imóvel em JSON

### Atualizar Imóvel
- **PUT** `/api/imoveis/:id` - Atualizar um imóvel
- **Body**: Dados a atualizar

### Deletar Imóvel
- **DELETE** `/api/imoveis/:id` - Deletar um imóvel

## Variáveis de Ambiente

Crie um arquivo `.env` com:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/imoveis-pro
NODE_ENV=development
```
