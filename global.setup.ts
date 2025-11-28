import {test} from "./utils/baseTest";
import { decrypt } from "./utils/CryptoJSUtils";

test('Login Application',async({pages})=>{
await pages.homePage.goToHomePage();
await pages.homePage.enterCredentials(await decrypt(process.env.USER_ID!),await decrypt(process.env.PASSWORD!));
});
