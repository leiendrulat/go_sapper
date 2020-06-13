import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, e as element, t as text, q as query_selector_all, d as detach, f as claim_space, c as claim_element, b as children, g as claim_text, h as attr, k as insert, l as append, m as set_data, n as noop } from './client.d52fdaca.js';

/* src/routes/blogs/[slug].svelte generated by Svelte v3.22.3 */

function create_fragment(ctx) {
	let title_value;
	let t0;
	let h1;
	let t1_value = /*blog*/ ctx[0].title + "";
	let t1;
	let t2;
	let div;
	let raw_value = /*blog*/ ctx[0].html + "";
	document.title = title_value = /*blog*/ ctx[0].title;

	return {
		c() {
			t0 = space();
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			div = element("div");
			this.h();
		},
		l(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-zfcp88\"]", document.head);
			head_nodes.forEach(detach);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach);
			t2 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "content svelte-gnxal1");
		},
		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			insert(target, div, anchor);
			div.innerHTML = raw_value;
		},
		p(ctx, [dirty]) {
			if (dirty & /*blog*/ 1 && title_value !== (title_value = /*blog*/ ctx[0].title)) {
				document.title = title_value;
			}

			if (dirty & /*blog*/ 1 && t1_value !== (t1_value = /*blog*/ ctx[0].title + "")) set_data(t1, t1_value);
			if (dirty & /*blog*/ 1 && raw_value !== (raw_value = /*blog*/ ctx[0].html + "")) div.innerHTML = raw_value;		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(h1);
			if (detaching) detach(t2);
			if (detaching) detach(div);
		}
	};
}

async function preload({ params, query }) {
	// the `slug` parameter is available because
	// this file is called [slug].svelte
	const res = await this.fetch(`blogy/${params.slug}.json`);

	const data = await res.json();

	if (res.status === 200) {
		return { blog: data };
	} else {
		this.error(res.status, data.message);
	}
}

function instance($$self, $$props, $$invalidate) {
	let { blog } = $$props;

	$$self.$set = $$props => {
		if ("blog" in $$props) $$invalidate(0, blog = $$props.blog);
	};

	return [blog];
}

class U5Bslugu5D extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { blog: 0 });
	}
}

export default U5Bslugu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLjhmOWU3ZmFlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2Jsb2dzL1tzbHVnXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG5cdFx0Ly8gdGhlIGBzbHVnYCBwYXJhbWV0ZXIgaXMgYXZhaWxhYmxlIGJlY2F1c2Vcblx0XHQvLyB0aGlzIGZpbGUgaXMgY2FsbGVkIFtzbHVnXS5zdmVsdGVcblx0XHRjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGBibG9neS8ke3BhcmFtcy5zbHVnfS5qc29uYCk7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cblx0XHRpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRyZXR1cm4geyBibG9nOiBkYXRhIH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZXJyb3IocmVzLnN0YXR1cywgZGF0YS5tZXNzYWdlKTtcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRleHBvcnQgbGV0IGJsb2c7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQvKlxuXHRcdEJ5IGRlZmF1bHQsIENTUyBpcyBsb2NhbGx5IHNjb3BlZCB0byB0aGUgY29tcG9uZW50LFxuXHRcdGFuZCBhbnkgdW51c2VkIHN0eWxlcyBhcmUgZGVhZC1jb2RlLWVsaW1pbmF0ZWQuXG5cdFx0SW4gdGhpcyBwYWdlLCBTdmVsdGUgY2FuJ3Qga25vdyB3aGljaCBlbGVtZW50cyBhcmVcblx0XHRnb2luZyB0byBhcHBlYXIgaW5zaWRlIHRoZSB7e3twb3N0Lmh0bWx9fX0gYmxvY2ssXG5cdFx0c28gd2UgaGF2ZSB0byB1c2UgdGhlIDpnbG9iYWwoLi4uKSBtb2RpZmllciB0byB0YXJnZXRcblx0XHRhbGwgZWxlbWVudHMgaW5zaWRlIC5jb250ZW50XG5cdCovXG5cdC5jb250ZW50IDpnbG9iYWwoaDIpIHtcblx0XHRmb250LXNpemU6IDEuNGVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdH1cblxuXHQuY29udGVudCA6Z2xvYmFsKHByZSkge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjA1KTtcblx0XHRwYWRkaW5nOiAwLjVlbTtcblx0XHRib3JkZXItcmFkaXVzOiAycHg7XG5cdFx0b3ZlcmZsb3cteDogYXV0bztcblx0fVxuXG5cdC5jb250ZW50IDpnbG9iYWwocHJlKSA6Z2xvYmFsKGNvZGUpIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG5cblx0LmNvbnRlbnQgOmdsb2JhbCh1bCkge1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdH1cblxuXHQuY29udGVudCA6Z2xvYmFsKGxpKSB7XG5cdFx0bWFyZ2luOiAwIDAgMC41ZW0gMDtcblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+e2Jsb2cudGl0bGV9PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT57YmxvZy50aXRsZX08L2gxPlxuXG48ZGl2IGNsYXNzPSdjb250ZW50Jz5cblx0e0BodG1sIGJsb2cuaHRtbH1cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3lCQTJESyxHQUFJLElBQUMsS0FBSzs7OzswQkFHUCxHQUFJLElBQUMsSUFBSTt5Q0FOUixHQUFJLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxRUFBVixHQUFJLElBQUMsS0FBSzs7OzsrREFHZCxHQUFJLElBQUMsS0FBSztpRUFHUCxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7O2VBN0RNLE9BQU8sR0FBRyxNQUFNLEVBQUUsS0FBSzs7O09BR3RDLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxVQUFVLE1BQU0sQ0FBQyxJQUFJOztPQUMzQyxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUk7O0tBRXZCLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRztXQUNaLElBQUksRUFBRSxJQUFJOztFQUVuQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87Ozs7O09BTTFCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
