# Tracker de Serviços de Máquina

App web minimalista para registar serviços de escavadora/máquina.
PWA instalável no telemóvel, self-hosted com Docker + Caddy.

---

## Funcionalidades

- Registo de serviços: data, cliente, horas, horímetro, valor, notas
- Horímetro: leitura manual (início/fim) + cálculo automático do delta
- Gestão de clientes (lista pré-definida com adição de novos)
- Resumo mensal com totais por cliente
- Exportação CSV
- PWA: instalável no Android/iOS
- Tema escuro, mobile-first

---

## Deploy

### 1. Pré-requisito: rede Docker partilhada com Caddy

Se ainda não existe:
```bash
docker network create caddy_net
```

### 2. Construir e arrancar

```bash
git clone <este-repo> maquina-tracker
cd maquina-tracker
docker compose up -d --build
```

A base de dados SQLite fica em `./data/tracker.db` (persistente).

### 3. Configurar o Caddy

No teu `Caddyfile`, adiciona:

```caddyfile
tracker.teu-dominio.duckdns.org {
    reverse_proxy maquina-tracker:3000
}
```

Se usas Caddy no mesmo `docker-compose.yml` ou em stack separada com a rede `caddy_net`, o nome `maquina-tracker` resolve automaticamente.

Depois: `docker exec caddy caddy reload --config /etc/caddy/Caddyfile`

### 4. Instalar como PWA no telemóvel

- Android (Chrome): abre o URL → menu ⋮ → "Adicionar ao ecrã inicial"
- iOS (Safari): abre o URL → partilhar → "Adicionar ao ecrã de início"

---

## Desenvolvimento local (sem Docker)

```bash
npm install
node server.js
# Abre http://localhost:3000
```

---

## Estrutura de ficheiros

```
maquina-tracker/
├── server.js          # Backend Express + SQLite
├── package.json
├── Dockerfile
├── docker-compose.yml
├── data/              # Base de dados (gerada automaticamente)
│   └── tracker.db
└── public/
    ├── index.html
    ├── style.css
    ├── app.js
    ├── manifest.json  # PWA manifest
    └── sw.js          # Service worker (cache offline)
```

---

## Exportação de dados

- **CSV**: botão "CSV" na vista Serviços, ou acede a `/api/export/csv`
- Campos exportados: Data, Início, Fim, Duração, Cliente, Descrição, Valor, Horímetro início/fim/delta

---

## Notas

- A base de dados é SQLite — faz backup copiando `data/tracker.db`
- Sem autenticação por omissão — usa o Caddy com `basicauth` se expuseres para fora da rede local
- Ícones PWA (icon-192.png, icon-512.png): gera com qualquer ferramenta de ícones PWA e coloca em `public/`
