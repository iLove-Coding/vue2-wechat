(function () {
    let ratio = 1 / window.devicePixelRatio;
    document.write('<meta name="viewport" content="width=device-width,initial-scale=' + ratio + ',minimum-scale=' + ratio + ',maximum-scale=' + ratio + ',user-scalable=no" />')
    let fz = document.documentElement.clientWidth / 18;
    document.getElementsByTagName('html')[0].style.fontSize = fz + 'px';
})();
