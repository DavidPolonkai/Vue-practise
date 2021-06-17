const timeout = '200';
const RSA_PUBLIC_KEY = 'appointment-app-shared-secret';

function getPublicKey() {
    return RSA_PUBLIC_KEY;
}

module.exports.timeout = timeout;
module.exports.getPublicKey = getPublicKey();
