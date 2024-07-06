import { style } from '@vanilla-extract/css';

export const ButtonStyle = style({
  margin: '1rem',
});

export const CardContentStyle = style({
  textAlign: 'left',
  gap: '1rem',
});

export const CardContentAreaStyle = style({
  marginTop: '1rem',
});

export const CardContentButtonStyle = style([
  ButtonStyle,
  { marginBottom: 0, textAlign: 'center' },
]);
