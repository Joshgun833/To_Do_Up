
$(document).ready(function () {
  (function ($) {


    $.fn.toDoList = function () {
      // 


      if (localStorage.inputData) {
        var currentInputDataTest = localStorage.inputData;
        if (typeof (currentInputDataTest) == "string") {
          var currentInputData = currentInputDataTest.split(",")
        } else {
          var currentInputData = $.map(currentInputDataTest, function (value, index) {
            return [value]
          });
        }

      } else {
        var currentInputData = [];
      }

      localStorage.clear();

      var htmlHeader = $('<div class="value"></div>')
      var getDataInput = $('<input type="text" class="mytext">')
      var addButton = $('<button class="Add"><i class="fa fa-plus fa-2x" id="icon-add" aria-hidden="true"></i></button>')
      var htmlBody = $('<ul id="icine"></ul>')
      if (currentInputData) {
        for (i = 0; i < currentInputData.length; i++) {
          var removeButtonAuto = $('<button class="remove-this"><i class="far fa-trash-alt fa-2x" id="icon"></i></button>').click(function () {
            var clickedElementText = $(this).parent().text()
            currentInputData = $.grep(currentInputData, function (value) {
              return value != clickedElementText
            })
            $(this).parent().remove();
          })
          var addLiAuto = $('<li class="yenii">' + currentInputData[i] + '</li>').click(function () {
            $(this).addClass("removed")
          }).dblclick(function () {
            $(this).removeClass("removed")
          })
          addLiAuto.append(removeButtonAuto)
          htmlBody.append(addLiAuto)
        }
      }


      var deleteButton = $('<button class="dell"><i class="fas fa-minus-square fa-2x" ></i></button>').click(function () {
        // gedib butun  $("ul#icine>li.removed"  textlerini array kimi getir
        // var array $("ul#icine>li.removed")  -in texti

        var removedElemets = []
        $("ul#icine>li.removed").each(function (index, value) {
          removedElemets.push(value.innerText)
        })
        var newArr = []
        jQuery.grep(currentInputData, function (el) {
          if (jQuery.inArray(el, removedElemets) == -1) newArr.push(el);
        });

        currentInputData = newArr

        $("ul#icine>li.removed").remove()

      })

      addButton.click(function () {
        var removeButton = $('<button class="remove-this"><i class="far fa-trash-alt fa-2x" id="icon"></i></button>').click(function () {
          var clickedElementText = $(this).parent().text()
          currentInputData = $.grep(currentInputData, function (value) {
            return value != clickedElementText
          })
          $(this).parent().remove();
        })
        
        var toDoText = getDataInput.val();
        console.log($.inArray(toDoText, currentInputData))
        if (toDoText != '') {
          if ($.inArray(toDoText, currentInputData) != -1) {
            alert("artiq bu elementi elave etmisiniz")
          } else {
            if (currentInputData) {
              currentInputData.unshift(toDoText)
            }
            var line = $('<li class="yenii">' + toDoText + '</li>').click(function () {
              $(this).addClass("removed")

            }).dblclick(function () {
              $(this).removeClass("removed")
            })
            console.log(Date.now())
            line.append($('<pre class = "date_c" style="display: inline;">   2020.23.12</pre>'));
            line.append(removeButton);
            $(htmlBody).prepend(line);
          }
        }
        else {
          alert('Xana bosdu')
        }
      })
      $(window).on('beforeunload', function (event) {
        localStorage.inputData = currentInputData;
      });

      htmlHeader.append(getDataInput);
      htmlHeader.append(addButton);
      htmlHeader.append(deleteButton)
      this.append(htmlHeader)
      this.append(htmlBody)
      return this;

    };

  }(jQuery));

  $('#todo').toDoList();
})

// $(document).on("click", ".Add", function () {
//   var text = $(".mytext").val();
//   if (text != '') {
//     $("#icine").append("<li class='yenii'><button class='remove-this'></button></li>")

//     var text = $(".mytext").val();

//     $(".yenii").last().append(text);

//   }
//   else {
//     alert('Xana bosdu')
//   }

// })//Elave elemek


// $(document).on("click", "ul#icine > li", function () {
//   $(this).addClass("silinen")



// })//Secmek
// $(document).on("dblclick", "ul#icine > li", function () {
//   $(this).removeClass("silinen")


// })//secmememk
// $(document).on("click", "ul#icine>li>button", function () {
//   $(this).parent().detach();
// })//secilen elementi silmek
// $(document).on("click", ".dell", function () {
//   $("ul#icine>li.silinen").remove()
// })//secilen elementleri silmek




// $(document).on("click", ".Add", function () {
//   var text = $(".mytext").val();
//   if (text != '') {
//     $("#icine").append("<li class='yenii'><button class='remove-this'></button></li>")


//     $(".yenii").last().append(function () {
//       var text = $(".mytext").val();
//       return text;
//     });

//   }
//   else {
//     alert('Xana bosdu')
//   }

// })//Elave elemek


// $(document).on("click", "ul#icine > li", function () {
//   $(this).addClass("silinen")




// })//Secmek
// $(document).on("dblclick", "ul#icine > li", function () {
//   $(this).removeClass("silinen")
//  })//secmememk
// $(document).on("click", "ul#icine>li>button", function () {
//   $(this).parent().detach();
//   $(this).modal("detach");
// })//secilen elementi silmek
// $(document).on("click", ".dell", function () {
//   $("ul#icine>li.silinen").remove()
// })


//secilen elementleri silmek
//   function($){
// $.fn.silinenClassElave = function(){
//   $(this).addClass("silinen")

// }___________________________________________
  // }
  // $(document).ready(function($){
  //   $.fn.silinenClassElave = function(){
  //   $(this).addClass("silinen")

  //   }
  //     })