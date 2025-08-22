# LiveKit Voice Agent Embed App

A lightweight **voice AI agent embed widget** built with **Next.js 15 (App Router)** and powered by **[LiveKit](https://livekit.io/)**.  
Designed for easy integration into any website via a simple `<iframe>` — no video, just high-quality audio interaction.

---


## ✨ Features

- 🎤 **One-Click Voice Chat** – Start or end a voice conversation instantly.
- 🔊 **Audio-Only** – Minimal interface, no video, optimized for voice-first use cases.
- 🎨 **Modern Gradient UI** – Animated, interactive, and mobile-friendly.
- 🔄 **Auto Room & User IDs** – Each session uses a random room name to avoid reconnection issues.
- 📦 **Embed Anywhere** – Integrates into any site via an `<iframe>`.

---

## 🚀 How It Works

1. **Frontend** – A Next.js 15 (App Router) app serves the voice agent widget.
2. **Backend** – `/api/token` endpoint generates LiveKit access tokens using your API key/secret.
3. **LiveKit Server** – Handles real-time audio streaming between the user and the AI agent.
4. **Embed Mode** – Widget is placed inside an `<iframe>` for easy integration.

---

## 🛠️ Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/livekit-voice-agent-embed.git
cd livekit-voice-agent-embed
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Configure Environment Variables

Create a .env.local file:

```bash
NEXT_PUBLIC_LIVEKIT_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
```

### 4. Run Locally

```bash

pnpm run dev

```

## 🌐 Embedding the Widget

Once deployed, you can embed the voice agent on any website using:

```html
<iframe
  src="https://your-deployment-url/embed"
  style="width: 200px; height: 200px; border: none; background: transparent;"
></iframe>
```

## 🧠 Powered By

- Next.js 15 (App Router)

- LiveKit – Real-time audio infrastructure

- Framer Motion – UI animations

- Vercel – Hosting

## 📄 License

MIT License

## 💡 Use Cases

- Website AI assistants

- Voice-based customer support

- Audio-only interview bots

- Interactive marketing widgets
