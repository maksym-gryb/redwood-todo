import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY as TodosQuery } from 'src/components/TodosCell'

const TOGGLE = gql`
  mutation UpdateTodoMutation($id: Int!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
      id
    }
  }
`

const DELETE = gql`
  mutation DeleteTodoMutation($id: Int!) {
    deleteTodo(id: $id) {
      id
    }
  }
`

const Todo = ({ todo }) => {
  const [updateTodo] = useMutation(TOGGLE, {
    onCompleted: () => {
      toast.success('Toggled todo!')
    },
    refetchQueries: [{ query: TodosQuery }],
  })

  const [onDelete] = useMutation(DELETE, {
    onCompleted: () => {
      toast.success('DELETED!')
    },
    refetchQueries: [{ query: TodosQuery }],
  })

  const handleToggle = (id, newDone) => {
    updateTodo({ variables: { id, input: { done: newDone } } })
  }

  const handleDelete = (id) => {
    onDelete({ variables: { id } })
  }

  return (
    <div className="text-white">
      <input
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        value={todo.done}
        id="flexCheckChecked"
        onChange={() => handleToggle(todo.id, !todo.done)}
        checked={todo.done}
      />
      {todo.description}{' '}
      <button
        type="button"
        className="inline-block px-2 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={() => handleDelete(todo.id)}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fa"
          data-icon="ban"
          className="w-4 h-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"
          ></path>
        </svg>
      </button>
    </div>
  )
}

export default Todo
