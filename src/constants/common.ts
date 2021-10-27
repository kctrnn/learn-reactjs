import { Meetup, Todo } from 'models';

export const TODO_LIST: Todo[] = [
  {
    id: 1,
    text: 'Eat',
    status: 'new',
  },
  {
    id: 2,
    text: 'Sleep',
    status: 'completed',
  },
  {
    id: 3,
    text: 'Code',
    status: 'new',
  },
];

export const MEETUP_LIST: Meetup[] = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetup street 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetup street 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];
