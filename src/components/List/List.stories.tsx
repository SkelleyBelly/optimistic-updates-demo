import { Story, Meta } from "@storybook/react";

import List, { ListProps } from "./List";

export default {
  title: "Components/List",
  component: List,
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  books: [
    {
      name: "Final Option",
      hasBeenRead: true,
    },
    {
      name: "Marauder",
      hasBeenRead: true,
    },
    {
      name: "The Chimp Paradox",
      hasBeenRead: false,
    },
    {
      name: "The Guest List",
      hasBeenRead: false,
    },
    {
      name: "The Galaxy, and the Grounds Within",
      hasBeenRead: false,
    },
  ],
};
