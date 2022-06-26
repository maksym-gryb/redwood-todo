import type { TodosQuery } from 'types/graphql'

import { CheckboxField } from '@redwoodjs/forms'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Todo from 'src/components/Todo'

export const QUERY = gql`
  query TodosQuery {
    todos {
      id
      description
      done
      createdOn
    }
  }
`

export const Loading = () => <div className="text-white">Loading...</div>

export const Empty = () => <div className="text-white">Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ todos }: CellSuccessProps<TodosQuery>) => {
  return (
    <ul>
      {todos.map((item) => {
        return (
          // convert this into a Todo component
          <li key={item.id}>
            <Todo todo={item} />
          </li>
        )
      })}
    </ul>
  )
}
