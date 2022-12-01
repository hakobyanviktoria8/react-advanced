import React, { useState } from 'react'
import Layout from './Layout'
import "./../util/styles/Login.css"

function Login() {
  const [data, setData] = useState(null)

  return (
    <Layout>
        <h2>Login</h2>
        <form className='Login'>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="submit"/>
        </form>
    </Layout>
  )
}

export default Login