import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const todos: QueryResolvers['todos'] = ({ done, description }) => {
  return db.todo.findMany({
    where: {
      done,
      description: { contains: description },
    },
  })
}

export const todo: QueryResolvers['todo'] = ({ id }) => {
  return db.todo.findUnique({
    where: { id },
  })
}

export const createTodo: MutationResolvers['createTodo'] = ({ input }) => {
  return db.todo.create({
    data: input,
  })
}

export const updateTodo: MutationResolvers['updateTodo'] = ({ id, input }) => {
  return db.todo.update({
    data: input,
    where: { id },
  })
}

export const deleteTodo: MutationResolvers['deleteTodo'] = ({ id }) => {
  return db.todo.delete({
    where: { id },
  })
}

// export const toggleTodo = ({ id, done }) => {
//   return db.todo.update({
//     where: { id },
//     data: { done },
//   })
// }
