export const LanguageFlagEnum = {
  'PT-BR': '🇧🇷', // Português do Brasil
  EN: '🇺🇸', // Inglês
  ES: '🇪🇸', // Espanhol
  FR: '🇫🇷', // Francês
  DE: '🇩🇪', // Alemão
  IT: '🇮🇹', // Italiano
  JP: '🇯🇵', // Japonês
}

export function getLanguageCodeByFlag(flag) {
  // Encontra a chave correspondente ao valor da bandeira
  const languageCode = Object.keys(LanguageFlagEnum).find(
    (key) => LanguageFlagEnum[key] === flag,
  )

  return languageCode || null // Retorna null se não encontrar
}
