import { i as identity, S as SvelteComponent, a as init, s as safe_not_equal, e as element, t as text, b as space, c as claim_element, d as children, f as claim_text, g as detach, h as claim_space, j as attr, k as insert, l as append, m as create_out_transition, n as set_style, o as listen, p as transition_in, q as transition_out, r as check_outros, u as run_all, v as add_render_callback, w as create_in_transition, x as group_outros } from './client.91f96ea9.js';

function elasticOut(t) {
    return (Math.sin((-13.0 * (t + 1.0) * Math.PI) / 2) * Math.pow(2.0, -10.0 * t) + 1.0);
}

function fade(node, { delay = 0, duration = 400, easing = identity }) {
    const o = +getComputedStyle(node).opacity;
    return {
        delay,
        duration,
        easing,
        css: t => `opacity: ${t * o}`
    };
}

/* src/routes/index.svelte generated by Svelte v3.23.2 */

function create_if_block_1(ctx) {
	let div;
	let a0;
	let t0;
	let t1;
	let a1;
	let t2;
	let t3;
	let a2;
	let t4;
	let div_intro;
	let div_outro;
	let current;

	return {
		c() {
			div = element("div");
			a0 = element("a");
			t0 = text("Resources");
			t1 = space();
			a1 = element("a");
			t2 = text("Tutorials");
			t3 = space();
			a2 = element("a");
			t4 = text("Gitlab");
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			a0 = claim_element(div_nodes, "A", { class: true, href: true, target: true });
			var a0_nodes = children(a0);
			t0 = claim_text(a0_nodes, "Resources");
			a0_nodes.forEach(detach);
			t1 = claim_space(div_nodes);
			a1 = claim_element(div_nodes, "A", { class: true, href: true, target: true });
			var a1_nodes = children(a1);
			t2 = claim_text(a1_nodes, "Tutorials");
			a1_nodes.forEach(detach);
			t3 = claim_space(div_nodes);
			a2 = claim_element(div_nodes, "A", { class: true, href: true, target: true });
			var a2_nodes = children(a2);
			t4 = claim_text(a2_nodes, "Gitlab");
			a2_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a0, "class", "grid-item svelte-il2tct");
			attr(a0, "href", "https://docs.google.com/document/d/1Zb9GCWPKeEJ4Dyn2TkT-O3wJ8AFc-IMxZzTugNCjr-8/edit?usp=sharing");
			attr(a0, "target", "_blank");
			attr(a1, "class", "grid-item svelte-il2tct");
			attr(a1, "href", "https://medium.com/jexia/master-the-world-of-golang-issue-9-2bdfec563c2e");
			attr(a1, "target", "_blank");
			attr(a2, "class", "grid-item svelte-il2tct");
			attr(a2, "href", "https://gitlab.com/zendrulat123");
			attr(a2, "target", "_blank");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, a0);
			append(a0, t0);
			append(div, t1);
			append(div, a1);
			append(a1, t2);
			append(div, t3);
			append(div, a2);
			append(a2, t4);
			current = true;
		},
		i(local) {
			if (current) return;

			add_render_callback(() => {
				if (div_outro) div_outro.end(1);
				if (!div_intro) div_intro = create_in_transition(div, /*spin*/ ctx[4], { duration: 8000 });
				div_intro.start();
			});

			current = true;
		},
		o(local) {
			if (div_intro) div_intro.invalidate();
			div_outro = create_out_transition(div, fade, {});
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (detaching && div_outro) div_outro.end();
		}
	};
}

// (137:2) {#if visible2}
function create_if_block(ctx) {
	let div;
	let a0;
	let t0;
	let t1;
	let a1;
	let t2;
	let t3;
	let a2;
	let t4;
	let t5;
	let a3;
	let t6;
	let t7;
	let a4;
	let t8;
	let div_intro;
	let div_outro;
	let current;

	return {
		c() {
			div = element("div");
			a0 = element("a");
			t0 = text("Ubuntu 20.04");
			t1 = space();
			a1 = element("a");
			t2 = text("VSCODE");
			t3 = space();
			a2 = element("a");
			t4 = text("SVELTEJS");
			t5 = space();
			a3 = element("a");
			t6 = text("Sapper");
			t7 = space();
			a4 = element("a");
			t8 = text("Go");
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			a0 = claim_element(div_nodes, "A", { class: true, href: true, target: true });
			var a0_nodes = children(a0);
			t0 = claim_text(a0_nodes, "Ubuntu 20.04");
			a0_nodes.forEach(detach);
			t1 = claim_space(div_nodes);
			a1 = claim_element(div_nodes, "A", { class: true, href: true, target: true });
			var a1_nodes = children(a1);
			t2 = claim_text(a1_nodes, "VSCODE");
			a1_nodes.forEach(detach);
			t3 = claim_space(div_nodes);
			a2 = claim_element(div_nodes, "A", { class: true, href: true, target: true });
			var a2_nodes = children(a2);
			t4 = claim_text(a2_nodes, "SVELTEJS");
			a2_nodes.forEach(detach);
			t5 = claim_space(div_nodes);
			a3 = claim_element(div_nodes, "A", { class: true, href: true, target: true });
			var a3_nodes = children(a3);
			t6 = claim_text(a3_nodes, "Sapper");
			a3_nodes.forEach(detach);
			t7 = claim_space(div_nodes);
			a4 = claim_element(div_nodes, "A", { class: true, href: true, target: true });
			var a4_nodes = children(a4);
			t8 = claim_text(a4_nodes, "Go");
			a4_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a0, "class", "grid-item svelte-il2tct");
			attr(a0, "href", "https://ubuntu.com/");
			attr(a0, "target", "_blank");
			attr(a1, "class", "grid-item svelte-il2tct");
			attr(a1, "href", "https://code.visualstudio.com/");
			attr(a1, "target", "_blank");
			attr(a2, "class", "grid-item svelte-il2tct");
			attr(a2, "href", "https://svelte.dev/");
			attr(a2, "target", "_blank");
			attr(a3, "class", "grid-item svelte-il2tct");
			attr(a3, "href", "https://sapper.svelte.dev/docs/");
			attr(a3, "target", "_blank");
			attr(a4, "class", "grid-item svelte-il2tct");
			attr(a4, "href", "https://golang.org/");
			attr(a4, "target", "_blank");
			attr(div, "class", "grid svelte-il2tct");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, a0);
			append(a0, t0);
			append(div, t1);
			append(div, a1);
			append(a1, t2);
			append(div, t3);
			append(div, a2);
			append(a2, t4);
			append(div, t5);
			append(div, a3);
			append(a3, t6);
			append(div, t7);
			append(div, a4);
			append(a4, t8);
			current = true;
		},
		i(local) {
			if (current) return;

			add_render_callback(() => {
				if (div_outro) div_outro.end(1);
				if (!div_intro) div_intro = create_in_transition(div, /*spin*/ ctx[4], { duration: 8000 });
				div_intro.start();
			});

			current = true;
		},
		o(local) {
			if (div_intro) div_intro.invalidate();
			div_outro = create_out_transition(div, fade, {});
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (detaching && div_outro) div_outro.end();
		}
	};
}

function create_fragment(ctx) {
	let div1;
	let div0;
	let img;
	let img_src_value;
	let t0;
	let div3;
	let div2;
	let t1;
	let t2;
	let br0;
	let t3;
	let t4;
	let div5;
	let div4;
	let t5;
	let t6;
	let br1;
	let t7;
	let t8;
	let p;
	let t9;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*visible*/ ctx[0] && create_if_block_1(ctx);
	let if_block1 = /*visible2*/ ctx[1] && create_if_block(ctx);

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			img = element("img");
			t0 = space();
			div3 = element("div");
			div2 = element("div");
			t1 = text("Things Ive created.");
			t2 = space();
			br0 = element("br");
			t3 = space();
			if (if_block0) if_block0.c();
			t4 = space();
			div5 = element("div");
			div4 = element("div");
			t5 = text("Tech that I use.");
			t6 = space();
			br1 = element("br");
			t7 = space();
			if (if_block1) if_block1.c();
			t8 = space();
			p = element("p");
			t9 = text("I've been loving Go + Sveltejs incrediably a lot. Not much is simplier. I\n  decided my next plan is to write blogs about what I am learning and thoughts\n  about tech. There is a lot that I love to dig into and a lot that I try to\n  learn.");
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
			div3 = claim_element(nodes, "DIV", { class: true, style: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			t1 = claim_text(div2_nodes, "Things Ive created.");
			div2_nodes.forEach(detach);
			t2 = claim_space(div3_nodes);
			br0 = claim_element(div3_nodes, "BR", {});
			t3 = claim_space(div3_nodes);
			if (if_block0) if_block0.l(div3_nodes);
			div3_nodes.forEach(detach);
			t4 = claim_space(nodes);
			div5 = claim_element(nodes, "DIV", { class: true, style: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			t5 = claim_text(div4_nodes, "Tech that I use.");
			div4_nodes.forEach(detach);
			t6 = claim_space(div5_nodes);
			br1 = claim_element(div5_nodes, "BR", {});
			t7 = claim_space(div5_nodes);
			if (if_block1) if_block1.l(div5_nodes);
			div5_nodes.forEach(detach);
			t8 = claim_space(nodes);
			p = claim_element(nodes, "P", { style: true, class: true });
			var p_nodes = children(p);
			t9 = claim_text(p_nodes, "I've been loving Go + Sveltejs incrediably a lot. Not much is simplier. I\n  decided my next plan is to write blogs about what I am learning and thoughts\n  about tech. There is a lot that I love to dig into and a lot that I try to\n  learn.");
			p_nodes.forEach(detach);
			this.h();
		},
		h() {
			if (img.src !== (img_src_value = me)) attr(img, "src", img_src_value);
			attr(img, "alt", "");
			attr(img, "width", "30%");
			attr(img, "class", "svelte-il2tct");
			attr(div0, "class", "hitem h-mid svelte-il2tct");
			attr(div1, "class", "header svelte-il2tct");
			attr(div2, "class", "button svelte-il2tct");
			attr(div3, "class", "item gridtitle svelte-il2tct");
			set_style(div3, "font-weight", "bold");
			attr(div4, "class", "button svelte-il2tct");
			attr(div5, "class", "item gridtitle svelte-il2tct");
			set_style(div5, "font-weight", "bold");
			set_style(p, "width", "100%");
			set_style(p, "text-align", "center");
			attr(p, "class", "svelte-il2tct");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			append(div0, img);
			insert(target, t0, anchor);
			insert(target, div3, anchor);
			append(div3, div2);
			append(div2, t1);
			append(div3, t2);
			append(div3, br0);
			append(div3, t3);
			if (if_block0) if_block0.m(div3, null);
			insert(target, t4, anchor);
			insert(target, div5, anchor);
			append(div5, div4);
			append(div4, t5);
			append(div5, t6);
			append(div5, br1);
			append(div5, t7);
			if (if_block1) if_block1.m(div5, null);
			insert(target, t8, anchor);
			insert(target, p, anchor);
			append(p, t9);
			current = true;

			if (!mounted) {
				dispose = [
					listen(div3, "click", /*check*/ ctx[2]),
					listen(div5, "click", /*check2*/ ctx[3])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (/*visible*/ ctx[0]) {
				if (if_block0) {
					if (dirty & /*visible*/ 1) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(div3, null);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*visible2*/ ctx[1]) {
				if (if_block1) {
					if (dirty & /*visible2*/ 2) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div5, null);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			current = true;
		},
		o(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			if (detaching) detach(t0);
			if (detaching) detach(div3);
			if (if_block0) if_block0.d();
			if (detaching) detach(t4);
			if (detaching) detach(div5);
			if (if_block1) if_block1.d();
			if (detaching) detach(t8);
			if (detaching) detach(p);
			mounted = false;
			run_all(dispose);
		}
	};
}

let me = "me.png";

function instance($$self, $$props, $$invalidate) {
	let visible;
	let visible2;

	function check() {
		console.log(visible);

		if (visible == true) {
			$$invalidate(0, visible = false);
		} else {
			$$invalidate(0, visible = true);
		}
	}

	function check2() {
		console.log(visible2);

		if (visible2 == true) {
			$$invalidate(1, visible2 = false);
		} else {
			$$invalidate(1, visible2 = true);
		}
	}

	function spin(node, { duration }) {
		return {
			duration,
			css: t => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${~~(t * 360)},
						${Math.min(100, 1000 - 1000 * t)}%,
						${Math.min(50, 500 - 500 * t)}%
					);`;
			}
		};
	}

	return [visible, visible2, check, check2, spin];
}

class Routes extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGNjODRkYjAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvZWFzaW5nL2luZGV4Lm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvdHJhbnNpdGlvbi9pbmRleC5tanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBpZGVudGl0eSBhcyBsaW5lYXIgfSBmcm9tICcuLi9pbnRlcm5hbCc7XG5cbi8qXG5BZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL21hdHRkZXNsXG5EaXN0cmlidXRlZCB1bmRlciBNSVQgTGljZW5zZSBodHRwczovL2dpdGh1Yi5jb20vbWF0dGRlc2wvZWFzZXMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuKi9cbmZ1bmN0aW9uIGJhY2tJbk91dCh0KSB7XG4gICAgY29uc3QgcyA9IDEuNzAxNTggKiAxLjUyNTtcbiAgICBpZiAoKHQgKj0gMikgPCAxKVxuICAgICAgICByZXR1cm4gMC41ICogKHQgKiB0ICogKChzICsgMSkgKiB0IC0gcykpO1xuICAgIHJldHVybiAwLjUgKiAoKHQgLT0gMikgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAyKTtcbn1cbmZ1bmN0aW9uIGJhY2tJbih0KSB7XG4gICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgcmV0dXJuIHQgKiB0ICogKChzICsgMSkgKiB0IC0gcyk7XG59XG5mdW5jdGlvbiBiYWNrT3V0KHQpIHtcbiAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICByZXR1cm4gLS10ICogdCAqICgocyArIDEpICogdCArIHMpICsgMTtcbn1cbmZ1bmN0aW9uIGJvdW5jZU91dCh0KSB7XG4gICAgY29uc3QgYSA9IDQuMCAvIDExLjA7XG4gICAgY29uc3QgYiA9IDguMCAvIDExLjA7XG4gICAgY29uc3QgYyA9IDkuMCAvIDEwLjA7XG4gICAgY29uc3QgY2EgPSA0MzU2LjAgLyAzNjEuMDtcbiAgICBjb25zdCBjYiA9IDM1NDQyLjAgLyAxODA1LjA7XG4gICAgY29uc3QgY2MgPSAxNjA2MS4wIC8gMTgwNS4wO1xuICAgIGNvbnN0IHQyID0gdCAqIHQ7XG4gICAgcmV0dXJuIHQgPCBhXG4gICAgICAgID8gNy41NjI1ICogdDJcbiAgICAgICAgOiB0IDwgYlxuICAgICAgICAgICAgPyA5LjA3NSAqIHQyIC0gOS45ICogdCArIDMuNFxuICAgICAgICAgICAgOiB0IDwgY1xuICAgICAgICAgICAgICAgID8gY2EgKiB0MiAtIGNiICogdCArIGNjXG4gICAgICAgICAgICAgICAgOiAxMC44ICogdCAqIHQgLSAyMC41MiAqIHQgKyAxMC43Mjtcbn1cbmZ1bmN0aW9uIGJvdW5jZUluT3V0KHQpIHtcbiAgICByZXR1cm4gdCA8IDAuNVxuICAgICAgICA/IDAuNSAqICgxLjAgLSBib3VuY2VPdXQoMS4wIC0gdCAqIDIuMCkpXG4gICAgICAgIDogMC41ICogYm91bmNlT3V0KHQgKiAyLjAgLSAxLjApICsgMC41O1xufVxuZnVuY3Rpb24gYm91bmNlSW4odCkge1xuICAgIHJldHVybiAxLjAgLSBib3VuY2VPdXQoMS4wIC0gdCk7XG59XG5mdW5jdGlvbiBjaXJjSW5PdXQodCkge1xuICAgIGlmICgodCAqPSAyKSA8IDEpXG4gICAgICAgIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSk7XG4gICAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKTtcbn1cbmZ1bmN0aW9uIGNpcmNJbih0KSB7XG4gICAgcmV0dXJuIDEuMCAtIE1hdGguc3FydCgxLjAgLSB0ICogdCk7XG59XG5mdW5jdGlvbiBjaXJjT3V0KHQpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSAtLXQgKiB0KTtcbn1cbmZ1bmN0aW9uIGN1YmljSW5PdXQodCkge1xuICAgIHJldHVybiB0IDwgMC41ID8gNC4wICogdCAqIHQgKiB0IDogMC41ICogTWF0aC5wb3coMi4wICogdCAtIDIuMCwgMy4wKSArIDEuMDtcbn1cbmZ1bmN0aW9uIGN1YmljSW4odCkge1xuICAgIHJldHVybiB0ICogdCAqIHQ7XG59XG5mdW5jdGlvbiBjdWJpY091dCh0KSB7XG4gICAgY29uc3QgZiA9IHQgLSAxLjA7XG4gICAgcmV0dXJuIGYgKiBmICogZiArIDEuMDtcbn1cbmZ1bmN0aW9uIGVsYXN0aWNJbk91dCh0KSB7XG4gICAgcmV0dXJuIHQgPCAwLjVcbiAgICAgICAgPyAwLjUgKlxuICAgICAgICAgICAgTWF0aC5zaW4oKCgrMTMuMCAqIE1hdGguUEkpIC8gMikgKiAyLjAgKiB0KSAqXG4gICAgICAgICAgICBNYXRoLnBvdygyLjAsIDEwLjAgKiAoMi4wICogdCAtIDEuMCkpXG4gICAgICAgIDogMC41ICpcbiAgICAgICAgICAgIE1hdGguc2luKCgoLTEzLjAgKiBNYXRoLlBJKSAvIDIpICogKDIuMCAqIHQgLSAxLjAgKyAxLjApKSAqXG4gICAgICAgICAgICBNYXRoLnBvdygyLjAsIC0xMC4wICogKDIuMCAqIHQgLSAxLjApKSArXG4gICAgICAgICAgICAxLjA7XG59XG5mdW5jdGlvbiBlbGFzdGljSW4odCkge1xuICAgIHJldHVybiBNYXRoLnNpbigoMTMuMCAqIHQgKiBNYXRoLlBJKSAvIDIpICogTWF0aC5wb3coMi4wLCAxMC4wICogKHQgLSAxLjApKTtcbn1cbmZ1bmN0aW9uIGVsYXN0aWNPdXQodCkge1xuICAgIHJldHVybiAoTWF0aC5zaW4oKC0xMy4wICogKHQgKyAxLjApICogTWF0aC5QSSkgLyAyKSAqIE1hdGgucG93KDIuMCwgLTEwLjAgKiB0KSArIDEuMCk7XG59XG5mdW5jdGlvbiBleHBvSW5PdXQodCkge1xuICAgIHJldHVybiB0ID09PSAwLjAgfHwgdCA9PT0gMS4wXG4gICAgICAgID8gdFxuICAgICAgICA6IHQgPCAwLjVcbiAgICAgICAgICAgID8gKzAuNSAqIE1hdGgucG93KDIuMCwgMjAuMCAqIHQgLSAxMC4wKVxuICAgICAgICAgICAgOiAtMC41ICogTWF0aC5wb3coMi4wLCAxMC4wIC0gdCAqIDIwLjApICsgMS4wO1xufVxuZnVuY3Rpb24gZXhwb0luKHQpIHtcbiAgICByZXR1cm4gdCA9PT0gMC4wID8gdCA6IE1hdGgucG93KDIuMCwgMTAuMCAqICh0IC0gMS4wKSk7XG59XG5mdW5jdGlvbiBleHBvT3V0KHQpIHtcbiAgICByZXR1cm4gdCA9PT0gMS4wID8gdCA6IDEuMCAtIE1hdGgucG93KDIuMCwgLTEwLjAgKiB0KTtcbn1cbmZ1bmN0aW9uIHF1YWRJbk91dCh0KSB7XG4gICAgdCAvPSAwLjU7XG4gICAgaWYgKHQgPCAxKVxuICAgICAgICByZXR1cm4gMC41ICogdCAqIHQ7XG4gICAgdC0tO1xuICAgIHJldHVybiAtMC41ICogKHQgKiAodCAtIDIpIC0gMSk7XG59XG5mdW5jdGlvbiBxdWFkSW4odCkge1xuICAgIHJldHVybiB0ICogdDtcbn1cbmZ1bmN0aW9uIHF1YWRPdXQodCkge1xuICAgIHJldHVybiAtdCAqICh0IC0gMi4wKTtcbn1cbmZ1bmN0aW9uIHF1YXJ0SW5PdXQodCkge1xuICAgIHJldHVybiB0IDwgMC41XG4gICAgICAgID8gKzguMCAqIE1hdGgucG93KHQsIDQuMClcbiAgICAgICAgOiAtOC4wICogTWF0aC5wb3codCAtIDEuMCwgNC4wKSArIDEuMDtcbn1cbmZ1bmN0aW9uIHF1YXJ0SW4odCkge1xuICAgIHJldHVybiBNYXRoLnBvdyh0LCA0LjApO1xufVxuZnVuY3Rpb24gcXVhcnRPdXQodCkge1xuICAgIHJldHVybiBNYXRoLnBvdyh0IC0gMS4wLCAzLjApICogKDEuMCAtIHQpICsgMS4wO1xufVxuZnVuY3Rpb24gcXVpbnRJbk91dCh0KSB7XG4gICAgaWYgKCh0ICo9IDIpIDwgMSlcbiAgICAgICAgcmV0dXJuIDAuNSAqIHQgKiB0ICogdCAqIHQgKiB0O1xuICAgIHJldHVybiAwLjUgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgKiB0ICsgMik7XG59XG5mdW5jdGlvbiBxdWludEluKHQpIHtcbiAgICByZXR1cm4gdCAqIHQgKiB0ICogdCAqIHQ7XG59XG5mdW5jdGlvbiBxdWludE91dCh0KSB7XG4gICAgcmV0dXJuIC0tdCAqIHQgKiB0ICogdCAqIHQgKyAxO1xufVxuZnVuY3Rpb24gc2luZUluT3V0KHQpIHtcbiAgICByZXR1cm4gLTAuNSAqIChNYXRoLmNvcyhNYXRoLlBJICogdCkgLSAxKTtcbn1cbmZ1bmN0aW9uIHNpbmVJbih0KSB7XG4gICAgY29uc3QgdiA9IE1hdGguY29zKHQgKiBNYXRoLlBJICogMC41KTtcbiAgICBpZiAoTWF0aC5hYnModikgPCAxZS0xNClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gMSAtIHY7XG59XG5mdW5jdGlvbiBzaW5lT3V0KHQpIHtcbiAgICByZXR1cm4gTWF0aC5zaW4oKHQgKiBNYXRoLlBJKSAvIDIpO1xufVxuXG5leHBvcnQgeyBiYWNrSW4sIGJhY2tJbk91dCwgYmFja091dCwgYm91bmNlSW4sIGJvdW5jZUluT3V0LCBib3VuY2VPdXQsIGNpcmNJbiwgY2lyY0luT3V0LCBjaXJjT3V0LCBjdWJpY0luLCBjdWJpY0luT3V0LCBjdWJpY091dCwgZWxhc3RpY0luLCBlbGFzdGljSW5PdXQsIGVsYXN0aWNPdXQsIGV4cG9JbiwgZXhwb0luT3V0LCBleHBvT3V0LCBxdWFkSW4sIHF1YWRJbk91dCwgcXVhZE91dCwgcXVhcnRJbiwgcXVhcnRJbk91dCwgcXVhcnRPdXQsIHF1aW50SW4sIHF1aW50SW5PdXQsIHF1aW50T3V0LCBzaW5lSW4sIHNpbmVJbk91dCwgc2luZU91dCB9O1xuIiwiaW1wb3J0IHsgY3ViaWNJbk91dCwgbGluZWFyLCBjdWJpY091dCB9IGZyb20gJy4uL2Vhc2luZyc7XG5pbXBvcnQgeyBpc19mdW5jdGlvbiwgYXNzaWduIH0gZnJvbSAnLi4vaW50ZXJuYWwnO1xuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XG5cbmZ1bmN0aW9uIGJsdXIobm9kZSwgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwLCBlYXNpbmcgPSBjdWJpY0luT3V0LCBhbW91bnQgPSA1LCBvcGFjaXR5ID0gMCB9KSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNvbnN0IHRhcmdldF9vcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG4gICAgY29uc3QgZiA9IHN0eWxlLmZpbHRlciA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS5maWx0ZXI7XG4gICAgY29uc3Qgb2QgPSB0YXJnZXRfb3BhY2l0eSAqICgxIC0gb3BhY2l0eSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKF90LCB1KSA9PiBgb3BhY2l0eTogJHt0YXJnZXRfb3BhY2l0eSAtIChvZCAqIHUpfTsgZmlsdGVyOiAke2Z9IGJsdXIoJHt1ICogYW1vdW50fXB4KTtgXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGZhZGUobm9kZSwgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwLCBlYXNpbmcgPSBsaW5lYXIgfSkge1xuICAgIGNvbnN0IG8gPSArZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5vcGFjaXR5O1xuICAgIHJldHVybiB7XG4gICAgICAgIGRlbGF5LFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgZWFzaW5nLFxuICAgICAgICBjc3M6IHQgPT4gYG9wYWNpdHk6ICR7dCAqIG99YFxuICAgIH07XG59XG5mdW5jdGlvbiBmbHkobm9kZSwgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwLCBlYXNpbmcgPSBjdWJpY091dCwgeCA9IDAsIHkgPSAwLCBvcGFjaXR5ID0gMCB9KSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNvbnN0IHRhcmdldF9vcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcbiAgICBjb25zdCBvZCA9IHRhcmdldF9vcGFjaXR5ICogKDEgLSBvcGFjaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZWxheSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGVhc2luZyxcbiAgICAgICAgY3NzOiAodCwgdSkgPT4gYFxuXHRcdFx0dHJhbnNmb3JtOiAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7KDEgLSB0KSAqIHh9cHgsICR7KDEgLSB0KSAqIHl9cHgpO1xuXHRcdFx0b3BhY2l0eTogJHt0YXJnZXRfb3BhY2l0eSAtIChvZCAqIHUpfWBcbiAgICB9O1xufVxuZnVuY3Rpb24gc2xpZGUobm9kZSwgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwLCBlYXNpbmcgPSBjdWJpY091dCB9KSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICBjb25zdCBoZWlnaHQgPSBwYXJzZUZsb2F0KHN0eWxlLmhlaWdodCk7XG4gICAgY29uc3QgcGFkZGluZ190b3AgPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdUb3ApO1xuICAgIGNvbnN0IHBhZGRpbmdfYm90dG9tID0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgICBjb25zdCBtYXJnaW5fdG9wID0gcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Ub3ApO1xuICAgIGNvbnN0IG1hcmdpbl9ib3R0b20gPSBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpbkJvdHRvbSk7XG4gICAgY29uc3QgYm9yZGVyX3RvcF93aWR0aCA9IHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyVG9wV2lkdGgpO1xuICAgIGNvbnN0IGJvcmRlcl9ib3R0b21fd2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZWxheSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGVhc2luZyxcbiAgICAgICAgY3NzOiB0ID0+IGBvdmVyZmxvdzogaGlkZGVuO2AgK1xuICAgICAgICAgICAgYG9wYWNpdHk6ICR7TWF0aC5taW4odCAqIDIwLCAxKSAqIG9wYWNpdHl9O2AgK1xuICAgICAgICAgICAgYGhlaWdodDogJHt0ICogaGVpZ2h0fXB4O2AgK1xuICAgICAgICAgICAgYHBhZGRpbmctdG9wOiAke3QgKiBwYWRkaW5nX3RvcH1weDtgICtcbiAgICAgICAgICAgIGBwYWRkaW5nLWJvdHRvbTogJHt0ICogcGFkZGluZ19ib3R0b219cHg7YCArXG4gICAgICAgICAgICBgbWFyZ2luLXRvcDogJHt0ICogbWFyZ2luX3RvcH1weDtgICtcbiAgICAgICAgICAgIGBtYXJnaW4tYm90dG9tOiAke3QgKiBtYXJnaW5fYm90dG9tfXB4O2AgK1xuICAgICAgICAgICAgYGJvcmRlci10b3Atd2lkdGg6ICR7dCAqIGJvcmRlcl90b3Bfd2lkdGh9cHg7YCArXG4gICAgICAgICAgICBgYm9yZGVyLWJvdHRvbS13aWR0aDogJHt0ICogYm9yZGVyX2JvdHRvbV93aWR0aH1weDtgXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNjYWxlKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNPdXQsIHN0YXJ0ID0gMCwgb3BhY2l0eSA9IDAgfSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCB0YXJnZXRfb3BhY2l0eSA9ICtzdHlsZS5vcGFjaXR5O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgY29uc3Qgc2QgPSAxIC0gc3RhcnQ7XG4gICAgY29uc3Qgb2QgPSB0YXJnZXRfb3BhY2l0eSAqICgxIC0gb3BhY2l0eSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKF90LCB1KSA9PiBgXG5cdFx0XHR0cmFuc2Zvcm06ICR7dHJhbnNmb3JtfSBzY2FsZSgkezEgLSAoc2QgKiB1KX0pO1xuXHRcdFx0b3BhY2l0eTogJHt0YXJnZXRfb3BhY2l0eSAtIChvZCAqIHUpfVxuXHRcdGBcbiAgICB9O1xufVxuZnVuY3Rpb24gZHJhdyhub2RlLCB7IGRlbGF5ID0gMCwgc3BlZWQsIGR1cmF0aW9uLCBlYXNpbmcgPSBjdWJpY0luT3V0IH0pIHtcbiAgICBjb25zdCBsZW4gPSBub2RlLmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgaWYgKGR1cmF0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHNwZWVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gODAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZHVyYXRpb24gPSBsZW4gLyBzcGVlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZHVyYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbihsZW4pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBkZWxheSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGVhc2luZyxcbiAgICAgICAgY3NzOiAodCwgdSkgPT4gYHN0cm9rZS1kYXNoYXJyYXk6ICR7dCAqIGxlbn0gJHt1ICogbGVufWBcbiAgICB9O1xufVxuZnVuY3Rpb24gY3Jvc3NmYWRlKF9hKSB7XG4gICAgdmFyIHsgZmFsbGJhY2sgfSA9IF9hLCBkZWZhdWx0cyA9IF9fcmVzdChfYSwgW1wiZmFsbGJhY2tcIl0pO1xuICAgIGNvbnN0IHRvX3JlY2VpdmUgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgdG9fc2VuZCA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBjcm9zc2ZhZGUoZnJvbSwgbm9kZSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IGQgPT4gTWF0aC5zcXJ0KGQpICogMzAsIGVhc2luZyA9IGN1YmljT3V0IH0gPSBhc3NpZ24oYXNzaWduKHt9LCBkZWZhdWx0cyksIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHRvID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgZHggPSBmcm9tLmxlZnQgLSB0by5sZWZ0O1xuICAgICAgICBjb25zdCBkeSA9IGZyb20udG9wIC0gdG8udG9wO1xuICAgICAgICBjb25zdCBkdyA9IGZyb20ud2lkdGggLyB0by53aWR0aDtcbiAgICAgICAgY29uc3QgZGggPSBmcm9tLmhlaWdodCAvIHRvLmhlaWdodDtcbiAgICAgICAgY29uc3QgZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgY29uc3Qgb3BhY2l0eSA9ICtzdHlsZS5vcGFjaXR5O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVsYXksXG4gICAgICAgICAgICBkdXJhdGlvbjogaXNfZnVuY3Rpb24oZHVyYXRpb24pID8gZHVyYXRpb24oZCkgOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZyxcbiAgICAgICAgICAgIGNzczogKHQsIHUpID0+IGBcblx0XHRcdFx0b3BhY2l0eTogJHt0ICogb3BhY2l0eX07XG5cdFx0XHRcdHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuXHRcdFx0XHR0cmFuc2Zvcm06ICR7dHJhbnNmb3JtfSB0cmFuc2xhdGUoJHt1ICogZHh9cHgsJHt1ICogZHl9cHgpIHNjYWxlKCR7dCArICgxIC0gdCkgKiBkd30sICR7dCArICgxIC0gdCkgKiBkaH0pO1xuXHRcdFx0YFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmFuc2l0aW9uKGl0ZW1zLCBjb3VudGVycGFydHMsIGludHJvKSB7XG4gICAgICAgIHJldHVybiAobm9kZSwgcGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBpdGVtcy5zZXQocGFyYW1zLmtleSwge1xuICAgICAgICAgICAgICAgIHJlY3Q6IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlcnBhcnRzLmhhcyhwYXJhbXMua2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHJlY3QgfSA9IGNvdW50ZXJwYXJ0cy5nZXQocGFyYW1zLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJwYXJ0cy5kZWxldGUocGFyYW1zLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcm9zc2ZhZGUocmVjdCwgbm9kZSwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIG5vZGUgaXMgZGlzYXBwZWFyaW5nIGFsdG9nZXRoZXJcbiAgICAgICAgICAgICAgICAvLyAoaS5lLiB3YXNuJ3QgY2xhaW1lZCBieSB0aGUgb3RoZXIgbGlzdClcbiAgICAgICAgICAgICAgICAvLyB0aGVuIHdlIG5lZWQgdG8gc3VwcGx5IGFuIG91dHJvXG4gICAgICAgICAgICAgICAgaXRlbXMuZGVsZXRlKHBhcmFtcy5rZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxsYmFjayAmJiBmYWxsYmFjayhub2RlLCBwYXJhbXMsIGludHJvKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBbXG4gICAgICAgIHRyYW5zaXRpb24odG9fc2VuZCwgdG9fcmVjZWl2ZSwgZmFsc2UpLFxuICAgICAgICB0cmFuc2l0aW9uKHRvX3JlY2VpdmUsIHRvX3NlbmQsIHRydWUpXG4gICAgXTtcbn1cblxuZXhwb3J0IHsgYmx1ciwgY3Jvc3NmYWRlLCBkcmF3LCBmYWRlLCBmbHksIHNjYWxlLCBzbGlkZSB9O1xuIiwiPHNjcmlwdD5cbiAgaW1wb3J0IHsgZmFkZSB9IGZyb20gXCJzdmVsdGUvdHJhbnNpdGlvblwiO1xuICBpbXBvcnQgeyBlbGFzdGljT3V0IH0gZnJvbSBcInN2ZWx0ZS9lYXNpbmdcIjtcbiAgbGV0IG1lID0gXCJtZS5wbmdcIjtcbiAgbGV0IHZpc2libGU7XG4gIGxldCB2aXNpYmxlMjtcbiAgZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgY29uc29sZS5sb2codmlzaWJsZSk7XG4gICAgaWYgKHZpc2libGUgPT0gdHJ1ZSkge1xuICAgICAgdmlzaWJsZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2syKCkge1xuICAgIGNvbnNvbGUubG9nKHZpc2libGUyKTtcbiAgICBpZiAodmlzaWJsZTIgPT0gdHJ1ZSkge1xuICAgICAgdmlzaWJsZTIgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlzaWJsZTIgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzcGluKG5vZGUsIHsgZHVyYXRpb24gfSkge1xuICAgIHJldHVybiB7XG4gICAgICBkdXJhdGlvbixcbiAgICAgIGNzczogKHQpID0+IHtcbiAgICAgICAgY29uc3QgZWFzZWQgPSBlbGFzdGljT3V0KHQpO1xuXG4gICAgICAgIHJldHVybiBgXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgke2Vhc2VkfSkgcm90YXRlKCR7ZWFzZWQgKiAxMDgwfWRlZyk7XG5cdFx0XHRcdFx0Y29sb3I6IGhzbChcblx0XHRcdFx0XHRcdCR7fn4odCAqIDM2MCl9LFxuXHRcdFx0XHRcdFx0JHtNYXRoLm1pbigxMDAsIDEwMDAgLSAxMDAwICogdCl9JSxcblx0XHRcdFx0XHRcdCR7TWF0aC5taW4oNTAsIDUwMCAtIDUwMCAqIHQpfSVcblx0XHRcdFx0XHQpO2A7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStDb2RlK1Bybzo0MDAsNzAwXCIpO1xuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMWVtLCAxZnIpKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaGl0ZW0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2UxNTI1ODtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDkwJTtcbiAgICBwYWRkaW5nOiAxJTtcbiAgfVxuICAuaC1taWQgaW1nIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxNDdweDtcbiAgICBiYWNrZ3JvdW5kOiAjZTE1MjU4O1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6ICNmOTg0NWI7XG4gICAgZm9udC1mYW1pbHk6IE1vbmFjbywgTWVubG8sIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgfVxuICAuZ3JpZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAgIC5ncmlkdGl0bGV7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogNTAlO1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG5cbiAgfVxuICAuZ3JpZC1pdGVtIHtcbiAgICBmbGV4OiAxO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAyMyU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFhODAwMDc4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW46IDElO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LXNpemU6IDdwdDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgfVxuICBzZWN0aW9uID4gZGl2IHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG4gIC5idXR0b24ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xuICB9XG48L3N0eWxlPlxuXG48ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJoaXRlbSBoLW1pZFwiPlxuICAgIDxpbWcgc3JjPXttZX0gYWx0PVwiXCIgd2lkdGg9XCIzMCVcIiAvPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiaXRlbSBncmlkdGl0bGVcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OmJvbGQ7XCIgb246Y2xpY2s9e2NoZWNrfT5cbiAgPGRpdiBjbGFzcz1cImJ1dHRvblwiPlRoaW5ncyBJdmUgY3JlYXRlZC48L2Rpdj5cbiAgPGJyIC8+XG4gIHsjaWYgdmlzaWJsZX1cbiAgICA8ZGl2IGluOnNwaW49e3sgZHVyYXRpb246IDgwMDAgfX0gb3V0OmZhZGU+XG4gICAgICA8YVxuICAgICAgICBjbGFzcz1cImdyaWQtaXRlbVwiXG4gICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFaYjlHQ1dQS2VFSjREeW4yVGtULU8zd0o4QUZjLUlNeFp6VHVnTkNqci04L2VkaXQ/dXNwPXNoYXJpbmdcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgUmVzb3VyY2VzXG4gICAgICA8L2E+XG5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPVwiZ3JpZC1pdGVtXCJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS9qZXhpYS9tYXN0ZXItdGhlLXdvcmxkLW9mLWdvbGFuZy1pc3N1ZS05LTJiZGZlYzU2M2MyZVwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICBUdXRvcmlhbHNcbiAgICAgIDwvYT5cblxuICAgICAgPGFcbiAgICAgICAgY2xhc3M9XCJncmlkLWl0ZW1cIlxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRsYWIuY29tL3plbmRydWxhdDEyM1wiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICBHaXRsYWJcbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgey9pZn1cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiaXRlbSBncmlkdGl0bGVcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OmJvbGQ7XCIgb246Y2xpY2s9e2NoZWNrMn0+XG4gIDxkaXYgY2xhc3M9XCJidXR0b25cIj5UZWNoIHRoYXQgSSB1c2UuPC9kaXY+XG4gIDxiciAvPlxuICB7I2lmIHZpc2libGUyfVxuICAgIDxkaXYgY2xhc3M9XCJncmlkXCIgaW46c3Bpbj17eyBkdXJhdGlvbjogODAwMCB9fSBvdXQ6ZmFkZT5cbiAgICAgIDxhIGNsYXNzPVwiZ3JpZC1pdGVtXCIgaHJlZj1cImh0dHBzOi8vdWJ1bnR1LmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgVWJ1bnR1IDIwLjA0XG4gICAgICA8L2E+XG5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPVwiZ3JpZC1pdGVtXCJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vY29kZS52aXN1YWxzdHVkaW8uY29tL1wiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICBWU0NPREVcbiAgICAgIDwvYT5cblxuICAgICAgPGEgY2xhc3M9XCJncmlkLWl0ZW1cIiBocmVmPVwiaHR0cHM6Ly9zdmVsdGUuZGV2L1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICBTVkVMVEVKU1xuICAgICAgPC9hPlxuICAgICAgPGFcbiAgICAgICAgY2xhc3M9XCJncmlkLWl0ZW1cIlxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9zYXBwZXIuc3ZlbHRlLmRldi9kb2NzL1wiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICBTYXBwZXJcbiAgICAgIDwvYT5cblxuICAgICAgPGEgY2xhc3M9XCJncmlkLWl0ZW1cIiBocmVmPVwiaHR0cHM6Ly9nb2xhbmcub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPkdvPC9hPlxuICAgIDwvZGl2PlxuICB7L2lmfVxuPC9kaXY+XG5cbjxwIHN0eWxlPVwid2lkdGg6MTAwJTsgdGV4dC1hbGlnbjpjZW50ZXI7XCI+XG4gIEkndmUgYmVlbiBsb3ZpbmcgR28gKyBTdmVsdGVqcyBpbmNyZWRpYWJseSBhIGxvdC4gTm90IG11Y2ggaXMgc2ltcGxpZXIuIElcbiAgZGVjaWRlZCBteSBuZXh0IHBsYW4gaXMgdG8gd3JpdGUgYmxvZ3MgYWJvdXQgd2hhdCBJIGFtIGxlYXJuaW5nIGFuZCB0aG91Z2h0c1xuICBhYm91dCB0ZWNoLiBUaGVyZSBpcyBhIGxvdCB0aGF0IEkgbG92ZSB0byBkaWcgaW50byBhbmQgYSBsb3QgdGhhdCBJIHRyeSB0b1xuICBsZWFybi5cbjwvcD5cbiJdLCJuYW1lcyI6WyJsaW5lYXIiXSwibWFwcGluZ3MiOiI7O0FBOEVBLFNBQVMsVUFBVSxDQUFDLENBQUMsRUFBRTtBQUN2QixJQUFJLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtBQUMxRjs7QUN0Q0EsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsR0FBRyxFQUFFLE1BQU0sR0FBR0EsUUFBTSxFQUFFLEVBQUU7QUFDcEUsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUM5QyxJQUFJLE9BQU87QUFDWCxRQUFRLEtBQUs7QUFDYixRQUFRLFFBQVE7QUFDaEIsUUFBUSxNQUFNO0FBQ2QsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyQyxLQUFLLENBQUM7QUFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2RUMwRG9CLFFBQVEsRUFBRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkVBNkJELFFBQVEsRUFBRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQTlCeEMsR0FBTzs4QkE2QlAsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQXBDRCxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQUlnRCxHQUFLO3NDQTZCTCxHQUFNOzs7Ozs7O21CQTFCL0QsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQTZCUCxHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFySVQsRUFBRSxHQUFHLFFBQVE7OztLQUNiLE9BQU87S0FDUCxRQUFROztVQUNILEtBQUs7RUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87O01BQ2YsT0FBTyxJQUFJLElBQUk7bUJBQ2pCLE9BQU8sR0FBRyxLQUFLOzttQkFFZixPQUFPLEdBQUcsSUFBSTs7OztVQUdULE1BQU07RUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVE7O01BQ2hCLFFBQVEsSUFBSSxJQUFJO21CQUNsQixRQUFRLEdBQUcsS0FBSzs7bUJBRWhCLFFBQVEsR0FBRyxJQUFJOzs7O1VBR1YsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFROztHQUUxQixRQUFRO0dBQ1IsR0FBRyxFQUFHLENBQUM7VUFDQyxLQUFLLEdBQUcsVUFBVSxDQUFDLENBQUM7Ozt3QkFHVixLQUFLLFlBQVksS0FBSyxHQUFHLElBQUk7O1dBRTFDLENBQUMsR0FBRyxHQUFHO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
