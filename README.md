
# YEGO® - Ugandan Streetwear eCommerce Platform

A modern, luxury streetwear eCommerce platform built for the Ugandan market. YEGO® combines contemporary design with local fashion culture to deliver a premium online shopping experience.

## Project Overview

YEGO® is a full-featured eCommerce frontend built with React, TypeScript and modern web technologies. The platform is designed to showcase luxury streetwear with a focus on Ugandan fashion and culture.

### Key Features

- **Modern UI/UX**: Sleek, responsive design with smooth animations
- **Mobile-First**: Optimized for all device sizes
- **Performance**: Fast loading with skeleton loaders and optimized components
- **Accessibility**: Built with accessibility best practices
- **Type Safety**: Full TypeScript implementation
- **Ready for Backend**: Structured for easy Supabase integration

##  Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/judeotine/yego.git
cd yego
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   └── ui/             # shadcn/ui components
├── pages/              # Route components
│   ├── Home.tsx        # Landing page
│   ├── Shop.tsx        # Product catalog
│   ├── ProductDetail.tsx
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── Auth.tsx        # Authentication
│   ├── Dashboard.tsx   # User dashboard
│   ├── Admin.tsx       # Admin panel
│   └── ...             # Other pages
├── store/              # Zustand state management
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
└── lib/                # Library configurations
```

## Design System

### Brand Colors
- **Primary Red**: `#E60012` - YEGO brand color
- **Black**: `#000000` - Primary text and backgrounds
- **White**: `#FFFFFF` - Clean backgrounds and text
- **Light Gray**: `#F5F5F5` - Subtle backgrounds and borders

### Typography
- **Headings**: Poppins (Black, Bold weights)
- **Body Text**: Inter (Regular, Medium weights)

### Responsive Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## eCommerce Features

### User Features
- Product browsing and filtering
- Product detail views with image galleries
- Shopping cart functionality
- User authentication (login/register)
- User dashboard and order history
- Wishlist management

### Admin Features
- Product management (CRUD operations)
- Order management and tracking
- User management
- Analytics dashboard
- Inventory management

### Pages
- **Home**: Hero section, featured products, brand story
- **Shop**: Product catalog with filtering and search
- **Product Detail**: Detailed product information and images
- **Cart**: Shopping cart with quantity management
- **Checkout**: Secure checkout process
- **Auth**: Login and registration
- **Dashboard**: User account management
- **Admin**: Administrative interface

##  Currency

All pricing is displayed in **UGX (Ugandan Shillings)** with proper formatting:
- Format: `UGX 150,000`
- Utility function: `formatCurrency()` in `src/utils/currency.ts`


### Database Schema (Ready for Supabase)
- Users table
- Products table
- Categories table
- Orders table
- Order items table
- Shopping cart table

##  Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible grid systems
- Responsive typography
- Touch-friendly interactions
- Optimized images and assets

##  Performance

- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Components and images
- **Skeleton Loaders**: For better perceived performance
- **Optimized Bundle**: Tree-shaking and minification
- **Fast Refresh**: Hot reload during development

##  Animations

Smooth animations powered by Framer Motion:
- Page transitions
- Component entrance animations
- Hover effects
- Loading states
- Micro-interactions

##  Security Considerations

- Input validation and sanitization
- XSS protection
- CSRF protection (when backend is integrated)
- Secure authentication flow
- Environment variable management

##  Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Implement proper error boundaries
- Write descriptive component names

### Component Structure
- Keep components focused and reusable
- Use custom hooks for shared logic
- Implement proper prop types
- Use consistent file naming conventions

## Testing (Future)

The project is structured to support:
- Unit testing with Jest
- Component testing with React Testing Library
- E2E testing with Playwright
- Visual regression testing

## Analytics (Future)

Ready for integration with:
- Google Analytics 4
- Facebook Pixel
- Custom event tracking
- Performance monitoring

##  Internationalization (Future)

Structure in place for:
- Multiple language support
- Currency conversion
- Regional customization
- RTL language support

##  Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Contact: +256758990562
- Website: https://yegokananfashions.vercel.app

##  Deployment

The application can be deployed to:
- Vercel (recommended)

### Environment Variables

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

**YEGO®** - Redefining Ugandan Streetwear Fashion 🇺🇬
