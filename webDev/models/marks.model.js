const sequelize=require('../db/dbconfig')
const {DataTypes}=require('sequelize');

const Marks= sequelize.define('Marks',
{
    mark_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    subject_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    subject_marks:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    student_id:{
        type:DataTypes.INTEGER,
        references:{
            model:'Students',
            key:'student_id'
        }
    }
}
)
module.exports=Marks