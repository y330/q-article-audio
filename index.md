
<h2>Q-Article Audio</h2>

![image](https://github.com/y330/Q-Article-Audio/blob/dev/dist/icons/animated-logo-dark.svg)

<h6>Designed and Developed by Yonah Aviv</h6>



With Q-Article Audio, <b>listen to the rest of an article</b> as a podcast within the extension popup or on your smartphone using a QR code.

<h4>Video Demo: <a href="#" title="demo"><em>Coming soon</em></a></h4>

-------


Q-Article Audio, the Chrome extension, includes manfiest v3(actually for now it is manifest v2 because the web-ext module on npm is only compatible with mv2, but it also makes development much easier.) and UI components from the material design library <a href="https://svelte-materialify.vercel.app/" title="Svelte Materialify">Svelte Materialify</a>. This chrome extension is coded with
- <a href="https://svelte.dev/" title="Svelte website">__Svelte__</a>
- <a href="https://rollupjs.org" title="webpack.js website">Rollup</a>

__Here are screenshots of a semi-functional version 0.2.0__(Using Material Design)
p.s. I actually like windows better; its just the OS X window frames look better.
<ul>
<li>

![home](https://github.com/y330/q-article-audio/assets/screenshots/home.png)</li>
<li>

![recents](https://github.com/y330/q-article-audio/assets/screenshots/recents.png)
</li>
<li>

![options](https://github.com/y330/q-article-audio/assets/screenshots/options.png)

</li>
</ul>
<h2>Features</h2>
<ul>
 <li>Lets you listen to articles present on a webpage</li>
<li>
Uses Google Chrome TTS API
<ul>
<li>Google's AI powered speech synthesis sounds natural and lifelike</li>
</ul>
</li>
<li>
PWA also available(may not do this)
<ul>
<li>Cross-platform support</li>
</ul>
</li>
<li> Generates a QR code that will navigate towards the PWA which will contain your article as a podcast allowing you to listen on your smartphone quickly, on the go(may change this feature fundamentally)</li>
<li>
Macro Mode - Have the text zoom in on the line and scroll while reading.
</li>
<li>
Archive -  Archive items that are taking up space in the recents pane but you still may want to reference for later.
</li>
</ul>

-------
Note: <b>Unreleased on any web extension stores</b>

## Local Development

Feel free to my extension it out:

In your preferred terminal(I use bash) type the following:

1. `git clone y330/q-article-audio`
That clones the repo into a new folder called _q-article-audio/_

2. `cd q-article-audio`.
That enters into the scope of _q-article-audio/_

3. `pnpm i`
That installs the dependencies using pnpm([performant]npm). Feel free to use yarn or npm alternatively.


After installing dependencies with the previous command, type the following in your terminal to run a local server for development of the extension[no hmr :(]


4. `pnpm run dev`

5. Go  to [chrome://extensions](chrome://extensions)
6. Then, do the following:
   a. Turn on developer mode
   
   b. Click on _load unpacked_. This will open a file explorer window.
   
   c. Navigate to _q-article-audio/_ , and choose the _dist/_ directory.
    


And your done!🤝

____


<p>

__Buy me a coffee:__


<a href="https://www.buymeacoffee.com/yonahaviv" title="Buy Yonah a coffee">
<img class="bmc-logo" src="https://img.buymeacoffee.com/api/?url=aHR0cHM6Ly9pbWcuYnV5bWVhY29mZmVlLmNvbS9hcGkvP25hbWU9WW9uYWgrQXZpdiZzaXplPTMwMCZiZy1pbWFnZT1ibWMmYmFja2dyb3VuZD03OUQ2QjU=&creator=Yonah+Aviv&is_creating=computer%20programming&design_code=1&design_color=%2379D6B5&slug=yonahaviv" alt="Buy me a coffee" width="400px"><a>

Copyright © 2021 <a class="author-link" href="https://y330.vercel.app" target="_blank" rel="noopener noreferrer" title="Yonah's website" > Yonah Aviv</a>
</p>
