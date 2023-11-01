import db from '../db.json'
import {createRouter, defineEventHandler, useBase } from 'h3'
import {inclusao} from './service'

const router = createRouter()

router.get('/all', defineEventHandler ( () => db.produtos ))
router.get('/:id', defineEventHandler ( () => db.produtos ))
router.get('/search?', defineEventHandler ( () => db.produtos ))
router.post('/create', defineEventHandler ( inclusao()) )

console.log(db.ufs)
export default useBase('/catalogos', router.handler)