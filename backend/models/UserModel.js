import {DataTypes, sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = sequelize;

const use = db.define("users",{
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  gender: DataTypes.STRING
},{
  freezeTableName:true
});

export default User;

(async()=> { 
  await db.sync();
})();