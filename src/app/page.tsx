import Acomodations from "@/widgets/Acomodations";
import Rodape from "@/widgets/Rodape";
import SearchBar from "@/widgets/SearchBar";
import SuperiorBar from "@/widgets/SuperiorBar";
import Swipp from "@/widgets/Swiper";
import { fetchData } from "@/utils/api"


const dados = await fetchData()



export default async function Home() {
  return (
    <>
    
      <header className="container mx-auto">
        <SuperiorBar />
        <SearchBar />
      </header>

      <hr className="my-3" />

      <main className="container mx-auto">
        <Swipp icons={dados.icons}/>
        <Acomodations accommodation={dados.accommodation}/>
      </main>
      

        <footer className="bg-gray-300">
          <Rodape />
        </footer>
    </>
  );
}
