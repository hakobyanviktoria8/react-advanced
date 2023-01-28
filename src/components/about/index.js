import React from 'react'
import { Outlet } from 'react-router'
import Layout from '../layout/Layout'

export const About = () => {
  return (
    <Layout>
          <h1>About page</h1>
          <Outlet/>
    </Layout>
  )
}
