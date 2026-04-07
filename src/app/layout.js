import "./globals.css";

export const metadata = {
  title: "Fidarix | Automated Lead Generation Systems",
  description: "Get more customers in 7 days with our automated lead generation systems, including high-converting websites and CRM automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
