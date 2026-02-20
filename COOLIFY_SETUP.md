# Configuração Alpha6 no Coolify

## 1. Acessar Coolify
URL: http://m33.live:8000

## 2. Criar Projeto
1. Clique em **"Projects"** no menu lateral
2. Clique **"+ Add"** 
3. Nome: **"Alpha6"**
4. Description: **"Projeto Alpha6 - API Node.js"**

## 3. Criar Resource (Produção)

### 3.1 Novo Resource
1. Dentro do projeto Alpha6, clique **"+ New Resource"**
2. Selecione **"Docker Compose"**

### 3.2 Configurar Git
1. **Git Repository**: `https://github.com/maestri33/alpha6.git`
2. **Branch**: `main`
3. **Base Directory**: `/` (raiz)
4. **Docker Compose Location**: `docker-compose.yml`
5. Clique **"Continue"**

### 3.3 Configurar Domínio
1. **Domains**: `alpha6.m33.live`
2. **Port**: `3000`

### 3.4 Environment Variables
Adicione essas variáveis:

```
NODE_ENV=production
PORT=3000
DOMAIN=alpha6.m33.live
```

(Opcional, se precisar depois):
```
DATABASE_URL=postgresql://...
API_KEY=sua-chave-secreta
```

### 3.5 Deploy
Clique **"Deploy"**

## 4. Verificar Deploy

Aguarde alguns segundos e acesse:
- **Health Check**: https://alpha6.m33.live/health
- **API**: https://alpha6.m33.live/

## 5. Configurar Webhook (Auto-Deploy)

### No Coolify:
1. Vá no resource → **Settings** → **Webhooks**
2. Copie a **Webhook URL**

### No GitHub:
1. Repo Alpha6 → **Settings** → **Webhooks** → **Add webhook**
2. **Payload URL**: (cole a URL do Coolify)
3. **Content type**: `application/json`
4. **Events**: Just the push event
5. **Add webhook**

Pronto! Agora cada push na branch `main` faz deploy automático.

---

## Teste

No code-server, faça uma alteração e push:
```bash
echo "// Alteração teste" >> src/index.js
git add .
git commit -m "Teste auto-deploy"
git push origin main
```

Aguarde ~30 segundos e verifique se atualizou em https://alpha6.m33.live
