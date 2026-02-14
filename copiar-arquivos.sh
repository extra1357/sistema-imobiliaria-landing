#!/bin/bash

# 🚀 SCRIPT DE CÓPIA AUTOMÁTICA - SISTEMA PARA IMOBILIÁRIA
# Execute dentro da pasta sistema-imobiliaria (a nova criada com create-next-app)

# Cores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}🚀 COPIANDO ARQUIVOS DO PROJETO${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Verificar se estamos na pasta correta
if [ ! -f "package.json" ]; then
    echo -e "${YELLOW}⚠️  Erro: Execute este script dentro da pasta sistema-imobiliaria${NC}"
    exit 1
fi

# Definir caminho de origem (ajuste conforme necessário)
ORIGEM="../sistema-imobiliaria-landing"

if [ ! -d "$ORIGEM" ]; then
    echo -e "${YELLOW}⚠️  Pasta de origem não encontrada: $ORIGEM${NC}"
    echo -e "${YELLOW}   Ajuste a variável ORIGEM no script${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Pasta de origem encontrada${NC}"
echo ""

# 1. Copiar componentes landing
echo -e "${BLUE}📦 Copiando componentes da landing...${NC}"
mkdir -p src/components/landing

if [ -d "$ORIGEM/src/components" ]; then
    cp -r "$ORIGEM/src/components/Hero.tsx" src/components/landing/ 2>/dev/null
    cp -r "$ORIGEM/src/components/PainPoints.tsx" src/components/landing/ 2>/dev/null
    cp -r "$ORIGEM/src/components/Solution.tsx" src/components/landing/ 2>/dev/null
    cp -r "$ORIGEM/src/components/Differentials.tsx" src/components/landing/ 2>/dev/null
    cp -r "$ORIGEM/src/components/Benefits.tsx" src/components/landing/ 2>/dev/null
    cp -r "$ORIGEM/src/components/Proof.tsx" src/components/landing/ 2>/dev/null
    cp -r "$ORIGEM/src/components/Pricing.tsx" src/components/landing/ 2>/dev/null
    cp -r "$ORIGEM/src/components/FAQ.tsx" src/components/landing/ 2>/dev/null
    cp -r "$ORIGEM/src/components/FinalCTA.tsx" src/components/landing/ 2>/dev/null
    echo -e "${GREEN}✓ Componentes copiados${NC}"
else
    echo -e "${YELLOW}⚠️  Pasta de componentes não encontrada${NC}"
fi

# 2. Copiar componentes UI
echo -e "${BLUE}🎨 Copiando componentes UI...${NC}"
mkdir -p src/components/ui

if [ -d "$ORIGEM/src/components/ui" ]; then
    cp -r "$ORIGEM/src/components/ui/"* src/components/ui/ 2>/dev/null
    echo -e "${GREEN}✓ Componentes UI copiados${NC}"
fi

# 3. Copiar lib
echo -e "${BLUE}📚 Copiando utilities...${NC}"
mkdir -p src/lib

if [ -d "$ORIGEM/src/lib" ]; then
    cp -r "$ORIGEM/src/lib/"* src/lib/ 2>/dev/null
    echo -e "${GREEN}✓ Utilities copiadas${NC}"
fi

# 4. Copiar layout
echo -e "${BLUE}📄 Copiando layout...${NC}"
if [ -f "$ORIGEM/src/app/layout.tsx" ]; then
    cp "$ORIGEM/src/app/layout.tsx" src/app/
    echo -e "${GREEN}✓ Layout copiado${NC}"
fi

# 5. Copiar página principal
echo -e "${BLUE}📄 Copiando página sistema-para-imobiliaria...${NC}"
mkdir -p src/app/sistema-para-imobiliaria

if [ -f "$ORIGEM/src/app/sistema-para-imobiliaria/page.tsx" ]; then
    cp "$ORIGEM/src/app/sistema-para-imobiliaria/page.tsx" src/app/sistema-para-imobiliaria/
    echo -e "${GREEN}✓ Página principal copiada${NC}"
fi

# 6. Copiar blog
echo -e "${BLUE}📝 Copiando blog...${NC}"
if [ -d "$ORIGEM/src/app/blog" ]; then
    cp -r "$ORIGEM/src/app/blog" src/app/
    echo -e "${GREEN}✓ Blog copiado${NC}"
fi

# 7. Copiar SEO local (Osasco)
echo -e "${BLUE}🗺️  Copiando página SEO local...${NC}"
if [ -d "$ORIGEM/src/app/sistema-imobiliaria-osasco" ]; then
    cp -r "$ORIGEM/src/app/sistema-imobiliaria-osasco" src/app/
    echo -e "${GREEN}✓ Página SEO local copiada${NC}"
fi

# 8. Criar .env.local se não existir
echo -e "${BLUE}🔐 Configurando .env.local...${NC}"
if [ ! -f ".env.local" ]; then
    cat > .env.local << 'EOF'
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP=5511999999999
NEXT_PUBLIC_DOMAIN=https://seudominio.com
EOF
    echo -e "${GREEN}✓ .env.local criado${NC}"
    echo -e "${YELLOW}⚠️  IMPORTANTE: Edite .env.local com suas credenciais!${NC}"
else
    echo -e "${YELLOW}⚠️  .env.local já existe (não sobrescrito)${NC}"
fi

# 9. Verificar se lucide-react está instalado
echo ""
echo -e "${BLUE}📦 Verificando dependências...${NC}"
if grep -q "lucide-react" package.json; then
    echo -e "${GREEN}✓ lucide-react já instalado${NC}"
else
    echo -e "${YELLOW}⚠️  Instalando lucide-react...${NC}"
    npm install lucide-react
fi

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ CÓPIA CONCLUÍDA COM SUCESSO!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${BLUE}📋 Arquivos copiados para:${NC}"
echo "   ✓ src/components/landing/"
echo "   ✓ src/components/ui/"
echo "   ✓ src/lib/"
echo "   ✓ src/app/layout.tsx"
echo "   ✓ src/app/sistema-para-imobiliaria/"
echo "   ✓ src/app/blog/"
echo "   ✓ src/app/sistema-imobiliaria-osasco/"
echo ""
echo -e "${BLUE}📝 Próximos passos:${NC}"
echo "   1. Editar .env.local com suas credenciais"
echo "   2. Executar: npm run dev"
echo "   3. Acessar: http://localhost:3000/sistema-para-imobiliaria"
echo ""
echo -e "${GREEN}🎉 Bom desenvolvimento!${NC}"
echo ""
