  function getStyle(obj, name) {
      if (obj.currentStyle) {
          return obj.currentStyle[name];
      } else {
          return getComputedStyle(obj, false)[name];
      }
  }

  function startMove(obj, attr, iTarget) {
      clearInterval(obj.timer);
      obj.timer = setInterval(function() {
          var currStyle = 0;
          if (attr == 'opacity') {
              currStyle = Math.round(parseFloat(getStyle(obj, attr)) * 100);
          } else {
              currStyle = parseInt(getStyle(obj, attr));
          }

          var speed = (iTarget - currStyle) / 6;
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

          if (currStyle == iTarget) {
              clearInterval(obj.timer);
          } else {
              if (attr == 'opacity') {
                  obj.style.filter = 'alpha(opacity:' + (currStyle + speed) + ')';
                  obj.style.opacity = (currStyle + speed) / 100;
              } else {
                  obj.style[attr] = currStyle + speed + 'px';
              }
          }
      }, 30)
  }
