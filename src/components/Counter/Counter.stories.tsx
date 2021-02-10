import { Story, Meta,  } from "@storybook/react";

import Counter, { CounterProps } from "./Counter";

export default {
  title: "Components/Counter",
  component: Counter,
} as Meta;

const Template: Story<CounterProps> = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 7
};

export const Max = Template.bind({});
Max.args = {
  value: 150
};

export const Min = Template.bind({});
Min.args = {
  value: -50
};

export const Undefined = Template.bind({});
Undefined.args = {
  value: undefined
};