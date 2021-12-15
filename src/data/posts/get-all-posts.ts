import { URL_POSTS } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fectJson } from '../../utils/fetch-json';

export const getAllPosts = async (): Promise<PostData[]> => {
  const posts = await fectJson<PostData[]>(URL_POSTS);
  return posts;
};
