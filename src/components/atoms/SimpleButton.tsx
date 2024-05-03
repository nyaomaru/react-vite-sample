import Button from '@mui/material/Button';

type SimpleButtonProps = {
  buttonName: string;
};

export const SimpleButton: React.FC<
  SimpleButtonProps & React.ComponentPropsWithoutRef<'button'>
> = ({ onClick, buttonName, disabled }) => {
  return (
    <Button variant="outlined" onClick={onClick} disabled={disabled}>
      {buttonName}
    </Button>
  );
};
