import { Academic } from "./Academic"
import { Experiences } from "./Experiences"
import { Intro } from "./Intro"
import { Tech } from "./Tech"

export const About = () => {
    return(
        <>
            <Intro />
            <Experiences />
            <Academic />
            <Tech />
        </>
    )
}