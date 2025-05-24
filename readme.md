# 🥝 KiwiPress

## The Headless WordPress Integration You Always Wanted

KiwiPress is a powerful developer-first toolkit for building modern web apps powered by WordPress — without ever touching PHP or the WP admin UI again (unless you want to). Designed for full-stack developers who love TypeScript, Vite, React, and REST APIs, KiwiPress makes WordPress feel like a modern backend — not a 2003 CMS.

---

## ⚡ What Is KiwiPress?

KiwiPress turns your WordPress site into a clean, organized, fully decoupled data engine — and gives you tools to build on top of it with ease.

- 🧠 **Simple API Wrappers** for posts, pages, menus, comments, categories, and users.
- ⚙️ **Auto-sanitized REST calls** with fallback support, error handling, and JSON parsing built-in.
- 🛠 **Compositional Utilities** like `WPData`, `WPCreate`, and more — to read, write, and manage content from React/Node.
- 🔌 **Works with any theme or install** — just enable permalinks and go.

---

## 📦 Two Ways to Use KiwiPress

KiwiPress comes in two flavors — depending on how deep you want to go:

### 1. 🧰 **Full KiwiPress Stack**

> A complete headless WordPress build system.

This full project setup includes:

- 🐳 **Container builds** for admin, frontend, backend, and WordPress
- 📦 The full `kiwipress-core` library
- 🧩 A headless WordPress plugin that strips out traditional UI
- 💻 An optional **PHP rewrite** of WordPress for minimal API-only deployments
- 🎨 Free themes designed specifically for headless architecture

> ✅ Ideal for developers who want a fully contained dev stack with both back-end and front-end control.

---

### 2. 📦 `kiwipress-core` (Standalone Library)

> The lightweight, raw TypeScript library version of KiwiPress.

Includes:

- `WPData` — Pull posts, pages, users, comments from the WP REST API
- `WPCreate` — *(Coming soon)* Easily create or update content
- 🧩 Simple importable modules — use only what you need
- 🧠 Designed for use with `ts-node`, Vite, Express, Next.js, and more

```bash
npm install github:citrusworx/kiwipress#main:core
````

> ✅ Great for building your own headless apps with WordPress as the backend.

---

## 🔧 Example Usage

```ts
import { WPData } from '@kiwipress/core/wp-data';

const wp = new WPData();

const post = await wp.getPostBySlug(
  'https://my-site.com/wp-json/wp/v2/posts?slug=hello-world'
);

console.log(post.title); // Hello World
```

---

## 📚 What's Included?

| Module     | Description                                      |
| ---------- | ------------------------------------------------ |
| `WPData`   | Read posts, pages, users, comments via REST API  |
| `WPCreate` | Create or update WordPress content (coming soon) |
| `WPAdmin`  | Optional admin-focused utilities                 |
| `utils`    | Helper methods for parsing, formatting, etc.     |

---

## 🏗 Ideal Use Cases

- Headless WordPress apps
- Static site generators using WP as a backend
- React/Vite frontends consuming WordPress data
- Custom admin panels that bypass wp-admin entirely
- JAMstack setups where WordPress is the content layer

---

## 🔮 Coming Soon

- 🔐 JWT & application password auth support
- 📂 Media & file management
- 🧩 Plugin-aware WP module integrations
- 🧠 Smart caching with `Pomelo`
- 🎨 Theme layer hooks for Juice UI integration

---

## 🤝 Contributing

KiwiPress is part of the **Citrusworx Ecosystem** and plays nicely with:

- 🧩 [`Juice`](https://github.com/citrusworx/juice) – UI component library
- 🍇 [`Nectarine`](https://github.com/citrusworx/nectarine) – API & schema framework
- 🍊 [`Grapevine`](https://github.com/citrusworx/grapevine) – Infrastructure as Code

Contributions, ideas, and pull requests are welcome.
See [`CONTRIBUTING.md`](CONTRIBUTING.md) to get started.

---

## 🧃 Built With Love by [Citrusworx](https://github.com/citrusworx)
