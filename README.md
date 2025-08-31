# 🌱 DemoApp - React + Vite Dashboard

A modern front-end dashboard built with **React**, **Vite**, **Tailwind CSS**, and **ShadCN UI**, designed for fast development, maintainability, and scalability.  

This project includes **state management**, **form handling**, **icons**, and **optional E2E testing**.

---

## 📦 Prerequisites

- **Node.js** v16 or higher: [https://nodejs.org/](https://nodejs.org/)  
- **npm** (comes with Node.js)  
- Optional: **Yarn** or **pnpm**  

Check installation:

```bash
node -v
npm -v
```

---

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Node Modules

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Tailwind CSS Setup

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Tailwind config: `tailwind.config.js`  
- PostCSS config: `postcss.config.js`  
- CSS imported in `src/index.css`

### 4. ShadCN UI Setup

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button accordion card table tabs
```

### 5. Install Extra Libraries

```bash
npm install zustand lucide-react react-hook-form zod
```

---

## 🚀 Running the Project Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open your browser: [http://localhost:5173](http://localhost:5173)

---

## 🛠️ Build & Preview (Optional)

Build for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Preview production build:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

---

## 🧪 E2E Test Setup (Optional)

Install Cypress:

```bash
npm install cypress --save-dev
```

Open Cypress:

```bash
npx cypress open
```

Example E2E test scenarios:

- Borrower selection updates center panel  
- AI Explainability section expands/collapses  
- Action buttons trigger mocked behavior  

---

## 📂 Project Structure

```
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, icons, fonts
│   ├── components/       # Reusable React components
│   ├── context/          # Zustand / Context API state management
│   ├── pages/            # Dashboard pages
│   ├── api/              # Mock API responses
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point
├── index.html
├── package.json
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── vite.config.js        # Vite configuration
```

---

## 🎨 Tailwind CSS Example

```jsx
export default function Button() {
  return (
    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      Click Me
    </button>
  );
}
```

---

💡 This README includes **everything** to set up, run, and test your React + Vite dashboard project. Just replace your repository URL and start coding!
