export const SITE_URL = 'https://www.colegiometodoplus.com.br'
export const SITE_NAME = 'Colégio Método Plus'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/fachada-escola.jpeg`

export const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-metodo.svg`,
  image: DEFAULT_OG_IMAGE,
  telephone: '+55-31-3221-8003',
  email: 'colegiometodobh@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. Manoel Gomes Pereira, 91 – Serra',
    addressLocality: 'Belo Horizonte',
    addressRegion: 'MG',
    postalCode: '30220-220',
    addressCountry: 'BR',
  },
  sameAs: ['https://www.instagram.com/colegiometodo_plus/'],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '07:00',
    closes: '15:00',
  },
}

export const WEBSITE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: 'pt-BR',
}

export const PAGE_SEO = {
  home: {
    title: 'Colégio Método Plus | Educação do 6º Ano ao Ensino Médio em BH',
    description:
      'Colégio Método Plus, no bairro Serra em Belo Horizonte: mais de 37 anos de experiência, turmas de 17 a 25 alunos e acompanhamento individual do 6º ano ao 3º ano do Ensino Médio.',
    path: '/',
  },
  calendario: {
    title: 'Calendário Escolar 2026 | Colégio Método Plus',
    description:
      'Calendário letivo 2026 do Colégio Método Plus: feriados, férias, etapas, provas, simulados e todas as datas importantes do ano letivo.',
    path: '/calendario',
  },
  portal: {
    title: 'Portal do Aluno | Colégio Método Plus',
    description:
      'Acesse em um só lugar os canais do aluno do Colégio Método Plus: Positivo ON, ClassApp, Método BH e a loja de material escolar.',
    path: '/portal',
  },
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}
