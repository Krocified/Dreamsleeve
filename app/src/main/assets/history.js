function viewHistoryDetail(histId){
    const historyTest = Android.getSessionData()
    const historyArray = JSON.parse(historyTest)
    const histEntry = historyArray[historyArray.length-histId]
    nav.push('nav-history-detail', {histEntry})
}

function viewFaqDetail(faqId){
    const faqEntry = faqs[faqId-1]
    nav.push('nav-faq-detail', {faqEntry})
}