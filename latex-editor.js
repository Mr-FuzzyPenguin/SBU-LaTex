// KATEX
const latex_input = document.getElementById("textbox");
let result = document.getElementById("numberText");
katex.throwOnError = false;

function convert() {
    const userInput = latex_input.value
    try
    {
        katex.render(userInput,result,displayMode=true,throwOnError=false)
        result.classList.add("is-1")
    }
    catch (e) {
        result.classList.remove("is-1")
        result.classList.add("is-3")
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
        console.log(mq_input.latex()); // Get entered math in LaTeX format
      }
    }
});

