const faqs = [
    {
        id: 1,
        faq: "My cloud-connected devices is not discoverable by SmartThings Application.",
        checks: [
            1, 2, 3
        ]
    },
    {
        id: 2,
        faq: "My hub-connected devices is not discoverable by SmartThings Application.",
        checks: [
            3, 4, 5, 6
        ]
    },
    {
        id: 3,
        faq: "My Samsung OCF devices is not discoverable by SmartThings Application.",
        checks: [
            4, 7, 11
        ]
    },
    {
        id: 4,
        faq: "How can I find nearby P2P (Wifi Direct) capable devices?",
        checks: [
            5, 8, 12, 13
        ]
    },
    {
        id: 5,
        faq: "I'm unable to check the status/control/uninstall my previously installed IoT Device(s).",
        checks: [
            1, 2, 6, 14, 15
        ]
    },
    {
        id: 6,
        faq: "There's a long delay between SmartThings command and IoT device action.",
        checks: [
            6, 10, 16
        ]
    },
]

let checkData = [
    "Not Checked",
    "Not Checked",
    "Not Checked",
    "Not Checked",
    "Not Checked",
    "Not Checked",
    "Not Checked",
    "Not Checked",
    "Not Checked",
    "Not Checked",
    "Not Checked",
    "Not Checked",
    "Not Checked",
    "Not Checked",
    "Not Checked",
    "Not Checked",
]