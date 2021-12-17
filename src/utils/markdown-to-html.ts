import matter from 'gray-matter';
export const markdownTohtml = async (content: string): Promise<string> => {
  const data = matter(content);

  return String(data);
};
