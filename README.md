# V7M - Estruturação e Operação de Projetos

A V7M é uma organização voltada para a estruturação operacional e gestão de iniciativas em educação, tecnologia aplicada e engenharia, com presença física e estratégica no estado do Paraná.

## 🏛️ Identidade Visual: Modern Infrastructure

Este repositório implementa o DNA visual da V7M através do sistema **"Modern Infrastructure"**:
- **Paleta Slate Blue**: Profundidade e seriedade institucional (#0B0C0E).
- **Tipografia Técnica**: Headlines em Space Grotesk Bold e detalhes em IBM Plex Mono.
- **Textura Digital**: Grain texture overlay para acabamento técnico premium.

## 🚀 Como Executar

O projeto é conteinerizado para garantir paridade total entre os ambientes de desenvolvimento e produção.

### Requisitos
- Docker
- Docker Compose

### Execução Local
```bash
docker-compose up -d --build
```
Após o build, o site estará disponível em `http://localhost:3000`.

## 📁 Estrutura do Projeto

```text
├── src/                # Código-fonte da aplicação
│   ├── assets/         # Identidade visual e imagens (SVG, PNG)
│   ├── index.html      # Estrutura principal
│   ├── styles.css      # Design System & Modern Infrastructure
│   └── index.js        # Servidor de entrega (Express)
├── Dockerfile          # Build de produção (Node:20-alpine)
└── docker-compose.yml  # Orquestração e Healthchecks
```

## 🛠️ Operações Técnicas

- **Saúde do Serviço**: `/health` (Endpoint para monitoramento e Docker healthcheck).
- **Segurança**: Cabeçalhos `x-powered-by` desabilitados; execução em sandbox não-root (Docker).
- **CI/CD**: Integrado com Coolify para deploys automáticos via branch `main`.

---
© 2026 V7M Platform. Todos os direitos reservados.
