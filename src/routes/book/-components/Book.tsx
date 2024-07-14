import { gql, useQuery } from '@apollo/client';
import { useNavigate } from '@tanstack/react-router';

import { ErrorAlert } from '@/components/atoms/ErrorAlert';
import { SimpleButton } from '@/components/atoms/SimpleButton';

import { ButtonStyle } from './Book.css';
import { BookForm } from './BookForm';

import { PATH } from '@/constants/routes';

const GET_BOOK_TYPE = gql`
  query GetBookType {
    bookType
  }
`;

export const Book = () => {
  const { loading, error, data } = useQuery(GET_BOOK_TYPE);
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorAlert errorMessage={error.message} />;

  return (
    <>
      <h1>GraphQL Sample</h1>

      <h2>Query Book Types</h2>

      {data && data.bookType && (
        <ul>
          {data.bookType.map((type: string) => {
            return <li>{type}</li>;
          })}
        </ul>
      )}

      <BookForm />

      <div className={ButtonStyle}>
        <SimpleButton
          buttonName='Return'
          buttonType='button'
          color='secondary'
          onClick={() => navigate({ to: PATH.TOP })}
        />
      </div>
    </>
  );
};
