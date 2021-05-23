/**
 * Copyright (c) 2016 hustcc
 * License: MIT
 * Version: v1.0.1
 * GitHub: https://github.com/hustcc/ribbon.js
**/
/*jshint -W030 */
! function() {
  function attr(node, attr, default_value) {
    return Number(node.getAttribute(attr)) || default_value;
  }

  // get user config
  var scripts = document.getElementsByTagName(&apos;script&apos;),
    script = scripts[scripts.length - 1]; // &#x5F53;&#x524D;&#x52A0;&#x8F7D;&#x7684;script
  config = {
    z: attr(script, &quot;zIndex&quot;, -1), // z-index
    a: attr(script, &quot;alpha&quot;, 0.6), // alpha
    s: attr(script, &quot;size&quot;, 90), // size
  };

  var canvas = document.createElement(&apos;canvas&apos;),
    g2d = canvas.getContext(&apos;2d&apos;),
    pr = window.devicePixelRatio || 1,
    width = window.innerWidth,
    height = window.innerHeight,
    f = config.s,
    q, t,
    m = Math,
    r = 0,
    pi = m.PI*2,
    cos = m.cos,
    random = m.random;
  canvas.width = width * pr;
  canvas.height = height * pr;
  g2d.scale(pr, pr);
  g2d.globalAlpha = config.a;
  canvas.style.cssText = &apos;opacity: &apos; + config.a + &apos;;position:fixed;top:0;left:0;z-index: &apos; + config.z + &apos;;width:100%;height:100%;pointer-events:none;&apos;;
  // create canvas
  document.getElementsByTagName(&apos;body&apos;)[0].appendChild(canvas);

  function redraw() {
    g2d.clearRect(0, 0, width, height);
    q = [{x: 0, y: height * 0.7 + f}, {x: 0, y: height * 0.7 - f}];
    while(q[1].x &lt; width + f) draw(q[0], q[1]);
  }
  function draw(i, j) {
    g2d.beginPath();
    g2d.moveTo(i.x, i.y);
    g2d.lineTo(j.x, j.y);
    var k = j.x + (random()*2-0.25)*f, n = line(j.y);
    g2d.lineTo(k, n);
    g2d.closePath();
    r -= pi / -50;
    g2d.fillStyle = &apos;#&apos;+(cos(r)*127+128&lt;<16 2 | cos(r+pi 3)*127+128<<8 3*2)*127+128).tostring(16); g2d.fill(); q[0]="q[1];" q[1]="{x:" k, y: n}; } function line(p){ t="p" + (random() * - 1.1) f; return (t> height || t &lt; 0) ? line(p) : t;
  }

  document.onclick = redraw;
  document.ontouchstart = redraw;
  redraw();
}();
</16>