const loader = function(e) {
  "use strict";
  var t = /^(?:annotation-xml|color-profile|font-face(?:|-format|-name|-src|-uri)|missing-glyph)$/i,
    n = new Set;
  return e.default = function(e) {
    var r = e.container || document,
      o = function(r) {
        for (var o = 0, i = r.length; o < i; o++)
          for (var d = r[o].addedNodes, c = 0, s = d.length; c < s; c++) {
            var u = d[c],
              f = u.children,
              l = u.getAttribute,
              m = u.tagName;
            if (l) {
              var v = (l.call(u, "is") || m).toLowerCase();
              0 < v.indexOf("-") && !n.has(v) && !t.test(v) && (n.add(v), e.on(v)), a(f)
            }
          }
      },
      a = function(e) {
        o([{
          addedNodes: e
        }])
      };
    a(document == r ? r.documentElement.children : [r]);
    var i = new MutationObserver(o);
    return i.observe(r, {
      subtree: !0,
      childList: !0
    }), i
  }, e
}({}).default;

const localhost = window.location.host.indexOf('127') >= 0;

const remoteUrl = "https://cdn.jsdelivr.net/gh/artydev/webcomponents/";

const localUrl = "./src/components/";

const url = localhost ? localUrl : remoteUrl;

loader({
  // by default it's document
  container: document.body,
  // invoked per each new custom-element name found
  on(newTag) {
    var js = document.createElement('script');
    js.src = `${url}${newTag}.js`;
    document.head.appendChild(js);
  }
});