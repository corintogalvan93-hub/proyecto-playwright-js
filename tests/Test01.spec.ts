import{test} from '@playwright/test'
import { CommonPageMethod } from '../pages/common-page/common-page.methods'

test ('Login', async ({page})=>{
    const commonPageMethod = new CommonPageMethod(page)
    await commonPageMethod.navigateToTheApplication()


})