# 🚀 CI/CD Completo - Testes + Deploy Automático

## 🎯 Objetivo

```
Push código → GitHub Actions (testes) → Coolify (deploy)
                                    ↓
                              v7m.org no ar!
```

---

## 📋 O que foi configurado

### 1. GitHub Actions (`.github/workflows/ci-cd.yml`)

**Pipeline automática:**

| Evento | O que acontece |
|--------|---------------|
| Push em `dev/*` | Roda testes → Deploy dev |
| Push em `release/*` | Roda testes → Deploy staging |
| Push em `main` | Roda testes → Deploy produção (com aprovação) |
| Pull Request | Roda testes apenas |

**Jobs:**
- ✅ **test**: Instala dependências, roda linter, testes, build
- ✅ **deploy-dev**: Deploy automático para dev.v7m.org
- ✅ **deploy-staging**: Deploy automático para staging.v7m.org  
- ✅ **deploy-prod**: Deploy produção com aprovação manual

### 2. Testes Automatizados (`tests/api.test.js`)

Testes de API usando Jest + Supertest:
- Testa endpoint `/`
- Testa health check `/health`
- Gera relatório de cobertura

### 3. Scripts NPM (`package.json`)

```bash
npm test          # Roda testes
npm run test:watch # Roda em modo watch
npm run lint      # Verifica código
npm run lint:fix  # Corrige código
npm run build     # Build
```

---

## 🌐 Ambientes

| Ambiente | Domínio | Branch | Auto-deploy |
|----------|---------|--------|-------------|
| **Desenvolvimento** | `dev.alpha6.v7m.org` | `dev/*` | ✅ Sim |
| **Staging** | `staging.alpha6.v7m.org` | `release/*` | ✅ Sim |
| **Produção** | `alpha6.v7m.org` | `main` | ⚠️ Com aprovação |

---

## 🚀 Como usar

### 1. Subir código com testes

```bash
cd /workspace

# Criar branch de feature
git checkout -b dev/nova-feature

# Desenvolver...
echo "// Nova feature" >> src/index.js

# Rodar testes localmente (opcional)
npm install
npm test

# Commit e push
git add .
git commit -m "feat: implementa nova funcionalidade"
git push origin dev/nova-feature
```

### 2. Ver testes no GitHub

1. Acesse: https://github.com/maestri33/alpha6/actions
2. Veja os testes rodando automaticamente
3. Se passar → deploy automático em `dev.alpha6.v7m.org`

### 3. Staging (pré-produção)

```bash
# Quando estiver pronto para testar em staging
git checkout -b release/v1.0.0
git push origin release/v1.0.0

# Deploy automático em staging.alpha6.v7m.org
```

### 4. Produção

```bash
# Merge na main via Pull Request
git checkout main
git merge dev/nova-feature
git push origin main
```

1. Testes rodam
2. Deploy para produção **requer aprovação manual** no GitHub Actions
3. Acesse: https://alpha6.v7m.org

---

## 🔧 Configurar no GitHub

### 1. Habilitar Actions

O arquivo `.github/workflows/ci-cd.yml` já está no repo. O GitHub Actions já funciona automaticamente!

### 2. Configurar Environment Protection (Produção)

1. Acesse: https://github.com/maestri33/alpha6/settings/environments
2. Clique **"New environment"**
3. Name: `production`
4. ✅ **Require reviewers**: Adicione seu usuário
5. **Save protection rules**

Agora deploy em produção espera sua aprovação!

### 3. Secrets (se necessário)

Se precisar de variáveis secretas nos testes:

1. https://github.com/maestri33/alpha6/settings/secrets/actions
2. **New repository secret**
3. Adicione: `API_KEY`, `DATABASE_URL`, etc.

---

## 🌐 Configurar Domínios no Coolify

### 1. Ambiente DEV

No Coolify:
- **Project**: Alpha6
- **Resource**: alpha6-dev
- **Git**: `https://github.com/maestri33/alpha6.git`
- **Branch**: `dev/*`
- **Domain**: `dev.alpha6.v7m.org`
- **Port**: `3000`

### 2. Ambiente STAGING

- **Resource**: alpha6-staging
- **Branch**: `release/*`
- **Domain**: `staging.alpha6.v7m.org`

### 3. Ambiente PRODUÇÃO

- **Resource**: alpha6-prod
- **Branch**: `main`
- **Domain**: `alpha6.v7m.org`

---

## 📊 Ver tudo funcionando

### Testes
https://github.com/maestri33/alpha6/actions

### Ambientes
- Dev: https://dev.alpha6.v7m.org/health
- Staging: https://staging.alpha6.v7m.org/health
- Prod: https://alpha6.v7m.org/health

---

## 🧪 Rodar testes localmente

No code-server:

```bash
cd /workspace
npm install
npm test
```

Verá algo como:
```
 PASS  tests/api.test.js
  API Tests
    ✓ GET / deve retornar mensagem (23ms)
    ✓ GET /health deve retornar status ok (8ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
```

---

## 🎯 Fluxo Completo

```
1. Dev trabalha em code-server
   ↓
2. Push em dev/minha-feature
   ↓
3. GitHub Actions: Roda testes ✅
   ↓
4. Coolify: Deploy automático em dev.alpha6.v7m.org
   ↓
5. Testar em dev...
   ↓
6. Criar release/v1.0.0 → deploy staging
   ↓
7. Aprovar → Merge na main
   ↓
8. GitHub Actions: Testes + Aguarda aprovação
   ↓
9. Aprovar no GitHub → Deploy produção
   ↓
10. 🎉 alpha6.v7m.org no ar!
```

---

## ✅ Checklist para funcionar

- [x] GitHub Actions configurado
- [x] Testes criados
- [ ] Configurar environments no Coolify (dev/staging/prod)
- [ ] Configurar domínios (v7m.org)
- [ ] Configurar proteção de produção no GitHub
- [ ] Testar fluxo completo

---

**Próximo passo**: Configurar os 3 ambientes no Coolify com os domínios v7m.org!
