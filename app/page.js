"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {

  const router = useRouter()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  // AUTHORIZED USERS
  const users = [
    {
      username: "Blaze",
      password: "alias123"
    },
    {
      username: "admin",
      password: "nexus2026"
    }
  ]

  function handleLogin() {

    const validUser = users.find(
      user =>
        user.username === username &&
        user.password === password
    )

    if(validUser){
      router.push("/dashboard")
    } else {
      setError("ACCESS DENIED")
    }
  }

  return (
    <main style={{
      background:"#060606",
      color:"#fff",
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontFamily:"sans-serif"
    }}>

      <div style={{
        width:"400px",
        padding:"40px",
        background:"#0b0b0b",
        border:"1px solid #1a1a1a"
      }}>

        <h1 style={{
          textAlign:"center",
          marginBottom:"40px",
          letterSpacing:"4px"
        }}>
          NEXUS <span style={{color:"#c9a24d"}}>ACCESS</span>
        </h1>

        <input
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          placeholder="Username"
          style={{
            width:"100%",
            padding:"16px",
            marginBottom:"20px",
            background:"#111",
            border:"1px solid #222",
            color:"#fff"
          }}
        />

        <input
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
          style={{
            width:"100%",
            padding:"16px",
            marginBottom:"20px",
            background:"#111",
            border:"1px solid #222",
            color:"#fff"
          }}
        />

        {error && (
          <p style={{
            color:"#ff4d4d",
            marginBottom:"20px",
            letterSpacing:"2px",
            textAlign:"center"
          }}>
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          style={{
            width:"100%",
            padding:"16px",
            background:"#c9a24d",
            border:"none",
            color:"#000",
            letterSpacing:"3px",
            fontWeight:"bold",
            cursor:"pointer"
          }}
        >
          CONNECT
        </button>

      </div>

    </main>
  )
}
