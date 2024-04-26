import Button from '@mui/material/Button';

type SimpleButtonProps = {
  onClick: (param: any) => void;
  buttonName: string;
};

export const SimpleButton: React.FC<SimpleButtonProps> = ({
  onClick,
  buttonName,
}) => {
  return (
    <Button variant="outlined" onClick={onClick}>
      {buttonName}
    </Button>
  );
};
