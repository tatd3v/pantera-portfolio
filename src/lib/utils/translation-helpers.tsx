import { ReactNode } from 'react';

export function parseRichText(text: string, components: Record<string, (children: ReactNode) => ReactNode>): ReactNode {
  const parts: ReactNode[] = [];
  let currentIndex = 0;
  const regex = /<(\w+)>(.*?)<\/\1>/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the tag
    if (match.index > currentIndex) {
      parts.push(text.substring(currentIndex, match.index));
    }

    // Add the component-wrapped content
    const [, tagName, content] = match;
    const Component = components[tagName];
    if (Component) {
      parts.push(Component(content));
    } else {
      parts.push(content);
    }

    currentIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex));
  }

  return parts;
}
