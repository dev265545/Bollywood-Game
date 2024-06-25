import Providers from "@/components/Providers";
import "./globals.css";

// Done after the video and optional: add page metadata
export const metadata = {
  title: "BollyWood Game | Home",
  description: "Welcome to the BollyWood Game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
