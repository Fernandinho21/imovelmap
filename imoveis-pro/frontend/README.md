# Imóveis Pro - Frontend

## Estrutura do Projeto

```
frontend/
├── index.html
├── css/
│   ├── main.css
│   ├── responsive.css
│   ├── components/
│   │   ├── header.css
│   │   ├── cards.css
│   │   ├── modal.css
│   │   ├── forms.css
│   │   ├── upload.css
│   │   └── filtros.css
│   └── pages/
│       ├── home.css
│       └── cadastro.css
├── js/
│   ├── app.js
│   ├── config.js
│   ├── modules/
│   │   ├── mapa.js
│   │   ├── validacao.js
│   │   ├── upload.js
│   │   ├── filtros.js
│   │   ├── busca.js
│   │   └── corretores.js
│   ├── services/
│   │   ├── api.js
│   │   └── imoveisService.js
│   └── utils/
│       ├── formatadores.js
│       ├── validadores.js
│       └── helpers.js
└── assets/
    ├── icons/
    └── images/
```

## Inicialização

1. Abra `index.html` em um navegador
2. Configure a URL da API em `js/config.js`
3. Os módulos serão carregados automaticamente

## Módulos

- **MapModule**: Controle de mapa com Leaflet
- **ValidacaoModule**: Validações de entrada
- **UploadModule**: Gerenciamento de upload de fotos
- **FilterModule**: Sistema de filtros
- **BuscaModule**: Busca de imóveis
- **CorreetoresModule**: Gerenciamento de corretores

## Utilidades

- **Formatadores**: Moeda, datas, telefone, etc.
- **Validadores**: Email, telefone, CPF, CNPJ, etc.
- **Helpers**: Funções auxiliares para DOM, storage, notificações
