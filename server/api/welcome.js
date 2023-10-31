export default defineEventHandler( (event) => {
    const {nome} = getQuery(event);

    return {message:`Ola, ${nome}`}
})