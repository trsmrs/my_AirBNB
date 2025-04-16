'use client'
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import ButtonIcon from "@/components/ButtonIcon";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { Photo } from "@/types/AirbnbDados";




interface SwitppProps {
    icons: Photo[]
}

const Swipp = (props: SwitppProps) => {

    const icones = props.icons


    return (
       
        <div className="flex flex-row items-center">
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    764: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                    1280: { slidesPerView: 9 },
                }}
            >
                {icones.map((icone, index) => (
                   <SwiperSlide key={index}>
                        <Link href={icone.url} className="flex flex-col item-center hover:text-red-500">
                            <Image
                                src={icone.source}
                                alt={icone.description}
                                width={24}
                                height={24}
                            />
                            <span className="text-sm">{icone.description}</span>
                        </Link>
                   </SwiperSlide>             
            ))}

            </Swiper>
            <ButtonIcon
                icon={(
                    <IconAdjustmentsHorizontal
                        aria-label="ìcone de filtros"
                        size={20} />
                )} children={"Filtros"}            >

            </ButtonIcon>
        </div>
    )
}

export default Swipp