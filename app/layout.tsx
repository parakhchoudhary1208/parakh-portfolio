import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Parakh's Portfolio",
  description: "Dev Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <head>
                {/* Set the correct theme BEFORE hydration to prevent flicker */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function() {
                            let theme = localStorage.getItem("theme");
                            if (!theme) {
                                theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                            }
                            if (theme === "dark") {
                                document.documentElement.classList.add("dark");
                            } else {
                                document.documentElement.classList.remove("dark");
                            }
                        })();
                    `,
                    }}
                />
            </head>
            <body className={`${inter.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
