import React from 'react'
import Layout from './Layout'

function Login() {
  return (
    <Layout>
        <h2>Login</h2>
        <form>
            <input type="text" placholder="First name" />
            <input type="text" placholder="Last name" />
        </form>
    </Layout>
  )
}

export default Login