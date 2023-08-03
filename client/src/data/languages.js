import greekFlag from '../assets/Flags/greekFlag.svg'
import portugalFlag from '../assets/Flags/portugalFlag.svg'
import frenchFlag from '../assets/Flags/frenchFlag.svg'
import germanFlag from '../assets/Flags/germanFlag.svg'
import englishFlag from '../assets/Flags/englishFlag.svg'
import norwayFlag from '../assets/Flags/norwayFlag.svg'

//Solo son las banderas con su respectivo idioma

export const flags = {
    Griego: greekFlag ,
    Portugues: portugalFlag,
    Frances: frenchFlag,
    Aleman: germanFlag ,
    Ingles: englishFlag ,
    Noruego: norwayFlag ,
    
};

export const allLanguages = [
    ["Griego", flags.Griego],
    ["Portugués", flags.Portugues],
    ["Francés", flags.Frances],
    ["Alemán", flags.Aleman],
    ["Inglés", flags.Ingles],
    ["Noruego", flags.Noruego]
]