#!/bin/bash
# ============================================
# SCRIPT: Git Push Landing Pages
# Repositório: https://github.com/vhvalentim/landing-pages.git
# ============================================

set -e

echo "🚀 Hermes Lab — Push Landing Pages para GitHub"
echo "================================================"
echo ""

# Verificar se git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Git não encontrado. Instale com: sudo apt install git"
    exit 1
fi

# Entrar na pasta das landing pages
cd /home/vitor/landing-pages

# Iniciar git se não existir
if [ ! -d ".git" ]; then
    echo "📁 Iniciando repositório git..."
    git init
    git branch -M main
else
    echo "✅ Repositório git já existe"
fi

# Configurar usuário (se não configurado)
if [ -z "$(git config user.name)" ]; then
    echo "⚙️ Configurando usuário git..."
    git config user.name "vhvalentim"
    git config user.email "vhvalentim@users.noreply.github.com"
fi

# Adicionar remote se não existir
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Conectando ao GitHub..."
    git remote add origin https://github.com/vhvalentim/landing-pages.git
else
    echo "✅ Remote já configurado"
fi

# Adicionar todos os arquivos
echo "📝 Adicionando arquivos..."
git add .

# Verificar se há mudanças
if git diff --cached --quiet; then
    echo "✅ Nenhuma mudança para commitar"
    exit 0
fi

# Criar commit
echo "💾 Criando commit..."
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
git commit -m "Landing pages Hermes Lab v$(date +%Y%m%d-%H%M%S) — $TIMESTAMP"

# Enviar para GitHub
echo "📤 Enviando para GitHub..."
git push -u origin main

echo ""
echo "✅ Concluído! Landing pages publicadas em:"
echo "   https://github.com/vhvalentim/landing-pages"
echo ""
echo "📌 Para deploy no Cloudflare Pages:"
echo "   1. Acesse: https://dash.cloudflare.com"
echo "   2. Workers & Pages → Create → Connect to Git"
echo "   3. Selecione: vhvalentim/landing-pages"
echo "   4. Build command: (vazio)"
echo "   5. Build output directory: /"
echo "   6. Deploy!"
