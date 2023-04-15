import { Inter } from "next/font/google";
import { Controller } from "./components/controller";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Controller />;
}
