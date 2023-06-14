import CommonActions from "../../CommoActions/commoActions";

class AsignacionesPage{

    constructor(){
        this.commonActions = new CommonActions();
        this.bonuses = 'div.helper.logged:nth-child(2) aside.sidebar div.sidebar__wrapper div.sidebar__component:nth-child(1) ul.header-menu-main:nth-child(4) li.header-menu-main__item:nth-child(1) a.header-menu-main__item-link > i.icon-bonuses:nth-child(1)'
        this.bonusesBody = 'div.helper.logged:nth-child(2) main.main div.page.page-bonuses div.container > div.page__header'
        this.suscribe= 'div.helper.logged:nth-child(2) main.main div.page.page-bonuses div.container div.pageSwitch.pageSwitch--full ul.bonuses__list li.bonuses__item:nth-child(1) div.bonuses__item__content div.bonuses__item-wrapper div.bonuses__item--buttons > a.button.button--s3.button--t4:nth-child(1)'
        this.confirmSuscribe = ''
    }
    validateBonusesPage(){
        this.commonActions.click(this.bonuses)
        this.commonActions.checkVisible(this.bonusesBody)
    
    }
    
   checkBonus(){
    this.commonActions.click(this.suscribe)
    this.commonActions.checkVisible.click(this.confirmSuscribe)
   } 
}
export default AsignacionesPage;