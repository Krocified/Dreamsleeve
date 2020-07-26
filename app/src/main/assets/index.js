testRun = () => {
    Android.testRun()
}

buttonClick = (clicked_id) => {
    
    click = clicked_id.toString()
    
    if(click==="selective-realms"){
        nav.push('nav-selective-realms');
    } else if(click==="all-realms"){
        nav.push('nav-all-realms');
    } else if(click==="help-and-guide"){
        nav.push('nav-help');
    } else if(click==="faq"){
        nav.push('nav-faq')
    } else if(click==="tour"){
        Android.showTourSlides()
    } else if(click==="about"){
        Android.showAbout()
    } else if(click==="history"){
        let historyTest = Android.getSessionData()
        let historyArray = JSON.parse(historyTest)
        Android.display(JSON.stringify(historyArray))
        nav.push('nav-history', {historyArray})
    } else {
        console.log(click)
    }
    Android.buttonClick(click)
}

let realmStatus = []
let histStatus = []

displayRealm = (realm_id) => {
    const realm = realms.find(realm=>realm.id===realm_id)

    realmStatus=[]
    const isSuccessful = Android.checkRealmSpecific()
    checkData[realm_id-1] = isSuccessful

    const realmObject = {
        realmId: realm.id,
        realmStatus: isSuccessful
    }

    realmStatus.push(realmObject)
    const dateTime = Android.getDateTime();
    const idCount = Android.getIdCount()

    const currState = {
        id: idCount,
        type: "Selective Realms",
        dateTime: dateTime,
        status: realmStatus
    }

    const singleJSON = JSON.stringify(currState)
    Android.testSessionData(singleJSON)
    
    nav.push('nav-details', { realm , isSuccessful})

}

customElements.define('nav-home', class NavHome extends HTMLElement{
    connectedCallback(){
        this.innerHTML=homeHTML
    }
})

customElements.define('nav-selective-realms', class NavSelectiveRealms extends HTMLElement{
    connectedCallback(){
        this.innerHTML=srHTML
    }
})

customElements.define('nav-all-realms', class NavAllRealms extends HTMLElement{
    connectedCallback(){
        this.innerHTML=arHTML
    }
})

customElements.define('nav-help', class NavHelp extends HTMLElement{
    connectedCallback(){
        this.innerHTML=helpHTML
    }
})

customElements.define('nav-details', class NavDetails extends HTMLElement{
    connectedCallback(){
        console.log(this.realm)
        this.innerHTML=`
        <ion-header class="ion-no-border">
        <ion-toolbar transparent>
            <ion-buttons slot="start">
                <ion-back-button color="light" defaultHref="/"></ion-back-button>
            </ion-buttons>
        </ion-toolbar>
        </ion-header>
        <ion-content fullscreen >
        <div class="ar-app-container">
        <div class="sr-title">
            <div class="ar-banner"></div>
            <div class="title-container">
                <ion-item color="transparent" lines="none">
                    <ion-label color="light">
                        <div class="title-text-container">
                            Realm Details
                        </div>
                    </ion-label>
                </ion-item>
            </div>
        </div>
        
        <div class="outer-item-container">
            <div class="item-container">
        
                <img id="d-logo" src="${this.realm.icon}" alt="" class="logo-container">
                <ion-label color="light">
                    <div id="d-name" class="daedra-name-text">
                        ${this.realm.prince}
                    </div>
                </ion-label>
                <ion-label color="light">
                    <div id="d-realm" class="daedra-realm-text">
                        ${this.realm.name}
                    </div>
                </ion-label>
        
                <ion-label color="light">
                    <div id="d-realm" class="daedra-realm-text">
                        Artifact: ${this.realm.artifact}
                    </div>
                </ion-label>

                <ion-label color="light">
                    <div id="d-is-successful" class="daedra-name-text" style="color: ${this.isSuccessful==="Successful"?"#02c449":"#d90707"}">
                        ${this.isSuccessful}
                    </div>
                </ion-label>
            </div>
        </div>
        
        </div>
        </ion-content>
        `
    }
})

customElements.define('nav-faq', class NavFaq extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <ion-header class="ion-no-border">
        <ion-toolbar transparent>
            <ion-buttons slot="start">
                <ion-back-button color="light" defaultHref="/"></ion-back-button>
            </ion-buttons>
        </ion-toolbar>
        </ion-header>
        <ion-content fullscreen >
        <div class="ar-app-container">
        <div class="sr-title">
            <div class="title-container">
                <ion-item color="transparent" lines="none">
                    <ion-label color="light">
                        <div class="title-text-container help-title">
                            FAQ
                        </div>
                    </ion-label>
                </ion-item>
            </div>
        </div>
        
        <div class="outer-item-container">
            <div class="item-container">
        
                <ion-list class="transparent">
                    ${faqs.map(faq=>`
                        <ion-item 
                            id="faq-${faq.id}" button 
                            color="transparent" 
                            lines="none" 
                            onclick="viewFaqDetail(${faq.id})"
                        >
                            <div class="label-container">
                                <div class="text-container">
                                    <ion-icon color="light" name="help-circle"></ion-icon>
                                </div>
                                <div class="help-text-container" style="color: #ffffff">
                                    ${faq.faq}
                                </div>
                            </div>
                        </ion-item>
                    `).join('\n')}
                </ion-list>

            </div>
        </div>
        
        </div>
        </ion-content>
        `
    }
})

customElements.define('nav-history', class NavHist extends HTMLElement{
    
    connectedCallback(){
        this.innerHTML=`
            <ion-header class="ion-no-border">
            <ion-toolbar transparent>
                <ion-buttons slot="start">
                    <ion-back-button color="light" defaultHref="/"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
            </ion-header>
            <ion-content fullscreen >
            <div class="faq-detail-container">
            <div class="sr-title">
                <div class="hist-banner"></div>
                <div class="title-container">
                    <ion-item color="transparent" lines="none">
                        <ion-label color="light">
                            <div class="title-text-container">
                                History
                            </div>
                        </ion-label>
                    </ion-item>
                </div>
            </div>
    
            <div class="outer-item-container" >
                <div class="item-container">

                    <ion-list class="transparent">
                        ${this.historyArray.map(entry=>`
                            <ion-item id=${entry.id} color="transparent" lines="none" button onclick="viewHistoryDetail(this.id)">
                                <div class="history-entry">
                                    <ion-label color="light">
                                        <div class="hist-timestamp-container">
                                        ${entry.dateTime}
                                        </div>
                                    </ion-label>
                                    <ion-label color="light">
                                        <div class="hist-type-container">
                                        ${entry.type}
                                        </div>
                                    </ion-label>
                                </div>
                            </ion-item>
                        `).join('\n')}
                    </ion-list>
    
                </div>
            </div>
    
            </div>
            </ion-content>
        `
    }
})

customElements.define('nav-history-detail', class NavHistDetail extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <ion-header class="ion-no-border">
        <ion-toolbar transparent>
            <ion-buttons slot="start">
                <ion-back-button color="light" defaultHref="/"></ion-back-button>
            </ion-buttons>
        </ion-toolbar>
        </ion-header>
        <ion-content fullscreen >
        <div class="faq-detail-container">
        <div class="sr-title">
            <div class="title-container">
                <ion-item color="transparent" lines="none">
                    <ion-label color="light">
                        <div class="title-text-container help-title">
                            Details
                        </div>
                    </ion-label>
                </ion-item>
            </div>
        </div>
        
        <div class="outer-item-container">
            <div class="item-container">
        
                <ion-label color="light">
                    <div id="d-name" class="daedra-name-text">
                        ${this.histEntry.type}
                    </div>
                </ion-label>
                <ion-label color="light">
                    <div id="d-realm" class="daedra-realm-text">
                        ${this.histEntry.dateTime}
                    </div>
                </ion-label>
        
                <ion-list class="transparent">
                    ${this.histEntry.status.map(realm=>`
                        <ion-item 
                            id="realm-${realm.id}"  
                            color="transparent" 
                            lines="none" 
                        >
                            <div class="label-container">
                                <div class="help-text-container" style="color: ${realm.realmStatus==="Successful"?"#02c449":"#d90707"}">
                                    ${realms.find(realmData=>realmData.id === realm.realmId).name}: ${realm.realmStatus}
                                </div>
                            </div>
                        </ion-item>
                    `).join('\n')}
                </ion-list>

            </div>
        </div>
        
        </div>
        </ion-content>
        `
    }
})

customElements.define('nav-faq-detail', class NavFaqDetail extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <ion-header class="ion-no-border">
            <ion-toolbar transparent>
                <ion-buttons slot="start">
                    <ion-back-button color="light" defaultHref="/"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
            </ion-header>
            <ion-content fullscreen >
            <div class="ar-app-container">
            <div class="sr-title">
                <div class="title-container">
                    <ion-item color="transparent" lines="none">
                        <ion-label color="light">
                            <div class="title-text-container help-title">
                                Issue Details
                            </div>
                        </ion-label>
                    </ion-item>
                </div>
            </div>
            
            <div class="outer-item-container">
                <div class="item-container">
            
                    <ion-label color="light">
                        <div id="d-name" class="daedra-name-text">
                            ${this.faqEntry.faq}
                        </div>
                    </ion-label>
            
                    <ion-list class="transparent">
                        ${this.faqEntry.checks.map(check=>`
                            <ion-item 
                                color="transparent" 
                                lines="none" 
                            >
                                <div class="label-container">
                                    <div class="help-text-container" style="color: ${checkData[check-1]==="Successful"?"#02c449":"#d90707"}">
                                        ${realms.find(realmData=>realmData.id === check).name} : ${checkData[check-1]}
                                    </div>
                                </div>
                            </ion-item>
                        `).join('\n')}
                    </ion-list>
    
                </div>
            </div>
            
            </div>
            </ion-content>
        `
    }
})

const nav = document.querySelector('ion-nav')

