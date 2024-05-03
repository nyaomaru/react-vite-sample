import Button from '@mui/material/Button';

type SimpleButtonProps = {
  buttonName: string;
  buttonType?: 'button' | 'submit';
};

export const SimpleButton: React.FC<
  SimpleButtonProps & React.ComponentPropsWithoutRef<'button'>
> = ({ onClick, disabled, buttonName, buttonType = 'button' }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      disabled={disabled}
      type={buttonType}
    >
      {buttonName}
    </Button>
  );
};
