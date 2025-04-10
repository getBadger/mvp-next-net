import "../styles/globals.css";
import "../styles/app.css";

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }