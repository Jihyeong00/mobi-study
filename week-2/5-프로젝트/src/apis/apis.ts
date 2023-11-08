export const DEV = import.meta.env.DEV;
export const DEEPL_KEY = import.meta.env.VITE_DEEPLY_KEY

export const fetcher = (url: string) => {
    return fetch(url).then(r => r.json())
}