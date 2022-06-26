// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  todos: [
    {
      id: 42,
      description: 'That one thing',
      done: false,
      createdOn: '2022-01-10',
    },
    {
      id: 43,
      description: 'Something else I need to do',
      done: true,
      createdOn: '2022-01-10',
    },
    {
      id: 44,
      description: "Oh... can'f forget about that one either",
      done: false,
      createdOn: '2022-01-10',
    },
  ],
})
