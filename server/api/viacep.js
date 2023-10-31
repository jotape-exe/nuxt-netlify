export default defineEventHandler( async (event) => {
    const {cep} = getQuery(event);

    //const runtimeConfig = useRuntimeConfig()
    //const data = await $fetch( `${runtimeConfig.public.viaCepApi}/${cep}/json`);

    const {viaCepApi} = useRuntimeConfig()
    const data = await $fetch( `${viaCepApi}/${cep}/json`);

    return data;
})