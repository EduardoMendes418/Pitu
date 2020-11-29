import {Router} from 'express';
import linksController from '../controllers/links';

const router = Router();

//Manda os links
router.post('/links', linksController.postLink);

//Devolve link e contabiliza acesso
router.get('/links/:code', linksController.hitLink);

//Pega informaçoes do link
router.get('/links/:code/stats', linksController.getLink);

export default router;