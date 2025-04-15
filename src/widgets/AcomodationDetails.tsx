import {
    IconPhoto,
    IconToolsKitchen2,
    IconDesk,
    IconPool,
    IconBrandCarbon,
    IconSailboat,
    IconWifi,
    IconParking,
    IconAlarmSmoke,
    IconDog,
} from "@/assets/icons"
const AcomodationDetails = () => {
    return (
        <div className=" w-full py-4 border-red-500">
            <h2 className="text-xl font-semibold"> Espaço inteiro: Casa de campo em.. alvenaria</h2>
            <ul className="flex flex-row gap-2">
                <li>10 hópedes</li>
                <li>&middot;</li>
                <li>5 quartos</li>
                <li>&middot;</li>
                <li> 5 camas</li>
                <li>&middot;</li>
                <li>6 banheiros</li>
            </ul>
            <h2 className="pt-4 text-xl font-semibold">O quê esse lugar oferece?</h2>
            <ul className="py-6 grid grid-cols-2 items-center gap-y-6">
                <li className="flex gap-1.5">
                    <IconPhoto />
                    <span>Vista para as montanhas</span>
                </li>

                <li className="flex gap-1.5"><IconToolsKitchen2 />
                    <span>Cozinha</span>
                </li>

                <li className="flex gap-1.5"><IconDesk />
                    <span>Espaço de trabalho exclusivo</span>
                </li>


                <li className="flex gap-1.5"><IconPool />
                    <span>Piscina</span>
                </li>

                <li className="flex gap-1.5"><IconBrandCarbon />
                    <span>Alarme Segurança para gás</span>
                </li>

                <li className="flex gap-1.5"><IconSailboat />
                    <span>Ancoragem para Lanchas</span>
                </li>

                <li className="flex gap-1.5"><IconWifi />
                    <span>Wi-fi</span>
                </li>

                <li className="flex gap-1.5"><IconParking />
                    <span>Estacionamento</span>
                </li>

                <li className="flex gap-1.5"><IconAlarmSmoke />
                    <span>Alarme de Incêndio</span>
                </li>

                <li className="flex gap-1.5"><IconDog />
                    <span>Permitido animais</span>
                </li>

            </ul>

        </div>
    )
}

export default AcomodationDetails