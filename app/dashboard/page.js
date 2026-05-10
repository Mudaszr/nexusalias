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
      style={{
        background:"#050505",
        color:"#fff",
        minHeight:"100vh",
        fontFamily:"sans-serif",
        padding:"30px"
      }}
    >

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
            fontWeight:"300"
          }}
        >
          NEXUS <span style={{color:"#c9a24d"}}>ALIAS</span>
        </h1>

        <div
          style={{
            color:"#777",
            letterSpacing:"2px",
            fontSize:"13px"
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
          gap:"25px"
        }}
      >

        {/* LEFT SIDE */}

        <div>

          {/* WORLD MAP */}

          <div
            style={{
              background:"#0b0b0b",
              border:"1px solid #151515",
              padding:"25px",
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
                height:"500px",
                background:"#070707"
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
                            fill:"#111",
                            outline:"none",
                            stroke:"#333",
                            strokeWidth:0.5
                          },

                          hover: {
                            fill:"#c9a24d",
                            outline:"none",
                            cursor:"pointer"
                          },

                          pressed: {
                            fill:"#c9a24d",
                            outline:"none"
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
              background:"#0b0b0b",
              border:"1px solid #151515",
              padding:"25px"
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
              background:"#0b0b0b",
              border:"1px solid #151515",
              padding:"25px",
              marginBottom:"25px"
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
                background:"#111"
              }}>
                <div style={{
                  width:"61%",
                  height:"100%",
                  background:"#c9a24d"
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
                background:"#111"
              }}>
                <div style={{
                  width:"38%",
                  height:"100%",
                  background:"#ff4d4d"
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
                background:"#111"
              }}>
                <div style={{
                  width:"74%",
                  height:"100%",
                  background:"#00c853"
                }} />
              </div>

            </div>

          </div>

          {/* INTEL FEED */}

          <div
            style={{
              background:"#0b0b0b",
              border:"1px solid #151515",
              padding:"25px"
            }}
          >

            <h2
              style={{
                marginBottom:"25px",
                fontWeight:"400",
                letterSpacing:"2px"
              }}
            >
              Intelligence Feed
            </h2>

            <div style={{marginBottom:"20px"}}>

              <p style={{color:"#c9a24d"}}>
                ENERGY
              </p>

              <p style={{
                color:"#777",
                marginTop:"8px"
              }}>
                Oil volatility rising amid geopolitical tensions.
              </p>

            </div>

            <div style={{marginBottom:"20px"}}>

              <p style={{color:"#c9a24d"}}>
                AI INDUSTRY
              </p>

              <p style={{
                color:"#777",
                marginTop:"8px"
              }}>
                Semiconductor demand continues expanding globally.
              </p>

            </div>

            <div>

              <p style={{color:"#c9a24d"}}>
                CURRENCY WATCH
              </p>

              <p style={{
                color:"#777",
                marginTop:"8px"
              }}>
                USD dominance remains strong during uncertainty.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  )
}
