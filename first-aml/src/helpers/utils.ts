export function sayHello() {
  return Math.random() < 0.5 ? 'Hello' : 'Hola';
}

/**
 * Method that will return an array of number from start to end, inclusive.
 */
export const range = (start: number, end: number) =>
  Array(end - start + 1)
    .fill(undefined)
    .map((_, idx) => start + idx);

/**
 * The core fetch method that is used to call the APIs from the server.
 */
// { params = {}, body = {} } = {}
const fetchFromApi = async (url: string, method = 'GET') => {
  const response = await fetch(`http://localhost:3016/${url}`, { method }).catch(error => console.log('Error: ', error));

  if (!response || !response.ok) {
    return;
  }

  return response.json();
};

/**
 * Fetch the list of horses
 */
export const fetchHorseList = async () => fetchFromApi('horse');

/**
 * Get horse details
 */
export const fetchHorse = async (id: string) => fetchFromApi(`horse/${id}`);
