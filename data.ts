/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface QAItem {
  id: string;
  category: string;
  subcategory?: string;
  number?: number;
  esQuestion: string;
  hyQuestion: string;
  esAnswer?: string;
  hyAnswer?: string;
  solution?: string; // for math problems
  tag?: string;
  notes?: string;
}

export interface CoachOrder {
  id: string;
  orderEs: string;
  orderHy: string;
  responseEs: string;
  responseHy: string;
}

export interface DialogueLine {
  speakerEs: string;
  speakerHy: string;
  textEs: string;
  textHy: string;
}

export interface Dialogue {
  id: string;
  titleEs: string;
  titleHy: string;
  lines: DialogueLine[];
}

export interface ReadingComprehension {
  titleEs: string;
  titleHy: string;
  textEs: string;
  textHy: string;
  questions: {
    number: number;
    questionEs: string;
    questionHy: string;
    answerEs: string;
    answerHy: string;
  }[];
}

// -------------------------------------------------------------
// MODULE 1: 🎧 ¡Escucha y responde rápido! (7-րդ դասարան / 1.º ESO)
// -------------------------------------------------------------

export const MODULE1_SCHOOL_QA: QAItem[] = [
  {
    id: "m1-sch-1",
    category: "Դպրոցում (En el colegio)",
    number: 1,
    esQuestion: "¿Has hecho los deberes?",
    hyQuestion: "Տնային աշխատանքներդ արե՞լ ես։",
    esAnswer: "Sí, los he hecho todos.",
    hyAnswer: "Այո՛, բոլորը կատարել եմ։",
    tag: "Դպրոց"
  },
  {
    id: "m1-sch-2",
    category: "Դպրոցում (En el colegio)",
    number: 2,
    esQuestion: "¿Qué asignatura tienes ahora?",
    hyQuestion: "Հիմա ի՞նչ առարկա ունես։",
    esAnswer: "Ahora tengo Matemáticas.",
    hyAnswer: "Հիմա մաթեմատիկա ունեմ։",
    tag: "Դպրոց"
  },
  {
    id: "m1-sch-3",
    category: "Դպրոցում (En el colegio)",
    number: 3,
    esQuestion: "¿Has entendido la explicación?",
    hyQuestion: "Բացատրությունը հասկացե՞լ ես։",
    esAnswer: "Más o menos, pero tengo una duda.",
    hyAnswer: "Քիչ թե շատ, բայց մի հարց ունեմ։",
    tag: "Դպրոց"
  },
  {
    id: "m1-sch-4",
    category: "Դպրոցում (En el colegio)",
    number: 4,
    esQuestion: "¿Puedes leer el siguiente párrafo?",
    hyQuestion: "Կարո՞ղ ես կարդալ հաջորդ պարբերությունը։",
    esAnswer: "Sí, claro. ¿Desde dónde empiezo?",
    hyAnswer: "Այո՛, իհարկե։ Որտեղի՞ց սկսեմ։",
    tag: "Դպրոց"
  },
  {
    id: "m1-sch-5",
    category: "Դպրոցում (En el colegio)",
    number: 5,
    esQuestion: "¿Por qué no has terminado el ejercicio?",
    hyQuestion: "Ինչո՞ւ չես ավարտել վարժությունը։",
    esAnswer: "Porque no he entendido la última pregunta.",
    hyAnswer: "Որովհետև վերջին հարցը չեմ հասկացել։",
    tag: "Դպրոց"
  },
  {
    id: "m1-sch-6",
    category: "Դպրոցում (En el colegio)",
    number: 6,
    esQuestion: "¿Con quién vas a trabajar?",
    hyQuestion: "Ո՞ւմ հետ ես աշխատելու։",
    esAnswer: "Voy a trabajar con mi compañero.",
    hyAnswer: "Աշխատելու եմ դասընկերոջս հետ։",
    tag: "Դպրոց"
  },
  {
    id: "m1-sch-7",
    category: "Դպրոցում (En el colegio)",
    number: 7,
    esQuestion: "¿Te importa cerrar la ventana?",
    hyQuestion: "Դեմ չե՞ս լինի պատուհանը փակել։",
    esAnswer: "No, claro que no.",
    hyAnswer: "Ո՛չ, իհարկե դեմ չեմ։",
    tag: "Դպրոց"
  },
  {
    id: "m1-sch-8",
    category: "Դպրոցում (En el colegio)",
    number: 8,
    esQuestion: "¿Cuánto tiempo necesitas para terminar?",
    hyQuestion: "Որքա՞ն ժամանակ է պետք, որ ավարտես։",
    esAnswer: "Necesito unos cinco minutos.",
    hyAnswer: "Ինձ մոտ հինգ րոպե է պետք։",
    tag: "Դպրոց"
  },
  {
    id: "m1-sch-9",
    category: "Դպրոցում (En el colegio)",
    number: 9,
    esQuestion: "¿Qué parte te ha resultado más difícil?",
    hyQuestion: "Ո՞ր մասն էր քեզ համար ամենադժվարը։",
    esAnswer: "La segunda parte, porque había palabras nuevas.",
    hyAnswer: "Երկրորդ մասը, որովհետև նոր բառեր կային։",
    tag: "Դպրոց"
  },
  {
    id: "m1-sch-10",
    category: "Դպրոցում (En el colegio)",
    number: 10,
    esQuestion: "¿Puedes explicar tu respuesta?",
    hyQuestion: "Կարո՞ղ ես բացատրել քո պատասխանը։",
    esAnswer: "Sí, primero he leído el texto y después he buscado la información.",
    hyAnswer: "Այո՛, սկզբում կարդացել եմ տեքստը, հետո գտել տեղեկությունը։",
    tag: "Դպրոց"
  }
];

export const MODULE1_FOOTBALL_QA: QAItem[] = [
  {
    id: "m1-fb-1",
    category: "Ֆուտբոլային մարզում (En el entrenamiento de fútbol)",
    number: 1,
    esQuestion: "¿En qué posición juegas?",
    hyQuestion: "Ի՞նչ դիրքում ես խաղում։",
    esAnswer: "Juego de centrocampista, pero también puedo jugar de delantero.",
    hyAnswer: "Խաղում եմ կիսապաշտպանի դիրքում, բայց կարող եմ նաև հարձակվող լինել։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m1-fb-2",
    category: "Ֆուտբոլային մարզում (En el entrenamiento de fútbol)",
    number: 2,
    esQuestion: "¿Estás listo para empezar?",
    hyQuestion: "Պատրա՞ստ ես սկսելու։",
    esAnswer: "Sí, míster, estoy listo.",
    hyAnswer: "Այո՛, մարզի՛չ, պատրաստ եմ։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m1-fb-3",
    category: "Ֆուտբոլային մարզում (En el entrenamiento de fútbol)",
    number: 3,
    esQuestion: "¿Por qué no has pasado el balón?",
    hyQuestion: "Ինչո՞ւ գնդակը փոխանցում չես կատարել։",
    esAnswer: "Porque pensaba que podía tirar a portería.",
    hyAnswer: "Որովհետև մտածում էի, որ կարող եմ հարվածել դարպասին։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m1-fb-4",
    category: "Ֆուտբոլային մարզում (En el entrenamiento de fútbol)",
    number: 4,
    esQuestion: "¿Has visto al compañero que estaba libre?",
    hyQuestion: "Տեսե՞լ ես այն խաղընկերոջը, որն ազատ էր։",
    esAnswer: "No, no lo he visto. La próxima vez levantaré la cabeza.",
    hyAnswer: "Ո՛չ, չեմ տեսել։ Հաջորդ անգամ գլուխս կբարձրացնեմ և կնայեմ։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m1-fb-5",
    category: "Ֆուտբոլային մարզում (En el entrenamiento de fútbol)",
    number: 5,
    esQuestion: "¿Con qué pierna golpeas mejor el balón?",
    hyQuestion: "Ո՞ր ոտքով ես ավելի լավ հարվածում գնդակին։",
    esAnswer: "Con la derecha, pero estoy practicando con la izquierda.",
    hyAnswer: "Աջ ոտքով, բայց ձախով էլ եմ մարզվում։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m1-fb-6",
    category: "Ֆուտբոլային մարզում (En el entrenamiento de fútbol)",
    number: 6,
    esQuestion: "¿Puedes presionar un poco más?",
    hyQuestion: "Կարո՞ղ ես մի փոքր ավելի ակտիվ ճնշում գործադրել մրցակցի վրա։",
    esAnswer: "Sí, voy a presionar más.",
    hyAnswer: "Այո՛, ավելի ակտիվ կճնշեմ։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m1-fb-7",
    category: "Ֆուտբոլային մարզում (En el entrenamiento de fútbol)",
    number: 7,
    esQuestion: "¿Por qué has perdido el balón?",
    hyQuestion: "Ինչո՞ւ կորցրիր գնդակը։",
    esAnswer: "Porque el rival me ha presionado muy rápido.",
    hyAnswer: "Որովհետև մրցակիցը շատ արագ ճնշում գործադրեց ինձ վրա։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m1-fb-8",
    category: "Ֆուտբոլային մարզում (En el entrenamiento de fútbol)",
    number: 8,
    esQuestion: "¿Qué haces cuando tu equipo pierde el balón?",
    hyQuestion: "Ի՞նչ ես անում, երբ թիմդ կորցնում է գնդակը։",
    esAnswer: "Vuelvo a defender y ayudo a mis compañeros.",
    hyAnswer: "Վերադառնում եմ պաշտպանություն և օգնում խաղընկերներիս։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m1-fb-9",
    category: "Ֆուտբոլային մարզում (En el entrenamiento de fútbol)",
    number: 9,
    esQuestion: "¿Te encuentras bien o necesitas descansar?",
    hyQuestion: "Լա՞վ ես զգում քեզ, թե՞ հանգստանալու կարիք ունես։",
    esAnswer: "Estoy bien, solo necesito beber un poco de agua.",
    hyAnswer: "Լավ եմ, պարզապես պետք է մի քիչ ջուր խմեմ։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m1-fb-10",
    category: "Ֆուտբոլային մարզում (En el entrenamiento de fútbol)",
    number: 10,
    esQuestion: "¿Qué harías si dos compañeros estuvieran libres?",
    hyQuestion: "Ի՞նչ կանեիր, եթե երկու խաղընկերներդ ազատ լինեին։",
    esAnswer: "Pasaría el balón al que estuviera mejor colocado.",
    hyAnswer: "Գնդակը կփոխանցեի նրան, ով ավելի լավ դիրքում կլիներ։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m1-fb-11",
    category: "Ֆուտբոլային մարզում (En el entrenamiento de fútbol)",
    number: 11,
    esQuestion: "¿Por qué crees que hemos perdido el partido?",
    hyQuestion: "Քո կարծիքով՝ ինչո՞ւ պարտվեցինք խաղում։",
    esAnswer: "Porque hemos cometido algunos errores en defensa.",
    hyAnswer: "Որովհետև պաշտպանությունում որոշ սխալներ ենք թույլ տվել։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m1-fb-12",
    category: "Ֆուտբոլային մարզում (En el entrenamiento de fútbol)",
    number: 12,
    esQuestion: "¿Qué podríamos mejorar en el próximo partido?",
    hyQuestion: "Ի՞նչ կարող էինք բարելավել հաջորդ խաղում։",
    esAnswer: "Podríamos comunicarnos más y mover el balón más rápido.",
    hyAnswer: "Կարող էինք ավելի շատ հաղորդակցվել և գնդակն ավելի արագ փոխանցել։",
    tag: "Ֆուտբոլ"
  }
];

export const COACH_ORDERS: CoachOrder[] = [
  { id: "co-1", orderEs: "¡Pásala!", orderHy: "Փոխանցի՛ր գնդակը։", responseEs: "¡Voy!", responseHy: "Հիմա։" },
  { id: "co-2", orderEs: "¡Tira!", orderHy: "Հարվածի՛ր։", responseEs: "¡Vale!", responseHy: "Լավ։" },
  { id: "co-3", orderEs: "¡Desmárcate!", orderHy: "Ազատվի՛ր պաշտպանությունից։", responseEs: "¡Ya voy!", responseHy: "Արդեն անում եմ։" },
  { id: "co-4", orderEs: "¡Abre el campo!", orderHy: "Լայնացրո՛ւ խաղը։", responseEs: "¡Entendido!", responseHy: "Հասկացա։" },
  { id: "co-5", orderEs: "¡Vuelve atrás!", orderHy: "Վերադարձի՛ր հետ։", responseEs: "¡Voy!", responseHy: "Գալիս եմ։" },
  { id: "co-6", orderEs: "¡Cubre tu zona!", orderHy: "Փակի՛ր քո գոտին։", responseEs: "¡Vale, míster!", responseHy: "Լավ, մարզի՛չ։" },
  { id: "co-7", orderEs: "¡Mira antes de pasar!", orderHy: "Փոխանցելուց առաջ նայի՛ր։", responseEs: "¡De acuerdo!", responseHy: "Համաձայն եմ։" },
  { id: "co-8", orderEs: "¡No te precipites!", orderHy: "Մի՛ շտապիր։", responseEs: "¡Tranquilo!", responseHy: "Հանգիստ։" },
  { id: "co-9", orderEs: "¡Mantén la posición!", orderHy: "Պահի՛ր դիրքդ։", responseEs: "¡Entendido!", responseHy: "Հասկացա։" },
  { id: "co-10", orderEs: "¡Sigue así!", orderHy: "Շարունակի՛ր այդպես։", responseEs: "¡Gracias!", responseHy: "Շնորհակալություն։" }
];

export const MODULE1_LENGUA_QA: QAItem[] = [
  {
    id: "m1-leng-13",
    category: "Իսպաներեն լեզվի դաս (Lengua Castellana)",
    number: 13,
    esQuestion: "¿Cuál es el sujeto de la oración «El niño juega en el parque»?",
    hyQuestion: "Ո՞րն է ենթական «Տղան խաղում է այգում» նախադասության մեջ։",
    esAnswer: "El sujeto es «El niño».",
    hyAnswer: "Ենթական «El niño»-ն է։",
    tag: "Քերականություն"
  },
  {
    id: "m1-leng-14",
    category: "Իսպաներեն լեզվի դաս (Lengua Castellana)",
    number: 14,
    esQuestion: "¿Cuál es el predicado de esa oración?",
    hyQuestion: "Ո՞րն է այդ նախադասության ստորոգյալային մասը։",
    esAnswer: "«Juega en el parque».",
    hyAnswer: "«Juega en el parque»։",
    tag: "Քերականություն"
  },
  {
    id: "m1-leng-15",
    category: "Իսպաներեն լեզվի դաս (Lengua Castellana)",
    number: 15,
    esQuestion: "¿Qué tipo de palabra es «rápidamente»?",
    hyQuestion: "Ի՞նչ խոսքի մաս է «rápidamente» բառը։",
    esAnswer: "Es un adverbio de modo.",
    hyAnswer: "Դա ձևի մակբայ է։",
    tag: "Քերականություն"
  },
  {
    id: "m1-leng-16",
    category: "Իսպաներեն լեզվի դաս (Lengua Castellana)",
    number: 16,
    esQuestion: "¿Cuál es el verbo de la oración «María estudia mucho»?",
    hyQuestion: "Ո՞րն է բայը «Մարիան շատ է սովորում» նախադասության մեջ։",
    esAnswer: "El verbo es «estudia».",
    hyAnswer: "Բայը «estudia»-ն է։",
    tag: "Քերականություն"
  },
  {
    id: "m1-leng-17",
    category: "Իսպաներեն լեզվի դաս (Lengua Castellana)",
    number: 17,
    esQuestion: "¿Qué es un sustantivo?",
    hyQuestion: "Ի՞նչ է գոյականը։",
    esAnswer: "Es una palabra que nombra personas, animales, cosas, lugares o ideas.",
    hyAnswer: "Դա բառ է, որը անվանում է մարդկանց, կենդանիներին, իրերը, վայրերը կամ գաղափարները։",
    tag: "Քերականություն"
  },
  {
    id: "m1-leng-18",
    category: "Իսպաներեն լեզվի դաս (Lengua Castellana)",
    number: 18,
    esQuestion: "¿Qué es un adjetivo?",
    hyQuestion: "Ի՞նչ է ածականը։",
    esAnswer: "Es una palabra que expresa características o cualidades de un sustantivo.",
    hyAnswer: "Դա բառ է, որն արտահայտում է գոյականի հատկանիշը կամ որակը։",
    tag: "Քերականություն"
  },
  {
    id: "m1-leng-19",
    category: "Իսպաներեն լեզվի դաս (Lengua Castellana)",
    number: 19,
    esQuestion: "¿Cuál es un sinónimo de «feliz»?",
    hyQuestion: "Ո՞րն է «feliz» բառի հոմանիշը։",
    esAnswer: "«Contento» o «alegre».",
    hyAnswer: "«Contento» կամ «alegre»։",
    tag: "Բառապաշար"
  },
  {
    id: "m1-leng-20",
    category: "Իսպաներեն լեզվի դաս (Lengua Castellana)",
    number: 20,
    esQuestion: "¿Cuál es el antónimo de «difícil»?",
    hyQuestion: "Ո՞րն է «difícil» բառի հականիշը։",
    esAnswer: "«Fácil».",
    hyAnswer: "«Fácil»։",
    tag: "Բառապաշար"
  },
  {
    id: "m1-leng-21",
    category: "Իսպաներեն լեզվի դաս (Lengua Castellana)",
    number: 21,
    esQuestion: "¿Qué tipo de palabra es «teléfono» según su acentuación?",
    hyQuestion: "Ըստ շեշտադրության՝ ի՞նչ բառ է «teléfono»-ն։",
    esAnswer: "Es una palabra esdrújula.",
    hyAnswer: "Դա երրորդ վանկից շեշտվող բառ է։",
    tag: "Ուղղագրություն"
  },
  {
    id: "m1-leng-22",
    category: "Իսպաներեն լեզվի դաս (Lengua Castellana)",
    number: 22,
    esQuestion: "¿Por qué lleva tilde la palabra «música»?",
    hyQuestion: "Ինչո՞ւ է «música» բառը շեշտանիշ կրում։",
    esAnswer: "Porque es esdrújula y todas las esdrújulas llevan tilde.",
    hyAnswer: "Որովհետև այն esdrújula է, իսկ այդ բոլոր բառերը շեշտանիշ են կրում։",
    tag: "Ուղղագրություն"
  },
  {
    id: "m1-leng-23",
    category: "Իսպաներեն լեզվի դաս (Lengua Castellana)",
    number: 23,
    esQuestion: "¿Qué es un texto narrativo?",
    hyQuestion: "Ի՞նչ է պատմողական տեքստը։",
    esAnswer: "Es un texto que cuenta hechos reales o imaginarios.",
    hyAnswer: "Դա տեքստ է, որը պատմում է իրական կամ երևակայական իրադարձություններ։",
    tag: "Գրականություն"
  },
  {
    id: "m1-leng-24",
    category: "Իսպաներեն լեզվի դաս (Lengua Castellana)",
    number: 24,
    esQuestion: "¿Cuál es la diferencia entre un texto descriptivo y uno narrativo?",
    hyQuestion: "Ո՞րն է նկարագրական և պատմողական տեքստերի տարբերությունը։",
    esAnswer: "El descriptivo explica cómo es algo y el narrativo cuenta lo que sucede.",
    hyAnswer: "Նկարագրականը ներկայացնում է, թե ինչպիսին է ինչ-որ բան, իսկ պատմողականը՝ ինչ է տեղի ունենում։",
    tag: "Գրականություն"
  },
  {
    id: "m1-leng-25",
    category: "Իսպաներեն լեզվի դաս (Lengua Castellana)",
    number: 25,
    esQuestion: "¿Cuáles son las partes principales de un cuento?",
    hyQuestion: "Որո՞նք են պատմվածքի հիմնական մասերը։",
    esAnswer: "Planteamiento, nudo y desenlace.",
    hyAnswer: "Ներածություն, հանգույց և հանգուցալուծում։",
    tag: "Գրականություն"
  },
  {
    id: "m1-leng-26",
    category: "Իսպաներեն լեզվի դաս (Lengua Castellana)",
    number: 26,
    esQuestion: "¿Qué diferencia hay entre «porque» y «por qué»?",
    hyQuestion: "Ո՞րն է «porque» և «por qué» տարբերությունը։",
    esAnswer: "«Por qué» se utiliza para preguntar y «porque» para explicar una causa.",
    hyAnswer: "«Por qué»-ն օգտագործվում է հարցնելու, իսկ «porque»-ն՝ պատճառը բացատրելու համար։",
    tag: "Քերականություն"
  },
  {
    id: "m1-leng-27",
    category: "Իսպաներեն լեզվի դաս (Lengua Castellana)",
    number: 27,
    esQuestion: "¿Puedes inventar una oración con un conector?",
    hyQuestion: "Կարո՞ղ ես նախադասություն կազմել կապակցող բառով։",
    esAnswer: "«Quería jugar al fútbol, pero tenía que estudiar».",
    hyAnswer: "«Ուզում էի ֆուտբոլ խաղալ, բայց պետք է սովորեի»։",
    tag: "Քերականություն"
  }
];

export const MODULE1_MATH_QA: QAItem[] = [
  {
    id: "m1-math-1",
    category: "Մաթեմատիկա իսպաներենով (Matemáticas)",
    number: 1,
    esQuestion: "¿Cuánto es treinta y siete más veintiocho?",
    hyQuestion: "Ինչքա՞ն է 37 + 28։",
    esAnswer: "Sesenta y cinco.",
    hyAnswer: "Վաթսունհինգ՝ 65։",
    tag: "Հաշվարկ"
  },
  {
    id: "m1-math-2",
    category: "Մաթեմատիկա իսպաներենով (Matemáticas)",
    number: 2,
    esQuestion: "¿Cuánto es noventa menos cuarenta y siete?",
    hyQuestion: "Ինչքա՞ն է 90 − 47։",
    esAnswer: "Cuarenta y tres.",
    hyAnswer: "Քառասուներեք՝ 43։",
    tag: "Հաշվարկ"
  },
  {
    id: "m1-math-3",
    category: "Մաթեմատիկա իսպաներենով (Matemáticas)",
    number: 3,
    esQuestion: "¿Cuánto es doce por ocho?",
    hyQuestion: "Ինչքա՞ն է 12 × 8։",
    esAnswer: "Noventa y seis.",
    hyAnswer: "Իննսունվեց՝ 96։",
    tag: "Հաշվարկ"
  },
  {
    id: "m1-math-4",
    category: "Մաթեմատիկա իսպաներենով (Matemáticas)",
    number: 4,
    esQuestion: "¿Cuánto es ciento cuarenta y cuatro dividido entre doce?",
    hyQuestion: "Ինչքա՞ն է 144 ÷ 12։",
    esAnswer: "Doce.",
    hyAnswer: "Տասներկու՝ 12։",
    tag: "Հաշվարկ"
  },
  {
    id: "m1-math-5",
    category: "Մաթեմատիկա իսպաներենով (Matemáticas)",
    number: 5,
    esQuestion: "¿Cuál es la mitad de setenta y cuatro?",
    hyQuestion: "Որքա՞ն է 74-ի կեսը։",
    esAnswer: "Treinta y siete.",
    hyAnswer: "Երեսունյոթ՝ 37։",
    tag: "Հաշվարկ"
  },
  {
    id: "m1-math-6",
    category: "Մաթեմատիկա իսպաներենով (Matemáticas)",
    number: 6,
    esQuestion: "¿Cuánto es tres cuartos de veinte?",
    hyQuestion: "Որքա՞ն է 20-ի երեք քառորդը։",
    esAnswer: "Quince.",
    hyAnswer: "Տասնհինգ՝ 15։",
    tag: "Կոտորակ"
  },
  {
    id: "m1-math-7",
    category: "Մաթեմատիկա իսպաներենով (Matemáticas)",
    number: 7,
    esQuestion: "¿Cuánto es el veinte por ciento de ciento cincuenta?",
    hyQuestion: "Որքա՞ն է 150-ի 20%-ը։",
    esAnswer: "Treinta.",
    hyAnswer: "Երեսուն՝ 30։",
    tag: "Տոկոս"
  },
  {
    id: "m1-math-8",
    category: "Մաթեմատիկա իսպաներենով (Matemáticas)",
    number: 8,
    esQuestion: "¿Cuánto es dos coma cinco más tres coma siete?",
    hyQuestion: "Ինչքա՞ն է 2,5 + 3,7։",
    esAnswer: "Seis coma dos.",
    hyAnswer: "Վեց ամբողջ երկու տասնորդական՝ 6,2։",
    tag: "Տասնորդական"
  },
  {
    id: "m1-math-9",
    category: "Մաթեմատիկա իսպաներենով (Matemáticas)",
    number: 9,
    esQuestion: "¿Cuánto es menos cinco más doce?",
    hyQuestion: "Ինչքա՞ն է −5 + 12։",
    esAnswer: "Siete.",
    hyAnswer: "Յոթ՝ 7։",
    tag: "Բացասական թվեր"
  },
  {
    id: "m1-math-10",
    category: "Մաթեմատիկա իսպաներենով (Matemáticas)",
    number: 10,
    esQuestion: "¿Cuál es el perímetro de un cuadrado que tiene cinco centímetros de lado?",
    hyQuestion: "Որքա՞ն է 5 սմ կողմ ունեցող քառակուսու պարագիծը։",
    esAnswer: "Veinte centímetros.",
    hyAnswer: "Քսան սանտիմետր՝ 20 սմ։",
    tag: "Երկրաչափություն"
  },
  {
    id: "m1-math-11",
    category: "Մաթեմատիկա իսպաներենով (Matemáticas)",
    number: 11,
    esQuestion: "Si un rectángulo mide ocho centímetros de largo y cuatro de ancho, ¿cuál es su área?",
    hyQuestion: "Եթե ուղղանկյան երկարությունը 8 սմ է, լայնությունը՝ 4 սմ, ապա որքա՞ն է մակերեսը։",
    esAnswer: "Treinta y dos centímetros cuadrados.",
    hyAnswer: "Երեսուներկու քառակուսի սանտիմետր՝ 32 սմ²։",
    tag: "Երկրաչափություն"
  },
  {
    id: "m1-math-12",
    category: "Մաթեմատիկա իսպաներենով (Matemáticas)",
    number: 12,
    esQuestion: "Si dos equis más seis es igual a veinte, ¿cuánto vale equis?",
    hyQuestion: "Եթե 2x + 6 = 20, որքա՞ն է x-ը։",
    esAnswer: "Equis vale siete.",
    hyAnswer: "x-ը հավասար է 7-ի։",
    tag: "Հավասարում"
  }
];

export const MODULE1_MATH_FOOTBALL_QA: QAItem[] = [
  {
    id: "m1-mfb-13",
    category: "Ֆուտբոլային մաթեմատիկա (Problemas de fútbol)",
    number: 13,
    esQuestion: "En un equipo hay veintidós jugadores. Si once están jugando, ¿cuántos no están en el campo?",
    hyQuestion: "Թիմում կա 22 ֆուտբոլիստ։ Եթե 11-ը խաղադաշտում են, ապա քանի՞սը խաղադաշտում չեն։",
    esAnswer: "Once jugadores.",
    hyAnswer: "Տասնմեկ ֆուտբոլիստ։",
    tag: "Ֆուտբոլային խնդիր"
  },
  {
    id: "m1-mfb-14",
    category: "Ֆուտբոլային մաթեմատիկա (Problemas de fútbol)",
    number: 14,
    esQuestion: "Has marcado seis goles en tres partidos. ¿Cuál es tu media de goles por partido?",
    hyQuestion: "Երեք խաղում խփել ես 6 գոլ։ Որքա՞ն է մեկ խաղի միջին գոլերի քանակը։",
    esAnswer: "Dos goles por partido.",
    hyAnswer: "Միջինը՝ 2 գոլ մեկ խաղում։",
    tag: "Ֆուտբոլային խնդիր"
  },
  {
    id: "m1-mfb-15",
    category: "Ֆուտբոլային մաթեմատիկա (Problemas de fútbol)",
    number: 15,
    esQuestion: "Un entrenamiento empieza a las cinco y cuarto y dura una hora y media. ¿A qué hora termina?",
    hyQuestion: "Մարզումը սկսվում է 17։15-ին և տևում է մեկուկես ժամ։ Ե՞րբ է ավարտվում։",
    esAnswer: "A las seis y cuarenta y cinco.",
    hyAnswer: "18։45-ին։",
    tag: "Ֆուտբոլային խնդիր"
  },
  {
    id: "m1-mfb-16",
    category: "Ֆուտբոլային մաթեմատիկա (Problemas de fútbol)",
    number: 16,
    esQuestion: "Un balón cuesta cuarenta euros y tiene un descuento del veinticinco por ciento. ¿Cuánto cuesta ahora?",
    hyQuestion: "Գնդակն արժե 40 եվրո, և կա 25% զեղչ։ Հիմա որքա՞ն արժե։",
    esAnswer: "Treinta euros.",
    hyAnswer: "Երեսուն եվրո։",
    tag: "Ֆուտբոլային խնդիր"
  }
];

export const MODULE1_CONV_A: QAItem[] = [
  { id: "m1-conv-1", category: "Դասընկերների միջև (Entre compañeros)", number: 1, esQuestion: "¿Qué tal, tío?", hyQuestion: "Ի՞նչ կա, ընկե՛ր։", esAnswer: "¡Todo bien! ¿Y tú?", hyAnswer: "Ամեն ինչ լավ է։ Իսկ դո՞ւ։", tag: "Ընկերներ" },
  { id: "m1-conv-2", category: "Դասընկերների միջև (Entre compañeros)", number: 2, esQuestion: "¿Te vienes con nosotros?", hyQuestion: "Մեզ հետ գալի՞ս ես։", esAnswer: "Sí, claro. ¿Adónde vamos?", hyAnswer: "Այո՛, իհարկե։ Ո՞ւր ենք գնում։", tag: "Ընկերներ" },
  { id: "m1-conv-3", category: "Դասընկերների միջև (Entre compañeros)", number: 3, esQuestion: "¿Qué haces después de clase?", hyQuestion: "Դասերից հետո ի՞նչ ես անում։", esAnswer: "Tengo entrenamiento de fútbol.", hyAnswer: "Ֆուտբոլի մարզում ունեմ։", tag: "Ընկերներ" },
  { id: "m1-conv-4", category: "Դասընկերների միջև (Entre compañeros)", number: 4, esQuestion: "¿Te apuntas al partido?", hyQuestion: "Միանում ե՞ս խաղին։", esAnswer: "¡Claro que sí! ¿A qué hora quedamos?", hyAnswer: "Իհարկե՛։ Ժամը քանի՞սին ենք հանդիպում։", tag: "Ընկերներ" },
  { id: "m1-conv-5", category: "Դասընկերների միջև (Entre compañeros)", number: 5, esQuestion: "¿Me dejas un boli?", hyQuestion: "Գրիչ կտա՞ս մի քիչ օգտագործեմ։", esAnswer: "Sí, toma.", hyAnswer: "Այո՛, վերցրո՛ւ։", tag: "Ընկերներ" },
  { id: "m1-conv-6", category: "Դասընկերների միջև (Entre compañeros)", number: 6, esQuestion: "¿Qué te ha parecido el examen?", hyQuestion: "Ի՞նչ կարծիք ունես քննության մասին։", esAnswer: "Ha sido un poco difícil, pero creo que me ha salido bien.", hyAnswer: "Մի փոքր դժվար էր, բայց կարծում եմ՝ լավ եմ գրել։", tag: "Ընկերներ" },
  { id: "m1-conv-7", category: "Դասընկերների միջև (Entre compañeros)", number: 7, esQuestion: "¿Te mola este juego?", hyQuestion: "Այս խաղը հավանո՞ւմ ես։", esAnswer: "Sí, mola mucho.", hyAnswer: "Այո՛, շատ լավն է։", tag: "Ընկերներ" },
  { id: "m1-conv-8", category: "Դասընկերների միջև (Entre compañeros)", number: 8, esQuestion: "¿Me echas una mano?", hyQuestion: "Կօգնե՞ս ինձ։", esAnswer: "Sí, dime qué necesitas.", hyAnswer: "Այո՛, ասա՝ ինչ է պետք։", tag: "Ընկերներ" },
  { id: "m1-conv-9", category: "Դասընկերների միջև (Entre compañeros)", number: 9, esQuestion: "¿Quedamos en el recreo?", hyQuestion: "Ընդմիջմանը հանդիպե՞նք։", esAnswer: "Vale, nos vemos en el patio.", hyAnswer: "Լավ, կհանդիպենք բակում։", tag: "Ընկերներ" },
  { id: "m1-conv-10", category: "Դասընկերների միջև (Entre compañeros)", number: 10, esQuestion: "¿Te has enterado de lo que ha pasado?", hyQuestion: "Իմացե՞լ ես՝ ինչ է պատահել։", esAnswer: "No, ¿qué ha pasado?", hyAnswer: "Ո՛չ, ի՞նչ է պատահել։", tag: "Ընկերներ" }
];

export const MODULE1_CONV_B: QAItem[] = [
  { id: "m1-conv-11", category: "Երբ չի հասկանում (Cuando no entiende)", number: 11, esQuestion: "¿Lo has pillado?", hyQuestion: "Հասկացա՞ր։", esAnswer: "No del todo. ¿Me lo puedes explicar otra vez?", hyAnswer: "Ոչ ամբողջությամբ։ Կարո՞ղ ես նորից բացատրել։", tag: "Օգնություն" },
  { id: "m1-conv-12", category: "Երբ չի հասկանում (Cuando no entiende)", number: 12, esQuestion: "¿Sabes cómo se hace?", hyQuestion: "Գիտե՞ս՝ ինչպես է դա արվում։", esAnswer: "Creo que sí, pero ¿puedes ponerme un ejemplo?", hyAnswer: "Կարծում եմ՝ այո, բայց կարո՞ղ ես օրինակ բերել։", tag: "Օգնություն" },
  { id: "m1-conv-13", category: "Երբ չի հասկանում (Cuando no entiende)", number: 13, esQuestion: "¿Por qué no contestas?", hyQuestion: "Ինչո՞ւ չես պատասխանում։", esAnswer: "Porque estoy pensando cómo decirlo en español.", hyAnswer: "Որովհետև մտածում եմ՝ ինչպես ասել իսպաներեն։", tag: "Օգնություն" },
  { id: "m1-conv-14", category: "Երբ չի հասկանում (Cuando no entiende)", number: 14, esQuestion: "¿Quieres que lo repita?", hyQuestion: "Ուզո՞ւմ ես կրկնեմ։", esAnswer: "Sí, por favor, un poco más despacio.", hyAnswer: "Այո՛, խնդրում եմ, մի փոքր ավելի դանդաղ։", tag: "Օգնություն" },
  { id: "m1-conv-15", category: "Երբ չի հասկանում (Cuando no entiende)", number: 15, esQuestion: "¿Cuál es tu duda?", hyQuestion: "Ի՞նչն է քեզ անհասկանալի։", esAnswer: "No entiendo qué significa esta palabra.", hyAnswer: "Չեմ հասկանում՝ ինչ է նշանակում այս բառը։", tag: "Օգնություն" },
  { id: "m1-conv-16", category: "Երբ չի հասկանում (Cuando no entiende)", number: 16, esQuestion: "¿Te has perdido?", hyQuestion: "Կտրվե՞լ ես բացատրությունից, այլևս չե՞ս հետևում։", esAnswer: "Sí, me he perdido un poco. ¿Por dónde vamos?", hyAnswer: "Այո՛, մի փոքր կորցրել եմ թելը։ Ո՞ր մասում ենք։", tag: "Օգնություն" }
];

export const MODULE1_CONV_C: QAItem[] = [
  { id: "m1-conv-17", category: "Իրական իրավիճակներում (En situaciones reales)", number: 17, esQuestion: "¿Te importa si me siento aquí?", hyQuestion: "Դեմ չե՞ս, եթե այստեղ նստեմ։", esAnswer: "No, para nada. Siéntate.", hyAnswer: "Ո՛չ, ամենևին։ Նստի՛ր։", tag: "Իրավիճակ" },
  { id: "m1-conv-18", category: "Իրական իրավիճակներում (En situaciones reales)", number: 18, esQuestion: "¿Te queda mucho?", hyQuestion: "Շա՞տ է մնացել, որ ավարտես։", esAnswer: "No, ya casi he terminado.", hyAnswer: "Ո՛չ, արդեն գրեթե ավարտել եմ։", tag: "Իրավիճակ" },
  { id: "m1-conv-19", category: "Իրական իրավիճակներում (En situaciones reales)", number: 19, esQuestion: "¿Qué prefieres hacer?", hyQuestion: "Ի՞նչ ես նախընտրում անել։", esAnswer: "Prefiero jugar un rato y después estudiar.", hyAnswer: "Նախընտրում եմ մի քիչ խաղալ, հետո սովորել։", tag: "Իրավիճակ" },
  { id: "m1-conv-20", category: "Իրական իրավիճակներում (En situaciones reales)", number: 20, esQuestion: "¿Qué opinas de lo que ha dicho el profesor?", hyQuestion: "Ի՞նչ ես մտածում ուսուցչի ասածի մասին։", esAnswer: "Creo que tiene razón, aunque no estoy totalmente de acuerdo.", hyAnswer: "Կարծում եմ՝ նա ճիշտ է, թեև ամբողջությամբ համաձայն չեմ։", tag: "Իրավիճակ" },
  { id: "m1-conv-21", category: "Իրական իրավիճակներում (En situaciones reales)", number: 21, esQuestion: "¿Te ha pasado alguna vez algo parecido?", hyQuestion: "Քեզ հետ երբևէ նման բան պատահե՞լ է։", esAnswer: "Sí, me pasó algo parecido el año pasado.", hyAnswer: "Այո՛, անցյալ տարի ինձ հետ նման բան պատահեց։", tag: "Իրավիճակ" },
  { id: "m1-conv-22", category: "Իրական իրավիճակներում (En situaciones reales)", number: 22, esQuestion: "¿Qué harías tú en mi lugar?", hyQuestion: "Դու ի՞նչ կանեիր իմ փոխարեն։", esAnswer: "Yo hablaría con el profesor y le explicaría el problema.", hyAnswer: "Ես կխոսեի ուսուցչի հետ և կբացատրեի խնդիրը։", tag: "Իրավիճակ" }
];

export const MODULE1_RAPID_RESPONSES = [
  { id: "rr-1", esQuestion: "¡Date prisa!", hyQuestion: "Շտապի՛ր։", esAnswer: "¡Ya voy!", hyAnswer: "Հիմա գալիս եմ։" },
  { id: "rr-2", esQuestion: "¡Venga, vamos!", hyQuestion: "Դե՛, գնացինք։", esAnswer: "¡Vale!", hyAnswer: "Լավ։" },
  { id: "rr-3", esQuestion: "¡Escúchame!", hyQuestion: "Լսի՛ր ինձ։", esAnswer: "Te escucho.", hyAnswer: "Լսում եմ։" },
  { id: "rr-4", esQuestion: "¡Fíjate bien!", hyQuestion: "Ուշադիր նայի՛ր։", esAnswer: "¡Vale, me fijo!", hyAnswer: "Լավ, ուշադիր կնայեմ։" },
  { id: "rr-5", esQuestion: "¡Inténtalo otra vez!", hyQuestion: "Նորից փորձի՛ր։", esAnswer: "¡Lo intentaré!", hyAnswer: "Կփորձեմ։" },
  { id: "rr-6", esQuestion: "¡No te rindas!", hyQuestion: "Մի՛ հանձնվիր։", esAnswer: "¡No me rindo!", hyAnswer: "Չեմ հանձնվում։" },
  { id: "rr-7", esQuestion: "¡Ponte las pilas!", hyQuestion: "Ակտիվացի՛ր, կենտրոնացի՛ր։", esAnswer: "¡Vale, me pongo!", hyAnswer: "Լավ, կաշխուժանամ։" },
  { id: "rr-8", esQuestion: "¡Tranquilo, no pasa nada!", hyQuestion: "Հանգիստ, ոչինչ չի պատահել։", esAnswer: "¡Gracias!", hyAnswer: "Շնորհակալություն։" },
  { id: "rr-9", esQuestion: "¡Buen trabajo!", hyQuestion: "Լավ աշխատանք։", esAnswer: "¡Muchas gracias!", hyAnswer: "Շատ շնորհակալություն։" },
  { id: "rr-10", esQuestion: "¿Alguna duda?", hyQuestion: "Հարց կա՞։", esAnswer: "Sí, tengo una pregunta.", hyAnswer: "Այո՛, մի հարց ունեմ։" },
  { id: "rr-11", esQuestion: "¿Todo claro?", hyQuestion: "Ամեն ինչ պարզ է՞։", esAnswer: "Sí, todo claro.", hyAnswer: "Այո՛, ամեն ինչ պարզ է։" },
  { id: "rr-12", esQuestion: "¡Te toca!", hyQuestion: "Քո հերթն է։", esAnswer: "¡Voy yo!", hyAnswer: "Ես եմ գնում։" },
  { id: "rr-13", esQuestion: "¿Estás de acuerdo?", hyQuestion: "Համաձա՞յն ես։", esAnswer: "Sí, estoy de acuerdo.", hyAnswer: "Այո՛, համաձայն եմ։" },
  { id: "rr-14", esQuestion: "¿Te animas?", hyQuestion: "Կմասնակցե՞ս, կհամարձակվե՞ս։", esAnswer: "¡Claro que sí!", hyAnswer: "Իհարկե՛։" },
  { id: "rr-15", esQuestion: "¡Bien hecho!", hyQuestion: "Շատ լավ արեցիր։", esAnswer: "¡Gracias, míster!", hyAnswer: "Շնորհակալություն, մարզի՛չ։" }
];

export const DIALOGUES: Dialogue[] = [
  {
    id: "dial-1",
    titleEs: "Diálogo 1. En clase de Lengua",
    titleHy: "Երկխոսություն 1. Իսպաներենի դասին",
    lines: [
      { speakerEs: "Profesor", speakerHy: "Ուսուցիչ", textEs: "¿Quién quiere explicar la diferencia entre un sustantivo y un adjetivo?", textHy: "Ո՞վ է ուզում բացատրել գոյականի և ածականի տարբերությունը։" },
      { speakerEs: "Alumno", speakerHy: "Աշակերտ", textEs: "Yo puedo intentarlo.", textHy: "Ես կարող եմ փորձել։" },
      { speakerEs: "Profesor", speakerHy: "Ուսուցիչ", textEs: "Perfecto, te escuchamos.", textHy: "Հրաշալի է, լսում ենք քեզ։" },
      { speakerEs: "Alumno", speakerHy: "Աշակերտ", textEs: "El sustantivo nombra algo y el adjetivo expresa cómo es.", textHy: "Գոյականը անվանում է ինչ-որ բան, իսկ ածականը արտահայտում է, թե ինչպիսին է այն։" },
      { speakerEs: "Profesor", speakerHy: "Ուսուցիչ", textEs: "Muy bien. ¿Puedes poner un ejemplo?", textHy: "Շատ լավ։ Կարո՞ղ ես օրինակ բերել։" },
      { speakerEs: "Alumno", speakerHy: "Աշակերտ", textEs: "Sí: «balón» es un sustantivo y «rápido» es un adjetivo.", textHy: "Այո՛, «balón»-ը գոյական է, իսկ «rápido»-ն՝ ածական։" }
    ]
  },
  {
    id: "dial-2",
    titleEs: "Diálogo 2. En Matemáticas",
    titleHy: "Երկխոսություն 2. Մաթեմատիկայի դասին",
    lines: [
      { speakerEs: "Profesor", speakerHy: "Ուսուցիչ", textEs: "¿Cómo has resuelto este problema?", textHy: "Ինչպե՞ս ես լուծել այս խնդիրը։" },
      { speakerEs: "Alumno", speakerHy: "Աշակերտ", textEs: "Primero he multiplicado y después he sumado.", textHy: "Սկզբում բազմապատկել եմ, հետո գումարել։" },
      { speakerEs: "Profesor", speakerHy: "Ուսուցիչ", textEs: "¿Y por qué lo has hecho así?", textHy: "Իսկ ինչո՞ւ ես այդպես արել։" },
      { speakerEs: "Alumno", speakerHy: "Աշակերտ", textEs: "Porque la multiplicación tiene prioridad sobre la suma.", textHy: "Որովհետև բազմապատկումն առաջնահերթ է գումարման նկատմամբ։" },
      { speakerEs: "Profesor", speakerHy: "Ուսուցիչ", textEs: "Exacto. Muy bien razonado.", textHy: "Ճիշտ է։ Շատ լավ ես հիմնավորել։" }
    ]
  },
  {
    id: "dial-3",
    titleEs: "Diálogo 3. En el campo de fútbol",
    titleHy: "Երկխոսություն 3. Ֆուտբոլի դաշտում",
    lines: [
      { speakerEs: "Entrenador", speakerHy: "Մարզիչ", textEs: "¿Por qué te has quedado atrás?", textHy: "Ինչո՞ւ հետ ես մնացել։" },
      { speakerEs: "Jugador", speakerHy: "Ֆուտբոլիստ", textEs: "Porque estaba cubriendo al delantero.", textHy: "Որովհետև փակում էի հարձակվողին։" },
      { speakerEs: "Entrenador", speakerHy: "Մարզիչ", textEs: "Vale, pero tienes que mirar también a tus compañeros.", textHy: "Լավ, բայց պետք է նաև խաղընկերներիդ հետևես։" },
      { speakerEs: "Jugador", speakerHy: "Ֆուտբոլիստ", textEs: "Entendido, míster. La próxima vez estaré más atento.", textHy: "Հասկացա, մարզի՛չ։ Հաջորդ անգամ ավելի ուշադիր կլինեմ։" }
    ]
  },
  {
    id: "dial-4",
    titleEs: "Diálogo 4. Durante el recreo",
    titleHy: "Երկխոսություն 4. Դպրոցական ընդմիջմանը",
    lines: [
      { speakerEs: "Compañero", speakerHy: "Դասընկեր", textEs: "Oye, ¿qué haces esta tarde?", textHy: "Լսի՛ր, այսօր կեսօրից հետո ի՞նչ ես անում։" },
      { speakerEs: "Alumno", speakerHy: "Աշակերտ", textEs: "Tengo que estudiar Lengua y luego voy a entrenar.", textHy: "Պետք է իսպաներեն սովորեմ, հետո գնում եմ մարզման։" },
      { speakerEs: "Compañero", speakerHy: "Դասընկեր", textEs: "¿Y mañana te vienes a jugar con nosotros?", textHy: "Իսկ վաղը մեզ հետ գալի՞ս ես խաղալու։" },
      { speakerEs: "Alumno", speakerHy: "Աշակերտ", textEs: "¡Claro! Pero primero tengo que terminar los deberes.", textHy: "Իհարկե՛։ Բայց սկզբում պետք է տնային աշխատանքներս ավարտեմ։" },
      { speakerEs: "Compañero", speakerHy: "Դասընկեր", textEs: "Vale, entonces nos vemos mañana.", textHy: "Լավ, ուրեմն կհանդիպենք վաղը։" },
      { speakerEs: "Alumno", speakerHy: "Աշակերտ", textEs: "¡Hasta mañana!", textHy: "Մինչ վաղը։" }
    ]
  }
];

// -------------------------------------------------------------
// MODULE 2: 50 Առօրյա հարց ու պատասխան (Conversaciones cotidianas)
// -------------------------------------------------------------

export const MODULE2_CONV_50: QAItem[] = [
  // A. En el colegio — Դպրոցում (1-10)
  {
    id: "m2-c-1",
    category: "Դպրոցում (En el colegio)",
    subcategory: "Դպրոց",
    number: 1,
    esQuestion: "¿Qué tal te ha ido hoy en clase?",
    hyQuestion: "Ինչպե՞ս անցավ այսօրվա դասդ։",
    esAnswer: "Bastante bien, aunque algunas actividades eran difíciles.",
    hyAnswer: "Բավականին լավ, չնայած որոշ առաջադրանքներ դժվար էին։",
    tag: "Դպրոց"
  },
  {
    id: "m2-c-2",
    category: "Դպրոցում (En el colegio)",
    subcategory: "Դպրոց",
    number: 2,
    esQuestion: "¿Qué asignatura te toca después del recreo?",
    hyQuestion: "Ընդմիջումից հետո ի՞նչ առարկա ունես։",
    esAnswer: "Me toca Lengua Castellana.",
    hyAnswer: "Իսպաներեն լեզվի դաս ունեմ։",
    tag: "Դպրոց"
  },
  {
    id: "m2-c-3",
    category: "Դպրոցում (En el colegio)",
    subcategory: "Դպրոց",
    number: 3,
    esQuestion: "¿Has entendido lo que ha explicado el profesor?",
    hyQuestion: "Հասկացե՞լ ես՝ ինչ բացատրեց ուսուցիչը։",
    esAnswer: "Casi todo, pero necesito que repita la última parte.",
    hyAnswer: "Գրեթե ամեն ինչ, բայց պետք է, որ վերջին մասը կրկնի։",
    tag: "Դպրոց"
  },
  {
    id: "m2-c-4",
    category: "Դպրոցում (En el colegio)",
    subcategory: "Դպրոց",
    number: 4,
    esQuestion: "¿Por qué has llegado un poco tarde?",
    hyQuestion: "Ինչո՞ւ ես մի փոքր ուշացել։",
    esAnswer: "Porque había mucho tráfico esta mañana.",
    hyAnswer: "Որովհետև այսօր առավոտյան ճանապարհներին մեծ խցանում էր։",
    tag: "Դպրոց"
  },
  {
    id: "m2-c-5",
    category: "Դպրոցում (En el colegio)",
    subcategory: "Դպրոց",
    number: 5,
    esQuestion: "¿Te importa si hacemos el trabajo juntos?",
    hyQuestion: "Դեմ չե՞ս, եթե առաջադրանքը միասին կատարենք։",
    esAnswer: "No, claro que no. Podemos repartirnos las preguntas.",
    hyAnswer: "Ո՛չ, իհարկե։ Կարող ենք հարցերը բաժանել մեր միջև։",
    tag: "Դպրոց"
  },
  {
    id: "m2-c-6",
    category: "Դպրոցում (En el colegio)",
    subcategory: "Դպրոց",
    number: 6,
    esQuestion: "¿Me puedes prestar tus apuntes?",
    hyQuestion: "Կարո՞ղ ես քո գրառումները ժամանակավորապես տալ ինձ։",
    esAnswer: "Sí, pero devuélvemelos después de clase.",
    hyAnswer: "Այո՛, բայց դասից հետո վերադարձրու դրանք։",
    tag: "Դպրոց"
  },
  {
    id: "m2-c-7",
    category: "Դպրոցում (En el colegio)",
    subcategory: "Դպրոց",
    number: 7,
    esQuestion: "¿Qué parte del examen te ha parecido más complicada?",
    hyQuestion: "Քննության ո՞ր մասն էր քեզ ամենաբարդը թվում։",
    esAnswer: "La parte de comprensión lectora, porque había palabras que no conocía.",
    hyAnswer: "Ընթերցանության ըմբռնման մասը, որովհետև կային բառեր, որոնք չգիտեի։",
    tag: "Դպրոց"
  },
  {
    id: "m2-c-8",
    category: "Դպրոցում (En el colegio)",
    subcategory: "Դպրոց",
    number: 8,
    esQuestion: "¿Ya has entregado el trabajo?",
    hyQuestion: "Արդեն հանձնե՞լ ես աշխատանքը։",
    esAnswer: "Todavía no. Lo entregaré al final de la clase.",
    hyAnswer: "Դեռ ոչ։ Կհանձնեմ դասի վերջում։",
    tag: "Դպրոց"
  },
  {
    id: "m2-c-9",
    category: "Դպրոցում (En el colegio)",
    subcategory: "Դպրոց",
    number: 9,
    esQuestion: "¿Qué haces si no entiendes una pregunta?",
    hyQuestion: "Ի՞նչ ես անում, եթե հարցը չես հասկանում։",
    esAnswer: "Levanto la mano y le pido al profesor que me lo explique.",
    hyAnswer: "Ձեռք եմ բարձրացնում և խնդրում ուսուցչին բացատրել։",
    tag: "Դպրոց"
  },
  {
    id: "m2-c-10",
    category: "Դպրոցում (En el colegio)",
    subcategory: "Դպրոց",
    number: 10,
    esQuestion: "¿Qué vas a hacer cuando terminen las clases?",
    hyQuestion: "Ի՞նչ ես անելու, երբ դասերն ավարտվեն։",
    esAnswer: "Voy a comer, descansar un poco y después iré a entrenar.",
    hyAnswer: "Ուտելու եմ, մի քիչ հանգստանամ, հետո գնամ մարզման։",
    tag: "Դպրոց"
  },

  // B. Con los compañeros — Դասընկերների հետ (11-20)
  {
    id: "m2-c-11",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 11,
    esQuestion: "Oye, ¿te vienes con nosotros al patio?",
    hyQuestion: "Լսի՛ր, մեզ հետ բակ գալի՞ս ես։",
    esAnswer: "Sí, voy en un momento.",
    hyAnswer: "Այո՛, մի պահից գալիս եմ։",
    tag: "Ընկերներ"
  },
  {
    id: "m2-c-12",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 12,
    esQuestion: "¿A qué estás jugando?",
    hyQuestion: "Ի՞նչ ես խաղում։",
    esAnswer: "Estamos jugando a adivinar palabras. ¿Quieres participar?",
    hyAnswer: "Բառեր գուշակելու խաղ ենք խաղում։ Ուզո՞ւմ ես մասնակցել։",
    tag: "Ընկերներ"
  },
  {
    id: "m2-c-13",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 13,
    esQuestion: "¿Te apetece jugar al fútbol después de clase?",
    hyQuestion: "Ցանկանո՞ւմ ես դասերից հետո ֆուտբոլ խաղալ։",
    esAnswer: "Me encantaría, pero hoy tengo entrenamiento.",
    hyAnswer: "Մեծ հաճույքով, բայց այսօր մարզում ունեմ։",
    tag: "Ընկերներ"
  },
  {
    id: "m2-c-14",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 14,
    esQuestion: "¿Me guardas un sitio?",
    hyQuestion: "Ինձ համար տեղ կպահե՞ս։",
    esAnswer: "Sí, siéntate aquí cuando vuelvas.",
    hyAnswer: "Այո՛, երբ վերադառնաս, այստեղ կնստես։",
    tag: "Ընկերներ"
  },
  {
    id: "m2-c-15",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 15,
    esQuestion: "¿Qué estás buscando?",
    hyQuestion: "Ի՞նչ ես փնտրում։",
    esAnswer: "Mi estuche. Creo que lo he dejado en otra clase.",
    hyAnswer: "Իմ մատիտատուփը։ Կարծում եմ՝ մյուս դասարանում եմ թողել։",
    tag: "Ընկերներ"
  },
  {
    id: "m2-c-16",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 16,
    esQuestion: "¿Tú qué opinas de esta película?",
    hyQuestion: "Դու ի՞նչ կարծիք ունես այս ֆիլմի մասին։",
    esAnswer: "Me parece entretenida, aunque el final es un poco extraño.",
    hyAnswer: "Ինձ հետաքրքիր է թվում, թեև ավարտը մի փոքր տարօրինակ է։",
    tag: "Ընկերներ"
  },
  {
    id: "m2-c-17",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 17,
    esQuestion: "¿Te has enterado de lo que ha pasado?",
    hyQuestion: "Իմացե՞լ ես՝ ինչ է պատահել։",
    esAnswer: "No, cuéntamelo. ¿Qué ha pasado?",
    hyAnswer: "Ո՛չ, պատմի՛ր։ Ի՞նչ է եղել։",
    tag: "Ընկերներ"
  },
  {
    id: "m2-c-18",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 18,
    esQuestion: "¿Qué prefieres, trabajar solo o en grupo?",
    hyQuestion: "Ի՞նչ ես նախընտրում՝ մենա՞կ աշխատել, թե՞ խմբով։",
    esAnswer: "Prefiero trabajar en grupo porque podemos ayudarnos.",
    hyAnswer: "Նախընտրում եմ խմբով աշխատել, որովհետև կարող ենք օգնել միմյանց։",
    tag: "Ընկերներ"
  },
  {
    id: "m2-c-19",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 19,
    esQuestion: "¿Has quedado con alguien para esta tarde?",
    hyQuestion: "Այսօր կեսօրից հետո ինչ-որ մեկի հետ պայմանավորվե՞լ ես հանդիպել։",
    esAnswer: "Sí, he quedado con dos amigos después del entrenamiento.",
    hyAnswer: "Այո՛, պայմանավորվել եմ մարզումից հետո հանդիպել երկու ընկերներիս։",
    tag: "Ընկերներ"
  },
  {
    id: "m2-c-20",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 20,
    esQuestion: "¿Por qué estás tan callado hoy?",
    hyQuestion: "Ինչո՞ւ ես այսօր այդքան լուռ։",
    esAnswer: "Estoy un poco cansado, pero todo está bien.",
    hyAnswer: "Մի քիչ հոգնած եմ, բայց ամեն ինչ լավ է։",
    tag: "Ընկերներ"
  },

  // C. Situaciones cotidianas — Ամենօրյա իրավիճակներ (21-30)
  {
    id: "m2-c-21",
    category: "Ամենօրյա իրավիճակներ (Situaciones cotidianas)",
    subcategory: "Առօրյա",
    number: 21,
    esQuestion: "¿Sabes dónde está la biblioteca?",
    hyQuestion: "Գիտե՞ս՝ որտեղ է գրադարանը։",
    esAnswer: "Sí, está al final del pasillo, a la derecha.",
    hyAnswer: "Այո՛, միջանցքի վերջում է՝ աջ կողմում։",
    tag: "Առօրյա"
  },
  {
    id: "m2-c-22",
    category: "Ամենօրյա իրավիճակներ (Situaciones cotidianas)",
    subcategory: "Առօրյա",
    number: 22,
    esQuestion: "¿Cuánto cuesta este bocadillo?",
    hyQuestion: "Ինչքա՞ն արժե այս սենդվիչը։",
    esAnswer: "Cuesta tres euros con cincuenta.",
    hyAnswer: "Արժե երեք եվրո և հիսուն ցենտ։",
    tag: "Առօրյա"
  },
  {
    id: "m2-c-23",
    category: "Ամենօրյա իրավիճակներ (Situaciones cotidianas)",
    subcategory: "Առօրյա",
    number: 23,
    esQuestion: "¿Qué quieres para merendar?",
    hyQuestion: "Ի՞նչ ես ուզում ուտել հետճաշիկին։",
    esAnswer: "Me gustaría un bocadillo y un zumo.",
    hyAnswer: "Կուզենայի սենդվիչ և հյութ։",
    tag: "Առօրյա"
  },
  {
    id: "m2-c-24",
    category: "Ամենօրյա իրավիճակներ (Situaciones cotidianas)",
    subcategory: "Առօրյա",
    number: 24,
    esQuestion: "¿A qué hora sueles levantarte?",
    hyQuestion: "Սովորաբար ժամը քանի՞սին ես արթնանում։",
    esAnswer: "Suelo levantarme a las siete menos cuarto.",
    hyAnswer: "Սովորաբար արթնանում եմ ժամը 6։45-ին։",
    tag: "Առօրյա"
  },
  {
    id: "m2-c-25",
    category: "Ամենօրյա իրավիճակներ (Situaciones cotidianas)",
    subcategory: "Առօրյա",
    number: 25,
    esQuestion: "¿Cuánto tardas en llegar al colegio?",
    hyQuestion: "Որքա՞ն ժամանակ է պահանջվում դպրոց հասնելու համար։",
    esAnswer: "Tardo unos veinte minutos andando.",
    hyAnswer: "Ոտքով մոտ քսան րոպե է տևում։",
    tag: "Առօրյա"
  },
  {
    id: "m2-c-26",
    category: "Ամենօրյա իրավիճակներ (Situaciones cotidianas)",
    subcategory: "Առօրյա",
    number: 26,
    esQuestion: "¿Qué haces cuando llegas a casa?",
    hyQuestion: "Ի՞նչ ես անում, երբ տուն ես հասնում։",
    esAnswer: "Primero me cambio de ropa y después como.",
    hyAnswer: "Սկզբում փոխում եմ հագուստս, հետո ուտում եմ։",
    tag: "Առօրյա"
  },
  {
    id: "m2-c-27",
    category: "Ամենօրյա իրավիճակներ (Situaciones cotidianas)",
    subcategory: "Առօրյա",
    number: 27,
    esQuestion: "¿Te gusta vivir en España?",
    hyQuestion: "Քեզ դո՞ւր է գալիս Իսպանիայում ապրելը։",
    esAnswer: "Sí, me gusta mucho, aunque a veces echo de menos mi país.",
    hyAnswer: "Այո՛, շատ է դուր գալիս, թեև երբեմն կարոտում եմ իմ երկիրը։",
    tag: "Առօրյա"
  },
  {
    id: "m2-c-28",
    category: "Ամենօրյա իրավիճակներ (Situaciones cotidianas)",
    subcategory: "Առօրյա",
    number: 28,
    esQuestion: "¿Qué haces si pierdes el autobús?",
    hyQuestion: "Ի՞նչ ես անում, եթե ավտոբուսից ուշանում ես։",
    esAnswer: "Espero al siguiente y aviso de que voy a llegar tarde.",
    hyAnswer: "Սպասում եմ հաջորդին և տեղեկացնում, որ ուշանալու եմ։",
    tag: "Առօրյա"
  },
  {
    id: "m2-c-29",
    category: "Ամենօրյա իրավիճակներ (Situaciones cotidianas)",
    subcategory: "Առօրյա",
    number: 29,
    esQuestion: "¿Prefieres ir andando o en bicicleta?",
    hyQuestion: "Նախընտրում ես ոտքո՞վ գնալ, թե՞ հեծանիվով։",
    esAnswer: "Prefiero ir en bicicleta porque llego más rápido.",
    hyAnswer: "Նախընտրում եմ հեծանիվով, որովհետև ավելի արագ եմ հասնում։",
    tag: "Առօրյա"
  },
  {
    id: "m2-c-30",
    category: "Ամենօրյա իրավիճակներ (Situaciones cotidianas)",
    subcategory: "Առօրյա",
    number: 30,
    esQuestion: "¿Qué harías si encontraras un móvil en la calle?",
    hyQuestion: "Ի՞նչ կանեիր, եթե փողոցում հեռախոս գտնեիր։",
    esAnswer: "Intentaría encontrar a su dueño o lo entregaría a la policía.",
    hyAnswer: "Կփորձեի գտնել տիրոջը կամ կհանձնեի ոստիկանությանը։",
    tag: "Առօրյա"
  },

  // D. En el fútbol — Ֆուտբոլում (31-40)
  {
    id: "m2-c-31",
    category: "Ֆուտբոլում (En el fútbol)",
    subcategory: "Ֆուտբոլ",
    number: 31,
    esQuestion: "¿Qué es lo que más te gusta del fútbol?",
    hyQuestion: "Ի՞նչն է քեզ ամենաշատը դուր գալիս ֆուտբոլում։",
    esAnswer: "Me gusta jugar en equipo, dar buenos pases y marcar goles.",
    hyAnswer: "Սիրում եմ թիմով խաղալ, լավ փոխանցումներ կատարել և գոլեր խփել։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m2-c-32",
    category: "Ֆուտբոլում (En el fútbol)",
    subcategory: "Ֆուտբոլ",
    number: 32,
    esQuestion: "¿Cómo te has sentido durante el partido?",
    hyQuestion: "Ինչպե՞ս էիր քեզ զգում խաղի ընթացքում։",
    esAnswer: "Al principio estaba nervioso, pero después me sentí más seguro.",
    hyAnswer: "Սկզբում նյարդայնացած էի, բայց հետո ինձ ավելի վստահ զգացի։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m2-c-33",
    category: "Ֆուտբոլում (En el fútbol)",
    subcategory: "Ֆուտբոլ",
    number: 33,
    esQuestion: "¿Por qué no has tirado a portería?",
    hyQuestion: "Ինչո՞ւ չես հարվածել դարպասին։",
    esAnswer: "Porque tenía un compañero mejor colocado y preferí pasarle el balón.",
    hyAnswer: "Որովհետև խաղընկերս ավելի լավ դիրքում էր, և նախընտրեցի գնդակը նրան փոխանցել։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m2-c-34",
    category: "Ֆուտբոլում (En el fútbol)",
    subcategory: "Ֆուտբոլ",
    number: 34,
    esQuestion: "¿Qué haces cuando el entrenador te corrige?",
    hyQuestion: "Ի՞նչ ես անում, երբ մարզիչը ուղղում է սխալդ։",
    esAnswer: "Lo escucho, intento entender el error y lo corrijo.",
    hyAnswer: "Լսում եմ նրան, փորձում եմ հասկանալ սխալս և ուղղում եմ այն։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m2-c-35",
    category: "Ֆուտբոլում (En el fútbol)",
    subcategory: "Ֆուտբոլ",
    number: 35,
    esQuestion: "¿Te atreverías a tirar un penalti decisivo?",
    hyQuestion: "Կհամարձակվեի՞ր վճռորոշ 11-մետրանոց հարված կատարել։",
    esAnswer: "Sí, aunque estuviera nervioso, lo intentaría.",
    hyAnswer: "Այո՛, նույնիսկ եթե նյարդայնացած լինեի, կփորձեի։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m2-c-36",
    category: "Ֆուտբոլում (En el fútbol)",
    subcategory: "Ֆուտբոլ",
    number: 36,
    esQuestion: "¿Qué haces si un compañero se equivoca?",
    hyQuestion: "Ի՞նչ ես անում, եթե խաղընկերդ սխալվում է։",
    esAnswer: "Lo animo y le digo que siga intentándolo.",
    hyAnswer: "Քաջալերում եմ նրան և ասում, որ շարունակի փորձել։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m2-c-37",
    category: "Ֆուտբոլում (En el fútbol)",
    subcategory: "Ֆուտբոլ",
    number: 37,
    esQuestion: "¿Has mejorado últimamente?",
    hyQuestion: "Վերջերս առաջադիմե՞լ ես։",
    esAnswer: "Sí, creo que ahora controlo mejor el balón y tomo decisiones más rápido.",
    hyAnswer: "Այո՛, կարծում եմ՝ հիմա ավելի լավ եմ կառավարում գնդակը և ավելի արագ որոշումներ կայացնում։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m2-c-38",
    category: "Ֆուտբոլում (En el fútbol)",
    subcategory: "Ֆուտբոլ",
    number: 38,
    esQuestion: "¿Qué harías si el árbitro se equivocara?",
    hyQuestion: "Ի՞նչ կանեիր, եթե մրցավարը սխալվեր։",
    esAnswer: "Mantendría la calma y seguiría jugando.",
    hyAnswer: "Կպահպանեի հանգստությունս և կշարունակեի խաղալ։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m2-c-39",
    category: "Ֆուտբոլում (En el fútbol)",
    subcategory: "Ֆուտբոլ",
    number: 39,
    esQuestion: "¿Qué necesitas mejorar esta temporada?",
    hyQuestion: "Ի՞նչ պետք է բարելավես այս մրցաշրջանում։",
    esAnswer: "Necesito mejorar mis pases largos y mi resistencia.",
    hyAnswer: "Պետք է բարելավեմ երկար փոխանցումներս և դիմացկունությունս։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m2-c-40",
    category: "Ֆուտբոլում (En el fútbol)",
    subcategory: "Ֆուտբոլ",
    number: 40,
    esQuestion: "¿Qué haces después de perder un partido importante?",
    hyQuestion: "Ի՞նչ ես անում կարևոր խաղում պարտվելուց հետո։",
    esAnswer: "Analizo mis errores, descanso y me preparo para el siguiente partido.",
    hyAnswer: "Վերլուծում եմ սխալներս, հանգստանում եմ և պատրաստվում հաջորդ խաղին։",
    tag: "Ֆուտբոլ"
  },

  // E. Opina y responde — Արտահայտի՛ր կարծիքդ (41-50)
  {
    id: "m2-c-41",
    category: "Արտահայտի՛ր կարծիքդ (Opina y responde)",
    subcategory: "Կարծիք",
    number: 41,
    esQuestion: "¿Qué harías si tu mejor amigo estuviera triste?",
    hyQuestion: "Ի՞նչ կանեիր, եթե լավագույն ընկերդ տխուր լիներ։",
    esAnswer: "Hablaría con él y trataría de animarlo.",
    hyAnswer: "Կխոսեի նրա հետ և կփորձեի ուրախացնել նրան։",
    tag: "Կարծիք"
  },
  {
    id: "m2-c-42",
    category: "Արտահայտի՛ր կարծիքդ (Opina y responde)",
    subcategory: "Կարծիք",
    number: 42,
    esQuestion: "¿Qué es más importante, ganar o aprender?",
    hyQuestion: "Ի՞նչն է ավելի կարևոր՝ հաղթե՞լը, թե՞ սովորելը։",
    esAnswer: "Creo que aprender es más importante, porque así podemos mejorar.",
    hyAnswer: "Կարծում եմ՝ սովորելն ավելի կարևոր է, որովհետև այդպես կարող ենք կատարելագործվել։",
    tag: "Կարծիք"
  },
  {
    id: "m2-c-43",
    category: "Արտահայտի՛ր կարծիքդ (Opina y responde)",
    subcategory: "Կարծիք",
    number: 43,
    esQuestion: "¿Qué haces cuando alguien no está de acuerdo contigo?",
    hyQuestion: "Ի՞նչ ես անում, երբ ինչ-որ մեկը համաձայն չէ քեզ հետ։",
    esAnswer: "Escucho su opinión y explico la mía con respeto.",
    hyAnswer: "Լսում եմ նրա կարծիքը և հարգանքով բացատրում իմը։",
    tag: "Կարծիք"
  },
  {
    id: "m2-c-44",
    category: "Արտահայտի՛ր կարծիքդ (Opina y responde)",
    subcategory: "Կարծիք",
    number: 44,
    esQuestion: "¿Qué harías si no supieras responder a una pregunta del profesor?",
    hyQuestion: "Ի՞նչ կանեիր, եթե չիմանայիր ուսուցչի հարցի պատասխանը։",
    esAnswer: "Diría que no estoy seguro y pediría una explicación.",
    hyAnswer: "Կասեի, որ վստահ չեմ, և կխնդրեի բացատրություն։",
    tag: "Կարծիք"
  },
  {
    id: "m2-c-45",
    category: "Արտահայտի՛ր կարծիքդ (Opina y responde)",
    subcategory: "Կարծիք",
    number: 45,
    esQuestion: "¿Qué te gustaría conseguir este año?",
    hyQuestion: "Ի՞նչ կցանկանայիր ձեռք բերել այս տարի։",
    esAnswer: "Me gustaría mejorar mi español y jugar mejor al fútbol.",
    hyAnswer: "Կցանկանայի բարելավել իսպաներենս և ավելի լավ ֆուտբոլ խաղալ։",
    tag: "Կարծիք"
  },
  {
    id: "m2-c-46",
    category: "Արտահայտի՛ր կարծիքդ (Opina y responde)",
    subcategory: "Կարծիք",
    number: 46,
    esQuestion: "¿Cómo reaccionas cuando alguien te critica?",
    hyQuestion: "Ինչպե՞ս ես արձագանքում, երբ ինչ-որ մեկը քննադատում է քեզ։",
    esAnswer: "Intento escuchar y distinguir una crítica útil de un comentario desagradable.",
    hyAnswer: "Փորձում եմ լսել և տարբերել օգտակար քննադատությունը տհաճ մեկնաբանությունից։",
    tag: "Կարծիք"
  },
  {
    id: "m2-c-47",
    category: "Արտահայտի՛ր կարծիքդ (Opina y responde)",
    subcategory: "Կարծիք",
    number: 47,
    esQuestion: "¿Qué harías si vieras a un compañero solo durante el recreo?",
    hyQuestion: "Ի՞նչ կանեիր, եթե ընդմիջմանը տեսնեիր դասընկերոջդ մենակ։",
    esAnswer: "Me acercaría y le preguntaría si quiere jugar con nosotros.",
    hyAnswer: "Կմոտենայի և կհարցնեի՝ ուզո՞ւմ է մեզ հետ խաղալ։",
    tag: "Կարծիք"
  },
  {
    id: "m2-c-48",
    category: "Արտահայտի՛ր կարծիքդ (Opina y responde)",
    subcategory: "Կարծիք",
    number: 48,
    esQuestion: "¿Prefieres que te expliquen algo con palabras o con ejemplos?",
    hyQuestion: "Նախընտրում ես, որ քեզ ինչ-որ բան բացատրեն բառերո՞վ, թե՞ օրինակներով։",
    esAnswer: "Con ejemplos, porque así lo entiendo mejor.",
    hyAnswer: "Օրինակներով, որովհետև այդպես ավելի լավ եմ հասկանում։",
    tag: "Կարծիք"
  },
  {
    id: "m2-c-49",
    category: "Արտահայտի՛ր կարծիքդ (Opina y responde)",
    subcategory: "Կարծիք",
    number: 49,
    esQuestion: "¿Qué has aprendido de tus errores?",
    hyQuestion: "Ի՞նչ ես սովորել քո սխալներից։",
    esAnswer: "He aprendido que equivocarse es normal y que es importante seguir practicando.",
    hyAnswer: "Սովորել եմ, որ սխալվելը բնական է, և կարևոր է շարունակել պարապել։",
    tag: "Կարծիք"
  },
  {
    id: "m2-c-50",
    category: "Արտահայտի՛ր կարծիքդ (Opina y responde)",
    subcategory: "Կարծիք",
    number: 50,
    esQuestion: "¿Qué consejo le darías a un alumno nuevo que no habla bien español?",
    hyQuestion: "Ի՞նչ խորհուրդ կտայիր նոր աշակերտին, որը լավ չի խոսում իսպաներեն։",
    esAnswer: "Le diría que no tenga miedo de hablar, que haga preguntas y que practique todos los días.",
    hyAnswer: "Կասեի, որ չվախենա խոսելուց, հարցեր տա և ամեն օր պարապի։",
    tag: "Կարծիք"
  }
];

// -------------------------------------------------------------
// MODULE 3: 20 Մաթեմատիկական առաջադրանքներ (Matemáticas 20)
// -------------------------------------------------------------

export const MODULE3_MATH_20: QAItem[] = [
  // A. Cálculo rápido
  {
    id: "m3-math-1",
    category: "Արագ հաշվարկ (Cálculo rápido)",
    number: 1,
    esQuestion: "¿Cuánto es cuarenta y ocho más treinta y siete?",
    hyQuestion: "Ինչքա՞ն է 48 + 37։",
    esAnswer: "Ochenta y cinco.",
    hyAnswer: "Պատասխան՝ 85։",
    tag: "Մաթեմատիկա"
  },
  {
    id: "m3-math-2",
    category: "Արագ հաշվարկ (Cálculo rápido)",
    number: 2,
    esQuestion: "¿Cuánto es ciento veinte menos setenta y seis?",
    hyQuestion: "Ինչքա՞ն է 120 − 76։",
    esAnswer: "Cuarenta y cuatro.",
    hyAnswer: "Պատասխան՝ 44։",
    tag: "Մաթեմատիկա"
  },
  {
    id: "m3-math-3",
    category: "Արագ հաշվարկ (Cálculo rápido)",
    number: 3,
    esQuestion: "¿Cuánto es catorce por nueve?",
    hyQuestion: "Ինչքա՞ն է 14 × 9։",
    esAnswer: "Ciento veintiséis.",
    hyAnswer: "Պատասխան՝ 126։",
    tag: "Մաթեմատիկա"
  },
  {
    id: "m3-math-4",
    category: "Արագ հաշվարկ (Cálculo rápido)",
    number: 4,
    esQuestion: "¿Cuánto es doscientos dieciséis dividido entre doce?",
    hyQuestion: "Ինչքա՞ն է 216 ÷ 12։",
    esAnswer: "Dieciocho.",
    hyAnswer: "Պատասխան՝ 18։",
    tag: "Մաթեմատիկա"
  },
  {
    id: "m3-math-5",
    category: "Արագ հաշվարկ (Cálculo rápido)",
    number: 5,
    esQuestion: "¿Cuál es la tercera parte de noventa y seis?",
    hyQuestion: "Որքա՞ն է 96-ի մեկ երրորդը։",
    esAnswer: "Treinta y dos.",
    hyAnswer: "Պատասխան՝ 32։",
    tag: "Մաթեմատիկա"
  },

  // B. Fracciones y porcentajes
  {
    id: "m3-math-6",
    category: "Կոտորակներ և տոկոսներ (Fracciones y porcentajes)",
    number: 6,
    esQuestion: "Una clase tiene veinticuatro alumnos. Tres cuartas partes han entregado el trabajo. ¿Cuántos alumnos lo han entregado?",
    hyQuestion: "Դասարանում կա 24 աշակերտ։ Նրանց երեք քառորդը հանձնել է աշխատանքը։ Քանի՞ աշակերտ է հանձնել։",
    solution: "24 × 3 ÷ 4 = 18",
    esAnswer: "Dieciocho alumnos.",
    hyAnswer: "Պատասխան՝ 18 աշակերտ։",
    tag: "Կոտորակ"
  },
  {
    id: "m3-math-7",
    category: "Կոտորակներ և տոկոսներ (Fracciones y porcentajes)",
    number: 7,
    esQuestion: "Un libro cuesta veinte euros y tiene un descuento del quince por ciento. ¿Cuál es su precio final?",
    hyQuestion: "Գիրքն արժե 20 եվրո և ունի 15% զեղչ։ Որքա՞ն է վերջնական գինը։",
    solution: "20 × 0,15 = 3; 20 − 3 = 17",
    esAnswer: "Cuesta diecisiete euros.",
    hyAnswer: "Պատասխան՝ 17 եվրո։",
    tag: "Տոկոս"
  },
  {
    id: "m3-math-8",
    category: "Կոտորակներ և տոկոսներ (Fracciones y porcentajes)",
    number: 8,
    esQuestion: "¿Cuánto es el veinticinco por ciento de doscientos cuarenta?",
    hyQuestion: "Որքա՞ն է 240-ի 25%-ը։",
    solution: "240 × 0,25 = 60",
    esAnswer: "Sesenta.",
    hyAnswer: "Պատասխան՝ 60։",
    tag: "Տոկոս"
  },
  {
    id: "m3-math-9",
    category: "Կոտորակներ և տոկոսներ (Fracciones y porcentajes)",
    number: 9,
    esQuestion: "Si has acertado dieciséis preguntas de un total de veinte, ¿qué porcentaje has acertado?",
    hyQuestion: "Եթե 20 հարցից 16-ին ճիշտ ես պատասխանել, քանի՞ տոկոսն ես ճիշտ պատասխանել։",
    solution: "16 ÷ 20 × 100 = 80%",
    esAnswer: "El ochenta por ciento.",
    hyAnswer: "Պատասխան՝ 80%։",
    tag: "Տոկոս"
  },

  // C. Ecuaciones
  {
    id: "m3-math-10",
    category: "Հավասարումներ (Ecuaciones)",
    number: 10,
    esQuestion: "Si tres equis más cinco es igual a veinte, ¿cuánto vale equis?",
    hyQuestion: "Եթե 3x + 5 = 20, որքա՞ն է x-ը։",
    solution: "3x = 15; x = 5",
    esAnswer: "Equis vale cinco.",
    hyAnswer: "Պատասխան՝ x = 5։",
    tag: "Հավասարում"
  },
  {
    id: "m3-math-11",
    category: "Հավասարումներ (Ecuaciones)",
    number: 11,
    esQuestion: "El doble de un número menos seis es igual a catorce. ¿Cuál es el número?",
    hyQuestion: "Մի թվի կրկնապատիկից հանած 6-ը հավասար է 14-ի։ Ո՞րն է այդ թիվը։",
    solution: "2x − 6 = 14; 2x = 20; x = 10",
    esAnswer: "El número es diez.",
    hyAnswer: "Պատասխան՝ 10։",
    tag: "Հավասարում"
  },
  {
    id: "m3-math-12",
    category: "Հավասարումներ (Ecuaciones)",
    number: 12,
    esQuestion: "La suma de tres números consecutivos es treinta y seis. ¿Cuáles son?",
    hyQuestion: "Երեք հաջորդական թվերի գումարը 36 է։ Որո՞նք են այդ թվերը։",
    solution: "x + (x + 1) + (x + 2) = 36; 3x + 3 = 36; x = 11",
    esAnswer: "Once, doce y trece.",
    hyAnswer: "Պատասխան՝ 11, 12 և 13։",
    tag: "Հավասարում"
  },

  // D. Geometría
  {
    id: "m3-math-13",
    category: "Երկրաչափություն (Geometría)",
    number: 13,
    esQuestion: "Un rectángulo mide doce centímetros de largo y siete de ancho. ¿Cuál es su área?",
    hyQuestion: "Ուղղանկյան երկարությունը 12 սմ է, լայնությունը՝ 7 սմ։ Որքա՞ն է մակերեսը։",
    solution: "12 × 7 = 84",
    esAnswer: "Ochenta y cuatro centímetros cuadrados.",
    hyAnswer: "Պատասխան՝ 84 սմ²։",
    tag: "Երկրաչափություն"
  },
  {
    id: "m3-math-14",
    category: "Երկրաչափություն (Geometría)",
    number: 14,
    esQuestion: "Un cuadrado tiene un perímetro de treinta y seis centímetros. ¿Cuánto mide cada lado?",
    hyQuestion: "Քառակուսու պարագիծը 36 սմ է։ Որքա՞ն է յուրաքանչյուր կողմը։",
    solution: "36 ÷ 4 = 9",
    esAnswer: "Cada lado mide nueve centímetros.",
    hyAnswer: "Պատասխան՝ 9 սմ։",
    tag: "Երկրաչափություն"
  },
  {
    id: "m3-math-15",
    category: "Երկրաչափություն (Geometría)",
    number: 15,
    esQuestion: "Un triángulo tiene dos ángulos de cincuenta y sesenta grados. ¿Cuánto mide el tercero?",
    hyQuestion: "Եռանկյան երկու անկյունները 50° և 60° են։ Որքա՞ն է երրորդ անկյունը։",
    solution: "180° − 50° − 60° = 70°",
    esAnswer: "Setenta grados.",
    hyAnswer: "Պատասխան՝ 70°։",
    tag: "Երկրաչափություն"
  },

  // E. Problemas de fútbol
  {
    id: "m3-math-16",
    category: "Ֆուտբոլային մաթեմատիկա (Problemas de fútbol)",
    number: 16,
    esQuestion: "Un equipo ha ganado siete partidos, ha empatado tres y ha perdido dos. ¿Cuántos puntos ha conseguido?",
    hyQuestion: "Թիմը հաղթել է 7 խաղում, 3-ն ավարտել է ոչ-ոքի և 2-ում պարտվել է։ Քանի՞ միավոր ունի, եթե հաղթանակը տալիս է 3 միավոր։",
    solution: "7 × 3 + 3 × 1 = 24",
    esAnswer: "Ha conseguido veinticuatro puntos.",
    hyAnswer: "Պատասխան՝ 24 միավոր։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m3-math-17",
    category: "Ֆուտբոլային մաթեմատիկա (Problemas de fútbol)",
    number: 17,
    esQuestion: "En cinco partidos, un jugador ha marcado dos, uno, tres, cero y cuatro goles. ¿Cuál es su media de goles por partido?",
    hyQuestion: "Հինգ խաղում ֆուտբոլիստը խփել է համապատասխանաբար 2, 1, 3, 0 և 4 գոլ։ Որքա՞ն է միջինը։",
    solution: "(2 + 1 + 3 + 0 + 4) ÷ 5 = 2",
    esAnswer: "Dos goles por partido.",
    hyAnswer: "Պատասխան՝ մեկ խաղում միջինը 2 գոլ։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m3-math-18",
    category: "Ֆուտբոլային մաթեմատիկա (Problemas de fútbol)",
    number: 18,
    esQuestion: "Una sesión de entrenamiento empieza a las cuatro y veinte y dura una hora y cuarenta y cinco minutos. ¿A qué hora termina?",
    hyQuestion: "Մարզումը սկսվում է 16։20-ին և տևում է 1 ժամ 45 րոպե։ Ե՞րբ է ավարտվում։",
    solution: "16:20 + 1:45 = 18:05",
    esAnswer: "A las seis y cinco de la tarde.",
    hyAnswer: "Պատասխան՝ 18։05։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m3-math-19",
    category: "Ֆուտբոլային մաթեմատիկա (Problemas de fútbol)",
    number: 19,
    esQuestion: "Un equipo ha realizado doscientos pases y ha completado ciento setenta. ¿Qué porcentaje de pases ha completado?",
    hyQuestion: "Թիմը կատարել է 200 փոխանցում, որոնցից 170-ը հաջող են եղել։ Որքա՞ն է հաջող փոխանցումների տոկոսը։",
    solution: "170 ÷ 200 × 100 = 85%",
    esAnswer: "El ochenta y cinco por ciento.",
    hyAnswer: "Պատասխան՝ 85%։",
    tag: "Ֆուտբոլ"
  },
  {
    id: "m3-math-20",
    category: "Ֆուտբոլային մաթեմատիկա (Problemas de fútbol)",
    number: 20,
    esQuestion: "Tres amigos compran un balón de treinta y seis euros. Si todos pagan lo mismo, ¿cuánto paga cada uno?",
    hyQuestion: "Երեք ընկեր գնում են 36 եվրո արժողությամբ գնդակ։ Եթե հավասար են վճարում, յուրաքանչյուրը որքա՞ն է տալիս։",
    solution: "36 ÷ 3 = 12",
    esAnswer: "Cada uno paga doce euros.",
    hyAnswer: "Պատասխան՝ յուրաքանչյուրն վճարում է 12 եվրո։",
    tag: "Ֆուտբոլ"
  }
];

// -------------------------------------------------------------
// MODULE 4: Lengua Castellana — 20 առաջադրանք
// -------------------------------------------------------------

export const MODULE4_LENGUA_20: QAItem[] = [
  // A. Gramática (1-8)
  {
    id: "m4-l-1",
    category: "Քերականություն (Gramática)",
    number: 1,
    esQuestion: "Identifica el sujeto de la oración: «Los jugadores entrenan todas las tardes».",
    hyQuestion: "Գտի՛ր ենթական՝ «Ֆուտբոլիստները մարզվում են ամեն երեկո»։",
    esAnswer: "El sujeto es «Los jugadores».",
    hyAnswer: "Պատասխան՝ ենթական «Los jugadores»-ն է։",
    tag: "Քերականություն"
  },
  {
    id: "m4-l-2",
    category: "Քերականություն (Gramática)",
    number: 2,
    esQuestion: "Identifica el predicado: «Mi amigo prepara una presentación».",
    hyQuestion: "Գտի՛ր ստորոգյալային մասը։",
    esAnswer: "«Prepara una presentación».",
    hyAnswer: "Պատասխան՝ «Prepara una presentación»։",
    tag: "Քերականություն"
  },
  {
    id: "m4-l-3",
    category: "Քերականություն (Gramática)",
    number: 3,
    esQuestion: "¿Qué clase de palabra es «rápidamente»?",
    hyQuestion: "Ի՞նչ խոսքի մաս է «rápidamente»-ը։",
    esAnswer: "Un adverbio de modo.",
    hyAnswer: "Պատասխան՝ ձևի մակբայ։",
    tag: "Քերականություն"
  },
  {
    id: "m4-l-4",
    category: "Քերականություն (Gramática)",
    number: 4,
    esQuestion: "¿Qué tipo de sustantivo es «Sevilla»?",
    hyQuestion: "Ի՞նչ տեսակի գոյական է «Sevilla»-ն։",
    esAnswer: "Es un sustantivo propio.",
    hyAnswer: "Պատասխան՝ հատուկ գոյական։",
    tag: "Քերականություն"
  },
  {
    id: "m4-l-5",
    category: "Քերականություն (Gramática)",
    number: 5,
    esQuestion: "Encuentra el adjetivo en «El delantero rápido marcó un gol».",
    hyQuestion: "Գտի՛ր ածականը այս նախադասության մեջ։",
    esAnswer: "«Rápido».",
    hyAnswer: "Պատասխան՝ «Rápido»։",
    tag: "Քերականություն"
  },
  {
    id: "m4-l-6",
    category: "Քերականություն (Gramática)",
    number: 6,
    esQuestion: "¿En qué tiempo verbal está «Ayer jugamos un partido»?",
    hyQuestion: "Ի՞նչ ժամանակաձևով է բայը։",
    esAnswer: "Pretérito Indefinido.",
    hyAnswer: "Պատասխան՝ անցյալ ավարտված գործողության ժամանակաձև։ Այս նախադասության մեջ jugamos-ը Indefinido է։",
    tag: "Քերականություն"
  },
  {
    id: "m4-l-7",
    category: "Քերականություն (Gramática)",
    number: 7,
    esQuestion: "Cambia a plural: «El niño estudioso».",
    hyQuestion: "Դարձրո՛ւ հոգնակի։",
    esAnswer: "«Los niños estudiosos».",
    hyAnswer: "Պատասխան՝ «Los niños estudiosos»։",
    tag: "Քերականություն"
  },
  {
    id: "m4-l-8",
    category: "Քերականություն (Gramática)",
    number: 8,
    esQuestion: "Sustituye el complemento directo por un pronombre: «Leo el libro».",
    hyQuestion: "Ուղիղ խնդիրը փոխարինի՛ր դերանունով։",
    esAnswer: "«Lo leo».",
    hyAnswer: "Պատասխան՝ «Lo leo»։",
    tag: "Քերականություն"
  },

  // B. Ortografía (9-12)
  {
    id: "m4-l-9",
    category: "Ուղղագրություն (Ortografía)",
    number: 9,
    esQuestion: "¿Por qué lleva tilde «matemáticas»?",
    hyQuestion: "Ինչո՞ւ է «matemáticas»-ը շեշտանիշ կրում։",
    esAnswer: "Porque es una palabra esdrújula.",
    hyAnswer: "Պատասխան՝ որովհետև esdrújula է։",
    tag: "Ուղղագրություն"
  },
  {
    id: "m4-l-10",
    category: "Ուղղագրություն (Ortografía)",
    number: 10,
    esQuestion: "Clasifica las palabras «canción», «árbol» y «pájaro» según su acentuación.",
    hyQuestion: "Դասակարգի՛ր բառերը ըստ շեշտադրության։",
    esAnswer: "Canción: Aguda — շեշտը վերջին վանկի վրա։\nÁrbol: Llana — շեշտը նախավերջին վանկի վրա։\nPájaro: Esdrújula — շեշտը վերջից երրորդ վանկի վրա։",
    hyAnswer: "Canción: Aguda (վերջին վանկ),\nÁrbol: Llana (նախավերջին վանկ),\nPájaro: Esdrújula (վերջից երրորդ վանկ)։",
    tag: "Ուղղագրություն"
  },
  {
    id: "m4-l-11",
    category: "Ուղղագրություն (Ortografía)",
    number: 11,
    esQuestion: "Completa: «No sé ___ has llegado tarde». (porque / por qué)",
    hyQuestion: "Լրացրո՛ւ ճիշտ տարբերակով։",
    esAnswer: "«No sé por qué has llegado tarde».",
    hyAnswer: "Պատասխան՝ «Չգիտեմ՝ ինչու ես ուշացել»։",
    tag: "Ուղղագրություն"
  },
  {
    id: "m4-l-12",
    category: "Ուղղագրություն (Ortografía)",
    number: 12,
    esQuestion: "Completa: «___ casa está cerca del colegio». (Tu / Tú)",
    hyQuestion: "Ընտրի՛ր ճիշտ բառը։",
    esAnswer: "«Tu casa está cerca del colegio».",
    hyAnswer: "Պատասխան՝ «Քո տունը դպրոցի մոտ է»։",
    tag: "Ուղղագրություն"
  },

  // C. Vocabulario (13-16)
  {
    id: "m4-l-13",
    category: "Բառապաշար (Vocabulario)",
    number: 13,
    esQuestion: "Di un sinónimo de «contento» y un antónimo.",
    hyQuestion: "Ասա «contento» բառի հոմանիշն ու հականիշը։",
    esAnswer: "Sinónimo: «feliz»; antónimo: «triste».",
    hyAnswer: "Պատասխան՝ հոմանիշ՝ երջանիկ, հականիշ՝ տխուր։",
    tag: "Բառապաշար"
  },
  {
    id: "m4-l-14",
    category: "Բառապաշար (Vocabulario)",
    number: 14,
    esQuestion: "Forma una familia de palabras a partir de «pan».",
    hyQuestion: "Կազմի՛ր «pan» բառի ընտանիքը։",
    esAnswer: "Pan, panadero, panadería, panecillo.",
    hyAnswer: "Պատասխան՝ հաց, հացթուխ, հացի խանութ, փոքր հաց։",
    tag: "Բառապաշար"
  },
  {
    id: "m4-l-15",
    category: "Բառապաշար (Vocabulario)",
    number: 15,
    esQuestion: "¿Qué significa la expresión «echar una mano»?",
    hyQuestion: "Ի՞նչ է նշանակում «echar una mano»։",
    esAnswer: "Significa ayudar a alguien.",
    hyAnswer: "Պատասխան՝ ինչ-որ մեկին օգնել։",
    tag: "Բառապաշար"
  },
  {
    id: "m4-l-16",
    category: "Բառապաշար (Vocabulario)",
    number: 16,
    esQuestion: "Elige el conector correcto: «Quería salir, ___ estaba lloviendo». (pero / porque)",
    hyQuestion: "Ընտրի՛ր ճիշտ կապակցիչը։",
    esAnswer: "«Quería salir, pero estaba lloviendo».",
    hyAnswer: "Պատասխան՝ «Ուզում էի դուրս գալ, բայց անձրևում էր»։",
    tag: "Բառապաշար"
  }
];

export const READING_COMPREHENSION: ReadingComprehension = {
  titleEs: "D. Comprensión lectora — Un día diferente en el instituto",
  titleHy: "D. Տեքստի ըմբռնում — Տարբերվող օր ինստիտուտում (դպրոցում)",
  textEs: `El martes, Daniel llegó al instituto un poco nervioso porque tenía un examen de Matemáticas. Durante la primera clase, su profesor explicó cómo resolver ecuaciones sencillas. Daniel prestó atención y consiguió resolver casi todos los ejercicios.
Después del recreo, en la clase de Lengua, los alumnos leyeron una historia sobre la amistad. La profesora les pidió que identificaran al protagonista y explicaran la idea principal del texto.
Por la tarde, Daniel fue a entrenar con su equipo de fútbol. Aunque estaba cansado, disfrutó mucho del entrenamiento. Al volver a casa, terminó sus deberes y se sintió satisfecho por todo lo que había aprendido.`,
  textHy: `Երեքշաբթի օրը Դանիելը դպրոց (ինստիտուտ) եկավ մի փոքր անհանգիստ, որովհետև մաթեմատիկայի քննություն ուներ։ Առաջին դասի ժամանակ նրա ուսուցիչը բացատրեց, թե ինչպես լուծել պարզ հավասարումներ։ Դանիելը ուշադիր էր և կարողացավ լուծել գրեթե բոլոր վարժությունները։
Ընդմիջումից հետո, իսպաներենի (Lengua) դասին աշակերտները կարդացին մի պատմություն ընկերության մասին։ Ուսուցչուհին նրանց խնդրեց գտնել գլխավոր հերոսին և բացատրել տեքստի գլխավոր գաղափարը։
Երեկոյան Դանիելը գնաց մարզման իր ֆուտբոլի թիմի հետ։ Չնայած հոգնած էր, բայց շատ վայելեց մարզումը։ Տուն վերադառնալուն պես նա ավարտեց տնային աշխատանքները և իրեն գոհ զգաց այն ամենից, ինչ սովորել էր։`,
  questions: [
    {
      number: 17,
      questionEs: "¿Por qué estaba nervioso Daniel?",
      questionHy: "Ինչո՞ւ էր Դանիելը անհանգիստ։",
      answerEs: "Porque tenía un examen de Matemáticas.",
      answerHy: "Պատասխան՝ որովհետև մաթեմատիկայի քննություն ուներ։"
    },
    {
      number: 18,
      questionEs: "¿Qué aprendió durante la primera clase?",
      questionHy: "Ի՞նչ սովորեց առաջին դասին։",
      answerEs: "Aprendió a resolver ecuaciones sencillas.",
      answerHy: "Պատասխան՝ սովորեց լուծել պարզ հավասարումներ։"
    },
    {
      number: 19,
      questionEs: "¿Qué tenían que identificar los alumnos en la clase de Lengua?",
      questionHy: "Ի՞նչ պետք է գտնեին աշակերտները Lengua-ի դասին։",
      answerEs: "El protagonista y la idea principal del texto.",
      answerHy: "Պատասխան՝ գլխավոր հերոսին և տեքստի հիմնական գաղափարը։"
    },
    {
      number: 20,
      questionEs: "¿Por qué se sintió satisfecho Daniel al final del día?",
      questionHy: "Ինչո՞ւ էր Դանիելը օրվա վերջում գոհ իրենից։",
      answerEs: "Porque había aprendido muchas cosas, había entrenado y había terminado sus deberes.",
      answerHy: "Պատասխան՝ որովհետև շատ բան էր սովորել, մարզվել էր և ավարտել տնային աշխատանքները։"
    }
  ]
};

// -------------------------------------------------------------
// MODULE 5: 20 Preguntas cortas para responder sin pensar
// -------------------------------------------------------------

export const MODULE5_QUICK_20 = [
  { id: "q20-1", questionEs: "¿Qué pasa?", answerEs: "Nada, todo bien.", questionHy: "Ի՞նչ է եղել։", answerHy: "Ոչինչ, ամեն ինչ լավ է։" },
  { id: "q20-2", questionEs: "¿Te vienes?", answerEs: "Sí, ahora voy.", questionHy: "Գալի՞ս ես։", answerHy: "Այո՛, հիմա գալիս եմ։" },
  { id: "q20-3", questionEs: "¿Has terminado?", answerEs: "Casi.", questionHy: "Ավարտե՞լ ես։", answerHy: "Գրեթե։" },
  { id: "q20-4", questionEs: "¿Te queda mucho?", answerEs: "Solo un minuto.", questionHy: "Շա՞տ է մնացել։", answerHy: "Միայն մեկ րոպե։" },
  { id: "q20-5", questionEs: "¿Te apetece?", answerEs: "Sí, me apetece.", questionHy: "Ցանկանո՞ւմ ես։", answerHy: "Այո՛։" },
  { id: "q20-6", questionEs: "¿Lo has entendido?", answerEs: "Más o menos.", questionHy: "Հասկացա՞ր։", answerHy: "Քիչ թե շատ։" },
  { id: "q20-7", questionEs: "¿Qué te parece?", answerEs: "Me parece bien.", questionHy: "Ի՞նչ կարծիքի ես։", answerHy: "Լավ եմ համարում։" },
  { id: "q20-8", questionEs: "¿Estás seguro?", answerEs: "Creo que sí.", questionHy: "Վստա՞հ ես։", answerHy: "Կարծում եմ՝ այո։" },
  { id: "q20-9", questionEs: "¿A que no te atreves?", answerEs: "¡Claro que me atrevo!", questionHy: "Գրազ՝ չե՞ս համարձակվի։", answerHy: "Իհարկե կհամարձակվեմ։" },
  { id: "q20-10", questionEs: "¿Te importa?", answerEs: "No, para nada.", questionHy: "Դեմ չե՞ս։", answerHy: "Ամենևին։" },
  { id: "q20-11", questionEs: "¿Me ayudas?", answerEs: "Claro, dime.", questionHy: "Կօգնե՞ս։", answerHy: "Իհարկե, ասա։" },
  { id: "q20-12", questionEs: "¿Qué necesitas?", answerEs: "Un poco de ayuda.", questionHy: "Ի՞նչ է պետք։", answerHy: "Մի փոքր օգնություն։" },
  { id: "q20-13", questionEs: "¿Cómo lo sabes?", answerEs: "Lo he leído.", questionHy: "Որտեղի՞ց գիտես։", answerHy: "Կարդացել եմ։" },
  { id: "q20-14", questionEs: "¿Quién empieza?", answerEs: "Empiezo yo.", questionHy: "Ո՞վ է սկսում։", answerHy: "Ես եմ սկսում։" },
  { id: "q20-15", questionEs: "¿Te toca?", answerEs: "Sí, me toca.", questionHy: "Քո հերթն է՞։", answerHy: "Այո՛։" },
  { id: "q20-16", questionEs: "¿Qué has dicho?", answerEs: "Que no lo entiendo.", questionHy: "Ի՞նչ ասացիր։", answerHy: "Որ չեմ հասկանում։" },
  { id: "q20-17", questionEs: "¿Puedes repetirlo?", answerEs: "Sí, claro.", questionHy: "Կկրկնե՞ս։", answerHy: "Այո՛, իհարկե։" },
  { id: "q20-18", questionEs: "¿Por qué no vienes?", answerEs: "Porque estoy ocupado.", questionHy: "Ինչո՞ւ չես գալիս։", answerHy: "Որովհետև զբաղված եմ։" },
  { id: "q20-19", questionEs: "¿Qué tal el examen?", answerEs: "Mejor de lo esperado.", questionHy: "Ինչպե՞ս անցավ քննությունը։", answerHy: "Սպասածից լավ։" },
  { id: "q20-20", questionEs: "¿Nos vemos mañana?", answerEs: "¡Claro, hasta mañana!", questionHy: "Վաղը կհանդիպե՞նք։", answerHy: "Իհարկե, մինչ վաղը։" }
];

// -------------------------------------------------------------
// MODULE 6: 50 Preguntas y respuestas en el instituto — Հարցեր և պատասխաններ դպրոցում
// -------------------------------------------------------------

export const MODULE6_INSTITUTO_50: QAItem[] = [
  // Parte 1. En clase — Դասարանում (1–10)
  {
    id: "m6-inst-1",
    category: "Դպրոցում (En el instituto)",
    subcategory: "Դասարանում",
    number: 1,
    esQuestion: "¿Has hecho los deberes de hoy?",
    hyQuestion: "Այսօրվա տնային աշխատանքները կատարե՞լ ես։",
    esAnswer: "Sí, los hice ayer por la tarde.",
    hyAnswer: "Այո՛, երեկ կեսօրից հետո արեցի։",
    tag: "Դասարան"
  },
  {
    id: "m6-inst-2",
    category: "Դպրոցում (En el instituto)",
    subcategory: "Դասարանում",
    number: 2,
    esQuestion: "¿Puedes decirme en qué página estamos?",
    hyQuestion: "Կարո՞ղ ես ասել՝ որ էջի վրա ենք։",
    esAnswer: "Estamos en la página treinta y cinco.",
    hyAnswer: "Մենք 35-րդ էջում ենք։",
    tag: "Դասարան"
  },
  {
    id: "m6-inst-3",
    category: "Դպրոցում (En el instituto)",
    subcategory: "Դասարանում",
    number: 3,
    esQuestion: "¿Te has enterado de lo que ha explicado el profesor?",
    hyQuestion: "Հասկացե՞լ ես, թե ուսուցիչն ինչ բացատրեց։",
    esAnswer: "Más o menos, pero necesito repasarlo.",
    hyAnswer: "Քիչ թե շատ, բայց պետք է կրկնեմ։",
    tag: "Դասարան"
  },
  {
    id: "m6-inst-4",
    category: "Դպրոցում (En el instituto)",
    subcategory: "Դասարանում",
    number: 4,
    esQuestion: "¿Te importa si me siento aquí?",
    hyQuestion: "Դեմ չե՞ս, եթե այստեղ նստեմ։",
    esAnswer: "No, claro que no. Siéntate.",
    hyAnswer: "Ո՛չ, իհարկե։ Նստի՛ր։",
    tag: "Դասարան"
  },
  {
    id: "m6-inst-5",
    category: "Դպրոցում (En el instituto)",
    subcategory: "Դասարանում",
    number: 5,
    esQuestion: "¿Qué tenemos que entregar mañana?",
    hyQuestion: "Ի՞նչ պետք է հանձնենք վաղը։",
    esAnswer: "Tenemos que entregar el trabajo de Lengua.",
    hyAnswer: "Պետք է հանձնենք իսպաներենի (Lengua) աշխատանքը։",
    tag: "Դասարան"
  },
  {
    id: "m6-inst-6",
    category: "Դպրոցում (En el instituto)",
    subcategory: "Դասարանում",
    number: 6,
    esQuestion: "¿Quién quiere salir a la pizarra?",
    hyQuestion: "Ո՞վ է ուզում գրատախտակի մոտ գալ։",
    esAnswer: "Yo puedo intentarlo, profesor.",
    hyAnswer: "Ես կարող եմ փորձել, ուսուցի՛չ։",
    tag: "Դասարան"
  },
  {
    id: "m6-inst-7",
    category: "Դպրոցում (En el instituto)",
    subcategory: "Դասարանում",
    number: 7,
    esQuestion: "¿Por qué no has terminado el ejercicio?",
    hyQuestion: "Ինչո՞ւ չես ավարտել վարժությունը։",
    esAnswer: "Porque la última pregunta me ha parecido difícil.",
    hyAnswer: "Որովհետև վերջին հարցն ինձ դժվար թվաց։",
    tag: "Դասարան"
  },
  {
    id: "m6-inst-8",
    category: "Դպրոցում (En el instituto)",
    subcategory: "Դասարանում",
    number: 8,
    esQuestion: "¿Puedes explicárselo a tu compañero?",
    hyQuestion: "Կարո՞ղ ես դա բացատրել դասընկերոջդ։",
    esAnswer: "Sí, voy a explicárselo con un ejemplo.",
    hyAnswer: "Այո՛, օրինակով կբացատրեմ։",
    tag: "Դասարան"
  },
  {
    id: "m6-inst-9",
    category: "Դպրոցում (En el instituto)",
    subcategory: "Դասարանում",
    number: 9,
    esQuestion: "¿Qué hacemos cuando terminemos la actividad?",
    hyQuestion: "Ի՞նչ ենք անելու, երբ ավարտենք առաջադրանքը։",
    esAnswer: "Tenemos que corregir las respuestas.",
    hyAnswer: "Պետք է ստուգենք պատասխանները։",
    tag: "Դասարան"
  },
  {
    id: "m6-inst-10",
    category: "Դպրոցում (En el instituto)",
    subcategory: "Դասարանում",
    number: 10,
    esQuestion: "¿Te falta mucho para acabar?",
    hyQuestion: "Դեռ շա՞տ է մնացել ավարտելու համար։",
    esAnswer: "No, solo me quedan dos preguntas.",
    hyAnswer: "Ո՛չ, ինձ մնացել է ընդամենը երկու հարց։",
    tag: "Դասարան"
  },

  // Parte 2. Con los compañeros — Դասընկերների հետ (11–20)
  {
    id: "m6-inst-11",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 11,
    esQuestion: "¿Con quién te ha tocado hacer el trabajo?",
    hyQuestion: "Ո՞ւմ հետ ես խմբային աշխատանք կատարելու։",
    esAnswer: "Me ha tocado con Pablo y Marcos.",
    hyAnswer: "Ես Պաբլոյի և Մարկոսի հետ եմ աշխատելու։",
    tag: "Ընկերներ"
  },
  {
    id: "m6-inst-12",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 12,
    esQuestion: "¿Qué tal te llevas con los nuevos compañeros?",
    hyQuestion: "Ինչպե՞ս ես լեզու գտնում նոր դասընկերներիդ հետ։",
    esAnswer: "Bastante bien, son muy simpáticos.",
    hyAnswer: "Բավականին լավ, նրանք շատ հաճելի են։",
    tag: "Ընկերներ"
  },
  {
    id: "m6-inst-13",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 13,
    esQuestion: "¿Por qué estás tan callado hoy?",
    hyQuestion: "Ինչո՞ւ ես այսօր այդքան լուռ։",
    esAnswer: "Porque estoy un poco cansado.",
    hyAnswer: "Որովհետև մի քիչ հոգնած եմ։",
    tag: "Ընկերներ"
  },
  {
    id: "m6-inst-14",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 14,
    esQuestion: "¿Te vienes con nosotros al patio?",
    hyQuestion: "Մեզ հետ բակ գալի՞ս ես։",
    esAnswer: "Sí, esperadme un momento.",
    hyAnswer: "Այո՛, մի պահ ինձ սպասեք։",
    tag: "Ընկերներ"
  },
  {
    id: "m6-inst-15",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 15,
    esQuestion: "¿Qué prefieres hacer durante el recreo?",
    hyQuestion: "Ի՞նչ ես նախընտրում անել ընդմիջման ժամանակ։",
    esAnswer: "Prefiero hablar con mis amigos o jugar al fútbol.",
    hyAnswer: "Նախընտրում եմ ընկերներիս հետ զրուցել կամ ֆուտբոլ խաղալ։",
    tag: "Ընկերներ"
  },
  {
    id: "m6-inst-16",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 16,
    esQuestion: "¿Te apetece jugar un partido después de clase?",
    hyQuestion: "Ցանկանո՞ւմ ես դասերից հետո ֆուտբոլ խաղալ։",
    esAnswer: "Me encantaría, pero primero tengo que estudiar.",
    hyAnswer: "Մեծ հաճույքով, բայց նախ պետք է սովորեմ։",
    tag: "Ընկերներ"
  },
  {
    id: "m6-inst-17",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 17,
    esQuestion: "¿Me guardas un sitio?",
    hyQuestion: "Ինձ համար տեղ կպահե՞ս։",
    esAnswer: "Claro, te guardo uno a mi lado.",
    hyAnswer: "Իհարկե, կողքիս տեղ կպահեմ։",
    tag: "Ընկերներ"
  },
  {
    id: "m6-inst-18",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 18,
    esQuestion: "¿Por qué os estáis riendo?",
    hyQuestion: "Ինչո՞ւ եք ծիծաղում։",
    esAnswer: "Porque Marcos acaba de contar un chiste.",
    hyAnswer: "Որովհետև Մարկոսը հենց նոր կատակ պատմեց։",
    tag: "Ընկերներ"
  },
  {
    id: "m6-inst-19",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 19,
    esQuestion: "¿Puedo unirme a vuestro grupo?",
    hyQuestion: "Կարո՞ղ եմ միանալ ձեր խմբին։",
    esAnswer: "¡Claro! Nos falta una persona.",
    hyAnswer: "Իհարկե՛։ Մեզ մեկ մարդ է պակասում։",
    tag: "Ընկերներ"
  },
  {
    id: "m6-inst-20",
    category: "Դասընկերների հետ (Con los compañeros)",
    subcategory: "Ընկերներ",
    number: 20,
    esQuestion: "¿Qué planes tienes para el fin de semana?",
    hyQuestion: "Ի՞նչ ծրագրեր ունես հանգստյան օրերին։",
    esAnswer: "El sábado tengo entrenamiento y el domingo descansaré.",
    hyAnswer: "Շաբաթ օրը մարզում ունեմ, իսկ կիրակի կհանգստանամ։",
    tag: "Ընկերներ"
  },

  // Parte 3. Matemáticas y Lengua — Մաթեմատիկայի և Lengua-ի դասերին (21–30)
  {
    id: "m6-inst-21",
    category: "Մաթեմատիկա և Lengua (Matemáticas y Lengua)",
    subcategory: "Դասեր",
    number: 21,
    esQuestion: "¿Cómo has resuelto esta ecuación?",
    hyQuestion: "Ինչպե՞ս ես լուծել այս հավասարումը։",
    esAnswer: "Primero he restado cinco y después he dividido entre tres.",
    hyAnswer: "Սկզբում հանել եմ հինգ, հետո բաժանել երեքի։",
    tag: "Մաթեմատիկա"
  },
  {
    id: "m6-inst-22",
    category: "Մաթեմատիկա և Lengua (Matemáticas y Lengua)",
    subcategory: "Դասեր",
    number: 22,
    esQuestion: "¿Qué resultado te ha dado el problema?",
    hyQuestion: "Ի՞նչ պատասխան ես ստացել խնդրի համար։",
    esAnswer: "Me ha dado veinticuatro, pero voy a comprobarlo.",
    hyAnswer: "Ստացել եմ 24, բայց դեռ կստուգեմ։",
    tag: "Մաթեմատիկա"
  },
  {
    id: "m6-inst-23",
    category: "Մաթեմատիկա և Lengua (Matemáticas y Lengua)",
    subcategory: "Դասեր",
    number: 23,
    esQuestion: "¿Sabes cómo se calcula el perímetro?",
    hyQuestion: "Գիտե՞ս՝ ինչպես են հաշվում պարագիծը։",
    esAnswer: "Sí, sumando las longitudes de todos los lados.",
    hyAnswer: "Այո՛, գումարելով բոլոր կողմերի երկարությունները։",
    tag: "Մաթեմատիկա"
  },
  {
    id: "m6-inst-24",
    category: "Մաթեմատիկա և Lengua (Matemáticas y Lengua)",
    subcategory: "Դասեր",
    number: 24,
    esQuestion: "¿Qué significa que dos fracciones sean equivalentes?",
    hyQuestion: "Ի՞նչ է նշանակում, որ երկու կոտորակ համարժեք են։",
    esAnswer: "Que representan la misma cantidad.",
    hyAnswer: "Որ դրանք նույն քանակությունն են ներկայացնում։",
    tag: "Մաթեմատիկա"
  },
  {
    id: "m6-inst-25",
    category: "Մաթեմատիկա և Lengua (Matemáticas y Lengua)",
    subcategory: "Դասեր",
    number: 25,
    esQuestion: "¿Cuál es la idea principal de este texto?",
    hyQuestion: "Ո՞րն է այս տեքստի հիմնական գաղափարը։",
    esAnswer: "Que la amistad es importante cuando tenemos dificultades.",
    hyAnswer: "Այն, որ ընկերությունը կարևոր է դժվարությունների ժամանակ։",
    tag: "Lengua"
  },
  {
    id: "m6-inst-26",
    category: "Մաթեմատիկա և Lengua (Matemáticas y Lengua)",
    subcategory: "Դասեր",
    number: 26,
    esQuestion: "¿Quién es el narrador de la historia?",
    hyQuestion: "Ո՞վ է պատմության պատմողը։",
    esAnswer: "Es un narrador en tercera persona.",
    hyAnswer: "Պատմողը երրորդ դեմքով է։",
    tag: "Lengua"
  },
  {
    id: "m6-inst-27",
    category: "Մաթեմատիկա և Lengua (Matemáticas y Lengua)",
    subcategory: "Դասեր",
    number: 27,
    esQuestion: "¿Puedes encontrar una palabra esdrújula?",
    hyQuestion: "Կարո՞ղ ես գտնել esdrújula բառ։",
    esAnswer: "Sí, «música» es una palabra esdrújula.",
    hyAnswer: "Այո՛, «música» բառը esdrújula է։",
    tag: "Lengua"
  },
  {
    id: "m6-inst-28",
    category: "Մաթեմատիկա և Lengua (Matemáticas y Lengua)",
    subcategory: "Դասեր",
    number: 28,
    esQuestion: "¿Cuál es la diferencia entre un sustantivo y un adjetivo?",
    hyQuestion: "Ո՞րն է գոյականի և ածականի տարբերությունը։",
    esAnswer: "El sustantivo nombra seres, objetos o ideas, y el adjetivo expresa sus cualidades.",
    hyAnswer: "Գոյականը անվանում է էակներ, առարկաներ կամ գաղափարներ, իսկ ածականը արտահայտում է դրանց հատկանիշները։",
    tag: "Lengua"
  },
  {
    id: "m6-inst-29",
    category: "Մաթեմատիկա և Lengua (Matemáticas y Lengua)",
    subcategory: "Դասեր",
    number: 29,
    esQuestion: "¿Has encontrado el sujeto de la oración?",
    hyQuestion: "Գտե՞լ ես նախադասության ենթական։",
    esAnswer: "Sí, el sujeto es «mis compañeros».",
    hyAnswer: "Այո՛, ենթական «mis compañeros»-ն է։",
    tag: "Lengua"
  },
  {
    id: "m6-inst-30",
    category: "Մաթեմատիկա և Lengua (Matemáticas y Lengua)",
    subcategory: "Դասեր",
    number: 30,
    esQuestion: "¿Puedes resumir el texto con tus propias palabras?",
    hyQuestion: "Կարո՞ղ ես տեքստը ամփոփել քո բառերով։",
    esAnswer: "Sí, voy a explicar primero qué sucede y después cómo termina.",
    hyAnswer: "Այո՛, սկզբում կբացատրեմ՝ ինչ է տեղի ունենում, իսկ հետո՝ ինչպես է ավարտվում։",
    tag: "Lengua"
  },

  // Parte 4. Situaciones inesperadas — Անսպասելի իրավիճակներ դպրոցում (31–40)
  {
    id: "m6-inst-31",
    category: "Անսպասելի իրավիճակներ (Situaciones inesperadas)",
    subcategory: "Իրավիճակներ",
    number: 31,
    esQuestion: "¿Qué harías si perdieras tu mochila en el instituto?",
    hyQuestion: "Ի՞նչ կանեիր, եթե դպրոցում կորցնեիր ուսապարկդ։",
    esAnswer: "Preguntaría en conserjería si alguien la ha encontrado.",
    hyAnswer: "Կհարցնեի դպրոցի հերթապահին՝ արդյոք ինչ-որ մեկը գտել է այն։",
    tag: "Իրավիճակ"
  },
  {
    id: "m6-inst-32",
    category: "Անսպասելի իրավիճակներ (Situaciones inesperadas)",
    subcategory: "Իրավիճակներ",
    number: 32,
    esQuestion: "¿Qué dirías si llegaras tarde a clase?",
    hyQuestion: "Ի՞նչ կասեիր, եթե դասից ուշանայիր։",
    esAnswer: "Perdone por llegar tarde. ¿Puedo pasar?",
    hyAnswer: "Ներեցե՛ք ուշանալու համար։ Կարո՞ղ եմ ներս մտնել։",
    tag: "Իրավիճակ"
  },
  {
    id: "m6-inst-33",
    category: "Անսպասելի իրավիճակներ (Situaciones inesperadas)",
    subcategory: "Իրավիճակներ",
    number: 33,
    esQuestion: "¿Qué harías si un compañero no entendiera la explicación?",
    hyQuestion: "Ի՞նչ կանեիր, եթե դասընկերդ չհասկանար բացատրությունը։",
    esAnswer: "Intentaría ayudarlo con un ejemplo más sencillo.",
    hyAnswer: "Կփորձեի օգնել նրան ավելի պարզ օրինակով։",
    tag: "Իրավիճակ"
  },
  {
    id: "m6-inst-34",
    category: "Անսպասելի իրավիճակներ (Situaciones inesperadas)",
    subcategory: "Իրավիճակներ",
    number: 34,
    esQuestion: "¿Qué responderías si el profesor te preguntara algo que no sabes?",
    hyQuestion: "Ի՞նչ կպատասխանեիր, եթե ուսուցիչը հարցներ մի բան, որը չգիտես։",
    esAnswer: "No estoy seguro, pero puedo intentarlo.",
    hyAnswer: "Վստահ չեմ, բայց կարող եմ փորձել։",
    tag: "Իրավիճակ"
  },
  {
    id: "m6-inst-35",
    category: "Անսպասելի իրավիճակներ (Situaciones inesperadas)",
    subcategory: "Իրավիճակներ",
    number: 35,
    esQuestion: "¿Qué harías si vieras que un compañero está solo durante el recreo?",
    hyQuestion: "Ի՞նչ կանեիր, եթե տեսնեիր, որ դասընկերդ ընդմիջման ժամանակ մենակ է։",
    esAnswer: "Me acercaría y le preguntaría si quiere venir con nosotros.",
    hyAnswer: "Կմոտենայի և կհարցնեի՝ ուզո՞ւմ է մեզ հետ գալ։",
    tag: "Իրավիճակ"
  },
  {
    id: "m6-inst-36",
    category: "Անսպասելի իրավիճակներ (Situaciones inesperadas)",
    subcategory: "Իրավիճակներ",
    number: 36,
    esQuestion: "¿Qué harías si se te olvidara el material de Educación Física?",
    hyQuestion: "Ի՞նչ կանեիր, եթե մոռանայիր ֆիզկուլտուրայի պարագաները։",
    esAnswer: "Se lo explicaría al profesor y le pediría una solución.",
    hyAnswer: "Կբացատրեի ուսուցչին և կխնդրեի լուծում առաջարկել։",
    tag: "Իրավիճակ"
  },
  {
    id: "m6-inst-37",
    category: "Անսպասելի իրավիճակներ (Situaciones inesperadas)",
    subcategory: "Իրավիճակներ",
    number: 37,
    esQuestion: "¿Qué harías si no estuvieras de acuerdo con tu grupo?",
    hyQuestion: "Ի՞նչ կանեիր, եթե համաձայն չլինեիր խմբիդ հետ։",
    esAnswer: "Explicaría mi opinión y escucharía a los demás.",
    hyAnswer: "Կբացատրեի իմ կարծիքը և կլսեի մյուսներին։",
    tag: "Իրավիճակ"
  },
  {
    id: "m6-inst-38",
    category: "Անսպասելի իրավիճակներ (Situaciones inesperadas)",
    subcategory: "Իրավիճակներ",
    number: 38,
    esQuestion: "¿Qué dirías si alguien te interrumpiera mientras hablas?",
    hyQuestion: "Ի՞նչ կասեիր, եթե ինչ-որ մեկը ընդհատեր քեզ խոսելիս։",
    esAnswer: "Espera un momento, por favor. Todavía no he terminado.",
    hyAnswer: "Մի պահ սպասի՛ր, խնդրում եմ։ Դեռ չեմ ավարտել։",
    tag: "Իրավիճակ"
  },
  {
    id: "m6-inst-39",
    category: "Անսպասելի իրավիճակներ (Situaciones inesperadas)",
    subcategory: "Իրավիճակներ",
    number: 39,
    esQuestion: "¿Qué harías si suspendieras un examen?",
    hyQuestion: "Ի՞նչ կանեիր, եթե քննությունից անբավարար գնահատական ստանայիր։",
    esAnswer: "Revisaría mis errores y estudiaría más para el siguiente.",
    hyAnswer: "Կստուգեի սխալներս և հաջորդ քննության համար ավելի շատ կսովորեի։",
    tag: "Իրավիճակ"
  },
  {
    id: "m6-inst-40",
    category: "Անսպասելի իրավիճակներ (Situaciones inesperadas)",
    subcategory: "Իրավիճակներ",
    number: 40,
    esQuestion: "¿Qué harías si te eligieran delegado de clase?",
    hyQuestion: "Ի՞նչ կանեիր, եթե քեզ ընտրեին դասարանի ներկայացուցիչ։",
    esAnswer: "Escucharía a mis compañeros e intentaría representar sus opiniones.",
    hyAnswer: "Կլսեի դասընկերներիս և կփորձեի ներկայացնել նրանց կարծիքները։",
    tag: "Իրավիճակ"
  },

  // Parte 5. Responde rápido — Արագ պատասխանի՛ր (41–50)
  {
    id: "m6-inst-41",
    category: "Արագ պատասխանի՛ր (Responde rápido)",
    subcategory: "Արագ",
    number: 41,
    esQuestion: "¿Qué toca ahora?",
    hyQuestion: "Հիմա ի՞նչ դաս է։",
    esAnswer: "Nos toca Matemáticas.",
    hyAnswer: "Մաթեմատիկա։",
    tag: "Արագ"
  },
  {
    id: "m6-inst-42",
    category: "Արագ պատասխանի՛ր (Responde rápido)",
    subcategory: "Արագ",
    number: 42,
    esQuestion: "¿Cuánto queda para el recreo?",
    hyQuestion: "Որքա՞ն է մնացել ընդմիջմանը։",
    esAnswer: "Diez minutos.",
    hyAnswer: "Տասը րոպե։",
    tag: "Արագ"
  },
  {
    id: "m6-inst-43",
    category: "Արագ պատասխանի՛ր (Responde rápido)",
    subcategory: "Արագ",
    number: 43,
    esQuestion: "¿Has aprobado?",
    hyQuestion: "Դրակա՞ն ես ստացել։",
    esAnswer: "Sí, he sacado un siete.",
    hyAnswer: "Այո՛, յոթ եմ ստացել։",
    tag: "Արագ"
  },
  {
    id: "m6-inst-44",
    category: "Արագ պատասխանի՛ր (Responde rápido)",
    subcategory: "Արագ",
    number: 44,
    esQuestion: "¿Me dejas un boli?",
    hyQuestion: "Գրիչդ կտա՞ս։",
    esAnswer: "Sí, toma.",
    hyAnswer: "Այո՛, վերցրո՛ւ։",
    tag: "Արագ"
  },
  {
    id: "m6-inst-45",
    category: "Արագ պատասխանի՛ր (Responde rápido)",
    subcategory: "Արագ",
    number: 45,
    esQuestion: "¿En qué aula tenemos Inglés?",
    hyQuestion: "Ո՞ր դասասենյակում է անգլերենը։",
    esAnswer: "En la doce.",
    hyAnswer: "12-րդում։",
    tag: "Արագ"
  },
  {
    id: "m6-inst-46",
    category: "Արագ պատասխանի՛ր (Responde rápido)",
    subcategory: "Արագ",
    number: 46,
    esQuestion: "¿Quién falta hoy?",
    hyQuestion: "Ո՞վ է այսօր բացակայում։",
    esAnswer: "Hoy falta Sergio.",
    hyAnswer: "Սերխիոն։",
    tag: "Արագ"
  },
  {
    id: "m6-inst-47",
    category: "Արագ պատասխանի՛ր (Responde rápido)",
    subcategory: "Արագ",
    number: 47,
    esQuestion: "¿Te ha salido bien?",
    hyQuestion: "Լա՞վ ստացվեց։",
    esAnswer: "Creo que sí.",
    hyAnswer: "Կարծում եմ՝ այո։",
    tag: "Արագ"
  },
  {
    id: "m6-inst-48",
    category: "Արագ պատասխանի՛ր (Responde rápido)",
    subcategory: "Արագ",
    number: 48,
    esQuestion: "¿Nos ponemos juntos?",
    hyQuestion: "Միասի՞ն նստենք։",
    esAnswer: "Vale, perfecto.",
    hyAnswer: "Լավ, հիանալի։",
    tag: "Արագ"
  },
  {
    id: "m6-inst-49",
    category: "Արագ պատասխանի՛ր (Responde rápido)",
    subcategory: "Արագ",
    number: 49,
    esQuestion: "¿De qué va el trabajo?",
    hyQuestion: "Ինչի՞ մասին է աշխատանքը։",
    esAnswer: "Va sobre el medioambiente.",
    hyAnswer: "Շրջակա միջավայրի։",
    tag: "Արագ"
  },
  {
    id: "m6-inst-50",
    category: "Արագ պատասխանի՛ր (Responde rápido)",
    subcategory: "Արագ",
    number: 50,
    esQuestion: "¿Nos vemos a la salida?",
    hyQuestion: "Դասերից հետո կհանդիպե՞նք։",
    esAnswer: "Sí, te espero en la puerta.",
    hyAnswer: "Այո՛, դռան մոտ կսպասեմ։",
    tag: "Արագ"
  }
];

// Combine all standard questions for the global search and listening game
export const ALL_QUESTIONS: QAItem[] = [
  ...MODULE1_SCHOOL_QA,
  ...MODULE1_FOOTBALL_QA,
  ...MODULE1_LENGUA_QA,
  ...MODULE1_MATH_QA,
  ...MODULE1_MATH_FOOTBALL_QA,
  ...MODULE1_CONV_A,
  ...MODULE1_CONV_B,
  ...MODULE1_CONV_C,
  ...MODULE2_CONV_50,
  ...MODULE3_MATH_20,
  ...MODULE4_LENGUA_20,
  ...MODULE6_INSTITUTO_50
];

