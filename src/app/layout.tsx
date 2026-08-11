import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brian Hitchin — Portfolio",
  description:
    "Brian Hitchin — full-stack engineer building platforms where applied AI meets careful backend engineering.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Brian Hitchin — Portfolio",
    description:
      "Brian Hitchin — full-stack engineer building platforms where applied AI meets careful backend engineering.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
