<p align="center">
  <img src="public/favicon.png" alt="QR Massive logo" width="120" />
</p>

<h1 align="center">QR Massive</h1>

<p align="center">
  <strong>por Facundo Vergara</strong>
</p>

<p align="center">
  Generador de códigos QR personalizable — individual o masivo.<br/>
  Configura colores, formas, tamaño y descarga en PNG, SVG o WEBP.
</p>

<p align="center">
  <a href="https://qr-massive.fakumax.dev">🌐 Demo en vivo</a>
</p>

---

## ✨ Características

- **Modo individual** — Genera un QR con la URL o texto que quieras.
- **Modo masivo** — Genera múltiples QRs de una sola vez.
- **Personalización completa** — Estilo de puntos, esquinas, colores y tamaño.
- **Fondo transparente** — Opción para exportar sin fondo.
- **Múltiples formatos** — Descarga en PNG, SVG o WEBP.
- **Tema claro / oscuro** — Adaptable a tu preferencia.

## 🛠️ Tech Stack

| Tecnología | Uso |
|---|---|
| [React](https://react.dev) | UI |
| [Vite](https://vite.dev) | Bundler |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilos |
| [Radix UI](https://www.radix-ui.com) | Componentes accesibles |
| [qr-code-styling](https://github.com/nicross/qr-code-styling) | Motor de generación QR |
| [TypeScript](https://www.typescriptlang.org) | Tipado estático |

## 🚀 Inicio rápido

```bash
# Clonar el repositorio
git clone https://github.com/fakumax/qr-create-massive.git
cd qr-create-massive

# Instalar dependencias
pnpm install

# Iniciar en modo desarrollo
pnpm dev
```

## 📦 Build

```bash
pnpm build
```

Los archivos de producción se generan en `dist/`.

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── header.tsx
│   ├── qr-config-panel.tsx    # Panel de configuración
│   ├── qr-bulk-panel.tsx      # Panel de generación masiva
│   ├── qr-preview.tsx         # Vista previa del QR
│   ├── theme-toggle.tsx       # Toggle claro/oscuro
│   └── ui/                    # Componentes UI base
├── hooks/
│   └── use-qr-generator.ts   # Hook principal de generación
├── lib/
│   ├── theme.css              # Variables de tema
│   └── utils.ts               # Utilidades
├── App.tsx
└── main.tsx
```

## 📝 Licencia

MIT © [Facundo Vergara](https://www.fakumax.dev)
