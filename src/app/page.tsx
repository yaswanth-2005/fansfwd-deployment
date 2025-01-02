// @ts-ignore

import Footer from "@/components/global/footer";
import Main from "@/components/layouts/main";
import React, { useState, useEffect, useRef } from "react";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Main />
      <Footer />
    </main>
  );
}
