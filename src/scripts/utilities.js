"use strict";

/**
 * Get from the storage. If "key" isn't provided, it will retrieve all the keys from that storage area.
 * @param {"sync"|"local"} storageArea Where to retrieve the value from.
 * @param {string?} key The storage name.
 * @returns {Promise<object?>} The value.
 */
export async function getStorage(storageArea, key) {
  return new Promise(resolve => {
    chrome.storage[storageArea].get(key, result => {
      resolve(key ? result[key] : result);
    });
  });
}

/**
 * Copy a string to the clipboard.
 * @param {string} text The string to copy.
 */
export async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    copyFallback(text);
  }
}

function copyFallback(text) {
  try {
    if (document?.queryCommandSupported("copy")) {
      const elTextarea = document.createElement("textarea");
      elTextarea.value = text;
      elTextarea.style.top = "0";
      elTextarea.style.left = "0";
      elTextarea.style.position = "fixed";
      elTextarea.style.opacity = "0";
      document.body.append(elTextarea);
      elTextarea.focus();
      elTextarea.select();
      try {
        document.execCommand("copy");
      } catch {}
      elTextarea.remove();
    }
  } catch {}
}
/*
*converts a api function to promise
*
function toPromise(api) {
  return (...args) => {
    return new Promise(resolve => {
      api(...args, resolve);
    });
  };
} */

export function toggleTheme(state = "light") {
  if (state === "light") {
    return "dark";
  } else {
    return "light";
  }
}
