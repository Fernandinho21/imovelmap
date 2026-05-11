# Imóveis Pro

Plataforma completa de gestão imobiliária com frontend e backend separados.

## Estrutura do Projeto

```
imoveis-pro/
├── frontend/          # Interface web
├── backend/          # API REST
└── README.md
```

## Como Começar

### Backend

```bash
cd backend
npm install
npm run dev
```

Servidor rodará em `http://localhost:3000`

### Frontend

```bash
cd frontend
# Abrir index.html no navegador
```

Será feita requisição para `http://localhost:3000/api`

## Tecnologias

### Frontend
- HTML5, CSS3, JavaScript Vanilla
- Leaflet (Mapa)
- Fetch API

### Backend
- Node.js + Express
- MongoDB + Mongoose
- Multer (Upload de fotos)

## Funcionalidades

✅ Listagem de imóveis  
✅ Cadastro de imóveis  
✅ Upload de fotos  
✅ Filtros avançados  
✅ Busca de imóveis  
✅ Mapa interativo  
✅ Validação de dados  
✅ Responsivo para mobile  

## Endpoints da API

- `GET /api/imoveis` - Listar imóveis
- `GET /api/imoveis/:id` - Detalhes do imóvel
- `POST /api/imoveis` - Criar imóvel
- `PUT /api/imoveis/:id` - Atualizar imóvel
- `DELETE /api/imoveis/:id` - Deletar imóvel
- `GET /api/imoveis/busca?termo=valor` - Buscar imóveis
- `GET /health` - Status do servidor

## Licença

MIT
