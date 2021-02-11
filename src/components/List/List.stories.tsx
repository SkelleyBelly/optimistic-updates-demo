import { Story, Meta } from "@storybook/react";
import { useState } from "react";

import List, { ListProps, Book } from "./List";

export default {
  title: "Components/List",
  component: List,
} as Meta;

const initialState = [
  {
    id: 1,
    name: "Final Option",
    hasBeenRead: true,
  },
  {
    id: 2,
    name: "Marauder",
    hasBeenRead: true,
  },
  {
    id: 3,
    name: "The Chimp Paradox",
    hasBeenRead: false,
  },
  {
    id: 4,
    name: "The Guest List",
    hasBeenRead: false,
  },
  {
    id: 5,
    name: "The Galaxy, and the Grounds Within",
    hasBeenRead: false,
  },
];

const Template: Story<ListProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  books: initialState,
};

const TemplateWithState: Story<ListProps> = (args) => {
  const [books, setBooks] = useState(initialState);

  const onChange = (value: Book) => {
    setBooks((currentBooks) => {
      let updatedBooks = [...currentBooks];

      const { id: searchID } = value;
      const index = updatedBooks.findIndex(({ id }) => id === searchID);

      updatedBooks[index] = value;
      return updatedBooks;
    });
  };

  const onAdd = (name: Book["name"], clearInput: () => void) => {
    setBooks((currentBooks) => {
      const nextId = Math.max(...currentBooks.map(({ id }) => id)) + 1;

      return [...currentBooks, { id: nextId, name, hasBeenRead: false }];
    });
    clearInput();
  };

  return <List {...args} books={books} onChange={onChange} onAdd={onAdd} />;
};

export const WithState = TemplateWithState.bind({});
