# Project Rules

Build a premium freelance web developer portfolio.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lenis
- lucide-react
- clsx
- tailwind-merge

## Design Direction

- Dark navy background
- Cyan primary accent
- Purple secondary accent
- Clean modern tech style
- Premium but not too cyberpunk
- Glassmorphism cards but still readable
- Mobile-first responsive
- Smooth but subtle animation
- No heavy 3D
- No excessive particles
- No generic template look

## Main Goal

This website is a personal portfolio and landing page for selling freelance web development services.

Use Indonesian copywriting.

## Main Pages

- `/`
- `/projects`
- `/projects/[slug]`
- `/services`
- `/services/[slug]`

## Homepage Sections

1. Navbar
2. Hero
3. Summary stats
4. Services / Pricing
5. Featured Projects
6. Tech Stack
7. How I Work
8. Why Work With Me
9. FAQ
10. Contact CTA
11. Footer

## Hero Copywriting Direction

Position me as a freelance web developer who helps businesses, UMKM, and personal brands build modern responsive websites.

Example:

"Saya membantu bisnis, UMKM, dan personal brand membangun website modern, responsif, dan siap digunakan."

CTA buttons:

- Lihat Project
- Konsultasi via WhatsApp

## Pricing

### Landing Page

Price: Mulai dari Rp500.000

Description:
Untuk halaman promosi sederhana, produk, event, campaign, atau personal link.

Includes:

- 1 halaman landing page
- Responsive mobile
- CTA WhatsApp
- Section basic
- Revisi 1x
- Deploy basic

### Web Statis / Company Profile

Price: Mulai dari Rp3.500.000

Description:
Untuk company profile, portfolio bisnis, dan website informasi 3–5 halaman.

Includes:

- 3–5 halaman
- Desain modern
- Responsive mobile
- Basic SEO
- Form kontak / WhatsApp integration
- Revisi 2x
- Deploy

### Web Dinamis / Admin Panel

Price: Mulai dari Rp6.500.000

Description:
Untuk website dengan login, dashboard, database, dan pengelolaan data.

Includes:

- Login admin
- Dashboard
- CRUD data
- Database
- Upload gambar/file
- Responsive layout
- Revisi 3x
- Deploy

### Custom Web App

Price: By Request

Description:
Untuk sistem custom sesuai kebutuhan bisnis atau workflow tertentu.

Includes:

- Fitur custom
- Role user/admin
- Integrasi API
- Database design
- Dashboard
- Dokumentasi basic
- Scope menyesuaikan kebutuhan

Pricing note:

"Harga dapat berubah tergantung jumlah halaman, fitur, revisi, deadline, integrasi, dan kebutuhan hosting/domain."

## WhatsApp CTA

Add WhatsApp buttons with prefilled messages based on selected service.

Use placeholder WhatsApp number:

`6281234567890`

Make it easy to edit later from a data file.

## Project System

Store project data in:

`src/data/projects.ts`

Each project should have:

- slug
- title
- shortDescription
- longDescription
- techStack
- features
- screenshots or placeholder image
- liveUrl
- githubUrl
- status
- year
- category

Create these placeholder projects:

### Sehatin

Description:
Website pengingat jadwal minum obat berbasis web.

Tech stack:

- PHP
- MySQL
- HTML
- CSS
- JavaScript

Status: Case Study

### Listify

Description:
Aplikasi to-do list sederhana untuk manajemen tugas harian.

Tech stack:

- HTML
- CSS
- JavaScript

Status: Prototype

### CRUD Barang & Pengguna

Description:
Aplikasi CRUD berbasis Java JSP, Servlet, dan MySQL.

Tech stack:

- Java
- JSP
- Servlet
- MySQL

Status: Case Study

### Company Profile Demo

Description:
Website company profile modern untuk bisnis atau UMKM.

Tech stack:

- Next.js
- Tailwind CSS

Status: Demo

### Dashboard XAUUSD Concept

Description:
Konsep dashboard analisis fundamental XAUUSD untuk mendukung pemahaman arah pergerakan harga.

Tech stack:

- Next.js
- Machine Learning Concept
- Dashboard UI

Status: Concept

## Project Cards

Each project card must include:

- screenshot placeholder
- title
- short description
- tech stack tags
- status badge
- Case Study button
- Live Demo button if URL exists

## Project Detail Pages

For each project detail page, include:

- Overview
- Problem
- Solution
- Main Features
- Tech Stack
- Screenshots / Preview placeholders
- Result
- CTA back to projects

## Service System

Store service data in:

`src/data/services.ts`

Create:

- `/services`
- `/services/[slug]`

Service detail pages should include:

- who it is for
- what is included
- estimated timeline
- starting price
- FAQ for that service
- WhatsApp CTA with prefilled message

## FAQ

Store FAQ data in:

`src/data/faq.ts`

Include questions:

- Apakah harga sudah termasuk domain dan hosting?
- Apakah bisa revisi?
- Berapa lama pengerjaan website?
- Apakah bisa maintenance setelah website selesai?
- Apakah bisa request fitur custom?
- Apakah bisa dibuatkan desain dari nol?

## Tech Stack Section

Group skills into:

### Frontend

- React
- Next.js
- TypeScript
- Tailwind CSS

### Backend

- Laravel
- PHP
- Node.js basic

### Database

- MySQL

### Tools

- Git
- GitHub
- VS Code
- Linux/WSL
- Figma basic

## How I Work

Use this flow:

1. Konsultasi kebutuhan
2. Penentuan scope & estimasi harga
3. Desain tampilan
4. Development
5. Revisi
6. Deploy
7. Serah terima

## Why Work With Me

Create cards for:

- Responsive Design
- Clean Code
- Basic SEO
- Deploy Assistance
- Maintenance Optional
- Clear Communication

## Technical Requirements

- Use reusable components
- Put components inside `src/components`
- Put editable content inside `src/data`
- Put helper functions inside `src/lib`
- Keep TypeScript types clean
- Use semantic HTML
- Add accessible buttons and links
- Add proper SEO metadata for every page
- Use Next Image where appropriate
- Make all pages responsive
- Make layout polished for mobile width 360px–430px
- Keep performance good
- Use Framer Motion only for subtle section reveal, card hover, and hero animation
- Use Lenis for smooth scroll
- Do not overuse animations
- Do not add backend/auth/database
- Do not add CMS
- Do not add heavy 3D
- Do not use random external images
- Use placeholder components or simple gradients

## Folder Structure Target

```txt
src/
  app/
    page.tsx
    projects/
      page.tsx
      [slug]/
        page.tsx
    services/
      page.tsx
      [slug]/
        page.tsx
  components/
    layout/
    sections/
    cards/
    ui/
  data/
    projects.ts
    services.ts
    faq.ts
    tech-stack.ts
  lib/
    utils.ts