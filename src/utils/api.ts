import Acomodation from "@/components/Acomodation"
import { Accommodation, AirBnbAPI } from "@/types/AirbnbDados"

export async function fetchData(): Promise<AirBnbAPI> {

    try {
        const resp = await fetch("https://web.codans.com.br/airbnb")
        const dados = resp.json()
        return dados

    } catch (error) {
        console.error(error)
        throw error
    }

}

export async function fetchDataById(id: string): Promise<Accommodation | undefined> {

    try {
        const dados = await fetchData()
        const acomodacao = dados.accommodation.find((item: Accommodation) => {
            return item.slug === decodeURIComponent(id)
        })

        return acomodacao
    } catch (error) {
        console.error(error)
        throw error
    }

}

