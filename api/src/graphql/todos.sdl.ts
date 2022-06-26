export const schema = gql`
  type Todo {
    id: Int!
    description: String!
    done: Boolean!
    createdOn: DateTime!
  }

  type Query {
    # todos: [Todo!]! @requireAuth
    todos(done: Boolean, description: String): [Todo!]! @requireAuth
    todo(id: Int!): Todo @requireAuth
  }

  input CreateTodoInput {
    description: String!
  }

  input UpdateTodoInput {
    description: String
    done: Boolean
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): Todo! @requireAuth
    updateTodo(id: Int!, input: UpdateTodoInput!): Todo! @requireAuth
    deleteTodo(id: Int!): Todo! @requireAuth
    # toggleTodo(id: Int!, done: Boolean!): Todo! @requireAuth
  }
`
