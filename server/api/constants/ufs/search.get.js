import db from '../db.json'

//https://www.digitalocean.com/community/tutorials/js-array-search-methods

export default defineEventHandler( async (event) => {

    //http://localhost:3000/api/constants/ufs/search?id=MA

    /*
    const query = getQuery(event);
    const id = query.id;
    return db.ufs.find(i=>i.id == id) || {message:'Not Found'};
    */


    //http://localhost:3000/api/constants/ufs/search?nome=MA
    const {nome} = getQuery(event);
    const result  = db.ufs.filter(i => i.nome.toLowerCase().indexOf(nome.toLowerCase()) > -1);
    return result || {message:'Not Found'};
    
})