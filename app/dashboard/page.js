"use client"

import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps"

export default function Dashboard() {

  const alerts = [
    {
      country: "United States",
      event: "Federal Reserve signals prolonged high interest rates",
      impact: "HIGH"
    },
    {
      country: "China",
      event: "Manufacturing slowdown pressures supply chains",
      impact: "HIGH"
    },
    {
      country: "India",
      event: "Strong GDP growth boosts investment flows",
      impact: "POSITIVE"
    },
    {
      country: "Germany",
      event: "Industrial slowdown impacts EU outlook",
      impact: "MEDIUM"
    }
  ]

  return (
    <main
      className="dashboard"
      style={{
        background:"#050505",
        color:"#fff",
        minHeight:"100vh",
        fontFamily:"sans-serif",
        padding:"30px",
        overflowX:"hidden"
      }}
    >

      {/* SCROLLBAR */}

      <style>{`

        body {
          margin: 0;
          background: #050505;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .dashboard::-webkit-scrollbar {
          width: 6px;
        }

        .dashboard::-webkit-scrollbar-track {
          background: transparent;
        }

        .dashboard::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.08);
          border-radius: 20px;
        }

      `}</style>

      {/* NAVBAR */}

      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          marginBottom:"30px",
          borderBottom:"1px solid #151515",
          paddingBottom:"20px"
        }}
      >

        <h1
          style={{
            letterSpacing:"4px",
            fontWeight:"300",
            fontSize:"28px"
          }}
        >
          NEXUS <span style={{color:"#c9a24d"}}>ALIAS</span>
        </h1>

        <div
          style={{
            color:"#777",
            letterSpacing:"2px",
            fontSize:"12px"
          }}
        >
          GLOBAL ECONOMIC INTELLIGENCE
        </div>

      </div>

      {/* MAIN GRID */}

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"2fr 1fr",
          gap:"25px",
          alignItems:"start"
        }}
      >

        {/* LEFT SIDE */}

        <div>

          {/* WORLD MAP */}

          <div
            style={{
              background:"#0a0a0a",
              border:"1px solid rgba(255,255,255,0.05)",
              padding:"25px",
              borderRadius:"14px",
              marginBottom:"25px"
            }}
          >

            <h2
              style={{
                marginBottom:"20px",
                fontWeight:"400",
                letterSpacing:"2px"
              }}
            >
              Global Monitoring Grid
            </h2>

            <div
              style={{
                height:"520px",
                background:"#000",
                borderRadius:"12px",
                overflow:"hidden"
              }}
            >

              <ComposableMap
                projectionConfig={{
                  scale: 145
                }}
                style={{
                  width:"100%",
                  height:"100%"
                }}
              >

                <Geographies geography="/world.json">

                  {({ geographies }) =>

                    geographies.map((geo) => (

                      <Geography
                        key={geo.rsmKey}
                        geography={geo}

                        style={{
                          default: {
                            fill: "#050505",
                            stroke: "rgba(255,255,255,0.18)",
                            strokeWidth: 0.6,
                            outline: "none"
                          },

                          hover: {
                            fill: "#161616",
                            stroke: "#ffffff",
                            strokeWidth: 0.8,
                            outline: "none",
                            cursor: "pointer"
                          },

                          pressed: {
                            fill: "#202020",
                            outline: "none"
                          }
                        }}

                      />

                    ))

                  }

                </Geographies>

              </ComposableMap>

            </div>

          </div>

          {/* ALERTS */}

          <div
            style={{
              background:"#0a0a0a",
              border:"1px solid rgba(255,255,255,0.05)",
              padding:"25px",
              borderRadius:"14px"
            }}
          >

            <h2
              style={{
                marginBottom:"25px",
                fontWeight:"400",
                letterSpacing:"2px"
              }}
            >
              Live Economic Alerts
            </h2>

            {alerts.map((alert, index) => (

              <div
                key={index}
                style={{
                  padding:"18px 0",
                  borderBottom:"1px solid #151515"
                }}
              >

                <div
                  style={{
                    display:"flex",
                    justifyContent:"space-between",
                    marginBottom:"10px"
                  }}
                >

                  <h3
                    style={{
                      color:"#c9a24d",
                      fontWeight:"400"
                    }}
                  >
                    {alert.country}
                  </h3>

                  <span
                    style={{
                      color:
                        alert.impact === "HIGH"
                          ? "#ff4d4d"
                          : alert.impact === "POSITIVE"
                          ? "#00c853"
                          : "#ffaa00",
                      fontSize:"12px",
                      letterSpacing:"2px"
                    }}
                  >
                    {alert.impact}
                  </span>

                </div>

                <p
                  style={{
                    color:"#888",
                    lineHeight:"1.7"
                  }}
                >
                  {alert.event}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div>

          {/* STATUS */}

          <div
            style={{
              background:"#0a0a0a",
              border:"1px solid rgba(255,255,255,0.05)",
              padding:"25px",
              borderRadius:"14px",
              marginBottom:"25px",
              position:"sticky",
              top:"20px"
            }}
          >

            <h2
              style={{
                marginBottom:"25px",
                fontWeight:"400",
                letterSpacing:"2px"
              }}
            >
              System Status
            </h2>

            <div style={{marginBottom:"20px"}}>

              <p style={{
                color:"#777",
                marginBottom:"8px"
              }}>
                Global Stability
              </p>

              <div style={{
                height:"10px",
                background:"#111",
                borderRadius:"20px"
              }}>
                <div style={{
                  width:"61%",
                  height:"100%",
                  background:"#c9a24d",
                  borderRadius:"20px"
                }} />
              </div>

            </div>

            <div style={{marginBottom:"20px"}}>

              <p style={{
                color:"#777",
                marginBottom:"8px"
              }}>
                Recession Risk
              </p>

              <div style={{
                height:"10px",
                background:"#111",
                borderRadius:"20px"
              }}>
                <div style={{
                  width:"38%",
                  height:"100%",
                  background:"#ff4d4d",
                  borderRadius:"20px"
                }} />
              </div>

            </div>

            <div>

              <p style={{
                color:"#777",
                marginBottom:"8px"
              }}>
                Investor Confidence
              </p>

              <div style={{
                height:"10px",
                background:"#111",
                borderRadius:"20px"
              }}>
                <div style={{
                  width:"74%",
                  height:"100%",
                  background:"#00c853",
                  borderRadius:"20px"
                }} />
              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  )
}
