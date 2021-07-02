
<h2>Q-Article Audio</h2>

![image](https://github.com/y330/Q-Article-Audio/blob/dev/dist/icons/animated-logo-dark.svg)

<h6>Designed and Developed by Yonah Aviv</h6>

Note: _ALL VISUAL ASSETS ARE SUBJECT TO THE OWNERSHIP OF YONAH AVIV_, excluding feather icons imported from `svelte-feather-icons` node package

With Q-Article Audio, <b>listen to the rest of an article</b> as a podcast within the extension popup or on your smartphone using a QR code.

<h4>Video Demo: <a href="#" title="demo"><em>Coming soon</em></a></h4>

-------


Q-Article Audio, the Chrome extension, includes manfiest v3(actually for now it is manifest v2 because the web-ext module on npm is only compatible with mv2, but it also makes development much easier.) and UI components from the material design library <a href="https://svelte-materialify.vercel.app/" title="Svelte Materialify">Svelte Materialify</a>. This chrome extension is coded with
- <a href="https://svelte.dev/" title="Svelte website">__Svelte__</a>
- <a href="https://rollupjs.org" title="webpack.js website">Rollup</a>

__Here are screenshots of a semi-functional version 0.0.1__(Using Material Design)

<ul>
<li>

![](assets/screenshots/2021-07-01-19-26-49.png)</li>
<li>

![](assets/screenshots/2021-07-01-19-24-16.png)
</li>
<li>

![](assets/screenshots/2021-07-01-19-27-19.png)

</li>
<li>
</li>
</ul>
<h2>Features</h2>
<ul>
 <li>Lets you listen to articles present on a webpage</li>
<li>
Uses Google Chrome TTS API
<ul>
<li>Google's AI powered speech synthesis sounds natraul and lifelike</li>
</ul>
</li>
<li>
PWA also available
<ul>
<li>Cross-platform support</li>
</ul>
</li>
<li> Generates a QR code that will navigate towards the PWA which will contain your article as a podcast allowing you to listen on your smartphone quickly, on the go</li>
<li>
Macro Mode - Have the text zoom in on the line and scroll while reading.
</li>
<li>
Archive -  Archive items that are taking up space in the recents pane but you still may want to reference for later.
</li>
<li>
Lorem, ipsum dolor sit amet consectetur adipisicing elit.
</li>
</ul>

-------
Note: <b>Unreleased on any web extension stores</b>
Feel free to try it out:

In your terminal(i use bash) :
 `git clone y330/q-article-audio`

then `cd q-article-audio`.

after this:
`pnpm i` Instead you can also use `NPM`,`yarn`, or another suitable package manager of your choice, but its my personal preference to use `pnpm`.

After installing dependancies with the previous command, type the following in your terminal:
`pnpm run dev`

then go to chrome://extensions and turn on developer mode, and press "load unpacked", and pick the dist directory in the q-article-audio folder. And your done!🤝

____


<p>

__Buy me a coffee:__


<a href="https://www.buymeacoffee.com/yonahaviv" title="Buy Yonah a coffee">
<img class="bmc-logo" src="https://img.buymeacoffee.com/api/?url=aHR0cHM6Ly9pbWcuYnV5bWVhY29mZmVlLmNvbS9hcGkvP25hbWU9WW9uYWgrQXZpdiZzaXplPTMwMCZiZy1pbWFnZT1ibWMmYmFja2dyb3VuZD03OUQ2QjU=&creator=Yonah+Aviv&is_creating=computer%20programming&design_code=1&design_color=%2379D6B5&slug=yonahaviv" alt="Buy me a coffee" width="400px"><a>

Copyright © 2021 <a class="author-link" href="https://y330.github.io" target="_blank" rel="noopener noreferrer" title="Yonah's website" > Yonah Aviv</a>
</p>
