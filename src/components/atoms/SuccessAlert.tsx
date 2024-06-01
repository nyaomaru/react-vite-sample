import Alert from '@mui/material/Alert';

type SuccessAlertProps = {
  successMessage: string;
  isShow: boolean;
};

export const SuccessAlert: React.FC<SuccessAlertProps> = ({
  successMessage,
  isShow = true,
}) => {
  return (
    <>
      {isShow && (
        <Alert variant='filled' severity='success'>
          {successMessage}
        </Alert>
      )}
    </>
  );
};
