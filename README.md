# Alpha6

Projeto Alpha6 - V7M Platform

## 🚀 Desenvolvimento

**Code Server**: https://victor.alpha6.codesrv.m33.live  
**Senha**: `alpha6dev2026`

## 📚 Guias

- [Guia do Desenvolvedor](GUIA_DESENVOLVEDOR.md) - Como trabalhar no code-server
- [Cheat Sheet](CHEAT_SHEET.md) - Comandos rápidos de referência
- [Setup Coolify](GUIA_COOLIFY.md) - Configuração do deploy

## 🌐 Ambientes

| Ambiente | URL | Branch |
|----------|-----|--------|
| **Produção** | https://alpha6.m33.live | `main` |
| **Staging** | https://staging.alpha6.m33.live | `release/*` |
| **Dev** | https://dev.alpha6.m33.live | `dev/*` |

## 🔄 Fluxo de Trabalho

```bash
# 1. Entrar no projeto
cd /workspace

# 2. Atualizar
git pull origin main

# 3. Criar branch de trabalho
git checkout -b dev/minha-feature

# 4. Desenvolver (editar no VS Code)

# 5. Commitar
git add .
git commit -m "feat: descrição da mudança"

# 6. Push
git push origin dev/minha-feature

# 7. Deploy automático acontece!
```

## 📁 Estrutura

```
├── src/              # Código fonte
├── Dockerfile        # Build da imagem
└── docker-compose.yml # Config Docker
```

## 🆘 Suporte

- **Admin**: Victor (victormaestri@gmail.com)
- **Problemas?** Veja [Troubleshooting](GUIA_DESENVOLVEDOR.md#-troubleshooting)

---

## 💻 Para Novos Devs

1. Acesse o code-server
2. Leia o [Guia do Desenvolvedor](GUIA_DESENVOLVEDOR.md)
3. Consulte o [Cheat Sheet](CHEAT_SHEET.md) quando precisar

Bem-vindo ao time! 🎉
