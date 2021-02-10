import { Story, Meta } from "@storybook/react";
import { useState } from "react";

import ListItem, { ListItemProps } from "./ListItem";

export default {
  title: "Components/ListItem",
  component: ListItem,
} as Meta;

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />;

const TemplateWithState: Story<ListItemProps> = (args) => {
  const [value, setValue] = useState({
    hasBeenRead: false,
    name: "Final Option",
  });

  const handleToggle = (value: boolean) => {
    setValue(state => ({
      ...state,
      hasBeenRead:value
    }))
  }

  const handleNameChange = (value: string) => {
    setValue(state => ({
      ...state, 
      name: value
    }))
  }

  return <ListItem {...args} {...value} onToggle={handleToggle} onNameChange={handleNameChange}/>;
};

export const Default = Template.bind({});
Default.args = {
  hasBeenRead: true,
};

export const WithState = TemplateWithState.bind({});
