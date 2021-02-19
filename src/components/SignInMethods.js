import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  
  function handleSubmitViaEmail(e) {
    e.preventDefault()
    history.push("/loginViaEmail")
    setLoading(false)
  }
  function handleSubmitViaPhone(e) {
    e.preventDefault()
    history.push("/loginViaPhone")
    setLoading(false)
  }
  function handleSubmitViaGoogle(e) {
    e.preventDefault()
    history.push("/loginViaGoogle")
    setLoading(false)
  }


  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In </h2>
          <Form onSubmit={handleSubmitViaEmail}>
            <Button disabled={loading} className="w-100" type="submit">
                Email
            </Button>
        
          </Form>
          <Form onSubmit={handleSubmitViaPhone}>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
                Phone
            </Button>
          </Form>
          <Form onSubmit={handleSubmitViaGoogle}>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
                Google
            </Button>
          </Form>
        </Card.Body>
      </Card>
      
    </>
  )
}
