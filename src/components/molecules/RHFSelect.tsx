import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller, type RegisterOptions } from 'react-hook-form';

import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const CustomMenuItem = styled(MenuItem)({
  color: 'gray',
});

type RHFSelectProps<T extends FieldValues> = {
  control: Control<T, object>;
  name: Path<T>;
  selectValues: string[];
  rules?: RegisterOptions<T>;
};

export const RHFSelect = <T extends FieldValues>({
  name,
  control,
  selectValues,
  rules,
}: RHFSelectProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <FormControl fullWidth error={fieldState.invalid}>
          <InputLabel id={`select-${name.toLocaleLowerCase()}`}>
            {name}
          </InputLabel>
          <Select
            labelId={`select-${name.toLocaleLowerCase()}`}
            label={name}
            {...field}
          >
            <CustomMenuItem value=''>No select</CustomMenuItem>
            {selectValues.map((item, index) => (
              <MenuItem value={index + 1}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};
