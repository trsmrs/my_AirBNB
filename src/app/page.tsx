import Acomodations from "@/widgets/Acomodations";
import Rodape from "@/widgets/Rodape";
import SearchBar from "@/widgets/SearchBar";
import SuperiorBar from "@/widgets/SuperiorBar";
import Swipp from "@/widgets/Swiper";

export default function Home() {
  return (
    <>
      <header className="container mx-auto">
        <SuperiorBar />
        <SearchBar />
      </header>

      <hr className="my-3" />

      <main className="container mx-auto">
        <Swipp />
        <Acomodations/>
      </main>
      

        <footer className="bg-gray-300">
          <Rodape />
        </footer>
    </>
  );
}
