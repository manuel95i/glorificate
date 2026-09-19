import { type WhatsAppKey } from "@/lib/site";

export type Photo = {
  src: string;
  alt: string;
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
      "Ensayamos los miércoles de 7:00 p.m. a 9:00 p.m. para ministrar con excelencia cada viernes en el culto.",
      "Si cantas, tocas un instrumento o sientes el llamado a servir detrás de escena, hay un lugar para ti.",
    ],
    image: "/images/alabanza/banda.jpeg",
    whatsapp: "alabanza",
    message: "Hola, quiero información del Ministerio de alabanza.",
    schedule: "Miércoles · 7:00 p.m. a 9:00 p.m.",
    photos: [
      { src: "/images/alabanza/banda.jpeg", alt: "Banda de alabanza con instrumentos" },
      { src: "/images/alabanza/culto.jpeg", alt: "Alabanza frente al banner del ministerio" },
      { src: "/images/alabanza/navidad.jpeg", alt: "Alabanza en celebración de Navidad" },
      { src: "/images/alabanza/equipo.jpeg", alt: "Equipo del ministerio de alabanza" },
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
      "Las prácticas son los lunes de 6:00 p.m. a 8:00 p.m. Recibimos a quienes deseen aprender con humildad y disciplina.",
    ],
    image: "/images/danza/grupo.jpeg",
    whatsapp: "danza",
    message: "Hola, quiero información del Ministerio de danza.",
    schedule: "Lunes · 6:00 p.m. a 8:00 p.m.",
    photos: [
      { src: "/images/danza/grupo.jpeg", alt: "Grupo de danza con vestuario y banderas doradas" },
      { src: "/images/danza/banderas.jpeg", alt: "Ministerio de danza con banderas en Los Andes" },
      { src: "/images/danza/folklore.jpeg", alt: "Danza folklórica panameña" },
      { src: "/images/danza/panderos.jpeg", alt: "Danza con panderos en Tabernáculo de la Fe" },
      { src: "/images/danza/vestuario.jpeg", alt: "Vestuario ministerial de danza" },
      { src: "/images/danza/ministerio.jpeg", alt: "Ministerio de danza en presentación" },
      { src: "/images/danza/presentacion.jpeg", alt: "Presentación de danza en el salón" },
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
    image: "/images/infantil/01.jpeg",
    badge: "/images/logo-infantil.jpeg",
    whatsapp: "principal",
    message: "Hola, quiero información del Ministerio infantil Pequeños Leones.",
    photos: [
      { src: "/images/infantil/01.jpeg", alt: "Niños pintando arcoíris en clase bíblica" },
      { src: "/images/infantil/02.jpeg", alt: "Clase infantil trabajando en sus dibujos" },
      { src: "/images/infantil/03.jpeg", alt: "Niños en una salida del ministerio infantil" },
      { src: "/images/infantil/04.jpeg", alt: "Niños jugando en el parque" },
      { src: "/images/infantil/05.jpeg", alt: "Representación del nacimiento" },
      { src: "/images/infantil/06.jpeg", alt: "Presentación navideña de los niños" },
      { src: "/images/infantil/07.jpeg", alt: "Niños en el pesebre navideño" },
      { src: "/images/infantil/08.jpeg", alt: "Actividad infantil en el salón congregacional" },
      { src: "/images/infantil/09.jpeg", alt: "Juegos y mini basketball del ministerio infantil" },
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
      { src: "/images/dedicatoria/01.jpeg", alt: "Familia en dedicación frente al banner de Glorificate" },
      { src: "/images/dedicatoria/02.jpeg", alt: "Dedicación de un bebé con la familia" },
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
    a: "Escríbenos por WhatsApp al ministerio que te interesa. Alabanza, danza e infantil tienen canales directos.",
  },
  {
    q: "¿Dónde se reúnen?",
    a: "En Academia Hisao Lee, en Panamá. El culto es los viernes de 7:30 p.m. a 9:30 p.m.",
  },
];

export const socialPrograms = [
  {
    title: "Familias",
    text: "Acompañamos a hogares con oración, visita y orientación. Nadie debería caminar solo en una crisis.",
  },
  {
    title: "Niñez",
    text: "Pequeños Leones no es solo una clase: es un espacio seguro de formación, juego y cuidado para los niños de la congregación y la comunidad.",
  },
  {
    title: "Comunidad",
    text: "Participamos en actividades abiertas, celebraciones y tiempos de servicio para bendecir el entorno donde Dios nos plantó.",
  },
  {
    title: "Presencia en tiempos difíciles",
    text: "Durante la pandemia seguimos ministrando en casa: alabanza, danza y Palabra por videollamada, para que nadie quedara desconectado.",
  },
];

export const gallerySections = [
  {
    title: "Congregación y cultos",
    photos: [
      { src: "/images/cultos/congregacion.jpeg", alt: "Congregación y danza en el salón" },
      { src: "/images/cultos/navidad.jpeg", alt: "Culto de Navidad" },
      { src: "/images/cultos/ninos.jpeg", alt: "Niños y jóvenes en actividad" },
      { src: "/images/cultos/actividad.jpeg", alt: "Actividad congregacional" },
      { src: "/images/cultos/alabanza-salon.jpeg", alt: "Alabanza en el salón" },
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
      { src: "/images/pandemia/culto-virtual.jpeg", alt: "Culto virtual con danza y guitarra" },
      { src: "/images/pandemia/reunion-virtual.jpeg", alt: "Reunión virtual de la congregación" },
    ],
  },
];
