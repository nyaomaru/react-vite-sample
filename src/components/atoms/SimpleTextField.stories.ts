import type { Meta, StoryObj } from '@storybook/react';
import { fn, within, userEvent, expect } from '@storybook/test';
import { SimpleTextField } from './SimpleTextField';

const meta = {
  title: 'Components/Atoms/SimpleTextField',
  component: SimpleTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { label: 'textField', id: 'textField', onChange: fn() },
} satisfies Meta<typeof SimpleTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _SimpleTextField: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputField = await canvas.findByLabelText('textField');
    await userEvent.type(inputField, 'aaa');
    await expect(inputField).toHaveValue('aaa');
  },
};

export const _SimpleTextFieldIsError: Story = {
  args: {
    isError: true,
  },
};

export const _SimpleTextFieldHelperText: Story = {
  args: {
    helperText: 'helperText',
  },
};
