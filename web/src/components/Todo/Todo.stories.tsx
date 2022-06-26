import Todo from './Todo'

export const generated = () => {
  const item = { description: 'stuff hoes here', done: true }
  return <Todo todo={item} />
}

export default { title: 'Components/Todo' }
