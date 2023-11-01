//const cepClient = useNuxtApp().$cepClient

export default function (){
    const  getCep = async (cep:string) =>{
        return 'oi';// await cepClient.get(`/${cep}/json`);
    }

    return {getCep};
}