import { Container } from './styled';

export const Footer = () => {
  const data = new Date();
  return (
    <Container>
      <p>Development by Junior Paula &copy; {data.getFullYear()}</p>
    </Container>
  );
};
