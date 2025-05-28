javascriptimport './globals.css'

export const metadata = {
  title: 'TeacherPro Platform',
  description: 'Professional teaching platform with privacy controls',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}