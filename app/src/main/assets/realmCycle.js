go = () => {
    
    realmStatus = []

    let currName = document.getElementById("d-name")
    let currRealm = document.getElementById("d-realm")
    let currLogo = document.getElementById("d-logo")
    let currProgress = document.getElementById("progress")
    let ventureBtn = document.getElementById("venture-btn")

    currName.style.display = "block"
    currRealm.style.display = "block"
    currLogo.style.display = "block"
    currProgress.style.display = "block"
    ventureBtn.style.display = "none"
    
    currProgress.value = 0.0625

    realms.forEach((realm, id)=>{
        setTimeout(()=>
            traverse(realm, id), id*750
        )
    })
 
}

onwards = (name) => {
    console.log("Venturing to "+name+"'s realm.")
    Android.display("Venturing to "+name+"'s realm.")
}

traverse = (realm, id) => {    
    
    let currName = document.getElementById("d-name")
    let currRealm = document.getElementById("d-realm")
    let currLogo = document.getElementById("d-logo")
    let currProgress = document.getElementById("progress")

    currName.innerHTML =  realm.prince
    currRealm.innerHTML =  realm.name
    currLogo.src = realm.icon
    currProgress.value += 0.0625

    const isSuccessful = Android.checkRealmSpecific()
    checkData[id] = isSuccessful
    
    const realmObject = {
        realmId: realm.id,
        realmStatus: isSuccessful
    }

    realmStatus.push(realmObject)
    onwards(currName.innerHTML)
    
    if(realm.id===16){
        document.getElementById("d-complete-msg").innerHTML = "You have returned."
        
        const dateTime = Android.getDateTime();
        const idCount = Android.getIdCount()

        const currState = {
            id: idCount,
            type: "All Realms",
            dateTime: dateTime,
            status: realmStatus
        }
      
        const sessionJSON = JSON.stringify(currState)
        Android.testSessionData(sessionJSON)
    }
    

}
