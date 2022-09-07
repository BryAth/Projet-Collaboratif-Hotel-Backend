class UserDTO{
    constructor(id,pseudo,email,firstname,lastname,contry,phone){
        this.id=id;
        this.pseudo=pseudo;
        this.email=email;
        this.firstname=firstname,
        this.lastname=lastname,
        this.contry=contry,
        this.phone=phone
    }
}

module.exports=UserDTO;