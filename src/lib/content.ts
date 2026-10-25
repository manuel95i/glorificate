import { type WhatsAppKey } from "@/lib/site";

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Ministry = {
  slug: "alabanza" | "danza" | "infantil" | "dedicaciones";
  title: string;
  shortTitle: string;
  summary: string;
  description: string[];
  image: string;
  badge?: string;
  whatsapp: WhatsAppKey;
  message: string;
  schedule?: string;
  photos: Photo[];
};

export const ministries: Ministry[] = [
  {
    slug: "alabanza",
    title: "Ministerio de alabanza",
    shortTitle: "Alabanza",
    summary:
      "Música en vivo para adorar a Dios en cada culto, con un corazón rendido.",
    description: [
      "El ministerio de alabanza acompaña a la congregación a entrar en la presencia de Dios con instrumentos, voces y un espíritu de servicio.",
      "Ministramos cada viernes en el culto. Si cantas, tocas un instrumento o sientes el llamado a servir detrás de escena, hay un lugar para ti.",
      "El horario de los ensayos se coordina con quienes están interesados: escríbenos o llámanos y te lo indicamos.",
    ],
    image: "/images/alabanza/equipo.jpeg",
    whatsapp: "alabanza",
    message: "Hola, quiero información del Ministerio de alabanza.",
    schedule: "Horario de ensayos: consúltalo por WhatsApp si te interesa unirte.",
    photos: [
      { src: "/images/alabanza/equipo.jpeg", alt: "Equipo del ministerio de alabanza, mujeres y hombres", width: 1600, height: 1200 },
      { src: "/images/alabanza/banda.jpeg", alt: "Banda de alabanza con instrumentos", width: 925, height: 599 },
      { src: "/images/alabanza/culto.jpeg", alt: "Alabanza frente al banner del ministerio", width: 848, height: 478 },
      { src: "/images/alabanza/navidad.jpeg", alt: "Alabanza en celebración de Navidad", width: 1329, height: 599 },
    ],
  },
  {
    slug: "danza",
    title: "Ministerio de danza",
    shortTitle: "Danza",
    summary:
      "Adoración con movimiento, banderas y vestuario para exaltar el nombre de Jesús.",
    description: [
      "La danza en Gloríficate es una ofrenda: el cuerpo, las banderas y el vestuario anuncian la gloria de Dios delante de la congregación.",
      "Participamos en cultos, actividades especiales y presentaciones junto a otras iglesias y ministerios de Panamá.",
      "Recibimos a quienes deseen aprender con humildad y disciplina. Si te interesa unirte, pregunta el horario de los ensayos cuando nos escribas o llames.",
    ],
    image: "/images/danza/grupo.jpeg",
    whatsapp: "danza",
    message: "Hola, quiero información del Ministerio de danza.",
    schedule: "Horario de ensayos: consúltalo por WhatsApp si te interesa unirte.",
    photos: [
      { src: "/images/danza/grupo.jpeg", alt: "Grupo de danza con vestuario y banderas doradas", width: 1600, height: 900 },
      { src: "/images/danza/banderas.jpeg", alt: "Ministerio de danza con banderas en Los Andes", width: 1600, height: 1200 },
      { src: "/images/danza/folklore.jpeg", alt: "Danza folklórica panameña", width: 1280, height: 468 },
      { src: "/images/danza/panderos.jpeg", alt: "Danza con panderos en Tabernáculo de la Fe", width: 799, height: 599 },
      { src: "/images/danza/vestuario.jpeg", alt: "Vestuario ministerial de danza", width: 799, height: 599 },
      { src: "/images/danza/ministerio.jpeg", alt: "Ministerio de danza en presentación", width: 1337, height: 599 },
      { src: "/images/danza/presentacion.jpeg", alt: "Presentación de danza en el salón", width: 1295, height: 599 },
    ],
  },
  {
    slug: "infantil",
    title: "Ministerio infantil · Pequeños Leones",
    shortTitle: "Infantil",
    summary:
      "Niños que aprenden la Palabra con alegría, arte, juego y dedicación.",
    description: [
      "Pequeños Leones es el ministerio infantil de Gloríficate. Formamos a los niños en la Palabra, el carácter y el amor al prójimo.",
      "Las clases combinan historia bíblica, manualidades, juegos y momentos de adoración. También celebramos Navidad, actividades recreativas y tiempos en familia.",
      "Creemos que cada niño es semilla: Proverbios 22:6 nos recuerda a instruir al niño en su camino.",
    ],
    image: "/images/infantil/07.jpeg",
    badge: "/images/logo-infantil.jpeg",
    whatsapp: "principal",
    message: "Hola, quiero información del Ministerio infantil Pequeños Leones.",
    photos: [
      { src: "/images/infantil/01.jpeg", alt: "Niños pintando arcoíris en clase bíblica", width: 1200, height: 1600 },
      { src: "/images/infantil/02.jpeg", alt: "Clase infantil trabajando en sus dibujos", width: 1200, height: 1600 },
      { src: "/images/infantil/03.jpeg", alt: "Niños en una salida del ministerio infantil", width: 1600, height: 1198 },
      { src: "/images/infantil/04.jpeg", alt: "Niños jugando en el parque", width: 1198, height: 1600 },
      { src: "/images/infantil/05.jpeg", alt: "Representación del nacimiento", width: 1600, height: 1200 },
      { src: "/images/infantil/06.jpeg", alt: "Presentación navideña de los niños", width: 1200, height: 1600 },
      { src: "/images/infantil/07.jpeg", alt: "Niños en el pesebre navideño", width: 1600, height: 1200 },
      { src: "/images/infantil/08.jpeg", alt: "Actividad infantil en el salón congregacional", width: 4064, height: 3048 },
      { src: "/images/infantil/09.jpeg", alt: "Juegos y mini basketball del ministerio infantil", width: 3048, height: 4064 },
    ],
  },
  {
    slug: "dedicaciones",
    title: "Dedicaciones",
    shortTitle: "Dedicaciones",
    summary:
      "Celebramos a las familias y presentamos a los niños delante de Dios.",
    description: [
      "Las dedicaciones son un pacto de gratitud: las familias presentan a sus hijos y se comprometen a criarlos en el temor del Señor.",
      "Acompañamos ese momento con la Palabra, alabanza y la oración de la congregación.",
    ],
    image: "/images/dedicatoria/02.jpeg",
    whatsapp: "principal",
    message: "Hola, quiero información sobre dedicaciones.",
    photos: [
      { src: "/images/dedicatoria/01.jpeg", alt: "Familia en dedicación frente al banner de Glorificate", width: 1297, height: 599 },
      { src: "/images/dedicatoria/02.jpeg", alt: "Dedicación de un bebé con la familia", width: 1329, height: 599 },
    ],
  },
];

export function getMinistry(slug: string) {
  return ministries.find((ministry) => ministry.slug === slug);
}

export const values = [
  {
    title: "Palabra",
    text: "La Biblia es nuestra regla de fe y conducta. Enseñamos, predicamos y vivimos las Escrituras.",
  },
  {
    title: "Adoración",
    text: "Alabamos a Dios con música, danza y una vida rendida. Todo lo que respira alabe al Señor.",
  },
  {
    title: "Familia",
    text: "La iglesia es un pueblo. Cuidamos a los niños, honramos a los padres y caminamos juntos.",
  },
  {
    title: "Servicio",
    text: "El Evangelio se demuestra en obras: visitamos, escuchamos y servimos a quien lo necesita.",
  },
];

export const beliefs = [
  "Creemos en un solo Dios, eterno, que se revela como Padre, Hijo y Espíritu Santo.",
  "Creemos que Jesucristo es el Hijo de Dios, muerto y resucitado para salvación.",
  "Creemos que la Biblia es inspirada por Dios y suficiente para la vida cristiana.",
  "Creemos en la iglesia local como cuerpo que adora, discipula y sirve.",
  "Creemos que cada creyente es llamado a glorificar a Dios con su vida.",
];

export const faqs = [
  {
    q: "¿Necesito vestirme de una forma especial?",
    a: "Ven como te sientas cómodo. Lo importante es el corazón. En danza y alabanza sí usamos vestuario ministerial en las presentaciones.",
  },
  {
    q: "¿Hay espacio para los niños?",
    a: "Sí. Pequeños Leones acompaña a los niños con clases, juegos y actividades bíblicas.",
  },
  {
    q: "¿Puedo llegar solo por primera vez?",
    a: "Por supuesto. Te recibimos, te ayudamos a ubicar un asiento y alguien puede acompañarte si lo deseas.",
  },
  {
    q: "¿Cómo me uno a un ministerio?",
    a: "Escríbenos o llámanos al WhatsApp del ministerio que te interesa. Si deseas unirte a danza o alabanza, ahí mismo te indicamos el horario de los ensayos.",
  },
  {
    q: "¿Dónde se reúnen?",
    a: "En Academia Hisao Lee, en Panamá. El culto es los viernes de 7:30 p.m. a 9:30 p.m.",
  },
];

export const gallerySections = [
  {
    title: "Congregación y cultos",
    photos: [
      { src: "/images/cultos/congregacion.jpeg", alt: "Congregación y danza en el salón", width: 799, height: 599 },
      { src: "/images/cultos/navidad.jpeg", alt: "Culto de Navidad", width: 1329, height: 599 },
      { src: "/images/cultos/ninos.jpeg", alt: "Niños y jóvenes en actividad", width: 1329, height: 599 },
      { src: "/images/cultos/actividad.jpeg", alt: "Actividad congregacional", width: 1331, height: 599 },
      { src: "/images/cultos/alabanza-salon.jpeg", alt: "Alabanza en el salón", width: 1329, height: 599 },
    ],
  },
  {
    title: "Alabanza",
    photos: ministries[0].photos,
  },
  {
    title: "Danza",
    photos: ministries[1].photos,
  },
  {
    title: "Pequeños Leones",
    photos: ministries[2].photos,
  },
  {
    title: "Dedicaciones",
    photos: ministries[3].photos,
  },
  {
    title: "En pandemia",
    photos: [
      { src: "/images/pandemia/culto-virtual.jpeg", alt: "Culto virtual con danza y guitarra", width: 1170, height: 540 },
      { src: "/images/pandemia/reunion-virtual.jpeg", alt: "Reunión virtual de la congregación", width: 1170, height: 540 },
    ],
  },
];
