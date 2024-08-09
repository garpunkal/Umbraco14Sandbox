import { LitElement as d, html as m, css as _, property as f, state as y, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent as b } from "@umbraco-cms/backoffice/property-editor";
var w = Object.defineProperty, x = Object.getOwnPropertyDescriptor, h = (t) => {
  throw TypeError(t);
}, p = (t, e, s, r) => {
  for (var n = r > 1 ? void 0 : r ? x(e, s) : e, u = t.length - 1, l; u >= 0; u--)
    (l = t[u]) && (n = (r ? l(e, s, n) : l(n)) || n);
  return r && n && w(e, s, n), n;
}, P = (t, e, s) => e.has(t) || h("Cannot " + s), k = (t, e, s) => e.has(t) ? h("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), a = (t, e, s) => (P(t, e, "access private method"), s), i, v, g, c;
let o = class extends d {
  constructor() {
    super(...arguments), k(this, i), this.value = "", this._suggestions = [
      "You should take a break",
      "I suggest that you visit the Eiffel Tower",
      "How about starting a book club today or this week?",
      "Are you hungry?"
    ];
  }
  render() {
    return m`
         <uui-input
        id="suggestion-input"
        class="element"
        label="text input"
        .value=${this.value || ""}
        @input=${a(this, i, v)}
      >
      </uui-input>
          <div id="wrapper">
            <uui-button
              id="suggestion-button"
              class="element"
              look="primary"
              label="give me suggestions"
              @click=${a(this, i, c)}
            >
              Give me suggestions!
            </uui-button>
            <uui-button
              id="suggestion-trimmer"
              class="element"
              look="outline"
              label="Trim text"
            >
              Trim text
            </uui-button>
          </div>
        `;
  }
};
i = /* @__PURE__ */ new WeakSet();
v = function(t) {
  this.value = t.target.value, a(this, i, g).call(this);
};
g = function() {
  this.dispatchEvent(new b());
};
c = function() {
  const t = this._suggestions.length * Math.random() | 0;
  this.value = this._suggestions[t], a(this, i, g).call(this);
};
o.styles = [
  _`
          #wrapper {
            margin-top: 10px;
            display: flex;
            gap: 10px;
          }
          .element {
            width: 100%;
          }
        `
];
p([
  f({ type: String })
], o.prototype, "value", 2);
p([
  y()
], o.prototype, "_suggestions", 2);
o = p([
  E("punk-suggestions")
], o);
export {
  o as default
};
//# sourceMappingURL=suggestions.element-DzKXpY2R.js.map
