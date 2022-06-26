import { Toaster } from '@redwoodjs/web/dist/toast'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  )
}

export default MainLayout
