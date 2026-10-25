const internalHosts = new Set(['akilfernando.dev', 'www.akilfernando.dev', 'akilfernando.github.io']);

export function externalLinkAttributes(href) {
  try {
    const url = new URL(href, 'https://akilfernando.dev');
    if (['http:', 'https:'].includes(url.protocol) && !internalHosts.has(url.hostname)) {
      return { target: '_blank', rel: 'noopener noreferrer' };
    }
  } catch {}
  return {};
}

// Apply the same policy to links rendered from Markdown and MDX, without client JavaScript.
export function rehypeExternalLinks() {
  return function transform(node) {
    if (node.type === 'element' && node.tagName === 'a') {
      const attributes = externalLinkAttributes(node.properties?.href);
      if (attributes.target) {
        const rel = node.properties.rel;
        node.properties.target = attributes.target;
        node.properties.rel = [...new Set([
          ...(Array.isArray(rel) ? rel : String(rel || '').split(/\s+/)).filter(Boolean),
          'noopener', 'noreferrer',
        ])];
      }
    }
    for (const child of node.children || []) transform(child);
  };
}
