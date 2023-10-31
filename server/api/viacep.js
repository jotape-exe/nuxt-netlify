export default defineEventHandler( async (event) => {
    const {cep} = getQuery(event);

    //const runtimeConfig = useRuntimeConfig()
    //const data = await $fetch( `${runtimeConfig.public.viaCepApi}/${cep}/json`);

    const {VIACEP_API} = useRuntimeConfig()
    const data = await $fetch( `${VIACEP_API}/${cep}/json`);

    return data;
})