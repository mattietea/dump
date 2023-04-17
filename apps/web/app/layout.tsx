import "./globals.css";
import { NextPage } from "next";
import { Inter as FontSans } from "next/font/google";
import { PropsWithChildren } from "react";
import { classes } from "ui";

import { Sidebar } from "../components/ui/sidebar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <html className="dark" style={{ colorScheme: "dark" }} lang="en">
      <body
        className={classes(
          "bg-white font-sans text-slate-900 antialiased  dark:bg-slate-900 dark:text-slate-50",
          fontSans.variable
        )}
      >
        <div
          className={classes("grid grid-cols-4 xl:grid-cols-5 min-h-screen")}
        >
          <Sidebar />
          <main className={classes("col-span-3 xl:col-span-4")}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
