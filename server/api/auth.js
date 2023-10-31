export default defineEventHandler( async (event) => {
    const login = await readBody (event)

    const {token} = await $fetch( 'https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: login
    } );

    return token;
})