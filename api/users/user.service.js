const pool=require("../../config/database");
module.exports={
    create:(data, callBack)=>{
        pool.query(
            `insert into registration(firstname,lastname,email,dateofbirth,password,number)
                values(?,?,?,?,?,?)`,
                [
                    data.first_name,
                    data.last_name,
                    data.email,
                    data.password,
                    data.number
                ],
            (error, result, fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    }
};