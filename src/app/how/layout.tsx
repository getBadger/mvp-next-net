import "../styles/globals.css";
import "../styles/app.css";
import "../styles/index.css";

export default function HowLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }