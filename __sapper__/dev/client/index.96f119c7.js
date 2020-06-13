import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, a as space, t as text, c as claim_element, b as children, d as detach, f as claim_space, g as claim_text, h as attr, j as set_style, k as insert, l as append, n as noop } from './client.ac0ba3cf.js';

/* src/routes/index.svelte generated by Svelte v3.22.3 */

function create_fragment(ctx) {
	let div1;
	let div0;
	let img;
	let img_src_value;
	let t0;
	let div4;
	let div2;
	let t1;
	let br0;
	let t2;
	let a0;
	let t3;
	let t4;
	let a1;
	let t5;
	let t6;
	let a2;
	let t7;
	let t8;
	let div3;
	let t9;
	let br1;
	let t10;
	let a3;
	let t11;
	let t12;
	let a4;
	let t13;
	let t14;
	let a5;
	let t15;
	let t16;
	let a6;
	let t17;
	let t18;
	let a7;
	let t19;
	let t20;
	let p;
	let t21;

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			img = element("img");
			t0 = space();
			div4 = element("div");
			div2 = element("div");
			t1 = text("Things Ive created.\n    ");
			br0 = element("br");
			t2 = space();
			a0 = element("a");
			t3 = text("Resources");
			t4 = space();
			a1 = element("a");
			t5 = text("Tutorials");
			t6 = space();
			a2 = element("a");
			t7 = text("Gitlab");
			t8 = space();
			div3 = element("div");
			t9 = text("Tech that I use.\n    ");
			br1 = element("br");
			t10 = space();
			a3 = element("a");
			t11 = text("Ubuntu 20.04");
			t12 = space();
			a4 = element("a");
			t13 = text("VSCODE");
			t14 = space();
			a5 = element("a");
			t15 = text("SVELTEJS");
			t16 = space();
			a6 = element("a");
			t17 = text("Sapper");
			t18 = space();
			a7 = element("a");
			t19 = text("Go");
			t20 = space();
			p = element("p");
			t21 = text("I've been loving Go + Sveltejs incrediably a lot. Not much is simplier. I\n  decided my next plan is to write blogs about what I am learning and thoughts\n  about tech. There is a lot that I love to dig into and a lot that I try to\n  learn.");
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			img = claim_element(div0_nodes, "IMG", {
				src: true,
				alt: true,
				width: true,
				class: true
			});

			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t0 = claim_space(nodes);
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div2 = claim_element(div4_nodes, "DIV", { class: true, style: true });
			var div2_nodes = children(div2);
			t1 = claim_text(div2_nodes, "Things Ive created.\n    ");
			br0 = claim_element(div2_nodes, "BR", {});
			t2 = claim_space(div2_nodes);
			a0 = claim_element(div2_nodes, "A", { class: true, href: true, target: true });
			var a0_nodes = children(a0);
			t3 = claim_text(a0_nodes, "Resources");
			a0_nodes.forEach(detach);
			t4 = claim_space(div2_nodes);
			a1 = claim_element(div2_nodes, "A", { class: true, href: true, target: true });
			var a1_nodes = children(a1);
			t5 = claim_text(a1_nodes, "Tutorials");
			a1_nodes.forEach(detach);
			t6 = claim_space(div2_nodes);
			a2 = claim_element(div2_nodes, "A", { class: true, href: true, target: true });
			var a2_nodes = children(a2);
			t7 = claim_text(a2_nodes, "Gitlab");
			a2_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t8 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true, style: true });
			var div3_nodes = children(div3);
			t9 = claim_text(div3_nodes, "Tech that I use.\n    ");
			br1 = claim_element(div3_nodes, "BR", {});
			t10 = claim_space(div3_nodes);
			a3 = claim_element(div3_nodes, "A", { class: true, href: true, target: true });
			var a3_nodes = children(a3);
			t11 = claim_text(a3_nodes, "Ubuntu 20.04");
			a3_nodes.forEach(detach);
			t12 = claim_space(div3_nodes);
			a4 = claim_element(div3_nodes, "A", { class: true, href: true, target: true });
			var a4_nodes = children(a4);
			t13 = claim_text(a4_nodes, "VSCODE");
			a4_nodes.forEach(detach);
			t14 = claim_space(div3_nodes);
			a5 = claim_element(div3_nodes, "A", { class: true, href: true, target: true });
			var a5_nodes = children(a5);
			t15 = claim_text(a5_nodes, "SVELTEJS");
			a5_nodes.forEach(detach);
			t16 = claim_space(div3_nodes);
			a6 = claim_element(div3_nodes, "A", { class: true, href: true, target: true });
			var a6_nodes = children(a6);
			t17 = claim_text(a6_nodes, "Sapper");
			a6_nodes.forEach(detach);
			t18 = claim_space(div3_nodes);
			a7 = claim_element(div3_nodes, "A", { class: true, href: true, target: true });
			var a7_nodes = children(a7);
			t19 = claim_text(a7_nodes, "Go");
			a7_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t20 = claim_space(nodes);
			p = claim_element(nodes, "P", { style: true, class: true });
			var p_nodes = children(p);
			t21 = claim_text(p_nodes, "I've been loving Go + Sveltejs incrediably a lot. Not much is simplier. I\n  decided my next plan is to write blogs about what I am learning and thoughts\n  about tech. There is a lot that I love to dig into and a lot that I try to\n  learn.");
			p_nodes.forEach(detach);
			this.h();
		},
		h() {
			if (img.src !== (img_src_value = me)) attr(img, "src", img_src_value);
			attr(img, "alt", "");
			attr(img, "width", "30%");
			attr(img, "class", "svelte-9fcin1");
			attr(div0, "class", "hitem h-mid svelte-9fcin1");
			attr(div1, "class", "header svelte-9fcin1");
			attr(a0, "class", "grid-item svelte-9fcin1");
			attr(a0, "href", "https://docs.google.com/document/d/1Zb9GCWPKeEJ4Dyn2TkT-O3wJ8AFc-IMxZzTugNCjr-8/edit?usp=sharing");
			attr(a0, "target", "_blank");
			attr(a1, "class", "grid-item svelte-9fcin1");
			attr(a1, "href", "https://medium.com/jexia/master-the-world-of-golang-issue-9-2bdfec563c2e");
			attr(a1, "target", "_blank");
			attr(a2, "class", "grid-item svelte-9fcin1");
			attr(a2, "href", "https://gitlab.com/zendrulat123");
			attr(a2, "target", "_blank");
			attr(div2, "class", "item grid svelte-9fcin1");
			set_style(div2, "font-weight", "bold");
			attr(a3, "class", "grid-item svelte-9fcin1");
			attr(a3, "href", "https://ubuntu.com/");
			attr(a3, "target", "_blank");
			attr(a4, "class", "grid-item svelte-9fcin1");
			attr(a4, "href", "https://code.visualstudio.com/");
			attr(a4, "target", "_blank");
			attr(a5, "class", "grid-item svelte-9fcin1");
			attr(a5, "href", "https://svelte.dev/");
			attr(a5, "target", "_blank");
			attr(a6, "class", "grid-item svelte-9fcin1");
			attr(a6, "href", "https://sapper.svelte.dev/docs/");
			attr(a6, "target", "_blank");
			attr(a7, "class", "grid-item svelte-9fcin1");
			attr(a7, "href", "https://golang.org/");
			attr(a7, "target", "_blank");
			attr(div3, "class", "item grid svelte-9fcin1");
			set_style(div3, "font-weight", "bold");
			attr(div4, "class", "half svelte-9fcin1");
			set_style(p, "width", "100%");
			set_style(p, "text-align", "center");
			attr(p, "class", "svelte-9fcin1");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			append(div0, img);
			insert(target, t0, anchor);
			insert(target, div4, anchor);
			append(div4, div2);
			append(div2, t1);
			append(div2, br0);
			append(div2, t2);
			append(div2, a0);
			append(a0, t3);
			append(div2, t4);
			append(div2, a1);
			append(a1, t5);
			append(div2, t6);
			append(div2, a2);
			append(a2, t7);
			append(div4, t8);
			append(div4, div3);
			append(div3, t9);
			append(div3, br1);
			append(div3, t10);
			append(div3, a3);
			append(a3, t11);
			append(div3, t12);
			append(div3, a4);
			append(a4, t13);
			append(div3, t14);
			append(div3, a5);
			append(a5, t15);
			append(div3, t16);
			append(div3, a6);
			append(a6, t17);
			append(div3, t18);
			append(div3, a7);
			append(a7, t19);
			insert(target, t20, anchor);
			insert(target, p, anchor);
			append(p, t21);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div1);
			if (detaching) detach(t0);
			if (detaching) detach(div4);
			if (detaching) detach(t20);
			if (detaching) detach(p);
		}
	};
}

let me = "me.png";

class Routes extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOTZmMTE5YzcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGxldCBtZSA9IFwibWUucG5nXCI7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrQ29kZStQcm86NDAwLDcwMFwiKTtcbiAgLmhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDFlbSwgMWZyKSk7XG4gICAgd2lkdGg6MTAwJTtcbiAgfVxuICAuaGl0ZW0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2UxNTI1ODtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTo5MCU7XG4gICAgcGFkZGluZzoxJTtcbiBcbiAgfVxuICAuaC1taWQgaW1nIHtcbiAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG4gICBib3JkZXItcmFkaXVzOiAxNDdweDtcbiAgIGJhY2tncm91bmQ6I2UxNTI1ODtcbiAgfVxuICAuaGFsZiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gIH1cbiAgLmhhbGYgLml0ZW0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzE5OWM5NDtcbiAgICBmb250LWZhbWlseTogXCJTb3VyY2VTYW5zUHJvXCIsIEhlbHZldGljYSwgQXJpYWwsIFwiTWVpcnlvIFVJXCIsXG4gICAgICBcIu+8re+8syDvvLDjgrTjgrfjg4Pjgq9cIiwgXCJNUyBQR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIH1cbiAgcCB7XG4gICAgY29sb3I6ICNmOTg0NWI7XG4gICAgZm9udC1mYW1pbHk6IE1vbmFjbywgTWVubG8sIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgfVxuICAuZ3JpZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZ3JpZC1pdGVtIHtcbiAgICBmbGV4OiAxO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAyMyU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFhODAwMDc4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW46IDElO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LXNpemU6IDdwdDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgfVxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuPGRpdiBjbGFzcz1cImhpdGVtIGgtbWlkXCI+XG4gICAgPGltZyAgc3JjPXttZX0gYWx0PVwiXCIgd2lkdGg9XCIzMCVcIiAvPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiaGFsZlwiPlxuICA8ZGl2IGNsYXNzPVwiaXRlbSBncmlkXCIgc3R5bGU9XCJmb250LXdlaWdodDpib2xkO1wiPlxuICAgIFRoaW5ncyBJdmUgY3JlYXRlZC5cbiAgICA8YnIgLz5cbiAgICA8YVxuICAgICAgY2xhc3M9XCJncmlkLWl0ZW1cIlxuICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMVpiOUdDV1BLZUVKNER5bjJUa1QtTzN3SjhBRmMtSU14WnpUdWdOQ2pyLTgvZWRpdD91c3A9c2hhcmluZ1wiXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgIFJlc291cmNlc1xuICAgIDwvYT5cblxuICAgIDxhXG4gICAgICBjbGFzcz1cImdyaWQtaXRlbVwiXG4gICAgICBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL2pleGlhL21hc3Rlci10aGUtd29ybGQtb2YtZ29sYW5nLWlzc3VlLTktMmJkZmVjNTYzYzJlXCJcbiAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgVHV0b3JpYWxzXG4gICAgPC9hPlxuXG4gICAgPGEgY2xhc3M9XCJncmlkLWl0ZW1cIiBocmVmPVwiaHR0cHM6Ly9naXRsYWIuY29tL3plbmRydWxhdDEyM1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgR2l0bGFiXG4gICAgPC9hPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIml0ZW0gZ3JpZFwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6Ym9sZDtcIj5cbiAgICBUZWNoIHRoYXQgSSB1c2UuXG4gICAgPGJyIC8+XG4gICAgPGEgY2xhc3M9XCJncmlkLWl0ZW1cIiBocmVmPVwiaHR0cHM6Ly91YnVudHUuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgVWJ1bnR1IDIwLjA0XG4gICAgPC9hPlxuXG4gICAgPGEgY2xhc3M9XCJncmlkLWl0ZW1cIiBocmVmPVwiaHR0cHM6Ly9jb2RlLnZpc3VhbHN0dWRpby5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICBWU0NPREVcbiAgICA8L2E+XG5cbiAgICA8YSBjbGFzcz1cImdyaWQtaXRlbVwiIGhyZWY9XCJodHRwczovL3N2ZWx0ZS5kZXYvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U1ZFTFRFSlM8L2E+XG4gICAgPGEgY2xhc3M9XCJncmlkLWl0ZW1cIiBocmVmPVwiaHR0cHM6Ly9zYXBwZXIuc3ZlbHRlLmRldi9kb2NzL1wiIHRhcmdldD1cIl9ibGFua1wiPlNhcHBlcjwvYT5cblxuICAgIDxhIGNsYXNzPVwiZ3JpZC1pdGVtXCIgaHJlZj1cImh0dHBzOi8vZ29sYW5nLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5HbzwvYT5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHAgc3R5bGU9XCJ3aWR0aDoxMDAlOyB0ZXh0LWFsaWduOmNlbnRlcjtcIj5cbiAgSSd2ZSBiZWVuIGxvdmluZyBHbyArIFN2ZWx0ZWpzIGluY3JlZGlhYmx5IGEgbG90LiBOb3QgbXVjaCBpcyBzaW1wbGllci4gSVxuICBkZWNpZGVkIG15IG5leHQgcGxhbiBpcyB0byB3cml0ZSBibG9ncyBhYm91dCB3aGF0IEkgYW0gbGVhcm5pbmcgYW5kIHRob3VnaHRzXG4gIGFib3V0IHRlY2guIFRoZXJlIGlzIGEgbG90IHRoYXQgSSBsb3ZlIHRvIGRpZyBpbnRvIGFuZCBhIGxvdCB0aGF0IEkgdHJ5IHRvXG4gIGxlYXJuLlxuPC9wPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0E0RGUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBM0RYLEVBQUUsR0FBRyxRQUFROzs7Ozs7Ozs7OzsifQ==
