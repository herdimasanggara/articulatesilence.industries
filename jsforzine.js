$(document).ready(function() {

  var padOne = new Audio('Antye Greie.mp3');
  $('.pad-1').mousedown(function() {
    padOne.load()
    padOne.play();
  });

  var padTwo = new Audio('Battles.mp3');
  $('.pad-2').mousedown(function() {
    padTwo.load();
    padTwo.play();
  });

  var padThree = new Audio('Diamanda Galas.mp3');
  $('.pad-3').mousedown(function() {
    padThree.load();
    padThree.play();
  });

  var padFour = new Audio('Eli Keszler.mp3');
  $('.pad-4').mousedown(function() {
    padFour.load();
    padFour.play();
  });

  var padFive = new Audio('Eliane Radigue.mp3');
  $('.pad-5').mousedown(function() {
    padFive.load();
    padFive.play();
  });

  var padSix = new Audio('Grouper.mp3');
  $('.pad-6').mousedown(function() {
    padSix.load();
    padSix.play();
  });

  var padSeven = new Audio('Holly Herndon.mp3');
  $('.pad-7').mousedown(function() {
    padSeven.load();
    padSeven.play();
  });

  var padEight = new Audio('Jacob Kirkegaard.mp3');
  $('.pad-8').mousedown(function() {
    padEight.load();
    padEight.play();
  });

  var padNine = new Audio('Jlin.mp3');
  $('.pad-9').mousedown(function() {
    padNine.load();
    padNine.play();
  });

  var padTen = new Audio('Okkyung Lee.mp3');
  $('.pad-10').mousedown(function() {
    padTen.load();
    padTen.play();
  });

  var padEleven = new Audio('Oneohtrix Point Never.mp3');
  $('.pad-11').mousedown(function() {
    padEleven.load();
    padEleven.play();
  });

  var padTwelve = new Audio('Oren Ambarchi.mp3');
  $('.pad-12').mousedown(function() {
    padTwelve.load();
    padTwelve.play();
  });

  var padThirteen = new Audio('Pauline Oliveros.mp3');
  $('.pad-13').mousedown(function() {
    padThirteen.load();
    padThirteen.play();
  });

  var padFourteen = new Audio('Ryoji Ikeda.mp3');
  $('.pad-14').mousedown(function() {
    padFourteen.load();
    padFourteen.play();
  });

  var padFifteen = new Audio('Sachiko M.mp3');
  $('.pad-15').mousedown(function() {
    padFifteen.load();
    padFifteen.play();
  });

  var padSixteen = new Audio('Senyawa.mp3');
  $('.pad-16').mousedown(function() {
    padSixteen.load();
    padSixteen.play();
  });

  var padSeventeen = new Audio('Tim Hecker.mp3');
  $('.pad-17').mousedown(function() {
    padSeventeen.load();
    padSeventeen.play();
  });

  var padEighteen = new Audio('Uwalmassa.mp3');
  $('.pad-18').mousedown(function() {
    padEighteen.load();
    padEighteen.play();
  });


  $(window).keydown(function(e) {
    var code = e.keyCode;
    var kc = String.fromCharCode(e.keyCode);
    $("div[data-code='"+code+"']").addClass("active")
    console.log(code);

    switch(kc) {
      case "Q":
        padOne.load();
        padOne.play();
        break;
      case "W":
        padTwo.load();
        padTwo.play();
        break;
      case "E":
        padThree.load();
        padThree.play();
        break;
      case "I":
        padFour.load();
        padFour.play();
        break;
      case "O":
        padFive.load();
        padFive.play();
        break;
      case "P":
        padSix.load();
        padSix.play();
        break;
      case "A":
        padSeven.load();
        padSeven.play();
        break;
      case "S":
        padEight.load();
        padEight.play();
        break;
      case "D":
        padNine.load();
        padNine.play();
        break;
      case "J":
        padTen.load();
        padTen.play();
        break;
      case "K":
        padEleven.load();
        padEleven.play();
        break;
      case "L":
        padTwelve.load();
        padTwelve.play();
        break;
      case "Z":
        padThirteen.load();
        padThirteen.play();
        break;
      case "X":
        padFourteen.load();
        padFourteen.play();
        break;
      case "C":
        padFifteen.load();
        padFifteen.play();
        break;
      case "B":
        padSixteen.load();
        padSixteen.play();
        break;
      case "N":
        padSeventeen.load();
        padSeventeen.play();
        break;
      case "M":
        padEighteen.load();
        padEighteen.play();
        break;
      default:
    }
  });

  $(window).keyup(function(e) {
    var code = e.keyCode;
    $("div[data-code='"+code+"']").removeClass("active");
  });

});

var $win = $(window),
    w = 0,h = 0,
    rgb = [],
    getWidth = function() {
        w = $win.width();
        h = $win.height();
    };

$win.resize(getWidth).mousemove(function(e) {

    rgb = [
        Math.round(e.pageX/w * 255),
        Math.round(e.pageX/w * 255),
        Math.round(e.pageX/w * 255)
    ];

    $(document.body).css('background','rgb('+rgb.join(',')+')');

}).resize();
