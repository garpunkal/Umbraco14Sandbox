import { UmbElementMixin as f } from "@umbraco-cms/backoffice/element-api";
import { LitElement as C, html as y, ifDefined as g, css as b, state as h, property as d, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UMB_NOTIFICATION_CONTEXT as T } from "@umbraco-cms/backoffice/notification";
import { UmbPropertyValueChangeEvent as M } from "@umbraco-cms/backoffice/property-editor";
import { UMB_MODAL_MANAGER_CONTEXT as O, UMB_CONFIRM_MODAL as A } from "@umbraco-cms/backoffice/modal";
var w = Object.defineProperty, P = Object.getOwnPropertyDescriptor, _ = (t) => {
  throw TypeError(t);
}, r = (t, e, s, o) => {
  for (var i = o > 1 ? void 0 : o ? P(e, s) : e, l = t.length - 1, m; l >= 0; l--)
    (m = t[l]) && (i = (o ? m(e, s, i) : m(i)) || i);
  return o && i && w(e, s, i), i;
}, I = (t, e, s) => e.has(t) || _("Cannot " + s), $ = (t, e, s) => e.has(t) ? _("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), u = (t, e, s) => (I(t, e, "access private method"), s), a, c, p, v, x;
let n = class extends f(C) {
  constructor() {
    super(), $(this, a), this._suggestions = [], this.value = "", this.consumeContext(O, (t) => {
      this._modalManagerContext = t;
    }), this.consumeContext(T, (t) => {
      this._notificationContext = t;
    });
  }
  set config(t) {
    var e;
    this._disabled = t.getValueByAlias("disabled"), this._placeholder = t.getValueByAlias("placeholder"), this._maxChars = t.getValueByAlias("maxChars"), this._suggestions = ((e = t.getValueByAlias("suggestions")) == null ? void 0 : e.split(`
`)) || [];
  }
  render() {
    return y`
         <uui-input
        id="suggestion-input"
        class="element"
        label="text input"
        placeholder=${g(this._placeholder)}
        maxlength=${g(this._maxChars)}
        .value=${this.value || ""}
        @input=${u(this, a, c)}
      >
      </uui-input>
      <div id="wrapper">
        <uui-button
          id="suggestion-button"
          class="element"
          look="primary"
          label="give me suggestions"
          ?disabled=${this._disabled}
          @click=${u(this, a, v)}
        >
          Give me suggestions!
        </uui-button>
        <uui-button
                id="suggestion-trimmer"
                class="element"
                look="outline"
                label="Trim text"
                @click=${u(this, a, x)}
                >
                Trim text
                </uui-button>
      </div>
        `;
  }
};
a = /* @__PURE__ */ new WeakSet();
c = function(t) {
  this.value = t.target.value, u(this, a, p).call(this);
};
p = function() {
  this.dispatchEvent(new M());
};
v = function() {
  const t = this._suggestions.length * Math.random() | 0;
  this.value = this._suggestions[t], u(this, a, p).call(this);
};
x = function() {
  var s, o;
  if (!this._maxChars) return;
  if (!this.value || this.value.length <= this._maxChars) {
    const i = {
      message: "Nothing to trim!"
    };
    (s = this._notificationContext) == null || s.peek("danger", { data: i });
    return;
  }
  const t = this.value.substring(0, this._maxChars), e = (o = this._modalManagerContext) == null ? void 0 : o.open(
    this,
    A,
    {
      data: {
        headline: "Trim text",
        content: `Do you want to trim the text to "${t}"?`,
        color: "danger",
        confirmLabel: "Trim"
      }
    }
  );
  e == null || e.onSubmit().then(() => {
    var l;
    this.value = t, u(this, a, p).call(this);
    const i = {
      headline: "Text trimmed",
      message: "You trimmed the text!"
    };
    (l = this._notificationContext) == null || l.peek("positive", { data: i });
  }, null);
};
n.styles = [
  b`
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
r([
  h()
], n.prototype, "_disabled", 2);
r([
  h()
], n.prototype, "_placeholder", 2);
r([
  h()
], n.prototype, "_maxChars", 2);
r([
  h()
], n.prototype, "_suggestions", 2);
r([
  d({ type: String })
], n.prototype, "value", 2);
r([
  d({ attribute: !1 })
], n.prototype, "config", 1);
n = r([
  E("punk-suggestions")
], n);
export {
  n as default
};
//# sourceMappingURL=suggestions.element-DL2AlJxx.js.map
