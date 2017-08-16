'use strict';

window.renderStatistics = function (ctx, names, times) {
  /*
   * Draw white cloud with shadow and text
   */
  var drawCloud = function (x, y, width, heigth) {
    ctx.strokeRect(x, y, width, heigth);
    ctx.fillRect(x, y, width, heigth);
  };

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  drawCloud(110, 20, 430, 280);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  drawCloud(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

  /*
   * Calculate scale
   */
  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramWidth = 150;
  var step = histogramWidth / max;

  /*
   * Show histogramm
   */
  ctx.textBaseline = 'top';
  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    if (names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(140 + 90 * i, 90 + histogramWidth - times[i] * step, 40, times[i] * step);

    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(names[i], 140 + 90 * i, 250)
    ctx.fillText(parseInt(times[i], 10), 140 + 90 * i, 70 + histogramWidth - times[i] * step)
  }
};
