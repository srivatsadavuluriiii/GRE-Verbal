# Design System - GRE Vocabulary Quiz

## Design Philosophy

Minimalist, monochrome design inspired by ShadCN UI with Apple's SF Pro typography. Focus on clarity, hierarchy, and functional aesthetics.

## Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Inter', system-ui, sans-serif;
```

### Type Scale
- **Display**: 2.5rem (40px) - Word displays
- **H1**: 2rem (32px) - Page titles
- **H2**: 1.5rem (24px) - Section headings
- **H3**: 1.25rem (20px) - Card titles
- **Body**: 0.9375rem (15px) - Default text
- **Small**: 0.875rem (14px) - Buttons, labels
- **Caption**: 0.8125rem (13px) - Tags
- **Tiny**: 0.75rem (12px) - Metadata

### Font Weights
- **Light**: 300 (unused)
- **Regular**: 400 - Body text
- **Medium**: 500 - Buttons, labels
- **Semibold**: 600 - Headings
- **Bold**: 700 (unused)

### Letter Spacing
- **Display/Headings**: -0.03em to -0.02em (tight)
- **Body**: Default
- **Uppercase Labels**: 0.05em (wide)

## Color System

### Primary Colors
```css
--background: hsl(0 0% 100%)        /* #ffffff - White */
--foreground: hsl(0 0% 3.9%)        /* #0a0a0a - Near Black */
--primary: hsl(0 0% 9%)             /* #171717 - Black */
--primary-foreground: hsl(0 0% 98%) /* #fafafa - Off White */
```

### Secondary Colors
```css
--secondary: hsl(0 0% 96.1%)             /* #f5f5f5 - Light Gray */
--secondary-foreground: hsl(0 0% 9%)     /* #171717 - Black */
--muted: hsl(0 0% 96.1%)                 /* #f5f5f5 - Light Gray */
--muted-foreground: hsl(0 0% 45.1%)      /* #737373 - Mid Gray */
```

### Utility Colors
```css
--destructive: hsl(0 84.2% 60.2%)        /* #ef4444 - Red (for wrong answers) */
--destructive-foreground: hsl(0 0% 98%)  /* #fafafa - Off White */
--border: hsl(0 0% 89.8%)                /* #e5e5e5 - Border Gray */
--ring: hsl(0 0% 3.9%)                   /* #0a0a0a - Focus ring */
```

### Semantic Usage
- **Background**: Pure white (#ffffff)
- **Text**: Near black (#0a0a0a)
- **Interactive elements**: Black (#171717)
- **Hover states**: Black with subtle transform
- **Borders**: Light gray (#e5e5e5)
- **Disabled**: 40% opacity
- **Success (correct answer)**: Black background, white text
- **Error (wrong answer)**: Red (#ef4444)

## Spacing System

### Scale (based on 0.5rem = 8px)
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 0.75rem (12px)
- **base**: 1rem (16px)
- **lg**: 1.25rem (20px)
- **xl**: 1.5rem (24px)
- **2xl**: 2rem (32px)
- **3xl**: 3rem (48px)
- **4xl**: 4rem (64px)

### Component Padding
- **Button**: 0-1.5rem (height 40px)
- **Small Button**: 0-1rem (height 36px)
- **Input**: 0-1rem (height 44px)
- **Card**: 1.5rem (24px)
- **Modal**: 2rem (32px)

### Component Gaps
- **Grid**: 1rem (16px)
- **Flex elements**: 0.5rem - 1rem (8-16px)
- **Section spacing**: 2-3rem (32-48px)

## Border Radius

```css
--radius: 0.5rem; /* 8px */
```

- **Default**: 8px (buttons, cards, inputs)
- **Inner elements**: 6px (calc(var(--radius) - 2px))

## Shadows

### Elevation System
```css
/* None - Default */
box-shadow: none;

/* Hover - Subtle lift */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

/* Modal/Dropdown */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
```

## Components

### Buttons

**Primary Button**
- Background: Black
- Text: White
- Height: 40px
- Padding: 0 2rem
- Border radius: 8px
- Hover: Slight translateY(-1px)

**Secondary Button**
- Background: Transparent
- Text: Black
- Border: 1px solid border color
- Height: 36px
- Hover: Background becomes secondary

### Cards

**Standard Card**
- Background: White
- Border: 1px solid border color
- Border radius: 8px
- Padding: 1.5rem
- Hover: Border darkens, translateY(-2px), shadow

### Inputs

**Text Input**
- Background: White
- Border: 1px solid border color
- Height: 44px
- Padding: 0 1rem
- Border radius: 8px
- Focus: Border becomes black

### Quiz Options

**Default State**
- Background: Light gray
- Border: Transparent
- Hover: Border visible

**Selected State**
- Border: Black
- Background: White

**Correct State**
- Background: Black
- Text: White

**Wrong State**
- Background: Red
- Text: White

## Transitions

**Standard Easing**
```css
transition: all 0.2s ease;
```

**Transform on Hover**
```css
transform: translateY(-1px) or translateY(-2px);
```

## Layout

### Container
- Max width: 1200px (quiz), 1400px (clusters)
- Padding: 2rem 1.5rem (desktop), 1.5rem 1rem (mobile)

### Grid
```css
display: grid;
grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
gap: 1rem;
```

### Responsive Breakpoints
- Mobile: < 480px
- Tablet: < 768px
- Desktop: > 768px

## Animations

### Fade In
```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

**Duration**: 0.3s ease-out

### Modal Slide In
```css
@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

**Duration**: 0.2s ease-out

## Accessibility

### Focus States
- Outline: 2px solid ring color
- Offset: 2px

### Color Contrast
- Text on background: 21:1 (AAA)
- Muted text on background: 4.5:1 (AA)
- Button text on black: 21:1 (AAA)

### Touch Targets
- Minimum: 40px × 40px
- Recommended: 44px × 44px

## Best Practices

### DO ✓
- Use semantic HTML
- Maintain consistent spacing
- Use system font stack
- Keep borders subtle (1px)
- Use black for primary actions
- Ensure sufficient contrast
- Add hover states to interactive elements
- Use relative units (rem) for spacing
- Implement smooth transitions

### DON'T ✗
- Use multiple font families
- Add gradients or colors (except red for errors)
- Use shadows excessively
- Make borders too thick
- Mix spacing scales arbitrarily
- Forget responsive breakpoints
- Skip hover/focus states
- Use absolute pixel values for layout

## File Structure

```
/style.css           - Global styles and components
/clusters.html       - Includes inline styles for cluster-specific UI
/cluster-viz.js      - Canvas rendering with black/white/gray palette
```

## Version
**1.0** - March 2026
**Design System**: ShadCN-inspired
**Typography**: SF Pro (Apple System Fonts)
**Color Scheme**: Monochrome (Black & White)
