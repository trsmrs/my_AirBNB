import Acomodation from "@/components/Acomodation";
import { Accommodation } from "@/types/AirbnbDados";
import Image from "next/image";
import Link from "next/link";


interface AcomodacoesProps {
    accommodation: Accommodation[]
}

const Acomodations = (props: AcomodacoesProps) => {

    const acomodations = props.accommodation

    return (
        <section className="py-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {acomodations.map((item, index) => (
                <div key={index}>
                    <Link href={item.slug}>
                        <Acomodation
                            local={item.location.description}
                            anfitriao={item.host}
                            data={item.date}
                            preco={item.price}
                            avaliacao={item.rating}
                            preferidoHos={item.hasBadge}>
                            <Image className="w-full rounded aspect-square object-cover "
                                src={item.photos[0].source}
                                alt={item.photos[0].description}
                                width={300}
                                height={300}
                                draggable="false"
                            />
                        </Acomodation>
                    </Link>
                </div>
            ))}
        </section>
    )
}

export default Acomodations;