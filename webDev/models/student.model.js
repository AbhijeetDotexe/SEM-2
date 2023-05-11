const sequelize=require('../db/dbconfig')
const {DataTypes}=require('sequelize');

const student= sequelize.define('Student',
{
    student_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    student_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    student_email:{
        type:DataTypes.STRING,
        allowNull:false
    },
}
)
module.exports=student