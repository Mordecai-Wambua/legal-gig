# The Dispute Resolution Centre Design System

This design system provides consistent, reusable components and styling for The Dispute Resolution Centre website. The system is based on the Services page aesthetic, featuring blue and indigo as primary colors.

## Theme and Colors

The design system uses a consistent color palette defined in `theme.js`:

- **Primary Colors**: Blue shades
- **Secondary Colors**: Indigo shades
- **Neutral Colors**: Gray shades

## Core Components

### Button

A versatile button component that can be rendered as a button, internal link, or external link.

```jsx
import { Button } from '../components/ui';

// Standard button
<Button onClick={handleClick}>Click Me</Button>

// Internal link (uses React Router)
<Button to="/contact">Contact Us</Button>

// External link
<Button href="https://example.com">Visit Example</Button>

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="gradient">Gradient</Button>
<Button variant="outline">Outline</Button>
<Button variant="text">Text</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>

// Full width
<Button fullWidth>Full Width Button</Button>
```

### Heading

A consistent heading component for titles and subtitles.

```jsx
import { Heading } from '../components/ui';

// Heading levels
<Heading level={1}>This is an H1</Heading>
<Heading level={2}>This is an H2</Heading>
<Heading level={3}>This is an H3</Heading>

// Variants
<Heading variant="default">Default</Heading>
<Heading variant="primary">Primary</Heading>
<Heading variant="secondary">Secondary</Heading>
<Heading variant="light">Light</Heading>
<Heading variant="gradient">Gradient</Heading>

// Alignment
<Heading aligned="left">Left aligned</Heading>
<Heading aligned="center">Centered</Heading>
<Heading aligned="right">Right aligned</Heading>

// Typography options
<Heading serif={true}>Serif font</Heading>
<Heading underlined={true}>Underlined heading</Heading>
```

### Card

A flexible card component for displaying content in a contained box.

```jsx
import { Card } from '../components/ui';

// Basic card
<Card>
  <p>Card content here</p>
</Card>

// Card with header, body, and footer
<Card>
  <Card.Header>
    <h3>Card Title</h3>
  </Card.Header>
  <Card.Body>
    <p>Card content here</p>
  </Card.Body>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>

// Variants
<Card variant="default">White background</Card>
<Card variant="primary">Blue background</Card>
<Card variant="secondary">Indigo background</Card>
<Card variant="transparent">No background</Card>
<Card variant="gradient">Gradient background</Card>

// Other options
<Card padding="lg">Large padding</Card>
<Card hover={false}>No hover effect</Card>
<Card shadow="xl">Extra large shadow</Card>
<Card rounded="2xl">Very rounded corners</Card>
```

### Section

A page section component with consistent padding and container options.

```jsx
import { Section } from '../components/ui';

// Basic section
<Section>
  <p>Content here</p>
</Section>

// Section with title and subtitle
<Section
  title="Section Title"
  subtitle="This is a section subtitle"
>
  <p>Content here</p>
</Section>

// Background variants
<Section background="white">White background</Section>
<Section background="light">Light gray background</Section>
<Section background="dark">Dark background with white text</Section>
<Section background="primary">Blue background with white text</Section>
<Section background="secondary">Indigo background with white text</Section>
<Section background="gradient">Gradient background with white text</Section>

// Other options
<Section centered={true}>Centered title and content</Section>
<Section padding="lg">Large padding</Section>
<Section maxWidth="4xl">Custom max width</Section>
<Section container={false}>No container (full width)</Section>
```

### PageHeader

A consistent page header with gradient background.

```jsx
import { PageHeader } from '../components/ui';

// Basic header
<PageHeader
  title="Page Title"
  subtitle="This is the page subtitle or description text."
/>

// Size options
<PageHeader size="sm">Small header</PageHeader>
<PageHeader size="default">Default size</PageHeader>
<PageHeader size="lg">Large header</PageHeader>

// Without decorative elements
<PageHeader withDecoration={false}>No circles</PageHeader>
```

### ListItem

A styled list item with an icon.

```jsx
import { ListItem } from '../components/ui';

// Basic list item
<ListItem>List item content</ListItem>

// Icons
<ListItem icon="check">Check icon</ListItem>
<ListItem icon="dot">Dot icon</ListItem>
<ListItem icon="arrow">Arrow icon</ListItem>

// Variants
<ListItem variant="primary">Blue</ListItem>
<ListItem variant="secondary">Indigo</ListItem>
<ListItem variant="success">Green</ListItem>
<ListItem variant="warning">Yellow</ListItem>
<ListItem variant="danger">Red</ListItem>

// Spacing
<ListItem spacing="sm">Small spacing</ListItem>
<ListItem spacing="default">Default spacing</ListItem>
<ListItem spacing="lg">Large spacing</ListItem>
```

## How to Use the Design System

1. Import components from the UI directory:

   ```jsx
   import { Button, Card, Heading, Section } from "../components/ui";
   ```

2. Use components instead of raw HTML elements to ensure consistency:

   ```jsx
   // Instead of:
   <h2 className="text-2xl font-bold mb-4">Title</h2>

   // Use:
   <Heading level={2} className="mb-4">Title</Heading>
   ```

3. For custom styling, you can always add additional classes:

   ```jsx
   <Button className="my-custom-class">Custom Button</Button>
   ```

4. Use theme variables for consistent colors:

   ```jsx
   import { colors } from "../components/ui";

   // In your component or styles:
   const myStyle = {
     color: colors.primary[600],
   };
   ```

## Best Practices

1. Always use design system components when available instead of building custom ones
2. Maintain the blue/indigo color palette throughout the site
3. Keep section padding, card styles, and button variants consistent
4. For new components, follow the same pattern of composable props and consistent styling
5. Document any new components added to the design system
