var $output = $("#editor_output");

var $input = $("#editor_input");


$input.bind("input", function() {
  update();
});

$input.focus();
$(document).click(function() {
  $input.focus();
});

$(document).bind("keydown keyup click mouseup selectionchange mousewheel", function() {
    update();
});

var isDragging = false;
$(document).bind("mousedown", function() {
  isDragging = true;
})
$(document).bind("mousemove", function() {
  if (isDragging) {
    update();
  }
});
$(document).bind("mouseup", function() {
  isDragging = false;
})



init();
function init() {
  var i = $input[0];

  i.selectionStart = i.value.length;
  i.selectionEnd = i.value.length;


  update();
  //$input.focus();
}

function update() {
   var i = $input[0];
  var val = i.value;

  if (typeof i.selectionStart !== "undefined "&& typeof i.selectionEnd !== "undefined") {
    var valBefore = val.slice(0,i.selectionStart);
    var valAfter = val.slice(i.selectionEnd) + " ";
    var valSelected = val.slice(i.selectionStart,i.selectionEnd);

    val = valBefore + '<span class="selection">'+ valSelected +'</span>' + valAfter;


  }

  $output.css("margin-top", -$input.scrollTop() + "px");
  $output.html(val)


}

$(document).ready(function() {
  // Function to simulate typing animation
  function typeText(text, index, interval) {
    if (index < text.length) {
      $input.append(text[index++]);
      setTimeout(function () {
        typeText(text, index, interval);
      }, interval);
    }
  }

  // Text to be typed out
  var textToType =
`============================================================
|               ROBCO INDUSTRIES - TERMINAL                |
|                                                          |
|  SYSTEM INFO:                                            |
|  - Version: 4.20.1                                       |
|  - Security Level: MAXIMUM                               |
|  - Last Login: 2024-04-07 15:28:09                       |
|                                                          |
|  PASSWORD: ************                                  |
|                                                          |
|  ACCESS GRANTED. WELCOME, USER: BOB [REDACTED]           |
|                                                          |
============================================================
>
> get user/information
============================================================
|                PERSONAL INFORMATION                      |
|----------------------------------------------------------|
| Name: Alex [REDACTED]                                    |
| Email: Encador@proton.me                                 |
| GitHub: github.com/QuoteSpiller                          |
============================================================
>
> get user/skills
============================================================
|                         SKILLS                           |
|----------------------------------------------------------|
| Languages: Python, Java, C++, C#, JavaScript             |
| Tools: TensorFlow, Jupiter, OpenCV                       |
| Communication: Speak Russian                             |
============================================================
>
> get user/projects
> loading . 
> loading . . 
> loading . . .
============================================================
|                         PROJECTS                         |
|----------------------------------------------------------|
| Pathfinding Application:                                  |
|   • UI-based app for shortest path calculation           |
|   • A* algorithm, OOP                                    |
| Tic-Tac-Toe Game:                                        |
|   • Console-based game with Minimax algorithm            |
| Encryption:                                              |
|   • Web-based text encryption                            |
============================================================

{ CAN EDIT: TRUE } 

> `;

  // Interval between typing each character (in milliseconds)
  var typingInterval = 1;

  // Start typing animation on page load
  // typeText(textToType, 0, typingInterval);
  $('#editor_input').text(textToType);
});




