"use strict";

// App
import Popup from "./Popup.svelte";
// utilities
import { toPromise } from "krome";

/*____________________________*/
/*--------Main Function-------*/
async function init(url) {
  new Popup({
    target: document.body,
    props: {
      url: url,
    },
  });
}

/*------------------------------*/

// chrome.tabs.query({ currentWindow: true, active: true }(
//   tabs => {
//     let link = tabs[0].url;
//     insertContent(link, "url");
//   },
// );
let url = "https://www.example.com/";
init(url);
/*_____________________________*/
