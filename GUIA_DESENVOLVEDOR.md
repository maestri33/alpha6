# 🚀 Guia do Desenvolvedor - Code Server

## Acesso

**URL**: `https://seu-nome.projeto.codesrv.m33.live`

**Senha**: (fornecida pelo admin)

---

## 🎯 O que é isto?

Você está trabalhando dentro de um **VS Code** rodando no servidor. O código está em `/workspace` e é compartilhado com outros devs do mesmo projeto.

---

## 📁 Estrutura do Projeto

```
/workspace/                    ← Seu diretório de trabalho
├── src/                      ← Código fonte (edite aqui)
├── package.json             ← Dependências
├── docker-compose.yml       ← Config Docker
└── ...
```

> ⚠️ **IMPORTANTE**: Tudo em `/workspace` é persistido. Fora disso, é temporário.

---

## 🔄 Fluxo de Trabalho

### 1. Antes de começar
```bash
cd /workspace
git status                    # Verifique se está tudo certo
git pull origin main          # Sempre puxe as últimas alterações
```

### 2. Criar branch de trabalho
```bash
git checkout -b dev/minha-feature
# ou
git checkout -b fix/bug-corrigido
```

Padrões de nome:
- `dev/nome-da-feature` → Nova funcionalidade
- `fix/descricao-do-bug` → Correção
- `hotfix/urgente` → Correção urgente

### 3. Desenvolver
- Edite arquivos normalmente no VS Code
- Salve (Ctrl+S)
- Teste localmente se necessário

### 4. Commitar
```bash
git status                    # Veja o que mudou
git add .                     # Adicione todas alterações
# ou
git add src/arquivo.js        # Adicione arquivo específico

git commit -m "feat: descrição da alteração"
```

Padrão de commits:
```
feat: nova funcionalidade
fix: correção de bug
docs: documentação
refactor: refatoração
test: testes
```

### 5. Push para GitHub
```bash
git push origin dev/minha-feature
```

### 6. Deploy Automático
- Push em `dev/*` → Deploy em `dev.projeto.com`
- Push em `main` → Deploy em produção

---

## 🌐 URLs do Projeto

| Ambiente | URL | Como atualiza |
|----------|-----|---------------|
| **Dev** | `https://dev.projeto.com` | Push em `dev/*` |
| **Staging** | `https://staging.projeto.com` | Push em `release/*` |
| **Produção** | `https://projeto.com` | Merge em `main` |

---

## 🛠️ Comandos Úteis

### Git
```bash
git status                    # Status atual
git log --oneline -5          # Últimos commits
git diff                      # Ver alterações
git checkout .                # Descartar alterações
git branch -a                 # Listar branches
```

### Node.js (se for projeto Node)
```bash
npm install                   # Instalar dependências
npm run dev                   # Rodar localmente (se disponível)
npm test                      # Rodar testes
```

### Docker (dentro do code-server)
```bash
docker ps                     # Ver containers rodando
docker logs container-name    # Ver logs
```

---

## ⚠️ Boas Práticas

### ✅ FAÇA
- ✅ Sempre faça `git pull` antes de começar
- ✅ Trabalhe em branches separadas (`dev/sua-feature`)
- ✅ Commit mensagens descritivas
- ✅ Teste antes de fazer push
- ✅ Comunique-se com o time

### ❌ NÃO FAÇA
- ❌ Nunca edite diretamente na branch `main`
- ❌ Não commite `node_modules/`
- ❌ Não coloque senhas no código
- ❌ Não delete arquivos sem certeza
- ❌ Não faça `git push --force`

---

## 🔐 Segurança

- **Nunca** commite arquivos `.env`
- **Nunca** coloque senhas no código
- Secrets vão no Coolify (ambiente), não no GitHub
- Se expor acidentalmente uma chave, avise imediatamente

---

## 🐛 Troubleshooting

### "Permissão negada" ao salvar arquivo
```bash
# No terminal do VS Code:
sudo chown -R $(whoami) /workspace
```

### "Porta já em uso" ao rodar local
```bash
# Mude a porta no package.json ou .env
PORT=3001 npm run dev
```

### Git pede senha toda hora
```bash
# Configure cache de credenciais
git config --global credential.helper 'cache --timeout=3600'
```

### VS Code lento
- Feche abas não usadas
- Desabilite extensões pesadas
- Recarregue a página (F5)

### Container parou de responder
```bash
# No terminal:
docker restart code-projeto-seunome
# ou avise o admin
```

---

## 📞 Suporte

Problemas? Fale com:
- **Admin**: Victor (victormaestri@gmail.com)
- **Discord/Slack**: [canal do time]

---

## 📝 Checklist Diário

- [ ] Fiz `git pull` antes de começar
- [ ] Estou na branch correta
- [ ] Meus commits são descritivos
- [ ] Não commitei arquivos sensíveis
- [ ] Fiz push da minha branch

---

**Dúvidas?** Consulte este guia ou pergunte no chat!
