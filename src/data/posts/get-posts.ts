import { URL_POSTS } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fectJson } from '../../utils/fetch-json';

export const getPosts = async (
  slug: string | string[],
): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;

  const url = `${URL_POSTS}?populate=*&filters[slug][$eq]=${slugString}`;
  const jsonPosts = await fectJson<PostData[]>(url);
  return jsonPosts;
};
