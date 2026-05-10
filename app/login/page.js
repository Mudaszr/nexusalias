export default function LoginPage() {
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
          placeholder="Password"
          style={{
            width:"100%",
            padding:"16px",
            marginBottom:"30px",
            background:"#111",
            border:"1px solid #222",
            color:"#fff"
          }}
        />

        <button style={{
          width:"100%",
          padding:"16px",
          background:"#c9a24d",
          border:"none",
          color:"#000",
          letterSpacing:"3px",
          fontWeight:"bold",
          cursor:"pointer"
        }}>
          CONNECT
        </button>

      </div>

    </main>
  )
}
