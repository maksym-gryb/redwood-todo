import { useState } from 'react'

import { useMutation } from '@apollo/client'

import { Form, TextField, Submit, Label } from '@redwoodjs/forms'
// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import TodosCell from 'src/components/TodosCell'
import { QUERY as TodosQuery } from 'src/components/TodosCell'

const CREATE = gql`
  mutation CreateTodoMutation($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      description
      done
      createdOn
    }
  }
`

const TodoPage = () => {
  const [hasPosted, setHasPosted] = useState(false)
  const [createTodo, { loading, error }] = useMutation(CREATE, {
    onCompleted: () => {
      setHasPosted(true)
      toast.success('Created new TODO item!')
    },
    refetchQueries: [{ query: TodosQuery }],
  })

  const onSubmit = (input) => {
    createTodo({ variables: { input } })
  }

  return (
    <>
      <MetaTags title="Todo" description="Todo page" />

      <div className="text-xl font-medium text-white bg-black">TodoPage</div>
      <hr />
      <Form onSubmit={onSubmit} className="mt-4 w-full my-8">
        <Label name="description" className="text-white mx-2">
          New Todo Item:
        </Label>
        <TextField className="mx-2" name="description" />
        <Submit
          disabled={loading}
          className="block mt-2 bg-blue-500 text-white text-xs font-semibold uppercase tracking-wide rounded px-3 py-2 disabled:opacity-50"
        >
          Add Todo
        </Submit>
      </Form>
      <hr />
      <TodosCell />
    </>
  )
}

export default TodoPage
