import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, t as text, c as claim_element, b as children, g as claim_text, d as detach, h as attr, k as insert, l as append, m as set_data, a as space, q as query_selector_all, f as claim_space, n as noop, o as destroy_each } from './client.eda3848e.js';

/* src/routes/blogs/index.svelte generated by Svelte v3.22.3 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (27:1) {#each blogs as blog}
function create_each_block(ctx) {
	let li;
	let a;
	let t_value = /*blog*/ ctx[1].title + "";
	let t;
	let a_href_value;

	return {
		c() {
			li = element("li");
			a = element("a");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			li = claim_element(nodes, "LI", {});
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { rel: true, href: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach);
			li_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "rel", "prefetch");
			attr(a, "href", a_href_value = "blogs/" + /*blog*/ ctx[1].slug);
		},
		m(target, anchor) {
			insert(target, li, anchor);
			append(li, a);
			append(a, t);
		},
		p(ctx, dirty) {
			if (dirty & /*blogs*/ 1 && t_value !== (t_value = /*blog*/ ctx[1].title + "")) set_data(t, t_value);

			if (dirty & /*blogs*/ 1 && a_href_value !== (a_href_value = "blogs/" + /*blog*/ ctx[1].slug)) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li);
		}
	};
}

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let ul;
	let each_value = /*blogs*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Recent posts");
			t2 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-hfp9t8\"]", document.head);
			head_nodes.forEach(detach);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Recent posts");
			h1_nodes.forEach(detach);
			t2 = claim_space(nodes);
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach);
			this.h();
		},
		h() {
			document.title = "Blog";
			attr(ul, "class", "svelte-1frg2tf");
		},
		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			insert(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*blogs*/ 1) {
				each_value = /*blogs*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(h1);
			if (detaching) detach(t2);
			if (detaching) detach(ul);
			destroy_each(each_blocks, detaching);
		}
	};
}

function preload({ params, query }) {
	return this.fetch(`blogs.json`).then(r => r.json()).then(blogs => {
		return { blogs };
	});
}

function instance($$self, $$props, $$invalidate) {
	let { blogs } = $$props;

	$$self.$set = $$props => {
		if ("blogs" in $$props) $$invalidate(0, blogs = $$props.blogs);
	};

	return [blogs];
}

class Blogs extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { blogs: 0 });
	}
}

export default Blogs;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZDljZGY2YTkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZ3MvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBibG9ncy5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKGJsb2dzID0+IHtcblx0XHRcdHJldHVybiB7IGJsb2dzIH07XG5cdFx0fSk7XG5cdH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRleHBvcnQgbGV0IGJsb2dzO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0dWwge1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkJsb2c8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGgxPlJlY2VudCBwb3N0czwvaDE+XG5cbjx1bD5cblx0eyNlYWNoIGJsb2dzIGFzIGJsb2d9XG5cdFx0PCEtLSB3ZSdyZSB1c2luZyB0aGUgbm9uLXN0YW5kYXJkIGByZWw9cHJlZmV0Y2hgIGF0dHJpYnV0ZSB0b1xuXHRcdFx0XHR0ZWxsIFNhcHBlciB0byBsb2FkIHRoZSBkYXRhIGZvciB0aGUgcGFnZSBhcyBzb29uIGFzXG5cdFx0XHRcdHRoZSB1c2VyIGhvdmVycyBvdmVyIHRoZSBsaW5rIG9yIHRhcHMgaXQsIGluc3RlYWQgb2Zcblx0XHRcdFx0d2FpdGluZyBmb3IgdGhlICdjbGljaycgZXZlbnQgLS0+XG5cdFx0PGxpPjxhIHJlbD0ncHJlZmV0Y2gnIGhyZWY9J2Jsb2dzL3tibG9nLnNsdWd9Jz57YmxvZy50aXRsZX08L2E+PC9saT5cblx0ey9lYWNofVxuPC91bD4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7d0JBK0JrRCxHQUFJLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBQXZCLEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs4REFBSSxHQUFJLElBQUMsS0FBSzs7bUZBQXZCLEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzRCQUx0QyxHQUFLOzs7Z0NBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUFDLEdBQUs7OzsrQkFBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7OztTQXpCVSxPQUFPLEdBQUcsTUFBTSxFQUFFLEtBQUs7UUFDL0IsSUFBSSxDQUFDLEtBQUssZUFBZSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUs7V0FDcEQsS0FBSzs7Ozs7T0FNTCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
