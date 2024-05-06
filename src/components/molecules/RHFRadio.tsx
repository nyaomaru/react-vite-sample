import type { Path, Control, FieldValues } from 'react-hook-form';
import { Controller, type RegisterOptions } from 'react-hook-form';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

type RHFRadioProps<T extends FieldValues> = {
  control: Control<T, object>;
  name: Path<T>;
  rules?: RegisterOptions<T>;
};

export const RHFRadio = <T extends FieldValues>({
  name,
  control,
  rules,
}: RHFRadioProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <FormControl fullWidth error={fieldState.invalid}>
          <FormLabel id="demo-row-radio-buttons-group-label">Option</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              {...field}
              value="0"
              control={<Radio />}
              label="cat"
            />
            <FormControlLabel
              {...field}
              value="1"
              control={<Radio />}
              label="dog"
            />
            <FormControlLabel
              {...field}
              value="2"
              control={<Radio />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};
