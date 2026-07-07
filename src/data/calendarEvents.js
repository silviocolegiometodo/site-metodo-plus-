const EVENTS = {}

function addDay(m, d, type, label) {
  EVENTS[`2026-${m}-${d}`] = { type, label }
}
function addRange(m, d1, d2, type, label) {
  for (let d = d1; d <= d2; d++) addDay(m, d, type, label)
}

// Janeiro
addDay(1, 1, 'feriado', 'Confraternização Universal')
addRange(1, 2, 31, 'ferias', 'Férias Coletivas CCT')

// Fevereiro
addDay(2, 2, 'etapa', 'Início do Ano Letivo')
addRange(2, 16, 18, 'feriado', 'Carnaval')

// Março
addDay(3, 14, 'letivo-sat', 'Sábado Letivo')
addRange(3, 16, 20, 'provas', 'Provas Discursivas — 1ª Etapa')

// Abril
addRange(4, 2, 3, 'feriado', 'Paixão de Cristo')
addDay(4, 21, 'feriado', 'Tiradentes')
addDay(4, 25, 'letivo-sat', 'Sábado Letivo')
addDay(4, 27, 'simulado', 'Dias de Simulado')
addDay(4, 28, 'simulado', 'Dias de Simulado')

// Maio
addDay(5, 1, 'feriado', 'Dia do Trabalhador')
addDay(5, 4, 'etapa', 'Início da 2ª Etapa')
addDay(5, 23, 'letivo-sat', 'Sábado Letivo')
addRange(5, 25, 29, 'provas', 'Provas Discursivas')

// Junho
addRange(6, 4, 5, 'feriado', 'Corpus Christi')

// Julho
addDay(7, 4, 'letivo-sat', 'Sábado Letivo')
addDay(7, 8, 'simulado', 'Dias de Simulado')
addDay(7, 9, 'simulado', 'Dias de Simulado')
addDay(7, 10, 'etapa', 'Fim da 2ª Etapa')
addRange(7, 11, 26, 'ferias', 'Recesso Escolar CCT')
addDay(7, 27, 'sem-aula', 'Não Letivo — Administrativo')
addDay(7, 28, 'etapa', 'Início da 3ª Etapa')

// Agosto
addDay(8, 4, 'letivo-sat', 'Sábado Letivo')
addRange(8, 5, 7, 'recuperacao', 'Recuperação 1º Semestre')
addRange(8, 10, 11, 'recuperacao', 'Recuperação 1º Semestre')
addDay(8, 15, 'feriado', 'Assunção de N. Sra.')
addRange(8, 24, 28, 'provas', 'Provas Discursivas — 3ª Etapa')

// Setembro
addDay(9, 7, 'feriado', 'Independência do Brasil')
addDay(9, 24, 'simulado', 'Dias de Simulado')
addDay(9, 25, 'simulado', 'Dias de Simulado')
addDay(9, 30, 'etapa', 'Início da 4ª Etapa')

// Outubro
addRange(10, 12, 16, 'ferias', 'Recesso Escolar')
addDay(10, 12, 'feriado', 'Nossa Sra. Aparecida')
addDay(10, 15, 'especial', 'Dia do Professor')

// Novembro
addDay(11, 2, 'feriado', 'Finados')
addRange(11, 3, 6, 'provas', 'Provas Discursivas — 4ª Etapa')
addDay(11, 9, 'provas', 'Provas Discursivas — 4ª Etapa')
addDay(11, 15, 'feriado', 'Proclamação da República')
addDay(11, 20, 'feriado', 'Consciência Negra')

// Dezembro
addDay(12, 1, 'simulado', 'Dias de Simulado')
addDay(12, 2, 'simulado', 'Dias de Simulado')
addDay(12, 8, 'feriado', 'Imaculada Conceição')
addDay(12, 11, 'ultimo', 'Último Dia Letivo')
addRange(12, 14, 18, 'recuperacao', 'Recuperação Final')

export { EVENTS }

export const MONTHS = [
  { n: 1, name: 'Janeiro', days: 31, start: 4, letivos: 0 },
  { n: 2, name: 'Fevereiro', days: 28, start: 0, letivos: 17 },
  { n: 3, name: 'Março', days: 31, start: 0, letivos: 23 },
  { n: 4, name: 'Abril', days: 30, start: 3, letivos: 20 },
  { n: 5, name: 'Maio', days: 31, start: 5, letivos: 20 },
  { n: 6, name: 'Junho', days: 30, start: 1, letivos: 21 },
  { n: 7, name: 'Julho', days: 31, start: 3, letivos: 14 },
  { n: 8, name: 'Agosto', days: 31, start: 6, letivos: 21 },
  { n: 9, name: 'Setembro', days: 30, start: 2, letivos: 21 },
  { n: 10, name: 'Outubro', days: 31, start: 4, letivos: 17 },
  { n: 11, name: 'Novembro', days: 30, start: 0, letivos: 19 },
  { n: 12, name: 'Dezembro', days: 31, start: 2, letivos: 8 },
]

export const DAY_NAMES = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

export const TYPE_LABELS = {
  feriado: 'Feriado Nacional / Municipal',
  ferias: 'Férias / Recesso Escolar',
  'letivo-sat': 'Sábado Letivo',
  simulado: 'Simulado',
  provas: 'Provas Discursivas',
  recuperacao: 'Recuperação',
  etapa: 'Marco de Etapa',
  especial: 'Data Especial',
  ultimo: 'Encerramento Letivo',
  'sem-aula': 'Dia não letivo',
}
