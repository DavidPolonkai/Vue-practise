//true if the data is valid
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const MIN_PASSWORD_LENGTH = 2;
export default class Validators{

static validateEmail(email) {
    var re = EMAIL_REGEX;
    return re.test(email);
}

static validateNotNull(value) {
    if (value!=null) {
        return true;
    }
    return false;
}
    
    static validatePassword(password) {
        if (!password && password.length < MIN_PASSWORD_LENGTH) {
            return true
        }
        return false;
    }
}