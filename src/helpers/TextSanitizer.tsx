import { decode } from "html-entities";

// Very conservative client-side sanitizer to mitigate XSS in product descriptions.
// - Removes script/style/iframe/object/embed tags
// - Removes event handler attributes (on*) and javascript: URLs
// - Optionally strips <img>/<figure> when showImages is false
const sanitizeHTML = (html: string, allowImages: boolean) => {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const disallowedTags = new Set([
      "script",
      "style",
      "iframe",
      "object",
      "embed",
      "link",
      "meta",
      "base",
    ]);

    const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_ELEMENT);
    const toRemove: Element[] = [];

    while (walker.nextNode()) {
      const el = walker.currentNode as Element;
      const tag = el.tagName.toLowerCase();

      // Remove disallowed tags entirely
      if (disallowedTags.has(tag)) {
        toRemove.push(el);
        continue;
      }

      // Optionally remove images
      if (!allowImages && (tag === "img" || tag === "figure")) {
        toRemove.push(el);
        continue;
      }

      // Remove event handlers and potentially dangerous attributes
      [...el.attributes].forEach((attr) => {
        const name = attr.name.toLowerCase();
        const value = attr.value;

        // Remove inline event handlers like onclick, onerror, etc.
        if (name.startsWith("on")) {
          el.removeAttribute(attr.name);
          return;
        }

        // Sanitize href/src attributes
        if ((name === "href" || name === "src") && value) {
          const trimmed = value.trim().toLowerCase();
          // Only allow http(s), data images, blob, and mailto/tel links
          const isSafe =
            trimmed.startsWith("https://") ||
            trimmed.startsWith("http://") ||
            trimmed.startsWith("data:image/") ||
            trimmed.startsWith("blob:") ||
            trimmed.startsWith("mailto:") ||
            trimmed.startsWith("tel:");

          // Disallow javascript: and other protocols
          if (!isSafe || trimmed.startsWith("javascript:")) {
            el.removeAttribute(attr.name);
          }
        }

        // Remove srcdoc which can embed HTML
        if (name === "srcdoc") {
          el.removeAttribute(attr.name);
        }
      });
    }

    toRemove.forEach((el) => el.remove());
    return doc.body.innerHTML;
  } catch {
    // If parsing fails, fall back to plain text
    const div = document.createElement("div");
    div.textContent = html;
    return div.innerHTML;
  }
};

const TextSanitizer = ({ description, showImages = true }: any) => {
  // Decode the HTML content
  const decodedDescription = decode(description || "");

  // Sanitize HTML with image policy
  const safeHTML = sanitizeHTML(decodedDescription, Boolean(showImages));

  return (
    <div
      dangerouslySetInnerHTML={{ __html: safeHTML }}
      className='text-[13px] my-[10px]'
    />
  );
};

export default TextSanitizer;
