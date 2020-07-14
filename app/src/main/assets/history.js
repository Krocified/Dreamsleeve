function viewHistoryDetail(histId){
    const histEntry = histStatus[histId-1]
    nav.push('nav-history-detail', {histEntry})
}

function viewFaqDetail(faqId){
    const faqEntry = faqs[faqId-1]
    nav.push('nav-faq-detail', {faqEntry})
}