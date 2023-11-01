import db from '../db.json'

export default defineEventHandler( async (event) => {
    return db.ufs;
})