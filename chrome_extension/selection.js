// selection.js

function selectionOnClick (info, tab) {
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
    chrome.tabs.executeScript( { code: "window.getSelection().toString();" }, function(selection) {
        data = { "type" : menuItems[info.menuItemId.toString()], "text" : selection[0] };
    });
}

var numeral = chrome.contextMenus.create({"title": "எண்ணுப்பெயர்", "contexts":["selection"], "onclick": selectionOnClick});
var places = chrome.contextMenus.create({"title": "இடப்பெயர்", "contexts":["selection"], "onclick": selectionOnClick});
var actions = chrome.contextMenus.create({"title": "தொழிற்பெயர்", "contexts":["selection"], "onclick": selectionOnClick});
var plurals = chrome.contextMenus.create({"title": "பன்மை", "contexts":["selection"], "onclick": selectionOnClick});
var livingbeings = chrome.contextMenus.create({"title": "உயர்திணை", "contexts":["selection"], "onclick": selectionOnClick});
var vinai = chrome.contextMenus.create({"title": "வினைத்தொகை", "contexts":["selection"], "onclick": selectionOnClick});
var panbu = chrome.contextMenus.create({"title": "பண்புத்தொகை", "contexts":["selection"], "onclick": selectionOnClick});
var uvamai = chrome.contextMenus.create({"title": "உவமைத்தொகை", "contexts":["selection"], "onclick": selectionOnClick});
var ummai = chrome.contextMenus.create({"title": "உம்மைத்தொகை", "contexts":["selection"], "onclick": selectionOnClick});
var others = chrome.contextMenus.create({"title": "ஏனைய தொகை", "contexts":["selection"], "onclick": selectionOnClick});
var irttaikilavi = chrome.contextMenus.create({"title": "இரட்டைக் கிளவி", "contexts":["selection"], "onclick": selectionOnClick});

var menuItems = {}
menuItems[numeral.toString()] = "எண்ணுப்பெயர்";
menuItems[places.toString()] = "இடப்பெயர்";
menuItems[actions.toString()] = "தொழிற்பெயர்";
menuItems[plurals.toString()] = "பன்மை";
menuItems[livingbeings.toString()] = "உயர்திணை";
menuItems[vinai.toString()] = "வினைத்தொகை";
menuItems[panbu.toString()] = "பண்புத்தொகை";
menuItems[uvamai.toString()] = "உவமைத்தொகை";
menuItems[ummai.toString()] = "உம்மைத்தொகை";
menuItems[others.toString()] = "ஏனைய தொகை";
menuItems[irttaikilavi.toString()] = "இரட்டைக் கிளவி";