startAdChanger();



//------------------ Advertising
function startAdChanger() {
    let item = processAdChanger();
    loopAdChanger(item);
}

function loopAdChanger(lastAd = null){
    setTimeout(() => {
        let item = processAdChanger(lastAd);

        loopAdChanger(item);
    }, 30000); //30s
}

function processAdChanger(lastAd = null){
    //hide previous ad
    lastAd && lastAd.classList.add('hidden');

    //get all ads
    let items = Array.from(document.querySelectorAll('[class|="ad-item"]'));
    //remove previous ad
    lastAd && items.splice(items.indexOf(lastAd), 1);
    //select random ad
    let selectedItem = items[Math.floor(Math.random()*items.length)];
    //show new ad
    selectedItem.classList.remove('hidden');

    return selectedItem;
}