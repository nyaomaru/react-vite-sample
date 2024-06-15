import { gql, useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { ErrorAlert } from '@/components/atoms/ErrorAlert';
import { RHFTextInput } from '@/components/molecules/RHFTextInput';
import { SimpleButton } from '@/components/atoms/SimpleButton';

import { type BookSchema, bookSchema } from '../-types/schema';
import { ButtonStyle, TextFieldStyle } from './BookForm.css';

const ADD_BOOK = gql`
  mutation AddBook($bookContent: BookPostContent!) {
    addBook(bookContent: $bookContent) {
      title
      author {
        name
      }
    }
  }
`;

export const BookForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookSchema>({
    mode: 'onSubmit',
    defaultValues: { title: '', author: '' },
    resolver: zodResolver(bookSchema),
  });

  const [addBook, { data, loading, error }] = useMutation(ADD_BOOK);

  if (loading) return 'Submitting...';
  if (error) return <ErrorAlert errorMessage={error.message} />;

  const onSubmit: SubmitHandler<BookSchema> = async (data) => {
    try {
      await addBook({ variables: { bookContent: data } });
    } catch (_e) {
      return;
    }
  };

  return (
    <>
      <h2>Mutation AddBook</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={TextFieldStyle}>
          <RHFTextInput name={'title'} control={control} />

          {errors.title?.message && <ErrorAlert errorMessage={errors.title.message} isShow={true} />}
        </div>
        <div className={TextFieldStyle}>
          <RHFTextInput name={'author'} control={control} />

          {errors.author?.message && <ErrorAlert errorMessage={errors.author.message} isShow={true} />}
        </div>
        <div className={ButtonStyle}>
          <SimpleButton buttonName='Submit' buttonType='submit' color='primary' />
        </div>
      </form>

      <h2>Result AddBook</h2>
      {data && data.addBook && (
        <ul>
          <li>AddBook Title: {data.addBook.title}</li>
          <li>AddBook Author: {data.addBook.author.name}</li>
        </ul>
      )}
    </>
  );
};
