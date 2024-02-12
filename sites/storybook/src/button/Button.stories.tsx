import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<HTMLButtonElement> = {
  component: () => <button/>,
};

export default meta;
type Story = StoryObj<typeof HTMLButtonElement>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <button> this is button</button>,
};