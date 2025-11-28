import { test } from "../src/utils/baseTest";
import { decrypt } from "../src/utils/CryptoJSUtils";
//import { encryptEnvFile } from "../src/utils/EncryptEnvFile";

test("Login Functionlity", async ({ pages }) => {
  //encryptEnvFile();
  //await pages.homePage.goToHomePage();
  await pages.homePage.enterCredentials(
    decrypt(process.env.USER_ID!),
    decrypt(process.env.PASSWORD!)
  );
});
