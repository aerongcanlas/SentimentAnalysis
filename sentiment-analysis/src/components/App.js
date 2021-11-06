import React from "react"
import Signup from "./Signup"
import Dashboard from "./Dashboard"
import Login from "./Login"
import WordProcessing from "./WordProcessing"
import Page1 from "./Page1"
import Page2 from "./Page2"
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Dashboard/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/wordprocessing" element={<WordProcessing/>} />
              <Route path="/page1" element={<Page1/>} />
              <Route path="/page2" element={<Page2/>} />

            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App