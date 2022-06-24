import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TodoPage = () => {
  return (
    <>
      <MetaTags title="Todo" description="Todo page" />

      <h1>TodoPage</h1>
      <p>
        Find me in <code>./web/src/pages/TodoPage/TodoPage.tsx</code>
      </p>
      <p>
        My default route is named <code>todo</code>, link to me with `
        <Link to={routes.todo()}>Todo</Link>`
      </p>
    </>
  )
}

export default TodoPage
