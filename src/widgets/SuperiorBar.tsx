import ButtonIcon from "@/components/ButtonIcon";
import Logo from "@/components/logo";
import { IconUserCircle } from "@tabler/icons-react";
import Link from "next/link";

const SuperiorBar = () => {

    return (
        <div className="
    container 
    mx-auto 
    flex 
    justify-between 
    items-center
    py-6
    ">
            <Logo />



            <div className="flex gap-6">
                <Link className="font-semibold" href="/">Acomodações</Link>
                <Link href="/">Experiências</Link>
            </div>

            <ButtonIcon
                icon={(<IconUserCircle
                    aria-label="icone de usuário"
                    size={32} />

                )} children={"Entrar"}>
            </ButtonIcon>

        </div>
    )
}

export default SuperiorBar;