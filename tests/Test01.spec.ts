import{test} from '@playwright/test'
import { CommonPageMethod } from '../pages/common-page/common-page.methods'
import { LoginPageMethod } from '../pages/login-page/login-page.methods'

test ('Login', async ({page})=>{
    const commonPageMethod = new CommonPageMethod(page)
    const loginPageMethod = new LoginPageMethod(page)


    await commonPageMethod.navigateToTheApplication()
    await loginPageMethod.insertUserName('standard_user')
    await loginPageMethod.insertPassword('secret_sauce')
    await page.waitForTimeout(4000)


})