import { zodResolver } from '@hookform/resolvers/zod';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import {
  CardContentStyle,
  CardContentAreaStyle,
  CardContentButtonStyle,
} from './Customer.css';

import { cityList } from '@/domains/city';
import { animalList } from '@/domains/animal';
import { useCustomerSubmit } from '@/hooks/useCustomer';

import { customerDetailSchema } from '../-types/schema';
import type { CustomerDetailSchema } from '../-types/schema';

import { ErrorAlert } from '@/components/atoms/ErrorAlert';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { SuccessAlert } from '@/components/atoms/SuccessAlert';
import { RHFRadio } from '@/components/molecules/RHFRadio';
import { RHFSelect } from '@/components/molecules/RHFSelect';
import { RHFTextInput } from '@/components/molecules/RHFTextInput';

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
    } catch (_e) {
      return;
    }
    setIsLoading(false);
    setShowSuccess(true);
    reset();
  };

  return (
    <>
      <ErrorAlert errorMessage={errorMessage} isShow={showAlert} />

      <SuccessAlert
        successMessage={'Success to register!!'}
        isShow={showSuccess}
      />

      <Card sx={{ minWidth: 275 }}>
        <CardContent className={CardContentStyle}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={CardContentAreaStyle}>
              <RHFTextInput name={'name'} control={control} />

              {errors.name?.message && (
                <ErrorAlert errorMessage={errors.name.message} isShow={true} />
              )}
            </div>

            <div className={CardContentAreaStyle}>
              <RHFSelect
                name={'city'}
                control={control}
                selectValues={cityList}
              />

              {errors.city?.message && (
                <ErrorAlert errorMessage={errors.city.message} isShow={true} />
              )}
            </div>

            <div className={CardContentAreaStyle}>
              <RHFRadio
                name={'favorite'}
                control={control}
                selectValues={animalList}
              />

              {errors.favorite?.message && (
                <ErrorAlert
                  errorMessage={errors.favorite.message}
                  isShow={true}
                />
              )}
            </div>

            <div className={CardContentButtonStyle}>
              <SimpleButton
                disabled={isLoading}
                buttonName='Submit'
                buttonType='submit'
              />
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
