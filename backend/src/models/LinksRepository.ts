import linkModel, {ILinkModel} from './linkModel';
import {Link} from './link';


//ENCONTRAR LINK POR CODIGO
function findByCode(code: string){
    return linkModel.findOne<ILinkModel>({where: {code} });
}

//VAI ADD SALVA O LINK
function add(link: Link){
    return linkModel.create<ILinkModel>(link);
}

//PEGA BANCO DE DADOS DEPOIS ELE ATUALIZA HIT DELE 
async  function hit(code: string){
    const link = await findByCode(code);
    if(!link) return null;

    link.hits!++;
    //update
    await link.save();
    return link;
}

export default {
    findByCode,
    add,
    hit
}