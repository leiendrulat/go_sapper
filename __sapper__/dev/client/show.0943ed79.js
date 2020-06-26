import { S as SvelteComponent, a as init, s as safe_not_equal, e as element, t as text, b as space, c as claim_element, d as children, f as claim_text, h as claim_space, g as detach, k as insert, l as append, A as set_data, D as empty, y as noop, B as destroy_each, E as create_component, F as claim_component, G as mount_component, p as transition_in, q as transition_out, H as destroy_component } from './client.91f96ea9.js';

/* src/routes/_getapi.svelte generated by Svelte v3.23.2 */

let arrays = [];

async function getResult(s) {
	let response = await fetch(s);
	let text = await response.json();

	if (response.ok) {
		console.log(text);
		return text;
	} else {
		throw new Error(text);
	}
}

arrays = getResult();

/* src/routes/_api.svelte generated by Svelte v3.23.2 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i].name;
	child_ctx[4] = list[i].email;
	child_ctx[5] = list[i].pass;
	child_ctx[7] = i;
	return child_ctx;
}

// (11:0) {#each ff as {name, email, pass}
function create_each_block(ctx) {
	let ul;
	let li;
	let t0;
	let t1;
	let t2_value = /*name*/ ctx[3] + "";
	let t2;
	let t3;
	let t4_value = /*email*/ ctx[4] + "";
	let t4;
	let t5;
	let t6_value = /*pass*/ ctx[5] + "";
	let t6;
	let t7;

	return {
		c() {
			ul = element("ul");
			li = element("li");
			t0 = text(/*i*/ ctx[7]);
			t1 = text(": ");
			t2 = text(t2_value);
			t3 = space();
			t4 = text(t4_value);
			t5 = space();
			t6 = text(t6_value);
			t7 = space();
		},
		l(nodes) {
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);
			li = claim_element(ul_nodes, "LI", {});
			var li_nodes = children(li);
			t0 = claim_text(li_nodes, /*i*/ ctx[7]);
			t1 = claim_text(li_nodes, ": ");
			t2 = claim_text(li_nodes, t2_value);
			t3 = claim_space(li_nodes);
			t4 = claim_text(li_nodes, t4_value);
			t5 = claim_space(li_nodes);
			t6 = claim_text(li_nodes, t6_value);
			li_nodes.forEach(detach);
			t7 = claim_space(ul_nodes);
			ul_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, ul, anchor);
			append(ul, li);
			append(li, t0);
			append(li, t1);
			append(li, t2);
			append(li, t3);
			append(li, t4);
			append(li, t5);
			append(li, t6);
			append(ul, t7);
		},
		p(ctx, dirty) {
			if (dirty & /*ff*/ 1 && t2_value !== (t2_value = /*name*/ ctx[3] + "")) set_data(t2, t2_value);
			if (dirty & /*ff*/ 1 && t4_value !== (t4_value = /*email*/ ctx[4] + "")) set_data(t4, t4_value);
			if (dirty & /*ff*/ 1 && t6_value !== (t6_value = /*pass*/ ctx[5] + "")) set_data(t6, t6_value);
		},
		d(detaching) {
			if (detaching) detach(ul);
		}
	};
}

function create_fragment(ctx) {
	let each_1_anchor;
	let each_value = /*ff*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (dirty & /*ff*/ 1) {
				each_value = /*ff*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
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
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let actualtt = getResult("http://localhost:8081/api");
	let ff = [];

	var promise = Promise.resolve(actualtt).then(function (val) {
		console.log(val);
		$$invalidate(0, ff = val);
	});

	return [ff];
}

class Api extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

/* src/routes/show.svelte generated by Svelte v3.23.2 */

function create_fragment$1(ctx) {
	let apis;
	let current;
	apis = new Api({});

	return {
		c() {
			create_component(apis.$$.fragment);
		},
		l(nodes) {
			claim_component(apis.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(apis, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(apis.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(apis.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(apis, detaching);
		}
	};
}

class Show extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment$1, safe_not_equal, {});
	}
}

export default Show;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy4wOTQzZWQ3OS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9fZ2V0YXBpLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvX2FwaS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5sZXQgYXJyYXlzID0gW107XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVzdWx0KHMpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocyk7XG4gICAgICAgIGxldCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHQgaWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0IGNvbnNvbGUubG9nKHRleHQpO1xuXHRcdFx0XHQgXHRcdHJldHVybiB0ZXh0XG5cdFx0XHRcdCB9IGVsc2Uge1xuXHRcdFx0XHRcdCB0aHJvdyBuZXcgRXJyb3IodGV4dCk7XG5cdFx0XHRcdCB9XG5cdH1cbiBhcnJheXMgPSBnZXRSZXN1bHQoKTtcbiBleHBvcnQgY29uc3QgYWN0dWFsYXBpID0gYXJyYXlzO1x0XG48L3NjcmlwdD4iLCI8c2NyaXB0PlxuXHRpbXBvcnQgQXBpcywge2FjdHVhbGFwaSwgZ2V0UmVzdWx0fSBmcm9tIFwiLi9fZ2V0YXBpLnN2ZWx0ZVwiO1xuXHRsZXQgYWN0dWFsdHQgPSBnZXRSZXN1bHQoXCJodHRwOi8vbG9jYWxob3N0OjgwODEvYXBpXCIpO1xuXHRsZXQgZmYgPSBbXTtcblx0dmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoYWN0dWFsdHQpLnRoZW4oZnVuY3Rpb24odmFsKSB7IFxuXHRcdFx0Y29uc29sZS5sb2codmFsKTsgXG5cdFx0ZmYgPSB2YWw7XG5cdH0pOyAgXG48L3NjcmlwdD5cblxueyNlYWNoIGZmIGFzIHtuYW1lLCBlbWFpbCwgcGFzc30sIGkgfVxuIDx1bD5cbiA8bGk+e2l9OiB7bmFtZX0ge2VtYWlsfSB7cGFzc308L2xpPlxuIDwvdWw+XG4gey9lYWNofSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBQ0ksTUFBTTs7ZUFDWSxTQUFTLENBQUMsQ0FBQztLQUNyQixRQUFRLFNBQVMsS0FBSyxDQUFDLENBQUM7S0FDeEIsSUFBSSxTQUFTLFFBQVEsQ0FBQyxJQUFJOztLQUM3QixRQUFRLENBQUMsRUFBRTtFQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTtTQUNSLElBQUk7O1lBRUYsS0FBSyxDQUFDLElBQUk7Ozs7QUFHekIsTUFBTSxHQUFHLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJDQVIsR0FBSTs7OzBCQUFHLEdBQUs7Ozt5QkFBRyxHQUFJOzs7Ozs7OzttQkFBeEIsR0FBQzs7Ozs7Ozs7Ozs7Ozs7bUNBQUQsR0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZEQUFJLEdBQUk7OERBQUcsR0FBSzs2REFBRyxHQUFJOzs7Ozs7Ozs7O3lCQUZ2QixHQUFFOzs7Z0NBQVAsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFBQyxHQUFFOzs7K0JBQVAsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7O0tBUkQsUUFBUSxHQUFHLFNBQVMsQ0FBQywyQkFBMkI7S0FDaEQsRUFBRTs7S0FDRixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxXQUFVLEdBQUc7RUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHO2tCQUNoQixFQUFFLEdBQUcsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
