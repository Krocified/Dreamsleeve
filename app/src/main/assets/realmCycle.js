// realms.forEach((realm, id)=>{
//     setTimeout(()=>
//         traverse(realm, id), id*500
//     )
// })

function go(){
    
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

function onwards(name){
    console.log("Venturing to "+name+"'s realm.")
    Android.display("Venturing to "+name+"'s realm.")
}

function traverse(realm, id){    
    
    let currName = document.getElementById("d-name")
    let currRealm = document.getElementById("d-realm")
    let currLogo = document.getElementById("d-logo")
    let currProgress = document.getElementById("progress")

    currName.innerHTML =  realm.prince
    currRealm.innerHTML =  realm.name
    currLogo.src = realm.icon
    currProgress.value += 0.0625

    if(id===15){
        document.getElementById("d-complete-msg").innerHTML = "You have succeeded."
    }

    onwards(currName.innerHTML)
}