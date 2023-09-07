// Purpose: gets the labels selected by the user and saves them in an array
export default function getLabels() {

    const labels = [];
    
    const labelValues = {
        "XL Recordings": document.querySelector("#xlRecordings").checked,
        "Columbia Records": document.querySelector("#columbiaRecords").checked,
        "Def Jam Recordings": document.querySelector("#defJamRecordings").checked,
        "Roc Nation": document.querySelector("#rocNation").checked,
        "RBMG": document.querySelector("#rbmg").checked,
        "OVO Sound": document.querySelector("#ovoSound").checked,
        "Parkwood Entertainment": document.querySelector("#parkwoodEntertainment").checked,
        "Top Dawg Entertainment": document.querySelector("#topDawgEntertainment").checked,
        "Interscope Records": document.querySelector("#interscopeRecords").checked,
        "Atlantic Records": document.querySelector("#atlanticRecords").checked,
        "Asylum Records": document.querySelector("#asylumRecords").checked,
    }
    // save checked labels in array as strings
    for (const label in labelValues) {
        if (labelValues[label]) {
            labels.push(label);
        }
    }
    return labels;
}