export const slugify = (text) => {
    return text
      .toLowerCase()               // Convert to lowercase
      .replace(/[^\w\s-]/g, '')     // Remove special characters (excluding hyphens and spaces)
      .replace(/[\s_-]+/g, '-')     // Replace spaces, underscores, or multiple hyphens with a single hyphen
      .replace(/^-+|-+$/g, '');     // Remove leading or trailing hyphens
  };
  