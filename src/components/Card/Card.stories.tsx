import { Story, Meta } from "@storybook/react";

import Card, { CardProps } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <h1>Hello World</h1>,
};