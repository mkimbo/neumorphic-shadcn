# Neumorphic Shadcn UI

A modern Next.js boilerplate featuring **shadcn/ui components** reimagined with a stunning **neumorphic design system**. This template combines the flexibility of shadcn/ui with the elegant, tactile aesthetics of neumorphism for a unique user experience.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

### 🎨 Neumorphic Design System

- **Soft UI Aesthetics**: Carefully crafted shadows and highlights create depth and tactile feel
- **Light & Dark Modes**: Seamless theme switching with `next-themes`
- **Professional Polish**: Refined border-radius, spacing, and typography for a premium look
- **Custom Scrollbars**: Theme-aware, minimal scrollbars that blend with the design

### 🧩 Component Library

30+ fully styled neumorphic components including:

- **Forms**: Inputs, Textareas, Selects, Checkboxes, Switches
- **Navigation**: Sidebar, TopNav, Tabs, Dropdown Menus
- **Data Display**: Tables, Cards, Badges, Avatars
- **Charts**: Bar, Line, and Pie charts
- **Overlays**: Dialogs (default, fullscreen, bottom sheet), Popovers, Sheets
- **Feedback**: Toast notifications (Sonner), Skeletons, Progress indicators

### 🚀 Modern Stack

- **Next.js 16** with App Router and React Server Components
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **Radix UI** primitives for accessibility
- **Recharts** for data visualization
- **Zustand** for state management
- **React Hook Form + Zod** for form validation

### 🎯 Developer Experience

- **Fully Typed**: Complete TypeScript support
- **Component Variants**: Using `class-variance-authority` for flexible styling
- **Responsive**: Mobile-first design approach
- **Accessible**: Built on Radix UI primitives
- **Customizable**: Easy to extend and modify

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/neumorphic-shadcn.git
cd neumorphic-shadcn

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the showcase.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design Philosophy

This template implements neumorphism (soft UI) with the following principles:

1. **Subtle Shadows**: Multi-layered shadows create depth without overwhelming
2. **Consistent Radius**: Harmonious border-radius scale (12px, 16px, 24px)
3. **Professional Typography**: Medium font weights and refined sizing
4. **Clear Hierarchy**: Shadow depth indicates element importance
5. **Smooth Interactions**: Natural-feeling transitions and active states

### Color System

The design uses CSS variables for theming:

- **Light Mode**: Soft neutral palette with subtle shadows
- **Dark Mode**: Enhanced contrast with inverted highlights

## 🏗️ Project Structure

```
neumorphic-shadcn/
├── app/
│   ├── globals.css          # Global styles & CSS variables
│   ├── layout.tsx            # Root layout with providers
│   └── page.tsx              # Showcase page
├── components/
│   ├── ui/                   # Neumorphic UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── chart.tsx
│   │   ├── global-dialog/   # Global dialog system
│   │   └── ...
│   ├── DashboardShell.tsx   # Layout wrapper
│   ├── Sidebar.tsx          # Navigation sidebar
│   └── TopNav.tsx           # Top navigation
├── hooks/
│   └── useGlobalDialog.ts   # Dialog state management
├── lib/
│   └── utils.ts             # Utility functions
└── context/
    └── DashboardContext.tsx # Dashboard state
```

## 🔧 Usage Examples

### Using Components

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function MyPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Neumorphic Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  );
}
```

### Global Dialog System

```tsx
import { useGlobalDialog } from "@/hooks/useGlobalDialog";

function MyComponent() {
  const { open } = useGlobalDialog();

  const handleOpen = () => {
    open(<MyDialogContent />, {
      variant: "default", // or "fullscreen" or "bottomSheet"
      maxWidth: "sm:max-w-lg",
    });
  };

  return <Button onClick={handleOpen}>Open Dialog</Button>;
}
```

### Charts

```tsx
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

export function MyChart() {
  return (
    <ChartContainer
      responsive={false}
      config={{ value: { label: "Sales", color: "#ea580c" } }}
      className="h-80 w-full overflow-x-auto"
    >
      <div className="min-w-[1000px] h-full">
        <BarChart width={1000} height={320} data={data}>
          <Bar dataKey="value" fill="#ea580c" />
        </BarChart>
      </div>
    </ChartContainer>
  );
}
```

## 🎭 Theme Customization

Modify `app/globals.css` to customize colors:

```css
@layer base {
  :root {
    --background: 0 0% 95%;
    --foreground: 0 0% 15%;
    --primary: 20 100% 50%;
    /* ... */
  }

  .dark {
    --background: 0 0% 10%;
    --foreground: 0 0% 95%;
    /* ... */
  }
}
```

## 📝 Key Customizations

This template includes several enhancements over standard shadcn/ui:

1. **Neumorphic Shadows**: Custom shadow utilities in `globals.css`
2. **Chart Scrolling**: Modified `ChartContainer` with `responsive` prop
3. **Global Dialog**: Zustand-based dialog management system
4. **Custom Scrollbars**: Theme-aware scrollbar styling
5. **Professional Refinements**: Optimized spacing, typography, and interactions

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

MIT License - feel free to use this template for personal or commercial projects.

## 🙏 Acknowledgments

- **shadcn/ui** - For the excellent component foundation
- **Radix UI** - For accessible primitives
- **v0.dev** - For rapid prototyping assistance
- **Next.js Team** - For the amazing framework

## 🔗 Links

- [Live Demo](#) <!-- Add your demo link -->
- [Report Issues](https://github.com/yourusername/neumorphic-shadcn/issues)

---

**Built with ❤️ using Next.js and Neumorphic Design**
