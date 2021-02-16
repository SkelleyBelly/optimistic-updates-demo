import { Story, Meta } from "@storybook/react";

import Explainer from "./Explainer";

export default {
  title: "Components/Explainer",
  component: Explainer,
} as Meta;

const Template: Story = (args) => <Explainer {...args} />;

export const Default = Template.bind({});