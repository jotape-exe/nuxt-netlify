export default defineEventHandler( async (event) => {
    const {cep} = getQuery(event);

    const {viaCepApi} = useRuntimeConfig()

    const data = await $fetch( `${viaCepApi}/${cep}/json`);

    return data;
})