import "./globals.css";
import { NextPage } from "next";
import { PropsWithChildren } from "react";
import { Body, classes } from "ui";

import { Sidebar } from "../components/ui/sidebar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <html className="dark" lang="en">
      <Body>
        <div
          className={classes("grid grid-cols-4 xl:grid-cols-5 min-h-screen")}
        >
          <Sidebar />
          <main className={classes("col-span-3 xl:col-span-4")}>
            {children}
          </main>
        </div>
      </Body>
    </html>
  );
};

export default RootLayout;
