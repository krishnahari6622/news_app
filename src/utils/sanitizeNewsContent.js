export const sanitizeNewsContent = (text) => {
  let sanitizedText = text.replace(/\[.*?\]/g, "").trim();
  sanitizedText = sanitizedText.replace(/\s+/g, " ");
  return sanitizedText;
};
