import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller, type RegisterOptions } from 'react-hook-form';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

type RHFSelectProps<T extends FieldValues> = {
  control: Control<T, object>;
  name: Path<T>;
  rules?: RegisterOptions<T>;
};

export const RHFSelect = <T extends FieldValues>({
  name,
  control,
  rules,
}: RHFSelectProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <FormControl fullWidth error={fieldState.invalid}>
          <InputLabel id='area-label'>City</InputLabel>
          <Select labelId='area-label' label='City' {...field}>
            <MenuItem value='' sx={{ color: 'gray' }}>
              No select
            </MenuItem>
            <MenuItem value={1}>Tokyo</MenuItem>
            <MenuItem value={2}>Amsterdam</MenuItem>
            <MenuItem value={4}>London</MenuItem>
            <MenuItem value={5}>Paris</MenuItem>
            <MenuItem value={6}>NewYork</MenuItem>
            <MenuItem value={7}>LA</MenuItem>
            <MenuItem value={8}>Bologna</MenuItem>
            <MenuItem value={9}>Madrid</MenuItem>
          </Select>
        </FormControl>
      )}
    />
  );
};
