import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CardContentStyle } from './Customer.css';

import { useCustomerSubmit } from '@/hooks/useCustomer';

import { customerDetailSchema } from '../-types/schema';
import type { CustomerDetailSchema } from '../-types/schema';

import { ErrorAlert } from '@/components/atoms/ErrorAlert';
import { SuccessAlert } from '@/components/atoms/SuccessAlert';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { RHFTextInput } from '@/components/molecules/RHFTextInput';
import { RHFSelect } from '@/components/molecules/RHFSelect';
import { RHFRadio } from '@/components/molecules/RHFRadio';

type EditFormProps = {
  id: string;
  data: CustomerDetailSchema;
};

export const EditForm = ({ id, data }: EditFormProps) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      id: id,
      name: data.name,
      city: 1,
      favorite: data.favorite,
    },
    resolver: zodResolver(customerDetailSchema),
  });

  const handleError = (message: string) => {
    setErrorMessage(message);
    setShowAlert(true);
    setIsLoading(false);
  };

  const { mutateAsync } = useCustomerSubmit(handleError);

  const onSubmit: SubmitHandler<CustomerDetailSchema> = async (data) => {
    setIsLoading(true);
    setShowSuccess(false);

    try {
      await mutateAsync(data);
    } catch (e) {
      return;
    }
    setIsLoading(false);
    setShowSuccess(true);
    reset();
  };

  return (
    <>
      <ErrorAlert errorMessage={errorMessage} isShow={showAlert} />

      <SuccessAlert successMessage={'Success to register!!'} isShow={showSuccess} />

      <Card sx={{ minWidth: 275 }}>
        <CardContent className={CardContentStyle}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <RHFTextInput name={'name'} control={control} />

              {errors.name?.message && <ErrorAlert errorMessage={errors.name.message} isShow={true} />}
            </div>

            <div>
              <RHFSelect name={'city'} control={control} />

              {errors.city?.message && <ErrorAlert errorMessage={errors.city.message} isShow={true} />}
            </div>

            <div>
              <RHFRadio name={'favorite'} control={control} />

              {errors.favorite?.message && <ErrorAlert errorMessage={errors.favorite.message} isShow={true} />}
            </div>

            <div>
              <SimpleButton disabled={isLoading} buttonName='Submit' buttonType='submit' />
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
