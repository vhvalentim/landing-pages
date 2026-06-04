# 🎨 GUIA DE IMAGENS PARA LANDING PAGES

**Os checkpoints e LoRAs que existem de verdade no Nordy.**


## OS 3 CHECKPOINTS QUE EXISTEM NO NORDY

Estes são os arquivos `.safetensors` que o Nordy carrega. NÃO existe "SDXL 1.0 genérico".

| \# | Checkpoint (nome real) | Tipo | Estilo | Melhor para |
| - | - | - | - | - |
| 1 | **juggernautXL\_v9Rdphoto2Lightning.safetensors** | SDXL | Realista, rápido | Fotos corporativas, produtos, backgrounds |
| 2 | **cyberrealisticPony\_v130.safetensors** | Pony | Realista + anime | Poses, expressões, pessoas |
| 3 | **flux1-dev-fp8.safetensors** | Flux | Ultra-realista | Máxima qualidade, sem negative prompt |


**Para landing pages corporativas:** Use o **juggernautXL** (mais rápido) ou **flux1-dev** (melhor qualidade).


## OS 3 LoRAs QUE FUNCIONAM PARA IMAGENS

Estes LoRAs estão disponíveis no Nordy e melhoram os resultados:

| \# | LoRA (nome real) | Para que serve | Peso |
| - | - | - | - |
| 1 | **cinematic\_warm\_light** | Tons quentes, iluminação dourada | 0.5 a 0.8 |
| 2 | **add-detail\_xl** | Aumentar detalhes na imagem | 0.4 a 0.6 |
| 3 | **detail\_tweaker\_illustrios** | Refinar detalhes (funciona melhor com Illustrious) | 0.3 a 0.5 |



## COMBINAR CHECKPOINT + LoRA

### Combinação 1: CORPORATIVO (azul)

```
Checkpoint: juggernautXL\_v9Rdphoto2Lightning.safetensors  
LoRA: NENHUM (estilo limpo, sem LoRA)  
Prompt: masterpiece, best quality, 4k,  
  abstract blue technology background, glowing network nodes,  
  cobalt blue connections, corporate style, clean minimalist design,  
  soft blue lighting, professional, no text, no letters  
Negative: text, letters, words, watermark, blurry, low quality
```

### Combinação 2: DETECTIVE (verde + azul)

```
Checkpoint: juggernautXL\_v9Rdphoto2Lightning.safetensors  
LoRA: add-detail\_xl (0.5)  
Prompt: masterpiece, best quality, 4k,  
  magnifying glass over digital data streams,  
  emerald green and cobalt blue neon elements,  
  dark background, OSINT investigation concept,  
  technology illustration, dramatic lighting, no text, no letters  
Negative: text, letters, words, watermark, blurry, low quality
```

### Combinação 3: TERAPIA (roxo)

```
Checkpoint: flux1-dev-fp8.safetensors  
LoRA: NENHUM (Flux não precisa)  
Prompt: A calm therapy room with soft lavender ambient lighting,  
  minimal modern furniture, abstract mind visualization with  
  neural connections, soothing atmosphere, wellness concept,  
  professional photography, no text  
Negative: (Flux ignora negative)
```

### Combinação 4: PENTEST (vermelho)

```
Checkpoint: cyberrealisticPony\_v130.safetensors  
LoRA: cinematic\_warm\_light (0.6)  
Prompt: masterpiece, best quality, 4k,  
  cybersecurity padlock with crimson red neon glow,  
  dark navy background, digital code scrolling,  
  ethical hacking concept, dramatic red lighting,  
  professional technology illustration, no text, no letters  
Negative: text, letters, words, watermark, blurry, low quality

text, letters, words, watermark, blurry, low quality
```

## COMO USAR NO NORDY

### Passo 1: Abra o Nordy

### Passo 2: Selecione o Checkpoint

No painel esquerdo, procure o campo "Checkpoint" ou "Model" e selecione:

- `juggernautXL\_v9Rdphoto2Lightning.safetensors` (para fotos rápidas)

- `cyberrealisticPony\_v130.safetensors` (para pessoas/poses)

- `flux1-dev-fp8.safetensors` (para máxima qualidade)

### Passo 3: Adicione o LoRA (opcional)

Se quiser usar um LoRA, procure o campo "LoRA" e selecione:

- `cinematic\_warm\_light` (tons quentes)

- `add-detail\_xl` (mais detalhes)

- Ajuste o peso para 0.4-0.6

### Passo 4: Cole o Prompt

Copie o prompt da combinação escolhida e cole na caixa de "Prompt"

### Passo 5: Cole o Negative Prompt

Se estiver usando SDXL ou Pony, cole o negative. Se estiver usando Flux, deixe vazio.

### Passo 6: Ajuste os parâmetros

- **Steps:** 30 (SDXL/Pony) ou 20 (Flux)

- **CFG:** 7 (SDXL/Pony) ou 1.0 (Flux)

- **Resolução:** 1024x1024

### Passo 7: Gere e baixe

Clique em "Generate", aguarde, e baixe a imagem.


## ONDE COLOCAR NO HTML

### Estrutura

```
landing-pages/  
├── homepage/  
│   ├── index.html  
│   ├── hero.jpg    ← imagem gerada  
│   └── style.css  
├── investigacao/  
├── lgpd/  
├── terapia/  
├── n8n/  
├── ecommerce/  
└── pentest/
```

### No HTML

```
\<section class="hero"\>  
  \<img src="hero.jpg" alt="Descrição" loading="lazy"\>  
  \<div class="hero-text"\>  
    \<h1\>Título\</h1\>  
    \<p\>Subtítulo\</p\>  
  \</div\>  
\</section\>
```

### No CSS

```
.hero \{ position: relative; width: 100%; min-height: 100vh; \}  
.hero img \{ width: 100%; height: 100%; object-fit: cover; \}  
.hero-text \{  
  position: absolute; top: 50%; left: 50%;  
  transform: translate(-50%, -50%);  
  color: white; background: rgba(0,0,0,0.6);  
  padding: 2rem; border-radius: 12px;  
\}
```

### Subir pro Git

```
cwebp -q 80 hero.jpg -o hero.webp  
git add . && git commit -m "feat: hero image" && git push
```


## CORES: NÃO USE HEX

O modelo não entende `\#ef4444`. Use nomes em inglês:

| Hex | Escreva |
| - | - |
| \#ef4444 | red, crimson |
| \#2563eb | blue, cobalt |
| \#10b981 | green, emerald |
| \#8b5cf6 | purple, violet |
| \#f97316 | orange, amber |



**v3.1 — Neo, Time Hermes — 04/06/2026**


## RESOLUÇÕES CORRETAS

Cada checkpoint gera em uma resolução diferente. O Nordy faz upscale automático.

| Checkpoint | Gera em | Upscale | Resultado Final |
| - | - | - | - |
| juggernautXL | 880x1136 | 4x (ClearReality) | 3520x4544 |
| cyberrealisticPony | 880x1136 | 4x (ClearReality) | 3520x4544 |
| flux1-dev | 1024x1024 | NENHUM | 1024x1024 |


### Para cada uso, recorte a imagem gerada:

| Uso | Resolução | Proporção | Como cortar |
| - | - | - | - |
| Hero desktop | 1920x1080 | 16:9 | Corte central da imagem |
| Hero mobile | 1080x1920 | 9:16 | Corte vertical central |
| Social media | 1200x630 | 1.91:1 | Corte central horizontal |
| Thumbnail | 400x300 | 4:3 | Corte central |


### Comandos para redimensionar:

```
\# Hero desktop (16:9)  
convert hero\_original.jpg -gravity center -crop 3520x1980+0+0 +repage -resize 1920x1080 hero-desktop.jpg  
  
\# Hero mobile (9:16)  
convert hero\_original.jpg -gravity center -crop 2016x4544+0+0 +repage -resize 1080x1920 hero-mobile.jpg  
  
\# Social media (1.91:1)  
convert hero\_original.jpg -gravity center -crop 3520x1844+0+0 +repage -resize 1200x630 hero-social.jpg
```

