const db=require('../util/database');
module.exports=class User{
    constructor(name,email,password){
    this.name=name;
    this.email=email;
    this.password=this.password;
    }

    static find(email){
        return db.execute('select * from user where email=?',[email]);
    }
    static save(user){
        db.execute('insert into user (name,email,password) values(?,?,?)',[user.name,user.email,user.password])

    }
}





























// const db=require('../util/database');

// module.exports=class User{
//     constructor(username,email,password){
// this.username=username;
// this.email=email;
// this.password=password;
//     }
//     static find(email){
//         return db.execute("select * from userreg where email =?",[email]);
//     }


//     static save(user){
//         return db.execute(
//             "insert into userreg(username,email,password) values(?,?,?)",[user.username,user.email,user.password]
//         );
//     }
// };
