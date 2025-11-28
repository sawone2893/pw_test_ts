let fs=require("fs");
let path=require("path");
import {encrypt,decrypt} from "./CryptoJSUtils";

const env = process.env.ENV || "qa";
const currentDir=__dirname;
const projectDir=path.resolve(currentDir,"..");
const configDir=path.resolve(projectDir,"config");
const envFilePath=`${configDir}\\.env.${env}`;

export function encryptEnvFile(){
  console.log(`Encrypting .env file at path: ${envFilePath}`);
  const envFileContent=fs.readFileSync(envFilePath,"utf8");
  const envLines=envFileContent.split("\n");
  const encryptedLines=envLines.map((line:string)=>{
    const [key,value]=line.split("=");
    if(value){
      const encryptedValue=encrypt(value);
      return `${key}=${encryptedValue}`;
    }
    return line;
  });
  const updatedEnvContent=encryptedLines.join("\n");
  fs.writeFileSync(envFilePath,updatedEnvContent,"utf8");
  console.log("Encryption completed and updated .env file");
}

export function decryptEnvFile(){
  const envFileContent=fs.readFileSync(envFilePath,"utf8");
  const envLines=envFileContent.split("\n");
  const decryptedLines=envLines.map((line:string)=>{
    const [key,value]=line.split("=");
    if(value){
      const encryptedValue=decrypt(value);
      return `${key}=${encryptedValue}`;
    }
    return line;
  });
  const updatedEnvContent=decryptedLines.join("\n");
  fs.writeFileSync(envFilePath,updatedEnvContent,"utf8");
  console.log("Decryption completed and updated .env file");
}