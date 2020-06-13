import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, e as element, t as text, q as query_selector_all, d as detach, f as claim_space, c as claim_element, b as children, g as claim_text, h as attr, k as insert, l as append, n as noop } from './client.874ac133.js';

/* src/routes/about.svelte generated by Svelte v3.22.3 */

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let div1;
	let div0;
	let t3;
	let t4;
	let br0;
	let t5;
	let div3;
	let div2;
	let t6;
	let t7;
	let br1;
	let t8;
	let div5;
	let div4;
	let t9;

	return {
		c() {
			t0 = space();
			h1 = element("h1");
			t1 = text("About Me");
			t2 = space();
			div1 = element("div");
			div0 = element("div");
			t3 = text("Hi, I just wanted a way to \n  communicate the things I love and What I enjoy\n  doing/learning.  I think a lot of what people call\n  intelligence really boils down to curiousity.");
			t4 = space();
			br0 = element("br");
			t5 = space();
			div3 = element("div");
			div2 = element("div");
			t6 = text("Poeple's minds are like muscles and \n  people have to be careful when they don't exercise them.\n  If you embrace the growth mindset and understand that learning\n   is a process that requires effort, you're better prepared to\n    take on new challenges.");
			t7 = space();
			br1 = element("br");
			t8 = space();
			div5 = element("div");
			div4 = element("div");
			t9 = text("This is why i always enjoy sharing and teaching.\n  It is what continues to be the bases for computer enjoyment.");
			this.h();
		},
		l(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ine71f\"]", document.head);
			head_nodes.forEach(detach);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "About Me");
			h1_nodes.forEach(detach);
			t2 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t3 = claim_text(div0_nodes, "Hi, I just wanted a way to \n  communicate the things I love and What I enjoy\n  doing/learning.  I think a lot of what people call\n  intelligence really boils down to curiousity.");
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t4 = claim_space(nodes);
			br0 = claim_element(nodes, "BR", {});
			t5 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			t6 = claim_text(div2_nodes, "Poeple's minds are like muscles and \n  people have to be careful when they don't exercise them.\n  If you embrace the growth mindset and understand that learning\n   is a process that requires effort, you're better prepared to\n    take on new challenges.");
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t7 = claim_space(nodes);
			br1 = claim_element(nodes, "BR", {});
			t8 = claim_space(nodes);
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			t9 = claim_text(div4_nodes, "This is why i always enjoy sharing and teaching.\n  It is what continues to be the bases for computer enjoyment.");
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			this.h();
		},
		h() {
			document.title = "About";
			attr(div0, "class", "item svelte-zihk3l");
			attr(div1, "class", "body svelte-zihk3l");
			attr(div2, "class", "item svelte-zihk3l");
			attr(div3, "class", "body svelte-zihk3l");
			attr(div4, "class", "item svelte-zihk3l");
			attr(div5, "class", "body svelte-zihk3l");
		},
		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			insert(target, div1, anchor);
			append(div1, div0);
			append(div0, t3);
			insert(target, t4, anchor);
			insert(target, br0, anchor);
			insert(target, t5, anchor);
			insert(target, div3, anchor);
			append(div3, div2);
			append(div2, t6);
			insert(target, t7, anchor);
			insert(target, br1, anchor);
			insert(target, t8, anchor);
			insert(target, div5, anchor);
			append(div5, div4);
			append(div4, t9);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(h1);
			if (detaching) detach(t2);
			if (detaching) detach(div1);
			if (detaching) detach(t4);
			if (detaching) detach(br0);
			if (detaching) detach(t5);
			if (detaching) detach(div3);
			if (detaching) detach(t7);
			if (detaching) detach(br1);
			if (detaching) detach(t8);
			if (detaching) detach(div5);
		}
	};
}

class About extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuMjU4NDFhOTQuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
