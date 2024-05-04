import {
  Path,
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

import TextField from '@mui/material/TextField';

import { RHFTextInputStyle } from './RHFTextInput.css';

const TextFieldStyle = {
  '& .MuiInputBase-input': {
    color: '#FFFFFF',
  },
  '& label': {
    color: '#FFFFFF !important',
  },
};

type RHFTextInputProps<T extends FieldValues> = {
  control: Control<T, object>;
  name: Path<T>;
  rules: RegisterOptions<T>;
};

export const RHFTextInput = <T extends FieldValues>({
  name,
  control,
  rules,
}: RHFTextInputProps<T>) => {
  return (
    <div className={RHFTextInputStyle}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            sx={TextFieldStyle}
            id={name}
            label={name}
            error={fieldState.invalid}
            helperText={fieldState.error?.message ?? ''}
          />
        )}
      />
    </div>
  );
};
