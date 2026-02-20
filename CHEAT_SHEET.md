# ⚡ Cheat Sheet - Code Server

## Acesso
🌐 `https://SEU-NOME.PROJETO.codesrv.m33.live`  
🔑 Senha: `______________`

---

## 🚀 Fluxo Rápido

```bash
# 1. Entrar no diretório
cd /workspace

# 2. Atualizar código
git pull origin main

# 3. Criar branch
git checkout -b dev/minha-feature

# 4. Editar arquivos (no VS Code)

# 5. Commitar
git add .
git commit -m "feat: descrição"

# 6. Push
git push origin dev/minha-feature
```

---

## 📋 Comandos Essenciais

| Ação | Comando |
|------|---------|
| Ver status | `git status` |
| Ver logs | `git log --oneline -5` |
| Trocar branch | `git checkout nome-branch` |
| Criar branch | `git checkout -b dev/nova` |
| Ver branches | `git branch -a` |
| Ver diferenças | `git diff` |
| Descartar mudanças | `git checkout .` |

---

## 🌐 URLs do Projeto

| Ambiente | URL |
|----------|-----|
| Produção | `https://projeto.com` |
| Staging | `https://staging.projeto.com` |
| Dev | `https://dev.projeto.com` |

---

## ⚠️ Regras de Ouro

1. ✅ **Sempre** faça `git pull` antes de começar
2. ✅ Trabalhe em `dev/*`, **nunca** em `main`
3. ✅ Commits descritivos: `feat:`, `fix:`, `docs:`
4. ❌ **NUNCA** commite senhas ou `.env`
5. ❌ **NUNCA** faça `git push --force`

---

## 🆘 Problemas Comuns

**VS Code travou?**  
→ F5 (recarregar página)

**Sem permissão?**  
→ `sudo chown -R $(whoami) /workspace`

**Esqueci a senha Git?**  
→ Use token do GitHub

**Container caiu?**  
→ Avisar admin

---

**Suporte:** victormaestri@gmail.com
