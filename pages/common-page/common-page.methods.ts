import {Page} from 'playwright'
import { CommonPageElements } from './common-page-elements'

export class CommonPageMethod {
    private page :Page 
    private commonPageElements: CommonPageElements


    constructor(page: Page){
        this.page = page
        this.commonPageElements = new CommonPageElements(page)
    }

    async navigateToTheApplication(){
     await this.page.goto('https://www.saucedemo.com/')

    }

    async openMenu(){
        await this.commonPageElements.Icons.openMenu.click()
    }

    async ClickOnAllItemOption(){
        await this.commonPageElements.leftMenu.allItems.click()

    }

    async ClickOnAboutOption(){
        await this.commonPageElements.leftMenu.about.click()

    }

    async ClickOnLogoutOption(){
        await this.commonPageElements.leftMenu.logOut.click()
    }

    async ClickOnResetOption(){
        await this.commonPageElements.leftMenu.resetAppState.click()
    }


}