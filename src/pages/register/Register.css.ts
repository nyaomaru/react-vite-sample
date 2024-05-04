import { style } from '@vanilla-extract/css';

export const BaseFieldStyle = style({
  display: 'block',
  marginTop: '1rem',
});

export const FieldStyle = style([
  BaseFieldStyle,
  {
    width: '100%',
  },
]);
