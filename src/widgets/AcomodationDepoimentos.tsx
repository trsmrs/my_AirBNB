import { IconStarFilled } from "@/assets/icons"
import { Testimonials } from "@/types/AirbnbDados"
import Image from "next/image"


interface AcomodacoesDepoimentosProps {
        testemonials: Testimonials[]
}


const AcomodationDepoimentos = (props: AcomodacoesDepoimentosProps) => {

    const depoimentos = props.testemonials

    return (
        <div className=" w-full py-4 border-red-500">
            <h2 className="text-xl font-semibold">Depoimentos</h2>
            <div className="flex gap-2 items-center">
                <IconStarFilled className="size-4" />
                <span>4.9 (400+ avaliações</span>
            </div>
            {depoimentos.map((item, index)=>(
                <div className="flex flex-row gap-2 py-4 items-start" key={index}>
                    <Image className="aspect-square object-cover rounded-full"
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                    />
                    <div>
                        <span className="text-md font-semibold">{item.name}</span>
                        <p>{item.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AcomodationDepoimentos