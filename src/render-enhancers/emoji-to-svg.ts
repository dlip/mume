import { resolve } from "path";
import * as emojis from "emojis";
import * as emojiRegex from "emoji-regex";
import * as utf8 from "utf8";

import {extensionDirectoryPath} from "../utility";

function toCodePoint(unicodeSurrogates) {
  var
    r = [],
    c = 0,
    p = 0,
    i = 0;
  while (i < unicodeSurrogates.length) {
    c = unicodeSurrogates.charCodeAt(i++);
    if (p) {
      r.push((0x10000 + ((p - 0xD800) << 10) + (c - 0xDC00)).toString(16));
      p = 0;
    } else if (0xD800 <= c && c <= 0xDBFF) {
      p = c;
    } else {
      r.push(c.toString(16));
    }
  }
  return r.join('-');
}
  
const imagePath = "file://" + resolve(extensionDirectoryPath, "./assets/emoji/EmojiOne/40");
/**
 * Replace emoji with svg.
 * @param $
 */
export default function enhance($: CheerioStatic): void {
  const html = $.html().replace(
    emojiRegex(),
    (emoji) => {
      return `<img class="emoji" src="${imagePath}/${toCodePoint(emoji)}.png" alt="${emoji}">`
    }
  );
  console.log(html);

  $.root().html(html);
}
