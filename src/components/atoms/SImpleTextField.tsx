import TextField from '@mui/material/TextField';

type TextFieldProps = {
  id: string;
  label: string;
  isError?: boolean;
  helperText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const simpleTextFieldStyle = {
  '& .MuiInputBase-input': {
    color: '#FFFFFF',
  },
  '& label': {
    color: '#FFFFFF !important',
  },
};

export const SimpleTextField = ({
  id,
  label,
  isError,
  helperText,
  onChange,
  ...field
}: TextFieldProps) => {
  return (
    <TextField
      sx={simpleTextFieldStyle}
      id={id}
      label={label}
      variant="filled"
      error={isError}
      helperText={helperText}
      onChange={onChange}
      {...field}
    />
  );
};
