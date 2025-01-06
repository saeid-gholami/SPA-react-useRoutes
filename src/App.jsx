import React from 'react'
import Header from './components/Header'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

export default function App() {

  let router = useRoutes(routes)

  return (
    <div>
      <Header />
      {router}
    </div>
  )
}
