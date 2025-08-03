const crypto = require('crypto');

const password = '123456789';
const hash = crypto.createHash('md5').update(password).digest('hex');

console.log(`Şifre: ${password}`);
console.log(`Oluşturulan MD5 Hash: ${hash}`);