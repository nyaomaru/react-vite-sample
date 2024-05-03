import Alert from '@mui/material/Alert';

type ErrorAlertProps = {
  errorMessage: string;
  isShow: boolean;
};

export const ErrorAlert: React.FC<ErrorAlertProps> = ({
  errorMessage,
  isShow = true,
}) => {
  return (
    <>
      {isShow && (
        <Alert variant="filled" severity="error">
          {errorMessage}
        </Alert>
      )}
    </>
  );
};
