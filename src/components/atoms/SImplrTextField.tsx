import TextField from '@mui/material/TextField';

type SimpleTextFieldProps = {
  onChange: (param: any) => void;
  id: string;
  label: string;
};

const simpleTextFieldStyle = {
  '& .MuiInputBase-input': {
    color: '#FFFFFF',
  },
  '& label': {
    color: '#FFFFFF !important',
  },
};

export const SimpleTextField: React.FC<SimpleTextFieldProps> = ({
  onChange,
  id,
  label,
}) => {
  return (
    <TextField
      sx={simpleTextFieldStyle}
      id={id}
      label={label}
      variant="filled"
      onChange={onChange}
    />
  );
};
