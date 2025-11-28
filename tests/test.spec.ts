import {test} from '../utils/baseTest';
import { decrypt } from '../src/utils/CryptoJSUtils';
import {encryptEnvFile} from "../utils/EncryptEnvFile"

test('Login Functionlity',async({pages})=>{
await pages.homePage.goToHomePage();
await pages.homePage.enterCredentials(decrypt(process.env.USER_ID!),decrypt(process.env.PASSWORD!));
});

