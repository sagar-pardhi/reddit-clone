import React from "react";
import Navbar from "../Navbar/Navbar";

type Props = {};

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
