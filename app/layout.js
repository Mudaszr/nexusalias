export const metadata = {
  title: "NexusAlias"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#050505",
          overflowY: "auto",
          overflowX: "hidden",
          scrollbarWidth: "thin",
          scrollbarColor: "#777 transparent"
        }}
      >
        {children}
      </body>
    </html>
  )
}
