import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

type TextFieldProps = {
  id: string;
  label: string;
  isError?: boolean;
  helperText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: '#FFFFFF',
  },
  '& label': {
    color: '#FFFFFF !important',
  },
});

export const SimpleTextField = ({
  id,
  label,
  isError,
  helperText,
  onChange,
  ...field
}: TextFieldProps) => {
  return (
    <CustomTextField
      id={id}
      label={label}
      variant='filled'
      error={isError}
      helperText={helperText}
      onChange={onChange}
      {...field}
    />
  );
};
