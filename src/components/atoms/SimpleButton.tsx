import Button from '@mui/material/Button';

type SimpleButtonProps = {
  buttonName: string;
  buttonType?: 'button' | 'submit';
  color?: 'primary' | 'secondary';
};

export const SimpleButton: React.FC<
  SimpleButtonProps & React.ComponentPropsWithoutRef<'button'>
> = ({
  onClick,
  disabled,
  buttonName,
  buttonType = 'button',
  color = 'primary',
}) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      disabled={disabled}
      type={buttonType}
      color={color}
    >
      {buttonName}
    </Button>
  );
};
