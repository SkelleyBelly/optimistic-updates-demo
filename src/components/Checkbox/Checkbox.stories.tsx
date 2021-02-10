import { Story, Meta } from "@storybook/react";
import { useState } from "react";

import Checkbox, { CheckboxProps } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

const TemplateWithState: Story<CheckboxProps> = (args) => {
  const [value, setValue] = useState(false);

  return <Checkbox {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});

export const WithState = TemplateWithState.bind({});
