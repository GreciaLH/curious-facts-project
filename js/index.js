
// Función para obtener la frase del día de la API
export async function fetchQuoteOfTheDay() {
    const apiUrl = 'https://uselessfacts.jsph.pl/api/v2/facts/random';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        return data.text; 
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
