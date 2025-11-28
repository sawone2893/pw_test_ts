let CryptoJSUtils=require("crypto-js");

//Get the SALT from the system environment varible
const SALT=process.env.SALT||"defaultSalt";

//Encryption function
export function encrypt(text:string):string{
  const cipherText=CryptoJSUtils.AES.encrypt(text,SALT).toString();
  return cipherText;
}

//Decryption Function
export function decrypt(cipherText:string):string{
  const bytes=CryptoJSUtils.AES.decrypt(cipherText,SALT);
  const originalText=bytes.toString(CryptoJSUtils.enc.Utf8);
  return originalText;
}