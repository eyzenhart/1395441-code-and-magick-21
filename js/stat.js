'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var INNER_GAP = 40;
var BAR_GAP = 50;
var APPER_TEXT_GAP = 235;
var APPER_BAR_GAP = 230;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var barHeight = 150;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement += arr[i]
    }
  }
  return maxElement;
}

var getRandomHSL = function() {
  return 'hsl(240, 100%, ' + 100 * Math.random() + '%)';
}

var renderStatistics = function(ctx, names, times) {
  renderCloud(
    ctx,
    CLOUD_X + GAP,
    CLOUD_Y + GAP,
    'rgba(0, 0, 0, 0.7)'
  );

  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff'
  );

  ctx.fillStyle = "#000000";
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', CLOUD_X + INNER_GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + INNER_GAP, CLOUD_Y + INNER_GAP);


  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    for (var j = 0; j < times.length; j++) {
      ctx.fillStyle = "#000000";
      ctx.font = '16px PT Mono';
      ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + INNER_GAP + (TEXT_WIDTH + BAR_GAP) * i,
        CLOUD_Y + GAP * 3 + INNER_GAP
        );
    }

    ctx.fillStyle = "#000000";
    ctx.fillText(
      names[i],
      CLOUD_X + INNER_GAP + (TEXT_WIDTH + BAR_GAP) * i,
      CLOUD_Y + GAP + APPER_TEXT_GAP
      );

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      }
      else {
        ctx.fillStyle = getRandomHSL();
      }

    ctx.fillRect(
      CLOUD_X + INNER_GAP + (TEXT_WIDTH + BAR_GAP) * i,
      CLOUD_Y + APPER_BAR_GAP,
      BAR_WIDTH,
      Math.round(-(barHeight * times[i]) / maxTime)
    );
  }
}
