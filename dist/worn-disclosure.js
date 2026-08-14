//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/svelte/src/constants.js
var e = {}, t = Symbol("uninitialized"), n = "http://www.w3.org/1999/xhtml", r = Array.isArray, i = Array.prototype.indexOf, a = Array.prototype.includes, o = Array.from, s = Object.keys, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, u = Object.getOwnPropertyDescriptors, d = Object.prototype, f = Array.prototype, p = Object.getPrototypeOf, m = Object.isExtensible;
function h(e) {
	return typeof e == "function";
}
var g = () => {};
function _(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function v() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var y = 1024, b = 2048, ee = 4096, te = 8192, ne = 16384, re = 32768, ie = 1 << 25, ae = 65536, oe = 1 << 19, se = 1 << 20, ce = 65536, le = 1 << 21, ue = 1 << 22, de = 1 << 23, fe = Symbol("$state"), pe = Symbol("legacy props"), me = Symbol(""), he = Symbol("attributes"), ge = Symbol("class"), _e = Symbol("style"), ve = Symbol("text"), ye = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), be = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function xe() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function Se() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ce() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function we(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Te() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ee() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function De() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Oe() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function ke() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Ae(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function je() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var x = !1;
function Me(e) {
	x = e;
}
var S;
function C(t) {
	if (t === null) throw Ae(), e;
	return S = t;
}
function Ne() {
	return C(/* @__PURE__ */ I(S));
}
function w(t) {
	if (x) {
		if (/* @__PURE__ */ I(S) !== null) throw Ae(), e;
		S = t;
	}
}
function Pe(e = 1) {
	if (x) {
		for (var t = e, n = S; t--;) n = /* @__PURE__ */ I(n);
		S = n;
	}
}
function Fe(e = !0) {
	for (var t = 0, n = S;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ I(n);
		e && n.remove(), n = i;
	}
}
function Ie(t) {
	if (!t || t.nodeType !== 8) throw Ae(), e;
	return t.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Le(e) {
	return e === this.v;
}
function Re(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function ze(e) {
	return !Re(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var T = null;
function Be(e) {
	T = e;
}
function Ve(e, t = !1, n) {
	T = {
		p: T,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: G,
		l: null
	};
}
function He(e) {
	var t = T, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) an(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, T = t.p, e ?? {};
}
function Ue() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var We = [];
function Ge() {
	var e = We;
	We = [], _(e);
}
function E(e) {
	if (We.length === 0 && !St) {
		var t = We;
		queueMicrotask(() => {
			t === We && Ge();
		});
	}
	We.push(e);
}
function Ke() {
	for (; We.length > 0;) Ge();
}
function qe(e) {
	var t = G;
	if (t === null) return H.f |= de, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	D(e, t);
}
function D(e, t) {
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var Je = ~(b | ee | y);
function O(e, t) {
	e.f = e.f & Je | t;
}
function Ye(e) {
	e.f & 512 || e.deps === null ? O(e, y) : O(e, ee);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Xe(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= ce, Xe(t.deps));
}
function Ze(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Xe(e.deps), O(e, y);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var Qe = !1;
function $e(e) {
	var t = Qe;
	try {
		return Qe = !1, [e(), Qe];
	} finally {
		Qe = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function et(e) {
	var t = H, n = G;
	W(null), K(null);
	try {
		return e();
	} finally {
		W(t), K(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function tt(e) {
	let t = 0, n = It(0), r;
	return () => {
		nn() && (Z(n), un(() => (t === 0 && (r = Vn(() => e(() => Bt(n)))), t += 1, () => {
			E(() => {
				--t, t === 0 && (r?.(), r = void 0, Bt(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var nt = ae | oe;
function rt(e, t, n, r) {
	new it(e, t, n, r);
}
var it = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = x ? S : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = tt(() => (this.#m = It(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = G;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = G.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = fn(() => {
			if (x) {
				let e = this.#t;
				Ne();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, nt), x && (this.#e = S);
	}
	#g() {
		try {
			this.#a = z(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		E(r), t && (this.#s = z(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				je();
				return;
			}
			t = !0, n && Oe(), this.#s !== null && vn(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			});
		};
		return {
			reset: r,
			invoke_onerror: () => {
				try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					D(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = z(() => e(this.#e)), E(() => {
			var e = this.#c = document.createDocumentFragment(), t = Jt();
			e.append(t), this.#a = this.#S(() => z(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, vn(this.#o, () => {
				this.#o = null;
			}), this.#x(k));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = z(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				Sn(this.#a, e);
				let t = this.#n.pending;
				this.#o = z(() => t(this.#e));
			} else this.#x(k);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		Ze(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = G, n = H, r = T;
		K(this.#i), W(this.#i), Be(this.#i.ctx);
		try {
			return Ot.ensure(), e();
		} catch (e) {
			return qe(e), null;
		} finally {
			K(t), W(n), Be(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && vn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, E(() => {
			this.#d = !1, this.#m && Rt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), Z(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		k?.is_fork ? (this.#a && k.skip_effect(this.#a), this.#o && k.skip_effect(this.#o), this.#s && k.skip_effect(this.#s), k.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (B(this.#a), null), this.#o &&= (B(this.#o), null), this.#s &&= (B(this.#s), null), x && (C(this.#t), Pe(), C(Fe()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return z(() => {
						var r = G;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return D(e, this.#i.parent), null;
				}
			}));
		};
		E(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				D(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => D(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function at(e, t, n, r) {
	let i = Ue() ? lt : pt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = G, c = ot(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				D(e, s);
			}
			st();
		}
	}
	var d = ct();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ dt(e))).then(u).catch((e) => D(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), st();
	}) : f();
}
function ot() {
	var e = G, t = H, n = T, r = k;
	return function(i = !0) {
		K(e), W(t), Be(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function st(e = !0) {
	K(null), W(null), Be(null), e && k?.deactivate();
}
function ct() {
	var e = G, t = e.b, n = k, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function lt(e) {
	var n = 2 | b;
	return G !== null && (G.f |= oe), {
		ctx: T,
		deps: null,
		effects: null,
		equals: Le,
		f: n,
		fn: e,
		reactions: null,
		rv: 0,
		v: t,
		wv: 0,
		parent: G,
		ac: null
	};
}
var ut = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function dt(e, n, r) {
	let i = G;
	i === null && xe();
	var a = void 0, o = It(t), s = !H, c = /* @__PURE__ */ new Set();
	return ln(() => {
		var t = G, n = v();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== ye && n.reject(e);
			}).finally(st);
		} catch (e) {
			n.reject(e), st();
		}
		var r = k;
		if (s) {
			if (t.f & 32768) var l = ct();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(ut);
			else for (let e of c.values()) e.reject(ut);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== ut && (r.activate(), t ? (o.f |= de, Rt(o, t)) : (o.f & 8388608 && (o.f ^= de), Rt(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), rn(() => {
		for (let e of c) e.reject(ut);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === a ? e(o) : t(a);
			}
			n.then(r, r);
		}
		t(a);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function ft(e) {
	let t = /* @__PURE__ */ lt(e);
	return En(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function pt(e) {
	let t = /* @__PURE__ */ lt(e);
	return t.equals = ze, t;
}
function mt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) B(t[n]);
	}
}
function ht(e) {
	var n, r = G, i = e.parent;
	if (!V && i !== null && e.v !== t && i.f & 24576) return ke(), e.v;
	K(i);
	try {
		e.f &= ~ce, mt(e), n = Fn(e);
	} finally {
		K(r);
	}
	return n;
}
function gt(e) {
	var t = ht(e);
	if (!e.equals(t) && (e.wv = Mn(), (!k?.is_fork || e.deps === null) && (k === null ? e.v = t : (k.capture(e, t, !0), bt?.capture(e, t, !0)), e.deps === null))) {
		O(e, y);
		return;
	}
	V || (A === null ? Ye(e) : (nn() || k?.is_fork) && A.set(e, t));
}
function _t(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && et(() => {
		t.ac.abort(ye), t.ac = null;
	}), t.fn !== null && (t.teardown = g), Ln(t, 0), mn(t));
}
function vt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Rn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var yt = null, k = null, bt = null, A = null, xt = null, St = !1, Ct = !1, wt = null, Tt = null, Et = 0, Dt = 1, Ot = class e {
	id = Dt++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = 0;
	#o = /* @__PURE__ */ new Map();
	#s = null;
	#c = [];
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#m = !1;
	constructor() {
		yt === null ? yt = this : (yt.#n = this, this.#t = yt), yt = this;
	}
	#h() {
		if (this.is_fork) return !0;
		for (let n of this.#o.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#f.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#f.has(e) || this.#f.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#f.get(e);
		if (n) {
			this.#f.delete(e);
			for (var r of n.d) O(r, b), t(r);
			for (r of n.m) O(r, ee), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, Et++ > 1e3 && (this.#x(), kt());
		for (let e of this.#u) this.#d.delete(e), O(e, b), this.schedule(e);
		for (let e of this.#d) O(e, ee), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = wt = [], r = [], i = Tt = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw Nt(e), this.#h() || this.discard(), t;
		}
		if (k = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (wt = null, Tt = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Mt(e, t);
			i.length > 0 && k.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), bt = this, At(r), At(n), bt = null, this.#s?.resolve();
		var s = k;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) {
			if (s !== null) {
				let e = s;
				e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
			} else s = this;
		}
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= y;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= y : i & 4 ? t.push(r) : Nn(r) && (i & 16 && this.#d.add(r), Rn(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#v() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), O(i, b), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), k = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) Ze(e[t], this.#u, this.#d);
	}
	capture(e, n, r = !1) {
		e.v !== t && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [n, r]), A?.set(e, n)), this.is_fork || (e.v = n);
	}
	activate() {
		k = this;
	}
	deactivate() {
		k = null, A = null;
	}
	flush() {
		try {
			Ct = !0, k = this, this.#g();
		} finally {
			Et = 0, xt = null, wt = null, Tt = null, Ct = !1, k = null, A = null, N.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(ut);
		this.#x(), this.#s?.resolve();
	}
	register_created_effect(e) {
		this.#l.push(e);
	}
	increment(e, t) {
		if (this.#a += 1, e) {
			let e = this.#o.get(t) ?? 0;
			this.#o.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#a, e) {
			let e = this.#o.get(t) ?? 0;
			e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
		}
		this.#m || (this.#m = !0, E(() => {
			this.#m = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	settled() {
		return (this.#s ??= v()).promise;
	}
	static ensure() {
		if (k === null) {
			let t = k = new e();
			!Ct && !St && E(() => {
				t.#e || t.flush();
			});
		}
		return k;
	}
	apply() {
		A = null;
	}
	schedule(e) {
		if (xt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (wt !== null && t === G && (H === null || !(H.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= y;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? yt = e : t.#t = e, this.linked = !1;
		}
	}
};
function j(e) {
	var t = St;
	St = !0;
	try {
		var n;
		for (e && (k !== null && !k.is_fork && k.flush(), n = e());;) {
			if (Ke(), k === null) return n;
			k.flush();
		}
	} finally {
		St = t;
	}
}
function kt() {
	try {
		Se();
	} catch (e) {
		D(e, xt);
	}
}
var M = null;
function At(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Nn(r) && (M = /* @__PURE__ */ new Set(), Rn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && _n(r), M?.size > 0)) {
				N.clear();
				for (let e of M) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) M.has(n) && (M.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Rn(n);
					}
				}
				M.clear();
			}
		}
		M = null;
	}
}
function jt(e) {
	k.schedule(e);
}
function Mt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), O(e, y);
		for (var n = e.first; n !== null;) Mt(n, t), n = n.next;
	}
}
function Nt(e) {
	O(e, y);
	for (var t = e.first; t !== null;) Nt(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Pt = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Map(), Ft = !1;
function It(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Le,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function P(e, t) {
	let n = It(e, t);
	return En(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function Lt(e, t = !1, n = !0) {
	let r = It(e);
	return t || (r.equals = ze), r;
}
function F(e, t, n = !1) {
	return H !== null && (!U || H.f & 131072) && Ue() && H.f & 4325394 && (q === null || !q.has(e)) && De(), Rt(e, n ? Ht(t) : t, Tt);
}
function Rt(e, t, n = null) {
	if (!e.equals(t)) {
		N.set(e, V ? t : e.v);
		var r = Ot.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && ht(t), A === null && Ye(t);
		}
		e.wv = Mn(), Vt(e, b, n), Ue() && G !== null && G.f & 1024 && !(G.f & 96) && (X === null ? Dn([e]) : X.push(e)), !r.is_fork && Pt.size > 0 && !Ft && zt();
	}
	return t;
}
function zt() {
	Ft = !1;
	for (let e of Pt) {
		e.f & 1024 && O(e, ee);
		let t;
		try {
			t = Nn(e);
		} catch {
			t = !0;
		}
		t && Rn(e);
	}
	Pt.clear();
}
function Bt(e) {
	F(e, e.v + 1);
}
function Vt(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Ue(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === G)) {
			var l = (c & b) === 0;
			if (l && O(s, t), c & 131072) Pt.add(s);
			else if (c & 2) {
				var u = s;
				A?.delete(u), c & 65536 || (c & 512 && (G === null || !(G.f & 2097152)) && (s.f |= ce), Vt(u, ee, n));
			} else if (l) {
				var d = s;
				c & 16 && M !== null && M.add(d), n === null ? jt(d) : n.push(d);
			}
		}
	}
}
function Ht(e) {
	if (typeof e != "object" || !e || fe in e) return e;
	let n = p(e);
	if (n !== d && n !== f) return e;
	var i = /* @__PURE__ */ new Map(), a = r(e), o = /* @__PURE__ */ P(0), s = null, c = An, u = (e) => {
		if (An === c) return e();
		var t = H, n = An;
		W(null), jn(c);
		var r = e();
		return W(t), jn(n), r;
	};
	return a && i.set("length", /* @__PURE__ */ P(e.length, s)), new Proxy(e, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && Te();
			var r = i.get(t);
			return r === void 0 ? u(() => {
				var e = /* @__PURE__ */ P(n.value, s);
				return i.set(t, e), e;
			}) : F(r, n.value, !0), !0;
		},
		deleteProperty(e, n) {
			var r = i.get(n);
			if (r === void 0) {
				if (n in e) {
					let e = u(() => /* @__PURE__ */ P(t, s));
					i.set(n, e), Bt(o);
				}
			} else F(r, t), Bt(o);
			return !0;
		},
		get(n, r, a) {
			if (r === fe) return e;
			var o = i.get(r), c = r in n;
			if (o === void 0 && (!c || l(n, r)?.writable) && (o = u(() => /* @__PURE__ */ P(Ht(c ? n[r] : t), s)), i.set(r, o)), o !== void 0) {
				var d = Z(o);
				return d === t ? void 0 : d;
			}
			return Reflect.get(n, r, a);
		},
		getOwnPropertyDescriptor(e, n) {
			var r = Reflect.getOwnPropertyDescriptor(e, n);
			if (r && "value" in r) {
				var a = i.get(n);
				a && (r.value = Z(a));
			} else if (r === void 0) {
				var o = i.get(n), s = o?.v;
				if (o !== void 0 && s !== t) return {
					enumerable: !0,
					configurable: !0,
					value: s,
					writable: !0
				};
			}
			return r;
		},
		has(e, n) {
			if (n === fe) return !0;
			var r = i.get(n), a = r !== void 0 && r.v !== t || Reflect.has(e, n);
			return (r !== void 0 || G !== null && (!a || l(e, n)?.writable)) && (r === void 0 && (r = u(() => /* @__PURE__ */ P(a ? Ht(e[n]) : t, s)), i.set(n, r)), Z(r) === t) ? !1 : a;
		},
		set(e, n, r, c) {
			var d = i.get(n), f = n in e;
			if (a && n === "length") for (var p = r; p < d.v; p += 1) {
				var m = i.get(p + "");
				m === void 0 ? p in e && (m = u(() => /* @__PURE__ */ P(t, s)), i.set(p + "", m)) : F(m, t);
			}
			if (d === void 0) (!f || l(e, n)?.writable) && (d = u(() => /* @__PURE__ */ P(void 0, s)), F(d, Ht(r)), i.set(n, d));
			else {
				f = d.v !== t;
				var h = u(() => Ht(r));
				F(d, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, n);
			if (g?.set && g.set.call(c, r), !f) {
				if (a && typeof n == "string") {
					var _ = i.get("length"), v = Number(n);
					Number.isInteger(v) && v >= _.v && F(_, v + 1);
				}
				Bt(o);
			}
			return !0;
		},
		ownKeys(e) {
			Z(o);
			var n = Reflect.ownKeys(e).filter((e) => {
				var n = i.get(e);
				return n === void 0 || n.v !== t;
			});
			for (var [r, a] of i) a.v !== t && !(r in e) && n.push(r);
			return n;
		},
		setPrototypeOf() {
			Ee();
		}
	});
}
var Ut, Wt, Gt, Kt;
function qt() {
	if (Ut === void 0) {
		Ut = window, Wt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Gt = l(t, "firstChild").get, Kt = l(t, "nextSibling").get, m(e) && (e[ge] = void 0, e[he] = null, e[_e] = void 0, e.__e = void 0), m(n) && (n[ve] = void 0);
	}
}
function Jt(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Yt(e) {
	return Gt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function I(e) {
	return Kt.call(e);
}
function L(e, t) {
	if (!x) return /* @__PURE__ */ Yt(e);
	var n = /* @__PURE__ */ Yt(S);
	if (n === null) n = S.appendChild(Jt());
	else if (t && n.nodeType !== 3) {
		var r = Jt();
		return n?.before(r), C(r), r;
	}
	return t && en(n), C(n), n;
}
function Xt(e, t = 1, n = !1) {
	let r = x ? S : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ I(r);
	if (!x) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Jt();
			return r === null ? i?.after(a) : r.before(a), C(a), a;
		}
		en(r);
	}
	return C(r), r;
}
function Zt(e) {
	e.textContent = "";
}
function Qt() {
	return !1;
}
function $t(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function en(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function tn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function R(e, t) {
	var n = G;
	n !== null && n.f & 8192 && (e |= te);
	var r = {
		ctx: T,
		deps: null,
		nodes: null,
		f: e | b | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	k?.register_created_effect(r);
	var i = r;
	if (e & 4) wt === null ? Ot.ensure().schedule(r) : wt.push(r);
	else if (t !== null) {
		try {
			Rn(r);
		} catch (e) {
			throw B(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ae));
	}
	if (i !== null && (i.parent = n, n !== null && tn(i, n), H !== null && H.f & 2 && !(e & 64))) {
		var a = H;
		(a.effects ??= []).push(i);
	}
	return r;
}
function nn() {
	return H !== null && !U;
}
function rn(e) {
	let t = R(8, null);
	return O(t, y), t.teardown = e, t;
}
function an(e) {
	return R(4 | se, e);
}
function on(e) {
	Ot.ensure();
	let t = R(64 | oe, e);
	return () => {
		B(t);
	};
}
function sn(e) {
	Ot.ensure();
	let t = R(64 | oe, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? vn(t, () => {
			B(t), n(void 0);
		}) : (B(t), n(void 0));
	});
}
function cn(e) {
	return R(4, e);
}
function ln(e) {
	return R(ue | oe, e);
}
function un(e, t = 0) {
	return R(8 | t, e);
}
function dn(e, t = [], n = [], r = []) {
	at(r, t, n, (t) => {
		R(8, () => {
			e(...t.map(Z));
		});
	});
}
function fn(e, t = 0) {
	return R(16 | t, e);
}
function z(e) {
	return R(32 | oe, e);
}
function pn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = V, n = H;
		Tn(!0), W(null);
		try {
			t.call(null);
		} finally {
			Tn(e), W(n);
		}
	}
}
function mn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && et(() => {
			e.abort(ye);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : B(n, t), n = r;
	}
}
function hn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || B(t), t = n;
	}
}
function B(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (gn(e.nodes.start, e.nodes.end), n = !0), e.f |= ie, mn(e, t && !n), Ln(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	pn(e), e.f ^= ie, e.f |= ne;
	var i = e.parent;
	i !== null && i.first !== null && _n(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function gn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ I(e);
		e.remove(), e = n;
	}
}
function _n(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function vn(e, t, n = !0) {
	var r = [];
	yn(e, r, !0);
	var i = () => {
		n && B(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function yn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= te;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				yn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function bn(e) {
	xn(e, !0);
}
function xn(e, t) {
	if (e.f & 8192) {
		e.f ^= te, e.f & 1024 || (O(e, b), Ot.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			xn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function Sn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ I(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Cn = null, wn = !1, V = !1;
function Tn(e) {
	V = e;
}
var H = null, U = !1;
function W(e) {
	H = e;
}
var G = null;
function K(e) {
	G = e;
}
var q = null;
function En(e) {
	H !== null && (q ??= /* @__PURE__ */ new Set()).add(e);
}
var J = null, Y = 0, X = null;
function Dn(e) {
	X = e;
}
var On = 1, kn = 0, An = kn;
function jn(e) {
	An = e;
}
function Mn() {
	return ++On;
}
function Nn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~ce), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Nn(a) && gt(a), a.wv > e.wv) return !0;
		}
		t & 512 && A === null && O(e, y);
	}
	return !1;
}
function Pn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(q !== null && q.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Pn(a, t, !1) : t === a && (n ? O(a, b) : a.f & 1024 && O(a, ee), jt(a));
	}
}
function Fn(e) {
	var t = J, n = Y, r = X, i = H, a = q, o = T, s = U, c = An, l = e.f;
	J = null, Y = 0, X = null, H = l & 96 ? null : e, q = null, Be(e.ctx), U = !1, An = ++kn, e.ac !== null && (et(() => {
		e.ac.abort(ye);
	}), e.ac = null);
	try {
		e.f |= le;
		var u = e.fn, d = u();
		e.f |= re;
		var f = e.deps, p = k?.is_fork;
		if (J !== null) {
			var m;
			if (p || Ln(e, Y), f !== null && Y > 0) for (f.length = Y + J.length, m = 0; m < J.length; m++) f[Y + m] = J[m];
			else e.deps = f = J;
			if (nn() && e.f & 512) for (m = Y; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Y < f.length && (Ln(e, Y), f.length = Y);
		if (Ue() && X !== null && !U && f !== null && !(e.f & 6146)) for (m = 0; m < X.length; m++) Pn(X[m], e);
		if (i !== null && i !== e) {
			if (kn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = kn;
			if (t !== null) for (let e of t) e.rv = kn;
			X !== null && (r === null ? r = X : r.push(...X));
		}
		return e.f & 8388608 && (e.f ^= de), d;
	} catch (e) {
		return qe(e);
	} finally {
		e.f ^= le, J = t, Y = n, X = r, H = i, q = a, Be(o), U = s, An = c;
	}
}
function In(e, n) {
	let r = n.reactions;
	if (r !== null) {
		var o = i.call(r, e);
		if (o !== -1) {
			var s = r.length - 1;
			s === 0 ? r = n.reactions = null : (r[o] = r[s], r.pop());
		}
	}
	if (r === null && n.f & 2 && (J === null || !a.call(J, n))) {
		var c = n;
		c.f & 512 && (c.f ^= 512, c.f &= ~ce), c.v !== t && Ye(c), c.ac !== null && et(() => {
			c.ac.abort(ye), c.ac = null, O(c, b);
		}), _t(c), Ln(c, 0);
	}
}
function Ln(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) In(e, n[r]);
}
function Rn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		O(e, y);
		var n = G, r = wn;
		G = e, wn = !(t & 96);
		try {
			t & 16777232 ? hn(e) : mn(e), pn(e);
			var i = Fn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = On;
		} finally {
			wn = r, G = n;
		}
	}
}
function Z(e) {
	var t = !!(e.f & 2);
	if (Cn?.add(e), H !== null && !U && !(G !== null && G.f & 16384) && (q === null || !q.has(e))) {
		var n = H.deps;
		if (H.f & 2097152) e.rv < kn && (e.rv = kn, J === null && n !== null && n[Y] === e ? Y++ : J === null ? J = [e] : J.push(e));
		else {
			H.deps ??= [], a.call(H.deps, e) || H.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [H] : a.call(r, H) || r.push(H);
		}
	}
	if (V && N.has(e)) return N.get(e);
	if (t) {
		var i = e;
		if (V) {
			var o = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Bn(i)) && (o = ht(i)), N.set(i, o), o;
		}
		var s = !(i.f & 512) && !U && H !== null && (wn || !!(H.f & 512)), c = (i.f & re) === 0;
		Nn(i) && (s && (i.f |= 512), gt(i)), s && !c && (vt(i), zn(i));
	}
	if (A?.has(e)) return A.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function zn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (vt(t), zn(t));
}
function Bn(e) {
	if (e.v === t) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (N.has(t) || t.f & 2 && Bn(t)) return !0;
	return !1;
}
function Vn(e) {
	var t = U;
	try {
		return U = !0, e();
	} finally {
		U = t;
	}
}
function Hn(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (fe in e) Un(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && fe in n && Un(n);
		}
	}
}
function Un(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Un(e[n], t);
		} catch {}
		let n = p(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = u(n);
			for (let n in t) {
				let r = t[n].get;
				if (r) try {
					r.call(e);
				} catch {}
			}
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Wn = Symbol("events"), Gn = /* @__PURE__ */ new Set(), Kn = /* @__PURE__ */ new Set();
function qn(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || $n.call(t, e), !e.cancelBubble) return et(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? E(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function Jn(e, t, n, r = {}) {
	var i = qn(t, e, n, r);
	return () => {
		e.removeEventListener(t, i, r);
	};
}
function Yn(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = qn(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && rn(() => {
		t.removeEventListener(e, o, a);
	});
}
function Xn(e, t, n) {
	(t[Wn] ??= {})[e] = n;
}
function Zn(e) {
	for (var t = 0; t < e.length; t++) Gn.add(e[t]);
	for (var n of Kn) n(e);
}
var Qn = null;
function $n(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	Qn = e;
	var o = 0, s = Qn === e && e[Wn];
	if (s) {
		var l = i.indexOf(s);
		if (l !== -1 && (t === document || t === window)) {
			e[Wn] = t;
			return;
		}
		var u = i.indexOf(t);
		if (u === -1) return;
		l <= u && (o = l);
	}
	if (a = i[o] || e.target, a !== t) {
		c(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var d = H, f = G;
		W(null), K(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[Wn]?.[r];
					h != null && (!a.disabled || e.target === a) && h.call(a, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				o++, a = o < i.length ? i[o] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[Wn] = t, delete e.currentTarget, W(d), K(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var er = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function tr(e) {
	return er?.createHTML(e) ?? e;
}
function nr(e) {
	var t = $t("template");
	return t.innerHTML = tr(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function rr(e, t) {
	var n = G;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function ir(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (x) return rr(S, null), S;
		i === void 0 && (i = nr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Yt(i)));
		var t = r || Wt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Yt(t), s = t.lastChild;
			rr(o, s);
		} else rr(t, t);
		return t;
	};
}
function ar(e, t) {
	if (x) {
		var n = G;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = S), Ne();
		return;
	}
	e !== null && e.before(t);
}
function or() {
	if (x && S && S.nodeType === 8 && S.textContent?.startsWith("$")) {
		let e = S.textContent.substring(1);
		return Ne(), e;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var sr = ["touchstart", "touchmove"];
function cr(e) {
	return sr.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/render.js
var lr = !0;
function ur(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[ve] ??= e.nodeValue) && (e[ve] = n, e.nodeValue = `${n}`);
}
function dr(e, t) {
	return mr(e, t);
}
function fr(t, n) {
	qt(), n.intro = n.intro ?? !1;
	let r = n.target, i = x, a = S;
	try {
		for (var o = /* @__PURE__ */ Yt(r); o && (o.nodeType !== 8 || o.data !== "[");) o = /* @__PURE__ */ I(o);
		if (!o) throw e;
		Me(!0), C(o);
		let i = mr(t, {
			...n,
			anchor: o
		});
		return Me(!1), i;
	} catch (i) {
		if (i instanceof Error && i.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw i;
		return i !== e && console.warn("Failed to hydrate: ", i), n.recover === !1 && Ce(), qt(), Zt(r), Me(!1), dr(t, n);
	} finally {
		Me(i), C(a);
	}
}
var pr = /* @__PURE__ */ new Map();
function mr(t, { target: n, anchor: r, props: i = {}, events: a, context: s, intro: c = !0, transformError: l }) {
	qt();
	var u = void 0, d = sn(() => {
		var d = r ?? n.appendChild(Jt());
		rt(d, { pending: () => {} }, (n) => {
			Ve({});
			var r = T;
			if (s && (r.c = s), a && (i.$$events = a), x && rr(n, null), lr = c, u = t(n, i) || {}, lr = !0, x && (G.nodes.end = S, S === null || S.nodeType !== 8 || S.data !== "]")) throw Ae(), e;
			He();
		}, l);
		var f = /* @__PURE__ */ new Set(), p = (e) => {
			for (var t = 0; t < e.length; t++) {
				var r = e[t];
				if (!f.has(r)) {
					f.add(r);
					var i = cr(r);
					for (let e of [n, document]) {
						var a = pr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), pr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, $n, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return p(o(Gn)), Kn.add(p), () => {
			for (var e of f) for (let r of [n, document]) {
				var t = pr.get(r), i = t.get(e);
				--i == 0 ? (r.removeEventListener(e, $n), t.delete(e), t.size === 0 && pr.delete(r)) : t.set(e, i);
			}
			Kn.delete(p), d !== r && d.parentNode?.removeChild(d);
		};
	});
	return hr.set(u, d), u;
}
var hr = /* @__PURE__ */ new WeakMap();
function gr(e, t) {
	let n = hr.get(e);
	return n ? (hr.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var _r = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) bn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (bn(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (B(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						Sn(r, t), t.append(Jt()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else B(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), vn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (B(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = k, r = Qt();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = Jt();
				i.append(a), this.#n.set(e, {
					effect: z(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, z(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else x && (this.anchor = S), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function vr(e, t, ...n) {
	var r = new _r(e);
	fn(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, ae);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function yr(e, t, n = !1) {
	var r;
	x && (r = S, Ne());
	var i = new _r(e), a = n ? ae : 0;
	function o(e, t) {
		if (x) {
			var n = Ie(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Fe();
				C(a), i.anchor = a, Me(!1), i.ensure(e, t), Me(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	fn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/timing.js
var br = () => performance.now(), Q = {
	tick: (e) => requestAnimationFrame(e),
	now: () => br(),
	tasks: /* @__PURE__ */ new Set()
};
//#endregion
//#region node_modules/svelte/src/internal/client/loop.js
function xr() {
	let e = Q.now();
	Q.tasks.forEach((t) => {
		t.c(e) || (Q.tasks.delete(t), t.f());
	}), Q.tasks.size !== 0 && Q.tick(xr);
}
function Sr(e) {
	let t;
	return Q.tasks.size === 0 && Q.tick(xr), {
		promise: new Promise((n) => {
			Q.tasks.add(t = {
				c: e,
				f: n
			});
		}),
		abort() {
			Q.tasks.delete(t);
		}
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/transitions.js
function Cr(e, t) {
	et(() => {
		e.dispatchEvent(new CustomEvent(t));
	});
}
function wr(e) {
	if (e === "float") return "cssFloat";
	if (e === "offset") return "cssOffset";
	if (e.startsWith("--")) return e;
	let t = e.split("-");
	return t.length === 1 ? t[0] : t[0] + t.slice(1).map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
function Tr(e) {
	let t = {}, n = e.split(";");
	for (let e of n) {
		let [n, r] = e.split(":");
		if (!n || r === void 0) break;
		let i = wr(n.trim());
		t[i] = r.trim();
	}
	return t;
}
var Er = (e) => e;
function Dr(e, t, n, r) {
	var i = !!(e & 1), a = !!(e & 2), o = i && a, s = !!(e & 4), c = o ? "both" : i ? "in" : "out", l, u = t.inert, d = t.style.overflow, f, p;
	function m() {
		return et(() => l ??= n()(t, r?.() ?? {}, { direction: c }));
	}
	var h = {
		is_global: s,
		in() {
			if (t.inert = u, !i) {
				p?.abort(), p?.reset?.();
				return;
			}
			a || f?.abort(), f = Or(t, m(), p, 1, () => {
				Cr(t, "introstart");
			}, () => {
				Cr(t, "introend"), f?.abort(), f = l = void 0, t.style.overflow = d;
			});
		},
		out(e) {
			if (!a) {
				e?.(), l = void 0;
				return;
			}
			t.inert = !0, p = Or(t, m(), f, 0, () => {
				Cr(t, "outrostart");
			}, () => {
				Cr(t, "outroend"), e?.();
			});
		},
		stop: () => {
			f?.abort(), p?.abort();
		}
	}, g = G;
	if ((g.nodes.t ??= []).push(h), i && lr) {
		var _ = s;
		if (!_) {
			for (var v = g.parent; v && v.f & 65536;) for (; (v = v.parent) && !(v.f & 16););
			_ = !v || !!(v.f & 32768);
		}
		_ && cn(() => {
			Vn(() => h.in());
		});
	}
}
function Or(e, t, n, r, i, a) {
	var o = r === 1;
	if (h(t)) {
		var s, c = !1;
		return E(() => {
			c || (s = Or(e, t({ direction: o ? "in" : "out" }), n, r, i, a));
		}), {
			abort: () => {
				c = !0, s?.abort();
			},
			deactivate: () => s.deactivate(),
			reset: () => s.reset(),
			t: () => s.t()
		};
	}
	if (n?.deactivate(), !t?.duration && !t?.delay) return i(), a(), {
		abort: g,
		deactivate: g,
		reset: g,
		t: () => r
	};
	let { delay: l = 0, css: u, tick: d, easing: f = Er } = t;
	var p = [];
	if (o && n === void 0 && (d && d(0, 1), u)) {
		var m = Tr(u(0, 1));
		p.push(m, m);
	}
	var _ = () => 1 - r, v = e.animate(p, {
		duration: l,
		fill: "forwards"
	});
	return v.onfinish = () => {
		v.cancel(), i();
		var o = n?.t() ?? 1 - r;
		n?.abort();
		var s = r - o, c = t.duration * Math.abs(s), l = [];
		if (c > 0) {
			var p = !1;
			if (u) for (var m = Math.ceil(c / (1e3 / 60)), h = 0; h <= m; h += 1) {
				var g = o + s * f(h / m), y = Tr(u(g, 1 - g));
				l.push(y), p ||= y.overflow === "hidden";
			}
			p && (e.style.overflow = "hidden"), _ = () => {
				var e = v.currentTime;
				return o + s * f(e / c);
			}, d && Sr(() => {
				if (v.playState !== "running") return !1;
				var e = _();
				return d(e, 1 - e), !0;
			});
		}
		v = e.animate(l, {
			duration: c,
			fill: "forwards"
		}), v.onfinish = () => {
			_ = () => r, d?.(r, 1 - r), a();
		};
	}, {
		abort: () => {
			v && (v.cancel(), v.effect = null, v.onfinish = g);
		},
		deactivate: () => {
			a = g;
		},
		reset: () => {
			r === 0 && d?.(1, 0);
		},
		t: () => _()
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function kr(e, t) {
	cn(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = $t("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/actions.js
function Ar(e, t, n) {
	cn(() => {
		var r = Vn(() => t(e, n?.()) || {});
		if (n && r?.update) {
			var i = !1, a = {};
			un(() => {
				var e = n();
				Hn(e), i && Re(a, e) && (a = e, r.update(e));
			}), i = !0;
		}
		if (r?.destroy) return () => r.destroy();
	});
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var jr = [..." 	\n\r\f\xA0\v﻿"];
function Mr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || jr.includes(r[o - 1])) && (s === r.length || jr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Nr(e, t, n, r, i, a) {
	var o = e[ge];
	if (x || o !== n || o === void 0) {
		var s = Mr(n, r, a);
		(!x || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[ge] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var Pr = Symbol("is custom element"), Fr = Symbol("is html"), Ir = be ? "link" : "LINK";
function Lr(e, t, n, r) {
	var i = Rr(e);
	x && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Ir) || i[t] !== (i[t] = n) && (t === "loading" && (e[me] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Br(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Rr(e) {
	return e[he] ??= {
		[Pr]: e.nodeName.includes("-"),
		[Fr]: e.namespaceURI === n
	};
}
var zr = /* @__PURE__ */ new Map();
function Br(e) {
	var t = e.getAttribute("is") || e.nodeName, n = zr.get(t);
	if (n) return n;
	zr.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = u(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = p(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/universal.js
function Vr(e, t, n, r, i) {
	var a = () => {
		r(n[e]);
	};
	n.addEventListener(t, a), i ? un(() => {
		n[e] = i();
	}) : a(), (n === document.body || n === window || n === document) && rn(() => {
		n.removeEventListener(t, a);
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function $(e, t, n, r) {
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, c = !0, u = void 0, d = () => o && i ? (u ??= /* @__PURE__ */ lt(r), Z(u)) : (c && (c = !1, s = o ? Vn(r) : r), s);
	let f;
	if (a) {
		var p = fe in e || pe in e;
		f = l(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	a ? [m, h] = $e(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && we(t), f(m)));
	var g = i ? () => {
		var n = e[t];
		return n === void 0 ? d() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return g;
	if (f) {
		var _ = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || _ || h) && f(t ? g() : e), e) : g();
		});
	}
	var v = !1, y = (n & 1 ? lt : pt)(() => (v = !1, g()));
	a && Z(y);
	var b = G;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? Z(y) : i && a ? Ht(e) : e;
			return F(y, n), v = !0, s !== void 0 && (s = n), e;
		}
		return V && v || b.f & 16384 ? y.v : Z(y);
	});
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function Hr(e) {
	return new Ur(e);
}
var Ur = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ Lt(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get(e, r) {
				return Z(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === pe || (Z(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return F(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? fr : dr)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && j(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e !== "$set" && e !== "$destroy" && e !== "$on" && c(this, e, {
			get() {
				return this.#t[e];
			},
			set(t) {
				this.#t[e] = t;
			},
			enumerable: !0
		});
		this.#t.$set = (e) => {
			Object.assign(r, e);
		}, this.#t.$destroy = () => {
			gr(this.#t);
		};
	}
	$set(e) {
		this.#t.$set(e);
	}
	$on(e, t) {
		this.#e[e] = this.#e[e] || [];
		let n = (...e) => t.call(this, ...e);
		return this.#e[e].push(n), () => {
			this.#e[e] = this.#e[e].filter((e) => e !== n);
		};
	}
	$destroy() {
		this.#t.$destroy();
	}
}, Wr;
typeof HTMLElement == "function" && (Wr = class extends HTMLElement {
	$$ctor;
	$$s;
	$$c;
	$$cn = !1;
	$$d = {};
	$$r = !1;
	$$p_d = {};
	$$l = {};
	$$l_u = /* @__PURE__ */ new Map();
	$$me;
	$$shadowRoot = null;
	constructor(e, t, n) {
		super(), this.$$ctor = e, this.$$s = t, n && (this.$$shadowRoot = this.attachShadow(n));
	}
	addEventListener(e, t, n) {
		if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
			let n = this.$$c.$on(e, t);
			this.$$l_u.set(t, n);
		}
		super.addEventListener(e, t, n);
	}
	removeEventListener(e, t, n) {
		if (super.removeEventListener(e, t, n), this.$$c) {
			let e = this.$$l_u.get(t);
			e && (e(), this.$$l_u.delete(t));
		}
	}
	async connectedCallback() {
		if (this.$$cn = !0, !this.$$c) {
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function e(e) {
				return (t) => {
					let n = $t("slot");
					e !== "default" && (n.name = e), ar(t, n);
				};
			}
			let t = {}, n = Kr(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = Gr(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = Hr({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = on(() => {
				un(() => {
					this.$$r = !0;
					for (let e of s(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = Gr(e, this.$$d[e], this.$$p_d, "toAttribute");
						t == null ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, t);
					}
					this.$$r = !1;
				});
			});
			for (let e in this.$$l) for (let t of this.$$l[e]) {
				let n = this.$$c.$on(e, t);
				this.$$l_u.set(t, n);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, t, n) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = Gr(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return s(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function Gr(e, t, n, r) {
	let i = n[e]?.type;
	if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e]) return t;
	if (r === "toAttribute") switch (i) {
		case "Object":
		case "Array": return t == null ? null : JSON.stringify(t);
		case "Boolean": return t ? "" : null;
		case "Number": return t ?? null;
		default: return t;
	}
	else switch (i) {
		case "Object":
		case "Array": return t && JSON.parse(t);
		case "Boolean": return t;
		case "Number": return t == null ? t : +t;
		default: return t;
	}
}
function Kr(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function qr(e, t, n, r, i, a) {
	let o = class extends Wr {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return s(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return s(t).forEach((e) => {
		c(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = Gr(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (l(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		c(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
//#endregion
//#region src/Accordion.svelte
var Jr = /* @__PURE__ */ ir("<small class=\"worn-accordion-desc svelte-1n2ue7x\"> </small>"), Yr = /* @__PURE__ */ ir("<details class=\"worn-accordion svelte-1n2ue7x\"><summary class=\"worn-accordion-summary svelte-1n2ue7x\"><span class=\"worn-accordion-summary-text svelte-1n2ue7x\"><span class=\"worn-accordion-label svelte-1n2ue7x\"> </span> <!></span> <span class=\"worn-accordion-icon svelte-1n2ue7x\" aria-hidden=\"true\"></span></summary> <div class=\"worn-accordion-body svelte-1n2ue7x\"><!></div></details>"), Xr = {
	hash: "svelte-1n2ue7x",
	code: ".worn-accordion.svelte-1n2ue7x {box-sizing:border-box;inline-size:100%;max-inline-size:100%;min-inline-size:0;margin-top:10px;padding-top:8px;border-top:1px solid var(--cockpit-border);}.worn-accordion-summary.svelte-1n2ue7x {box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;inline-size:100%;max-inline-size:100%;min-block-size:44px;min-inline-size:0;padding:4px 0;color:var(--cockpit-text-secondary);font-family:var(--font-typewriter);font-size:12px;font-weight:550;cursor:pointer;list-style:none;touch-action:manipulation;}.worn-accordion-summary.svelte-1n2ue7x::-webkit-details-marker {display:none;}.worn-accordion-summary.svelte-1n2ue7x:focus-visible {outline:2px dashed var(--cockpit-accent);outline-offset:2px;}.worn-accordion-summary-text.svelte-1n2ue7x {display:block;flex:1 1 auto;max-inline-size:100%;min-inline-size:0;overflow-wrap:anywhere;}.worn-accordion-label.svelte-1n2ue7x {display:block;max-inline-size:100%;overflow-wrap:anywhere;}.worn-accordion-desc.svelte-1n2ue7x {display:block;max-inline-size:100%;margin-top:1px;color:var(--cockpit-text-muted);font-size:11px;font-weight:400;overflow-wrap:anywhere;}.worn-accordion-icon.svelte-1n2ue7x {position:relative;inline-size:16px;block-size:16px;flex:0 0 16px;margin-inline-start:8px;color:var(--cockpit-text-muted);}.worn-accordion-icon.svelte-1n2ue7x::before {content:'';position:absolute;inset-inline-start:4px;inset-block-start:4px;inline-size:6px;block-size:6px;border-inline-end:1.5px solid currentColor;border-block-end:1.5px solid currentColor;transform:rotate(-45deg);transition:transform 0.15s ease;}.worn-accordion[open].svelte-1n2ue7x .worn-accordion-icon:where(.svelte-1n2ue7x)::before {transform:rotate(45deg);}.worn-accordion-body.svelte-1n2ue7x {box-sizing:border-box;max-inline-size:100%;min-inline-size:0;padding-top:8px;overflow-wrap:anywhere;}\n\n  @media (prefers-reduced-motion: reduce) {.worn-accordion-icon.svelte-1n2ue7x::before {transition:none;}\n  }"
};
function Zr(e, t) {
	let n = or();
	Ve(t, !0), kr(e, Xr);
	let r = $(t, "open", 15, !1), i = /* @__PURE__ */ ft(() => t.panelId || `worn-accordion-${n}-panel`);
	function a(e) {
		r(e.currentTarget.open), t.onchange?.(r());
	}
	var o = Yr(), s = L(o), c = L(s), l = L(c), u = L(l, !0);
	w(l);
	var d = Xt(l, 2), f = (e) => {
		var n = Jr(), r = L(n, !0);
		w(n), dn(() => ur(r, t.description)), ar(e, n);
	};
	yr(d, (e) => {
		t.description && e(f);
	}), w(c), Pe(2), w(s);
	var p = Xt(s, 2);
	vr(L(p), () => t.children ?? g), w(p), w(o), dn(() => {
		Lr(s, "aria-controls", Z(i)), ur(u, t.label), Lr(p, "id", Z(i));
	}), Yn("toggle", o, a), Vr("open", "toggle", o, r, r), ar(e, o), He();
}
//#endregion
//#region src/AccordionElement.svelte
var Qr = /* @__PURE__ */ ir("<div class=\"worn-element-slot svelte-1nfk6c1\"></div>"), $r = {
	hash: "svelte-1nfk6c1",
	code: ":host {display:block;inline-size:100%;max-inline-size:100%;min-inline-size:0;}.worn-element-slot.svelte-1nfk6c1 {display:contents;}"
};
function ei(e, t) {
	Ve(t, !0), kr(e, $r);
	let n = (e) => {
		var t = Qr();
		Ar(t, (e) => l?.(e)), ar(e, t);
	}, r = $(t, "label", 7, ""), i = $(t, "description", 7, ""), a = $(t, "open", 7, !1), o = $(t, "panelId", 7, ""), s = t.$$host;
	function c(e) {
		s.open = e, s.dispatchEvent(new CustomEvent("change", {
			detail: { open: e },
			bubbles: !0,
			composed: !0
		}));
	}
	function l(e) {
		let t = document.createElement("slot");
		return e.append(t), { destroy: () => t.remove() };
	}
	return Zr(e, {
		get label() {
			return r();
		},
		get description() {
			return i();
		},
		get panelId() {
			return o();
		},
		onchange: c,
		get children() {
			return n;
		},
		get open() {
			return a();
		},
		set open(e) {
			a(e);
		}
	}), He({
		get label() {
			return r();
		},
		set label(e = "") {
			r(e), j();
		},
		get description() {
			return i();
		},
		set description(e = "") {
			i(e), j();
		},
		get open() {
			return a();
		},
		set open(e = !1) {
			a(e), j();
		},
		get panelId() {
			return o();
		},
		set panelId(e = "") {
			o(e), j();
		}
	});
}
customElements.define("worn-accordion", qr(ei, {
	label: {
		reflect: !0,
		type: "String"
	},
	description: {
		reflect: !0,
		type: "String"
	},
	open: {
		reflect: !0,
		type: "Boolean"
	},
	panelId: {
		attribute: "panel-id",
		reflect: !0,
		type: "String"
	}
}, [], [], { mode: "open" }));
//#endregion
//#region node_modules/svelte/src/reactivity/reactive-value.js
var ti = class {
	#e;
	#t;
	constructor(e, t) {
		this.#e = e, this.#t = tt(t);
	}
	get current() {
		return this.#t(), this.#e();
	}
}, ni = /\(.+\)/, ri = /* @__PURE__ */ new Set([
	"all",
	"print",
	"screen",
	"and",
	"or",
	"not",
	"only"
]), ii = /*@__PURE__*/ new class extends ti {
	constructor(e, t) {
		let n = ni.test(e) || e.split(/[\s,]+/).some((e) => ri.has(e.trim())) ? e : `(${e})`, r = window.matchMedia(n);
		super(() => r.matches, (e) => Jn(r, "change", e));
	}
}("(prefers-reduced-motion: reduce)");
//#endregion
//#region node_modules/svelte/src/transition/index.js
function ai(e) {
	let t = e - 1;
	return t * t * t + 1;
}
function oi(e, { delay: t = 0, duration: n = 400, easing: r = ai, axis: i = "y" } = {}) {
	let a = getComputedStyle(e), o = +a.opacity, s = i === "y" ? "height" : "width", c = parseFloat(a[s]), l = i === "y" ? ["top", "bottom"] : ["left", "right"], u = l.map((e) => `${e[0].toUpperCase()}${e.slice(1)}`), d = parseFloat(a[`padding${u[0]}`]), f = parseFloat(a[`padding${u[1]}`]), p = parseFloat(a[`margin${u[0]}`]), m = parseFloat(a[`margin${u[1]}`]), h = parseFloat(a[`border${u[0]}Width`]), g = parseFloat(a[`border${u[1]}Width`]);
	return {
		delay: t,
		duration: n,
		easing: r,
		css: (e) => `overflow: hidden;opacity: ${Math.min(e * 20, 1) * o};${s}: ${e * c}px;padding-${l[0]}: ${e * d}px;padding-${l[1]}: ${e * f}px;margin-${l[0]}: ${e * p}px;margin-${l[1]}: ${e * m}px;border-${l[0]}-width: ${e * h}px;border-${l[1]}-width: ${e * g}px;min-${s}: 0`
	};
}
//#endregion
//#region src/Collapsible.svelte
var si = /* @__PURE__ */ ir("<div class=\"worn-collapsible-body svelte-o6aw87\"><!></div>"), ci = /* @__PURE__ */ ir("<div><button type=\"button\" class=\"worn-collapsible-trigger svelte-o6aw87\"><span class=\"worn-collapsible-caret svelte-o6aw87\" aria-hidden=\"true\"></span> <span class=\"worn-collapsible-summary svelte-o6aw87\"> </span></button> <!></div>"), li = {
	hash: "svelte-o6aw87",
	code: ".worn-collapsible.svelte-o6aw87 {box-sizing:border-box;inline-size:100%;max-inline-size:100%;min-block-size:44px;min-inline-size:0;overflow:hidden;border:1px solid var(--cockpit-border);border-radius:var(--cockpit-radius-sm);}.worn-collapsible-trigger.svelte-o6aw87 {box-sizing:border-box;display:flex;align-items:center;gap:8px;inline-size:100%;max-inline-size:100%;min-block-size:44px;min-inline-size:0;padding:10px 14px;border:0;background:var(--cockpit-surface);color:var(--cockpit-text);font:inherit;cursor:pointer;text-align:start;touch-action:manipulation;}.worn-collapsible-trigger.svelte-o6aw87:hover {background:var(--cockpit-hover-bg);}.worn-collapsible-trigger.svelte-o6aw87:focus-visible {outline:2px dashed var(--cockpit-accent);outline-offset:-2px;}.worn-collapsible-caret.svelte-o6aw87 {position:relative;inline-size:16px;block-size:16px;flex:0 0 16px;color:var(--cockpit-text-muted);}.worn-collapsible-caret.svelte-o6aw87::before {content:'';position:absolute;inset-inline-start:4px;inset-block-start:4px;inline-size:6px;block-size:6px;border-inline-end:1.5px solid currentColor;border-block-end:1.5px solid currentColor;transform:rotate(-45deg);transition:transform 0.15s ease;}.worn-collapsible.is-open.svelte-o6aw87 .worn-collapsible-caret:where(.svelte-o6aw87)::before {transform:rotate(45deg);}.worn-collapsible-summary.svelte-o6aw87 {flex:1 1 auto;max-inline-size:100%;min-inline-size:0;font-family:var(--font-typewriter);font-size:13px;font-weight:560;overflow-wrap:anywhere;}.worn-collapsible-body.svelte-o6aw87 {box-sizing:border-box;max-inline-size:100%;min-inline-size:0;padding:12px 14px;overflow-wrap:anywhere;border-top:1px solid var(--cockpit-border);background:var(--cockpit-bg);}\n\n  @media (prefers-reduced-motion: reduce) {.worn-collapsible-caret.svelte-o6aw87::before {transition:none;}\n  }"
};
function ui(e, t) {
	let n = or();
	Ve(t, !0), kr(e, li);
	let r = $(t, "open", 15, !1), i = $(t, "ariaLabel", 3, ""), a = /* @__PURE__ */ ft(() => t.panelId || `worn-collapsible-${n}-panel`);
	function o() {
		r(!r()), t.onchange?.(r());
	}
	var s = ci();
	let c;
	var l = L(s), u = Xt(L(l), 2), d = L(u, !0);
	w(u), w(l);
	var f = Xt(l, 2), p = (e) => {
		var n = si();
		vr(L(n), () => t.children ?? g), w(n), dn(() => Lr(n, "id", Z(a))), Dr(3, n, () => oi, () => ({ duration: ii.current ? 0 : 180 })), ar(e, n);
	};
	yr(f, (e) => {
		r() && e(p);
	}), w(s), dn(() => {
		c = Nr(s, 1, "worn-collapsible svelte-o6aw87", null, c, { "is-open": r() }), Lr(l, "aria-expanded", r()), Lr(l, "aria-controls", Z(a)), Lr(l, "aria-label", i() || void 0), ur(d, t.summary);
	}), Xn("click", l, o), ar(e, s), He();
}
Zn(["click"]);
//#endregion
//#region src/CollapsibleElement.svelte
var di = /* @__PURE__ */ ir("<div class=\"worn-element-slot svelte-16zvspf\"></div>"), fi = {
	hash: "svelte-16zvspf",
	code: ":host {display:block;inline-size:100%;max-inline-size:100%;min-inline-size:0;}.worn-element-slot.svelte-16zvspf {display:contents;}"
};
function pi(e, t) {
	Ve(t, !0), kr(e, fi);
	let n = (e) => {
		var t = di();
		Ar(t, (e) => u?.(e)), ar(e, t);
	}, r = $(t, "summary", 7, ""), i = $(t, "open", 7, !1), a = $(t, "ariaLabel", 7, ""), o = $(t, "panelId", 7, ""), s = t.$$host, c = /* @__PURE__ */ ft(() => a() || s.getAttribute("aria-label") || "");
	function l(e) {
		s.open = e, s.dispatchEvent(new CustomEvent("change", {
			detail: { open: e },
			bubbles: !0,
			composed: !0
		}));
	}
	function u(e) {
		let t = document.createElement("slot");
		return e.append(t), { destroy: () => t.remove() };
	}
	return ui(e, {
		get summary() {
			return r();
		},
		get ariaLabel() {
			return Z(c);
		},
		get panelId() {
			return o();
		},
		onchange: l,
		get children() {
			return n;
		},
		get open() {
			return i();
		},
		set open(e) {
			i(e);
		}
	}), He({
		get summary() {
			return r();
		},
		set summary(e = "") {
			r(e), j();
		},
		get open() {
			return i();
		},
		set open(e = !1) {
			i(e), j();
		},
		get ariaLabel() {
			return a();
		},
		set ariaLabel(e = "") {
			a(e), j();
		},
		get panelId() {
			return o();
		},
		set panelId(e = "") {
			o(e), j();
		}
	});
}
customElements.define("worn-collapsible", qr(pi, {
	summary: {
		reflect: !0,
		type: "String"
	},
	open: {
		reflect: !0,
		type: "Boolean"
	},
	ariaLabel: {
		attribute: "aria-label",
		reflect: !0,
		type: "String"
	},
	panelId: {
		attribute: "panel-id",
		reflect: !0,
		type: "String"
	}
}, [], [], { mode: "open" }));
//#endregion
