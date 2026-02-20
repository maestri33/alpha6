# 🚀 CONFIGURAÇÃO ALPH6 NO COOLIFY - PASSO A PASSO

## ACESSO
URL: https://coolify.m33.live/
Login: v7maestri@gmail.com
Senha: Vvm1993!((#

---

## PASSO 1: Criar Projeto

1. Faça login no Coolify
2. No menu lateral, clique em **"Projects"**
3. Clique no botão **"+ Add"** (canto superior direito)
4. Preencha:
   - **Name**: `Alpha6`
   - **Description**: `Projeto Alpha6 API`
5. Clique **"Add Project"**

---

## PASSO 2: Criar Resource

1. Dentro do projeto Alpha6, clique em **"+ New Resource"**
2. Selecione **"Docker Compose"** (ícone azul)
3. Preencha:

### Git Repository
```
https://github.com/maestri33/alpha6.git
```

### Branch
```
main
```

### Base Directory
```
/
```

### Docker Compose Location
```
docker-compose.yml
```

4. Clique **"Continue"**

---

## PASSO 3: Configurar Domínio

1. **Domains**: 
```
alpha6.m33.live
```

2. **Port**:
```
3000
```

3. Clique **"Continue"**

---

## PASSO 4: Environment Variables

Clique em **"+ Add Environment Variable"** e adicione:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `PORT` | `3000` |
| `DOMAIN` | `alpha6.m33.live` |

Clique **"Continue"**

---

## PASSO 5: Deploy

1. Clique **"Deploy"**
2. Aguarde o build (2-3 minutos)

---

## PASSO 6: Verificar

Abra em outra aba:
- https://alpha6.m33.live/health

Deve retornar:
```json
{"status":"ok","time":"..."}
```

---

## PASSO 7: Webhook (Auto-Deploy)

### No Coolify:
1. Vá em **Settings** (do resource)
2. Clique **"Webhooks"**
3. Copie a URL mostrada (algo como:)
```
https://coolify.m33.live/webhooks/source/github/...
```

### No GitHub:
1. Acesse: https://github.com/maestri33/alpha6/settings/hooks
2. Clique **"Add webhook"**
3. **Payload URL**: (cole a URL do Coolify)
4. **Content type**: `application/json`
5. **Secret**: (deixe vazio)
6. **Events**: ✓ Just the push event
7. Clique **"Add webhook"**

---

## ✅ PRONTO!

Agora cada `git push` no code-server faz deploy automático em https://alpha6.m33.live

---

## TESTE

No code-server:
```bash
echo "// Deploy automático funcionando!" >> src/index.js
git add .
git commit -m "Teste deploy automático"
git push origin main
```

Aguarde 30 segundos e acesse https://alpha6.m33.live

**Status: 🏗️ Aguardando configuração no Coolify**
