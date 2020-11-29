import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root:Projetoweb@418@localhost:3306/pitu');

export default sequelize;