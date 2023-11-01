export default defineEventHandler( async (event) => {
    const config = useRuntimeConfig();
    //console.log('App Config', config)
    return {key:'TOKEN', value:config.TOKEN}

})