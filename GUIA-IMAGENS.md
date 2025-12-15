# Fort Fert - Guia de Imagens

## 📸 Onde Colocar Suas Imagens Reais

### Estrutura de Pastas
Coloque suas imagens na pasta `public/images/`:

```
public/
  images/
    caminhao-pipa.jpg
    caminhao-esterco.jpg
    limpeza-fossa.jpg
    estufa-tomate.jpg
    tomates-frescos.jpg
    hero-caminhoes.jpg
    hero-tomates.jpg
```

### Imagens Necessárias

#### **Página Inicial** (`/`)
- **Card Caminhões**: `public/images/caminhao-servico.jpg` (1200x800px)
- **Card Tomates**: `public/images/tomates-estufa.jpg` (1200x800px)

#### **Página Caminhões** (`/caminhoes`)
- **Hero/Banner**: `public/images/hero-caminhoes.jpg` (1920x600px)
- **Caminhão-Pipa**: `public/images/caminhao-pipa.jpg` (800x600px)
- **Caminhão Esterco**: `public/images/caminhao-esterco.jpg` (800x600px)
- **Limpeza Fossas**: `public/images/limpeza-fossa.jpg` (800x600px)

#### **Página Tomates** (`/tomates`)
- **Hero/Banner**: `public/images/hero-tomates.jpg` (1920x600px)
- **Estufa**: `public/images/estufa-producao.jpg` (1200x900px)
- **Tomates Frescos**: `public/images/tomates-frescos.jpg` (800x800px)

### Como Adicionar as Imagens ao Código

Depois de colocar as imagens na pasta `public/images/`, você pode substituir os placeholders.

**Exemplo de como ficará no código:**

```tsx
// No lugar do placeholder:
<div className="absolute inset-0 bg-gradient-to-br from-zinc-300 to-zinc-400">
  <div className="text-8xl">🚛</div>
</div>

// Ficará assim com a imagem real:
<Image 
  src="/images/caminhao-pipa.jpg"
  alt="Caminhão-pipa fornecendo água"
  fill
  className="object-cover"
/>
```

### Dicas de Fotografia
- **Alta resolução**: Mínimo 1200px de largura
- **Boa iluminação**: Fotos tiradas durante o dia
- **Foco no serviço**: Mostre os caminhões, estufas e produtos
- **Profissionalismo**: Imagens limpas e bem enquadradas

## 🔄 Próximos Passos

1. Tire ou selecione fotos reais dos serviços
2. Coloque na pasta `public/images/`
3. Me avise que vou integrar todas as imagens no código automaticamente

---

**Número do WhatsApp**: Atualize em:
- `app/components/WhatsAppButton.tsx` (linha 13)
- `app/components/Header.tsx` (linha 18)
- `app/components/Footer.tsx` (linha 6)
