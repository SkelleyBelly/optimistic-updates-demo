import { Story, Meta } from "@storybook/react";

import Help from "./Help";

export default {
  title: "Components/Help",
  component: Help,
} as Meta;

const Template: Story = (args) => <Help {...args} />;

export const Default = Template.bind({});