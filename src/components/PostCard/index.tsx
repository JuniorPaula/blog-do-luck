import Link from 'next/link';
import { Container, PostcardCover, PostcardHeading } from './styled';

export type PostcardProps = {
  slug: string;
  title: string;
  cover: string;
};

export const PostCard = ({ slug, title, cover }: PostcardProps) => {
  return (
    <Container>
      <PostcardCover>
        <Link href="/posts/[slug]" as={`/posts/${slug}`}>
          <a>
            <img src={cover} alt={title} />
          </a>
        </Link>
      </PostcardCover>
      <PostcardHeading>
        <Link href="/posts/[slug]" as={`/posts/${slug}`}>
          <a>{title}</a>
        </Link>
      </PostcardHeading>
    </Container>
  );
};
