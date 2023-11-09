import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  axios.get("http://127.0.0.1:8000/").then((res) => console.log(res.data));

  return (
    <main>
      <h1 className="text-6xl">Hello world</h1>
    </main>
  );
}
