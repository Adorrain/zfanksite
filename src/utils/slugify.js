export const generateId = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')         
    .replace(/&/g, '-and-')         
    .replace(/[^\w-+\u4e00-\u9fa5]+/g, '') 
    .replace(/-+/g, '-');       
};
