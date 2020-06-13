import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, t as text, a as space, c as claim_element, b as children, g as claim_text, d as detach, f as claim_space, j as set_style, h as attr, k as insert, l as append, n as noop } from './client.525e2485.js';
import '*.svelte';

/* src/routes/bloggy/whygo.svelte generated by Svelte v3.22.3 */

function create_fragment(ctx) {
	let h3;
	let t0;
	let t1;
	let br0;
	let t2;
	let div;
	let t3;
	let p;
	let t4;
	let br1;
	let t5;
	let t6;
	let pre0;
	let code0;

	let t7_value = `type Guitarist struct{Guitarist } //object

func(m Musician) Run(){} // method

type Musician interface { Run()} //interface that uses the method
` + "";

	let t7;
	let t8;
	let ul;
	let li0;
	let t9;
	let t10;
	let li1;
	let t11;
	let t12;
	let li2;
	let t13;
	let t14;
	let pre1;
	let code1;

	let t15_value = `func Service(Musician){ //param is an interface "Type" not an object or just an interface
    fmt.Println(Musician)
}
` + "";

	let t15;
	let t16;
	let br2;
	let t17;
	let br3;
	let t18;
	let pre2;
	let code2;

	let t19_value = `
//you can embed the interface type into the struct
type Guitarist struct{
    Musician
}
` + "";

	let t19;
	let t20;

	return {
		c() {
			h3 = element("h3");
			t0 = text("I Love Go because of it's simplicity.");
			t1 = space();
			br0 = element("br");
			t2 = space();
			div = element("div");
			t3 = text("I Love Go because of it's simplicity.\n");
			p = element("p");
			t4 = text("What does this mean? I am referring to it's api and it's ability to uncouple code.\nWhy is this important? Many developers are bound to the constraints\nto their language and tech stack.  The point is so that when your \nproject gets bigger you are not constrained to what you have already\ncreated.  \n");
			br1 = element("br");
			t5 = text("\nAn example of what I am referring to.");
			t6 = space();
			pre0 = element("pre");
			code0 = element("code");
			t7 = text(t7_value);
			t8 = text("\n\n\nThe three bits of code that are stated are pretty simple.\nbut they are the building blocks to uncoupling code.\n");
			ul = element("ul");
			li0 = element("li");
			t9 = text("1. struct");
			t10 = space();
			li1 = element("li");
			t11 = text("2. method");
			t12 = space();
			li2 = element("li");
			t13 = text("3. interface");
			t14 = text("\n\n\nLets say you are building a Service on Musican.\n");
			pre1 = element("pre");
			code1 = element("code");
			t15 = text(t15_value);
			t16 = text("\nMeaning....");
			br2 = element("br");
			t17 = text("\nWe used the interface Musician to allow for any struct with run() to be passed in.\nA lot of poeple miss this point when seeing the word interface because of it's\ndifferent meaning in other languages.  \n\nThis allows for not having to think about your data or concrete data type.\nSomething many languages you are tied to.\n\n");
			br3 = element("br");
			t18 = text("\nAnother thing a lot of people miss from other languages is that you can do embedding \non this interface type.\n\n");
			pre2 = element("pre");
			code2 = element("code");
			t19 = text(t19_value);
			t20 = text("\n\nBy doing so you are attempting to turn an interface \"type\" into a value.\nA value that initally");
			this.h();
		},
		l(nodes) {
			h3 = claim_element(nodes, "H3", { style: true });
			var h3_nodes = children(h3);
			t0 = claim_text(h3_nodes, "I Love Go because of it's simplicity.");
			h3_nodes.forEach(detach);
			t1 = claim_space(nodes);
			br0 = claim_element(nodes, "BR", {});
			t2 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t3 = claim_text(div_nodes, "I Love Go because of it's simplicity.\n");
			p = claim_element(div_nodes, "P", {});
			var p_nodes = children(p);
			t4 = claim_text(p_nodes, "What does this mean? I am referring to it's api and it's ability to uncouple code.\nWhy is this important? Many developers are bound to the constraints\nto their language and tech stack.  The point is so that when your \nproject gets bigger you are not constrained to what you have already\ncreated.  \n");
			br1 = claim_element(p_nodes, "BR", {});
			t5 = claim_text(p_nodes, "\nAn example of what I am referring to.");
			p_nodes.forEach(detach);
			t6 = claim_space(div_nodes);
			pre0 = claim_element(div_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			code0 = claim_element(pre0_nodes, "CODE", { class: true });
			var code0_nodes = children(code0);
			t7 = claim_text(code0_nodes, t7_value);
			code0_nodes.forEach(detach);
			pre0_nodes.forEach(detach);
			t8 = claim_text(div_nodes, "\n\n\nThe three bits of code that are stated are pretty simple.\nbut they are the building blocks to uncoupling code.\n");
			ul = claim_element(div_nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			t9 = claim_text(li0_nodes, "1. struct");
			li0_nodes.forEach(detach);
			t10 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			t11 = claim_text(li1_nodes, "2. method");
			li1_nodes.forEach(detach);
			t12 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			t13 = claim_text(li2_nodes, "3. interface");
			li2_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			t14 = claim_text(div_nodes, "\n\n\nLets say you are building a Service on Musican.\n");
			pre1 = claim_element(div_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			code1 = claim_element(pre1_nodes, "CODE", { class: true });
			var code1_nodes = children(code1);
			t15 = claim_text(code1_nodes, t15_value);
			code1_nodes.forEach(detach);
			pre1_nodes.forEach(detach);
			t16 = claim_text(div_nodes, "\nMeaning....");
			br2 = claim_element(div_nodes, "BR", {});
			t17 = claim_text(div_nodes, "\nWe used the interface Musician to allow for any struct with run() to be passed in.\nA lot of poeple miss this point when seeing the word interface because of it's\ndifferent meaning in other languages.  \n\nThis allows for not having to think about your data or concrete data type.\nSomething many languages you are tied to.\n\n");
			br3 = claim_element(div_nodes, "BR", {});
			t18 = claim_text(div_nodes, "\nAnother thing a lot of people miss from other languages is that you can do embedding \non this interface type.\n\n");
			pre2 = claim_element(div_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			code2 = claim_element(pre2_nodes, "CODE", { class: true });
			var code2_nodes = children(code2);
			t19 = claim_text(code2_nodes, t19_value);
			code2_nodes.forEach(detach);
			pre2_nodes.forEach(detach);
			t20 = claim_text(div_nodes, "\n\nBy doing so you are attempting to turn an interface \"type\" into a value.\nA value that initally");
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			set_style(h3, "text-decoration", "underline");
			attr(code0, "class", "svelte-p8wa68");
			attr(pre0, "class", "svelte-p8wa68");
			attr(code1, "class", "svelte-p8wa68");
			attr(pre1, "class", "svelte-p8wa68");
			attr(code2, "class", "svelte-p8wa68");
			attr(pre2, "class", "svelte-p8wa68");
			attr(div, "class", "body svelte-p8wa68");
		},
		m(target, anchor) {
			insert(target, h3, anchor);
			append(h3, t0);
			insert(target, t1, anchor);
			insert(target, br0, anchor);
			insert(target, t2, anchor);
			insert(target, div, anchor);
			append(div, t3);
			append(div, p);
			append(p, t4);
			append(p, br1);
			append(p, t5);
			append(div, t6);
			append(div, pre0);
			append(pre0, code0);
			append(code0, t7);
			append(div, t8);
			append(div, ul);
			append(ul, li0);
			append(li0, t9);
			append(ul, t10);
			append(ul, li1);
			append(li1, t11);
			append(ul, t12);
			append(ul, li2);
			append(li2, t13);
			append(div, t14);
			append(div, pre1);
			append(pre1, code1);
			append(code1, t15);
			append(div, t16);
			append(div, br2);
			append(div, t17);
			append(div, br3);
			append(div, t18);
			append(div, pre2);
			append(pre2, code2);
			append(code2, t19);
			append(div, t20);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(h3);
			if (detaching) detach(t1);
			if (detaching) detach(br0);
			if (detaching) detach(t2);
			if (detaching) detach(div);
		}
	};
}

class Whygo extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Whygo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2h5Z28uZjk3YzQ1MWUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
