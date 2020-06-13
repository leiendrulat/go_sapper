import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, t as text, a as space, c as claim_element, b as children, g as claim_text, d as detach, f as claim_space, h as attr, k as insert, l as append, n as noop } from './client.c7c9bae0.js';

/* src/routes/bloggy.svelte generated by Svelte v3.22.3 */

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let ul;
	let li;
	let a;
	let t2;

	return {
		c() {
			h1 = element("h1");
			t0 = text("Welcome to my blog");
			t1 = space();
			ul = element("ul");
			li = element("li");
			a = element("a");
			t2 = text("Why Go?");
			this.h();
		},
		l(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Welcome to my blog");
			h1_nodes.forEach(detach);
			t1 = claim_space(nodes);
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);
			li = claim_element(ul_nodes, "LI", {});
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { href: true });
			var a_nodes = children(a);
			t2 = claim_text(a_nodes, "Why Go?");
			a_nodes.forEach(detach);
			li_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", "/bloggy/whygo");
		},
		m(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, ul, anchor);
			append(ul, li);
			append(li, a);
			append(a, t2);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(h1);
			if (detaching) detach(t1);
			if (detaching) detach(ul);
		}
	};
}

class Bloggy extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Bloggy;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZ2d5LmFkYzJhMTJiLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
