export class LocationUtils {
    static getLanguageByCountry(code: string): string | null {
        const romLangCountries = ['MD', 'RO'];
        const engLangCountries = ['AU', 'GB', 'US', 'CA', 'IE', 'NZ'];
        const rusLangCountries = ['RU', 'BY', 'KZ'];

        if (romLangCountries.includes(code)) {
            return 'RO';
        }

        if (engLangCountries.includes(code)) {
            return 'EN';
        }

        if (rusLangCountries.includes(code)) {
            return 'RU';
        }

        return null;
    }
}
