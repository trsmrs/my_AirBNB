import { fetchDataById } from "@/utils/api"
import AcomodationDepoimentos from "@/widgets/AcomodationDepoimentos"
import AcomodationDetails from "@/widgets/AcomodationDetails"
import Galeria from "@/widgets/Galeria"
import Rodape from "@/widgets/Rodape"
import SearchBar from "@/widgets/SearchBar"
import SuperiorBar from "@/widgets/SuperiorBar"
import { notFound } from "next/navigation"



interface PageProps {
    id: string
    slug: string
}

export default async function Page(
    { params }: { params: Promise<PageProps> }
) {

    const { id } = await params
    const acomodacao = await fetchDataById(id)

    if (!acomodacao) {
        notFound()
    }

    return (
        <div>

            <header className="container mx-auto">
                <SuperiorBar />
                <SearchBar />
            </header>

            <main className="container mx-auto py-6">
                <h1 className="text-3xl font-semibold pb-2">{acomodacao.location.description}</h1>
                <Galeria fotos={acomodacao.photos} />
                <div className="flex flex-col md:flex-row">
                    <AcomodationDetails accommodation={acomodacao}/>
                    <AcomodationDepoimentos testemonials={acomodacao.testimonials}/>
                </div>
            </main>

            <footer>
                <Rodape />
            </footer>
        </div>
    )
}