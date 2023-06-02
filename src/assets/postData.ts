import { PostDta } from '@/models/PostDta';

export const blogdata: PostDta[] = [
  {
    id:'1',
    title: '¿Que es React?',
    slug: 'que-es-react',
    content:
      'ReactJS es una de las librerías más populares de JavaScript para el desarrollo de aplicaciones móviles y web. Creada por Facebook, React contiene una colección de fragmentos de código JavaScript reutilizables utilizados para crear interfaces de usuario (UI) llamadas componentes.',
    author: 'idany'
  },
  {
    id:'2',
    title: '¿Que es Vue?',
    slug: 'que-es-vue',
    content:
      'es un framework progresivo para construir interfaces de usuario. A diferencia de otros frameworks monolíticos, Vue está diseñado desde cero para ser utilizado incrementalmente. La librería central está enfocada solo en la capa de visualización, y es fácil de utilizar e integrar con otras librerías o proyectos existentes',
    author: 'freddier'
  },
  {
    id:'3',
    title: '¿Que es Angular?',
    slug: 'que-es-angular',
    content:
      'Angular es una plataforma de desarrollo, construida sobre TypeScript. Es un framework basado en componentes para crear aplicaciones web escalables. Una colección de bibliotecas bien integradas que cubren una amplia variedad de características, que incluyen enrutamiento, administración de formularios, comunicación cliente-servidor y más',
    author: 'JuanDC'
  },
  {
    id:'4',
    title: '¿Que es Svelte?',
    slug: 'que-es-svelte',
    content:
      'Svelte es un frontend framework. Tiene conceptos parecidos a React, Vue y Angular pero, a la vez, viene con diferencias muy importantes. Concretamente hay una diferencia importantísima y es que Svelte tiene un paso previo de compilación. ¿Por qué? Porque el código que escribimos con Svelte, aunque está basado en lenguajes que ya conoces como HTML, CSS y Javascript, es un código que no entendería el navegador sin tratar y tiene que ser compilado previamente.',
    author: 'soffi'
  }
];
