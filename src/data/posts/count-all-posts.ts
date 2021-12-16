import { URL_POSTS } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fectJson } from '../../utils/fetch-json';

export const countAllPosts = async (): Promise<PostData[]> => {
  const url = `${URL_POSTS}`;
  const posts = await fectJson<PostData[]>(url);
  return posts;
};
