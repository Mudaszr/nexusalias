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
          background: "#060606",
          overflow: "hidden"
        }}
      >
        {children}
      </body>
    </html>
  )
}
