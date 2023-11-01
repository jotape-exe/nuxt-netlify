import db from '../db.json'
//incluir, alterar
export function inclusao (){
    return async (event) => {
        const body = await readBody (event)
        return {"message":"inclusão de produto bem sucedida","data":body};
    }
}