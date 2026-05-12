/**
 * Generates country flag emoji from ISO country code
 * @param countryCode - ISO 3166-1 alpha-2 country code (e.g., 'us', 'gb')
 * @returns Flag emoji string
 */
export function getCountryFlag(countryCode: string): string {
  const code = countryCode.toUpperCase();
  if (code.length !== 2) return '';
  
  const codePoints = code
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  
  return String.fromCodePoint(...codePoints);
}
