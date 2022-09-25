# SBU-LaTex

Currently a work in progress. Verion 0.0.01
### Goal:
To have a website that is capable of writing LaTex with ease with added multiple functionalities.

### Description:
This is a web project that is geared towards amateurs with LaTex, or complete beginners. For more professional typesetting, please use the LaTex binaries for YOUR distribution or operating system. This website does not have a deployment address or proper domain, but you _may_ clone this repository, download it, host it on repl.it if you so wish to do so.

### Currently Features:
* Using [KaTex](https://katex.org/) for LaTex rendering and display.
* Using [MathQuill](http://mathquill.com/) for ease in typing LaTex in a more natural way
* Minimalistic GUI allows self-explanatory and quick-learning curve.
* Real-time LaTex rendering through KaTex

### To-do and current limitations (adding more soon if I get more ideas):
###### ~~if I'm not lazy OR if someone helps commit to this repository for some reason~~
###### Listed in order in priority, and creation order.
~~* Add a way so that as you type in `MathField` in MathQuill, it immediately takes the LaTex from MQ, and pastes the LaTex in the KaTex text-box. Have it immediately render it using KaTex in real time.~~
  ~~* MQ may sometimes prevent newline.~~
  ~~* On certain systems, the fonts looks a bit broken~~ \[will not fix\]
  ~~* Enter key sends `\newline` into KaTex box.~~
* Add a table (for a "cheat-sheet" or LaTex documentation)
* Undo doesn't work in MathQuill. 
  * Undo manager, or manual implementation
    * Challenge round:
      Figure out how to make a web-browser extension, and add this great editor onto webassign.net because webassign doesn't have undo for some stupid reason (class AMS 161)

* Quality of Life (scroll-sticky for the top `<textarea>` and MathQuill) and GUI revamp.
  * You can tell by how low I put this on my priority list, that I literally can't be bothered (AT ALL) to make a proper UI that isn't a complete eye-sore.
* Add a way to take a [picture](https://html2canvas.hertzen.com) of your rendered LaTex by KaTex.
