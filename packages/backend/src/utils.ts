export function isRelative(str: string) {
    return str.startsWith(".") || str.startsWith("/")
}

export function isCdn(str: string) {
    return str.startsWith("http")
}

export function isRemoteEntry(str: string) {
    return str.startsWith("view:http")
}

export const ESM_SH_URL = "https://esm.sh/"
