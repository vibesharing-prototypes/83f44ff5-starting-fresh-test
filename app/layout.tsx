import "./globals.css";
export const metadata = { title: "Prototype", description: "Deployed via VibeSharing" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}