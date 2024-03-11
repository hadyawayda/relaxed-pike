import { Inter } from "next/font/google";
import Game from "./Components/Game";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Game />
    </>
  );
}
