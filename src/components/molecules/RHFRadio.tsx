import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller, type RegisterOptions } from 'react-hook-form';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

type RHFRadioProps<T extends FieldValues> = {
  control: Control<T, object>;
  name: Path<T>;
  selectValues: string[];
  rules?: RegisterOptions<T>;
};

export const RHFRadio = <T extends FieldValues>({
  name,
  control,
  selectValues,
  rules,
}: RHFRadioProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <FormControl fullWidth error={fieldState.invalid}>
          <FormLabel id={`radio-buttons-group-label-${name.toLocaleLowerCase}`}>
            {name}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby={`radio-buttons-group-${name.toLocaleLowerCase}`}
            name={`row-radio-buttons-group-${name.toLocaleLowerCase}`}
          >
            {selectValues.map((item, index) => (
              <FormControlLabel
                {...field}
                value={String(index)}
                control={<Radio />}
                label={item}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};
