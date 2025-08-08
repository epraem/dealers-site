import { component$, Slot } from "@builder.io/qwik";
interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "small" | "caption";
  class?: string;
  color?: "primary" | "secondary" | "muted" | "white" | "accent" | "light";
}

export const Typography = component$<TypographyProps>(
  ({ variant = "body", class: className = "", color = "primary" }) => {
    const colorClasses = {
      primary: "text-[#2D3748]",
      secondary: "text-[#4A5568]",
      muted: "text-[#A0AEC0]",
      white: "text-white",
      accent: "text-[#3182CE]",
      light: "text-gray-300",
    };

    const variantClasses = {
      h1: "text-4xl lg:text-5xl font-bold leading-tight",
      h2: "text-3xl lg:text-4xl font-bold leading-tight",
      h3: "text-2xl lg:text-3xl font-semibold leading-tight",
      h4: "text-xl lg:text-2xl font-semibold leading-tight",
      body: "text-lg lg:text-xl leading-relaxed",
      small: "text-base leading-relaxed",
      caption: "text-sm leading-normal",
    };

    const baseClasses = `${variantClasses[variant]} ${colorClasses[color]} ${className}`;

    const Tag = variant.startsWith("h")
      ? (variant as "h1" | "h2" | "h3" | "h4")
      : "p";

    return (
      <Tag class={baseClasses}>
        <Slot />
      </Tag>
    );
  },
);

// Convenience components for common use cases
export const Heading1 = component$<Omit<TypographyProps, "variant">>(
  ({ class: className = "", color = "primary" }) => (
    <Typography variant="h1" class={className} color={color}>
      <Slot />
    </Typography>
  ),
);

export const Heading2 = component$<Omit<TypographyProps, "variant">>(
  ({ class: className = "", color = "primary" }) => (
    <Typography variant="h2" class={className} color={color}>
      <Slot />
    </Typography>
  ),
);

export const Heading3 = component$<Omit<TypographyProps, "variant">>(
  ({ class: className = "", color = "primary" }) => (
    <Typography variant="h3" class={className} color={color}>
      <Slot />
    </Typography>
  ),
);

export const BodyText = component$<Omit<TypographyProps, "variant">>(
  ({ class: className = "", color = "secondary" }) => (
    <Typography variant="body" class={className} color={color}>
      <Slot />
    </Typography>
  ),
);
