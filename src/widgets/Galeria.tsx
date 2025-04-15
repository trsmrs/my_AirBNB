import Image from "next/image"

type Foto = {
    id: string
    source: string
    description: string
}

interface GaleriaProps {
    fotos: Foto[]
}



const Galeria = (
    { fotos }: GaleriaProps) => {
    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            {fotos.slice(0, 9).map((foto, index) => {
                const primeiraFoto = index == 0 ? 'col-span-2 row-span-2': ''
                return (
                    <div key={index}
                        className={`${primeiraFoto}`}
                    >
                        <Image
                            className="w-full aspect-square object-cover"
                            src={foto.source}
                            alt={foto.description}
                            width={300}
                            height={300} />
                    </div>
                )
            })}
        </div>
    )
}

export default Galeria