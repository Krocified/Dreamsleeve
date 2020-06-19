function testRun(){
    Android.testRun()
}

function buttonClick(clicked_id){
    
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
    } else {
        console.log(click)
    }
    Android.buttonClick(click)
}

function displayRealm(realm_id){
    const realm = realms.find(realm=>realm.id===realm_id)
    console.log(realm)
    nav.push('nav-details', { realm })
    Android.display("Display: "+realms[realm_id-1].name)
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
                            onclick="buttonClick(this.id)"
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


const nav = document.querySelector('ion-nav')

