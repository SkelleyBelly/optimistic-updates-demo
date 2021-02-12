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
    title: "Final Option",
  });

  const handleToggle = (value: boolean) => {
    setValue(state => ({
      ...state,
      hasBeenRead:value
    }))
  }

  const handleTitleChange = (value: string) => {
    setValue(state => ({
      ...state, 
      title: value
    }))
  }

  return <ListItem {...args} {...value} onToggle={handleToggle} onTitleChange={handleTitleChange}/>;
};

export const Default = Template.bind({});
Default.args = {
  title: "Final Option",
  hasBeenRead: true,
};

export const WithState = TemplateWithState.bind({});
