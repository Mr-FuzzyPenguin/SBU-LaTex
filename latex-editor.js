// KATEX
const latex_input = document.getElementById("textbox");
let result = document.getElementById("numberText");

// Debug start
latex_input.value = "";


katex.throwOnError = false;

function convert() {
    const userInput = latex_input.value;
    try
    {
        katex.render(userInput, result, {"displayMode":true,"leqno":false,"fleqn":true,"throwOnError":true,"errorColor":"#cc0000","strict":"warn","output":"htmlAndMathml","trust":false,"macros":{"\\f":"#1f(#2)"}})
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

// MQ
let mq = document.getElementById('mq');
let mq_input = MQ.MathField(mq, {
    handlers: {
      edit: function() {
        latex = mq_input.latex()
        const userInput = latex_input.value
      },
      enter: function()
      {
        // hacky way of making the rendered latex, katexbox and mathquill update all at the same time, and delete
        latex_input.value += latex + "\\newline \n"
        convert();
        mq_input.select();
        mq_input.keystroke('Backspace');
      }
    }
});


