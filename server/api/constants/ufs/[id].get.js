import db from '../db.json'

export default defineEventHandler( async (event) => {
    //const id = event.context.params.id
    //const uf = db.ufs.find(i=>i.id==id);
    //return uf;

    // unica linha
    //return db.ufs.find(i=>i.id == event.context.params.id) || {message:'Not Found'};

    const id = parseInt(event.context.params.id);

    if(Number.isInteger(id)){
        throw createError ({statusMessage:"ID deve ser uma sigla com 2 digitos", statusCode:"409"})
    }
    
    return db.ufs.find(i=>i.id == id) || {message:'Not Found'};

})