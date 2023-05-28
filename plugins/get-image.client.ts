
export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    return {
        provide: {
            getImage: (path: string) => `${config.serverUrl}/storage/app/${path}`,
            imageBaseApp: () => '/logo.png'
        }
    }
})