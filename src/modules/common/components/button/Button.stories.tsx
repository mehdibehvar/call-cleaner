import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Button from './button';

/**
 * A versatile button component with multiple size and style variants.
 * Perfect for all your call-cleaner UI needs.
 */
const meta = {
  title: 'Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible button component with support for multiple variants and sizes. Built with CVA (class-variance-authority) for type-safe styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'soft', 'ghost', 'outline', 'surface'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['xs', 'default', 'md', 'lg', 'icon'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    onClick: {
      description: 'Callback function when button is clicked',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============== SIZE VARIANTS ==============

/**
 * Extra small button - ideal for compact layouts
 */
export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    children: 'Extra Small',
  },
};

/**
 * Default button size - the standard choice
 */
export const Default: Story = {
  args: {
    size: 'default',
    children: 'Default Button',
  },
};

/**
 * Medium button - for more prominence
 */
export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

/**
 * Large button - for primary actions
 */
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

/**
 * Icon button - square button, perfect for icons
 */
export const IconButton: Story = {
  args: {
    size: 'icon',
    children: '✕',
  },
};

// ============== STYLE VARIANTS ==============

/**
 * Default variant - primary action button with solid background
 */
export const DefaultVariant: Story = {
  args: {
    variant: 'default',
    size: 'md',
    children: 'Default Style',
  },
};

/**
 * Soft variant - subtle button with muted colors
 */
export const SoftVariant: Story = {
  args: {
    variant: 'soft',
    size: 'md',
    children: 'Soft Style',
  },
};

/**
 * Ghost variant - minimal style, transparent background
 */
export const GhostVariant: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    children: 'Ghost Style',
  },
};

/**
 * Outline variant - bordered button with transparent background
 */
export const OutlineVariant: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    children: 'Outline Style',
  },
};

/**
 * Surface variant - subtle background with secondary text color
 */
export const SurfaceVariant: Story = {
  args: {
    variant: 'surface',
    size: 'md',
    children: 'Surface Style',
  },
};

// ============== COMBINED VARIANTS ==============

/**
 * All size variants with default styling
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="xs">XS</Button>
      <Button size="default">Default</Button>
      <Button size="md">MD</Button>
      <Button size="lg">LG</Button>
      <Button size="icon">✓</Button>
    </div>
  ),
};

/**
 * All style variants with default size
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', maxWidth: '600px' }}>
      <Button variant="default">Default</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="surface">Surface</Button>
    </div>
  ),
};

/**
 * Variant matrix showing all size + style combinations
 */
export const VariantMatrix: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }}>
      {(['xs', 'default', 'md', 'lg', 'icon'] as const).map((size) =>
        (['default', 'soft', 'ghost', 'outline', 'surface'] as const).map((variant) => (
          <Button key={`${size}-${variant}`} size={size} variant={variant}>
            {size === 'icon' ? '✓' : `${size}`}
          </Button>
        ))
      )}
    </div>
  ),
};

// ============== STATES ==============

/**
 * Disabled button state
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

/**
 * Disabled soft variant
 */
export const DisabledSoft: Story = {
  args: {
    variant: 'soft',
    disabled: true,
    children: 'Disabled Soft',
  },
};

// ============== INTERACTIVE ==============

/**
 * Button with click handler
 */
export const WithClickHandler: Story = {
  args: {
    children: 'Click me!',
  },
};

/**
 * Button with icon and text (using gap styling)
 */
export const WithIcon: Story = {
  args: {
    children: '🚀 Launch',
    size: 'md',
  },
};

/**
 * Long text button
 */
export const LongText: Story = {
  args: {
    children: 'This is a button with a longer text label',
    size: 'lg',
  },
};

// ============== USAGE EXAMPLES ==============

/**
 * Common UI pattern - action buttons in a group
 */
export const ActionGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button variant="default">Save</Button>
      <Button variant="outline">Cancel</Button>
    </div>
  ),
};

/**
 * Form submission pattern
 */
export const FormSubmit: Story = {
  args: {
    children: 'Submit Form',
    size: 'md',
    variant: 'default',
  },
};
