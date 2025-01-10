import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex h-screen items-center justify-center">
        hello world !
      </div>
    </div>
  );
}
