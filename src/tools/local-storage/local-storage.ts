const FILTERS_GENRES_KEY = 'FILTERS_GENRES';

function loadFromLocalStorage(key: string): any | null {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
}

function saveToLocalStorage(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
}

export { loadFromLocalStorage, saveToLocalStorage, FILTERS_GENRES_KEY }