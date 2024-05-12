import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SimpleButton } from './SimpleButton';

const meta = {
  title: 'Components/Atoms/SimpleButton',
  component: SimpleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { buttonName: 'Button', onClick: fn() },
} satisfies Meta<typeof SimpleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _SimpleButton: Story = {};

export const _SimpleButtonDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const _SimpleButtonSecondary: Story = {
  args: {
    color: 'secondary',
  },
};

export const _SimpleButtonInfo: Story = {
  args: {
    color: 'info',
  },
};
