import { forwardRef, ComponentPropsWithoutRef } from 'react';
import TextField from '@mui/material/TextField';

type TextFieldProps = {
  id: string;
  label: string;
};

type SimpleTexFieldProps = ComponentPropsWithoutRef<'input'> & TextFieldProps;

const simpleTextFieldStyle = {
  '& .MuiInputBase-input': {
    color: '#FFFFFF',
  },
  '& label': {
    color: '#FFFFFF !important',
  },
};

export const SimpleTextField = forwardRef<
  HTMLInputElement,
  SimpleTexFieldProps
>(({ id, label, ...props }, ref) => {
  return (
    <TextField
      sx={simpleTextFieldStyle}
      id={id}
      label={label}
      variant="filled"
      inputRef={ref}
    />
  );
});
