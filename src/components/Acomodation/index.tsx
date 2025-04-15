import { IconHeartFilled, IconStarFilled } from "@/assets/icons"

interface AcomodationProps {
    children: React.ReactNode
    local: string
    anfitriao: string
    data: string
    preco: number
    avaliacao: number
    preferidoHos: boolean
}

const Acomodation = ({
    children,
    local,
    anfitriao,
    data,
    preco,
    avaliacao,
    preferidoHos

}: AcomodationProps) => {
    return (
        <figure className="relative">

            <div className="p-2 absolute w-full flex flex-row justify-between items-center">
                <div>
                    {preferidoHos && (
                        <span className="bg-white rounded-full px-4 py-1 font-semibold">Preferido dos Hóspedes</span>
                    )}
                </div>
                <IconHeartFilled className="stroke-white opacity-80"
                    aria-label="favoritos"
                    size={30}
                />

            </div>

            {children}
            <figcaption className="pt-2">
                <div className="flex flex-row justify-between items-center">
                    <span className="font-semibold">{local}</span>
                    <div className="flex flex-row">
                        {avaliacao && (
                            <IconStarFilled
                                aria-label="Avaliações"
                                size={20}
                            />
                        )}
                        <span className="font-semibold">{avaliacao}</span>
                    </div>
                </div>
                <div>Anfitriã(o): {anfitriao}</div>
                <div>{data}</div>
                <div className="font-semibold">R$ {preco}</div>
            </figcaption>
        </figure>
    )
}

export default Acomodation