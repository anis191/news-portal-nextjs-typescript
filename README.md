# Daily Spot

A modern, responsive news portal built with **Next.js 15**, featuring real-time news fetching, dark mode, category filtering, and a clean editorial design.

**Live Demo:** [https://daily-spot.vercel.app](https://daily-spot.vercel.app)

---

## Features

- Live news feed fetched from a FastAPI backend with ISR (revalidates every 60s)
- Full dark / light theme toggle powered by React Context
- Search by keyword and filter by category
- Mobile-first design with a custom slide-in drawer menu
- Skeleton loaders for a smooth loading experience
- News detail pages use `generateStaticParams` + ISR for fast, static loads
- Custom components with clean, consistent styling across all pages

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org/) | React framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | UI component library |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |
| [FastAPI Backend](https://news-portal-fastapi-server.vercel.app) | News data API |
| [Vercel](https://vercel.com/) | Deployment |

---

## Project Structure

```
daily-spot/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── news/
│   │   ├── [id]/
│   │   │   └── page.tsx        # ISR news detail page
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   └── news/
│       ├── Banner.tsx
│       ├── NewsList.tsx
│       ├── NewsCard.tsx
│       ├── SearchBar.tsx
│       └── CategoryFilter.tsx
├── context/
│   └── themeContext.tsx
├── lib/
│   └── fetchNews.ts
├── public/
│   └── assets/
│       └── banner-img.jpg
└── types/
    └── news.ts
```

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## 💻 Author
**Anisul Alam**  
Full-Stack Developer | Django | React | PostgreSQL

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anisulalam/)
[![Portfolio](https://img.shields.io/badge/-Portfolio-000?style=flat&logo=vercel&logoColor=white)](https://anisulalam.vercel.app/)