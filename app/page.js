"use client"

import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps"

export default function Dashboard() {

  return (
    <main
      style={{
        background:"#050505",
        color:"#fff",
        minHeight:"100vh",
        fontFamily:"sans-serif",
        padding:"30px",
        overflow:"visible"
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

      {/* GRID */}

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"2fr 1fr",
          gap:"25px",
          alignItems:"start"
        }}
      >

        {/* LEFT */}

        <div>

          {/* MAP */}

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
                width:"100%",
                height:"520px",
                overflow:"hidden",
                border:"1px solid #111",
                background:"#070707"
              }}
            >

              <ComposableMap
                projectionConfig={{
                  scale: 150
                }}
                style={{
                  width:"100%",
                  height:"100%"
                }}
              >

                <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">

                  {({ geographies }) =>

                    geographies.map((geo) => (

                      <Geography
                        key={geo.rsmKey}
                        geography={geo}

                        style={{
                          default: {
                            fill:"#101010",
                            stroke:"#2a2a2a",
                            strokeWidth:0.5,
                            outline:"none"
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

            {[
              {
                country:"United States",
                event:"Federal Reserve maintains high rates",
                level:"#ff4d4d"
              },

              {
                country:"China",
                event:"Supply chain slowdown detected",
                level:"#ffaa00"
              },

              {
                country:"India",
                event:"Foreign investment inflows rising",
                level:"#00c853"
              }

            ].map((item,index)=>(

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
                    {item.country}
                  </h3>

                  <div
                    style={{
                      width:"10px",
                      height:"10px",
                      borderRadius:"50%",
                      background:item.level
                    }}
                  />

                </div>

                <p
                  style={{
                    color:"#888",
                    lineHeight:"1.7"
                  }}
                >
                  {item.event}
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

            {[
              {
                title:"Global Stability",
                width:"62%",
                color:"#c9a24d"
              },

              {
                title:"Recession Risk",
                width:"39%",
                color:"#ff4d4d"
              },

              {
                title:"Investor Confidence",
                width:"73%",
                color:"#00c853"
              }

            ].map((bar,index)=>(

              <div
                key={index}
                style={{
                  marginBottom:"25px"
                }}
              >

                <p
                  style={{
                    color:"#777",
                    marginBottom:"8px"
                  }}
                >
                  {bar.title}
                </p>

                <div
                  style={{
                    height:"10px",
                    background:"#111"
                  }}
                >

                  <div
                    style={{
                      width:bar.width,
                      height:"100%",
                      background:bar.color
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </main>
  )
}
