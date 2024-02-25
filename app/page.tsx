import Data from "./Data";
import DisplayItems from "./components/DisplayItems";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <DisplayItems />
    </>
  );
}
