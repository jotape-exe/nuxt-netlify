import db from '../db.json'

export default defineEventHandler( async (event) => {
    //const id = event.context.params.id
    //const uf = db.ufs.find(i=>i.id==id);
    //return uf;

    return db.ufs.find(i=>i.id == event.context.params.id);
})