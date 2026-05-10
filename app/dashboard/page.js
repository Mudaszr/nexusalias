export default function Dashboard() {

  const alerts = [
    {
      country: "United States",
      event: "Federal Reserve signals prolonged high interest rates",
      impact: "HIGH"
    },
    {
      country: "China",
      event: "Manufacturing slowdown pressures global supply chains",
      impact: "HIGH"
    },
    {
      country: "Germany",
      event: "Industrial output weakens amid energy concerns",
      impact: "MEDIUM"
    },
    {
      country: "India",
      event: "Strong GDP growth attracts foreign investment",
      impact: "POSITIVE"
    }
  ]

  return (
    <main
      style={{
        background:"#050505",
        color:"#fff",
        minHeight:"100vh",
        fontFamily:"sans-serif",
        padding:"40px"
      }}
    >

      {/* NAVBAR */}

      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          marginBottom:"50px",
          borderBottom:"1px solid #151515",
          paddingBottom:"20px"
        }}
      >

        <h1
          style={{
            letterSpacing:"4px",
            fontSize:"30px",
            fontWeight:"300"
          }}
        >
          NEXUS <span style={{color:"#c9a24d"}}>ALIAS</span>
        </h1>

        <div
          style={{
            color:"#777",
            letterSpacing:"2px",
            fontSize:"14px"
          }}
        >
          GLOBAL ECONOMIC INTELLIGENCE
        </div>

      </div>

      {/* GRID */}

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"2fr 1fr",
          gap:"25px"
        }}
      >

        {/* LEFT */}

        <div>

          {/* MAP */}

          <div
            style={{
              background:"#0b0b0b",
              border:"1px solid #151515",
              padding:"30px",
              marginBottom:"25px",
              height:"420px"
            }}
          >

            <h2
              style={{
                marginBottom:"25px",
                fontWeight:"400",
                letterSpacing:"2px"
              }}
            >
              Global Monitoring Grid
            </h2>

            <div
              style={{
                height:"320px",
                border:"1px dashed #333",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"#666",
                letterSpacing:"3px"
              }}
            >
              WORLD MAP ACTIVE
            </div>

          </div>

          {/* ALERTS */}

          <div
            style={{
              background:"#0b0b0b",
              border:"1px solid #151515",
              padding:"30px"
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
                  padding:"20px",
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
                      fontSize:"13px",
                      letterSpacing:"2px"
                    }}
                  >
                    {alert.impact}
                  </span>

                </div>

                <p
                  style={{
                    color:"#999",
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
              padding:"30px",
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
              Market Sentiment
            </h2>

            <div style={{marginBottom:"20px"}}>
              <p style={{color:"#777", marginBottom:"8px"}}>
                Global Stability
              </p>

              <div
                style={{
                  height:"10px",
                  background:"#111"
                }}
              >
                <div
                  style={{
                    width:"58%",
                    height:"100%",
                    background:"#c9a24d"
                  }}
                />
              </div>
            </div>

            <div style={{marginBottom:"20px"}}>
              <p style={{color:"#777", marginBottom:"8px"}}>
                Recession Risk
              </p>

              <div
                style={{
                  height:"10px",
                  background:"#111"
                }}
              >
                <div
                  style={{
                    width:"42%",
                    height:"100%",
                    background:"#ff4d4d"
                  }}
                />
              </div>
            </div>

            <div>
              <p style={{color:"#777", marginBottom:"8px"}}>
                Investor Confidence
              </p>

              <div
                style={{
                  height:"10px",
                  background:"#111"
                }}
              >
                <div
                  style={{
                    width:"67%",
                    height:"100%",
                    background:"#00c853"
                  }}
                />
              </div>
            </div>

          </div>

          {/* INTEL */}

          <div
            style={{
              background:"#0b0b0b",
              border:"1px solid #151515",
              padding:"30px"
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
                OIL MARKETS
              </p>

              <p style={{color:"#777", marginTop:"8px"}}>
                Middle East tensions driving volatility.
              </p>
            </div>

            <div style={{marginBottom:"20px"}}>
              <p style={{color:"#c9a24d"}}>
                CURRENCY WATCH
              </p>

              <p style={{color:"#777", marginTop:"8px"}}>
                USD remains dominant amid global uncertainty.
              </p>
            </div>

            <div>
              <p style={{color:"#c9a24d"}}>
                AI SECTOR
              </p>

              <p style={{color:"#777", marginTop:"8px"}}>
                Semiconductor demand continues accelerating.
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  )
}
