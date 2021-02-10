import { Story, Meta,  } from "@storybook/react";
import { useState } from "react";

import Input, { InputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

const TemplateBase: Story<InputProps> = (args) => <Input {...args} />;

const TemplateWithState: Story<InputProps> = (args) => {

    const [value, setValue] = useState<string>("");

    return <Input {...args} value={value} onChange={setValue} onEnter={() => setValue("")} />
};

export const Default = TemplateBase.bind({});
Default.args = {
  placeholder: "Add a new book...",
};

export const WithState = TemplateWithState.bind({});
WithState.args = {
  placeholder: "Add a new book...",
};