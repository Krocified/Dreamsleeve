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
            traverse(realm, id), id*500
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

    // Android.display(id)
    const isSuccessful = Android.checkRealmSpecific()
    // const isSuccessful = "YES"
    checkData[id] = isSuccessful
    
    const realmObject = {
        realmId: realm.id,
        realmStatus: isSuccessful
    }

    realmStatus.push(realmObject)
    
    if(realm.id===15){
        document.getElementById("d-complete-msg").innerHTML = "You have returned."

        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;

        const currState = {
            id:histStatus.length+1,
            type: "All Realms",
            dateTime: dateTime,
            status: realmStatus
        }
        
        histStatus.unshift(currState)        

        const sessionJSON = JSON.stringify(currState)
        console.log(sessionJSON)
        Android.testSessionData(sessionJSON)
    }
    onwards(currName.innerHTML)

}
