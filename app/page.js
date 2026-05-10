export default function Home() {
  return (
    <main style={{
      background:"#060606",
      color:"#fff",
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontFamily:"serif"
    }}>
      <div style={{textAlign:"center"}}>

        <h1 style={{
          fontSize:"72px",
          letterSpacing:"6px",
          fontWeight:"300"
        }}>
          NEXUS <span style={{color:"#c9a24d"}}>ALIAS</span>
        </h1>

        <div style={{
          width:"90px",
          height:"2px",
          background:"#c9a24d",
          margin:"25px auto"
        }} />

        <p style={{
          color:"#777",
          letterSpacing:"3px",
          marginBottom:"50px"
        }}>
          Silent · Secure · Supreme
        </p>

        <a
          href="/login"
          style={{
            display:"inline-block",
            padding:"16px 42px",
            border:"1px solid #c9a24d",
            color:"#c9a24d",
            textDecoration:"none",
            letterSpacing:"3px"
          }}
        >
          ENTER THE NEXUS
        </a>

      </div>
    </main>
  )
}
