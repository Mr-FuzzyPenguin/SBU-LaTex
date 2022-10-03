// KATEX
const latex_input = document.getElementById("textbox");
let result = document.getElementById("numberText");

// Debug start
latex_input.value = "";


katex.throwOnError = false;

// Katex rendering the output.
function convert() {
    const userInput = latex_input.value;
    try
    {
        katex.render(userInput, result, {"displayMode":true,"leqno":false,"fleqn":true,"throwOnError":true,"errorColor":"#cc0000","strict":"warn","output":"htmlAndMathml","trust":false,"macros":{}})
    }
    catch (e) {
        if (e instanceof katex.ParseError) {
            result.innerHTML = e
        }
    }
}


latex_input.addEventListener("input", convert);

if (latex_input.value != '')
{
    convert();
}

// MQ on Enter keypress
let mq = $('#mq');
let mq_input = MQ.MathField(mq[0], {
    handlers: {
      edit: function() {
        // search for all variables, and change font to KaTeX
        console.log("please work.")
        // for (let i of document.querySelectorAll(".mq-math-mode var")){i.style.font = "italic 1.21em KaTeX_Main, Times New Roman, serif"};
      },
      enter: function()
      {
        // get Latex value
        latex = mq_input.latex()
        // go to right end.
        mq_input.moveToRightEnd()
        // add a space, and add a newline
        mq_input.keystroke('Space');
        // send it to variable latex_input so convert() can detect the global variable
        latex_input.value += latex + "\\newline \n"
        // convert the Katex.
        convert();
        // clear all
        mq_input.select();
        mq_input.keystroke('Backspace');

      }
    }
});

mq.on('focusout.animation', function()
{
  // alert("lost focus. current Latex:"+latex)

  if (!mq_input.latex())
  {
    mq_input.write("\\text{Type something in here...}")
  }
});
