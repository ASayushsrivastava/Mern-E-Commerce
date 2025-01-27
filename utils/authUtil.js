// bcrypt package password for additional security.

import bcrypt from 'bcrypt';

export const hashPassword = async(password) => {
    try{
        const saltround = 10; // salt round is used to increase the security of password hashing process. Higher the value, more secure the password.
        const hashedPassword = await bcrypt.hash(password, saltround);
        return hashedPassword;
    }
    catch(e){
        console.log(e)
    }
}

export const comparePassword = async(password, hashedPassword) => {
    try{
        return bcrypt.compare(password, hashedPassword)
    }
    catch(e){
        console.log(e)
    }
}