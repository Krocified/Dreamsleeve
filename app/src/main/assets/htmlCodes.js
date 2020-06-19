const homeHTML=`
<ion-content>
    <div class="app-container">
        <div class="title">
            <div class="parallax"></div>
            <!-- <img src="./img/ds.jpg" alt=""> -->
            <div class="title-container">
                <ion-item color="transparent" lines="none">
                    <ion-label color="light">
                        <div class="title-text-container">
                            Dreamsleeve
                        </div>
                    </ion-label>
                </ion-item>
            </div>
        </div>
        <ion-label color="light">
            <div class="title-text-container">
                Explore
            </div>
        </ion-label>

        <div class="outer-item-container">
            <div class="item-container">
                <ion-item 
                    id="all-realms" button 
                    color="transparent" 
                    lines="none" 
                    onclick="buttonClick(this.id)"
                >
                    <ion-label color="light" class="label-container">
                        <div class="label-container">
                            <div class="text-container">
                                <ion-icon name="map-outline"></ion-icon>
                            </div>
                            <div class="text-container">
                                All Realms
                            </div>
                        </div>
                    </ion-label>
                </ion-item>
                <ion-item 
                    id="selective-realms" button 
                    color="transparent" 
                    lines="none" 
                    onclick="buttonClick(this.id)"
                >
                    <ion-label color="light">
                        <div class="label-container">
                            <div class="text-container">
                                <ion-icon name="apps-outline"></ion-icon>
                            </div>
                            <div class="text-container">
                                Selective Realms
                            </div>
                        </div>
                    </ion-label>
                </ion-item>
            </div>
        </div>

        <ion-label color="light">
            <div class="title-text-container">
                Help and Guide
            </div>
        </ion-label>

        <div class="outer-item-container">
            <div class="item-container">
                <ion-item 
                    id="help-and-guide" button 
                    color="transparent" 
                    lines="none" 
                    onclick="buttonClick(this.id)"
                >
                    <ion-label color="light" class="label-container">
                        <div class="label-container">
                            <div class="text-container">
                                <ion-icon name="help-circle-outline"></ion-icon>
                            </div>
                            <div class="text-container">
                                Help and Guide
                            </div>
                        </div>
                    </ion-label>
                </ion-item>
            </div>
        </div>
        
        <ion-label color="light">
            <div class="kro">
                &copy; 2020 - Krocified
                <br>
                May Daedra guide thee.
            </div>
        </ion-label>
    </div>
</ion-content>
`

const srHTML = `

<ion-header class="ion-no-border" >
    <ion-toolbar transparent>
        <ion-buttons slot="start">
            <ion-back-button color="light" defaultHref="/"></ion-back-button>
        </ion-buttons>
    </ion-toolbar>
</ion-header>
<ion-content fullscreen>
<div class="app-container">
    <div class="sr-title">
        <div class="sr-banner"></div>
        <div class="title-container">
            <ion-item color="transparent" lines="none">
                <ion-label color="light">
                    <div class="title-text-container">
                        Selective Realms
                    </div>
                </ion-label>
            </ion-item>
        </div>
    </div>

    <div class="outer-item-container">
        <div class="item-container">
            
            <ion-list class="transparent">
                ${realms.map(realm=>`
                    <ion-item id=${realm.id} color="transparent" lines="none" button onclick="displayRealm(${realm.id})">
                        <ion-label color="light">
                            <div class="realm-text-container">
                                ${realm.name}
                            </div>
                        </ion-label>
                    </ion-item>
                `).join('\n')}
            </ion-list>

        </div>
    </div>

</div>
</ion-content>
`

const arHTML = `
<ion-header class="ion-no-border">
<ion-toolbar transparent>
    <ion-buttons slot="start">
        <ion-back-button color="light" defaultHref="/"></ion-back-button>
    </ion-buttons>
</ion-toolbar>
</ion-header>
<ion-content fullscreen onload="go()">
<div class="ar-app-container">
<div class="sr-title">
    <div class="ar-banner"></div>
    <div class="title-container">
        <ion-item color="transparent" lines="none">
            <ion-label color="light">
                <div class="title-text-container">
                    All Realms
                </div>
            </ion-label>
        </ion-item>
    </div>
</div>

<div class="outer-item-container">
    <div class="item-container">

        <div id="venture-btn" class="button-container">
            <ion-item color="transparent" lines="none" button onclick="go()">
                <ion-label color="light">
                    <div class="venture-button">
                        Venture Oblivion
                    </div>
                </ion-label>
            </ion-item>
        </div>

        <img id="d-logo" src="./img/dr-icons/1.png" alt="" class="logo-container" style="display: none;">
        <ion-label color="light">
            <div id="d-name" class="daedra-name-text" style="display: none;">
                Hermaeus Mora
            </div>
        </ion-label>
        <ion-label color="light">
            <div id="d-realm" class="daedra-realm-text" style="display: none;">
                Apocrypha
            </div>
        </ion-label>

        <ion-progress-bar 
            class="progress-bar" 
            id="progress" 
            value="0"
            style="display: none;"
        ></ion-progress-bar>

        <ion-label color="light">
            <div id="d-complete-msg" class="complete-msg">
            </div>
        </ion-label>

    </div>
</div>

</div>
</ion-content>
`

const helpHTML = `
<ion-header class="ion-no-border">
<ion-toolbar transparent>
    <ion-buttons slot="start">
        <ion-back-button color="light" defaultHref="/"></ion-back-button>
    </ion-buttons>
</ion-toolbar>
</ion-header>
<ion-content fullscreen>
<div class="help-app-container">
<div class="sr-title">
    <div class="help-banner"></div>
    <div class="title-container">
        <ion-item color="transparent" lines="none">
            <ion-label color="light">
                <div class="title-text-container">
                    Help and Guide
                </div>
            </ion-label>
        </ion-item>
    </div>
</div>

<div class="outer-item-container">
    <div class="item-container">

        <ion-item 
            id="faq" button 
            color="transparent" 
            lines="none" 
            onclick="buttonClick(this.id)"
        >
            <ion-label color="light">
                <div class="label-container">
                    <div class="text-container">
                        <ion-icon name="help-circle"></ion-icon>
                    </div>
                    <div class="text-container">
                        Frequently Asked Questions
                    </div>
                </div>
            </ion-label>
        </ion-item>

        <ion-item 
            id="tour" button 
            color="transparent" 
            lines="none" 
            onclick="buttonClick(this.id)"
        >
            <ion-label color="light">
                <div class="label-container">
                    <div class="text-container">
                        <ion-icon name="airplane"></ion-icon>
                    </div>
                    <div class="text-container">
                        Application Tour
                    </div>
                </div>
            </ion-label>
        </ion-item>

        <ion-item 
            id="about" button 
            color="transparent" 
            lines="none" 
            onclick="buttonClick(this.id)"
        >
            <ion-label color="light">
                <div class="label-container">
                    <div class="text-container">
                        <ion-icon name="information-circle"></ion-icon>
                    </div>
                    <div class="text-container">
                        About Application
                    </div>
                </div>
            </ion-label>
        </ion-item>

    </div>
</div>

</div>
</ion-content>
`

const detailHTML = `
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

        <img id="d-logo" src="${realm.icon}" alt="" class="logo-container">
        <ion-label color="light">
            <div id="d-name" class="daedra-name-text">
                ${this.prince}
            </div>
        </ion-label>
        <ion-label color="light">
            <div id="d-realm" class="daedra-realm-text">
                ${this.name}
            </div>
        </ion-label>

    </div>
</div>

</div>
</ion-content>
`

const faqHTML = `
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

