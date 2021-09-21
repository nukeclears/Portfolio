(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[556],{556:function(t,a,r){"use strict";r.r(a),r.d(a,{default:function(){return s}});var n={name:"ProductCard",props:{brand:String,product:String,selectedVariant:Number,variants:Array,index:0},data:function(){return{}},methods:{updateProduct:function(t){this.selectedVariant=t},buttonClicked:function(){this.$emit("button-clicked",{brand:this.brand,name:this.product,variant:this.variants[this.selectedVariant]})}},computed:{title:function(){return this.brand+" - "+this.product},Image:function(){return this.variants[this.selectedVariant].variantImage},inStock:function(){return this.variants[this.selectedVariant].variantQuantity},onSale:function(){return this.variants[this.selectedVariant].variantSale}}},i=r(900),e={name:"Products",components:{ProductCard:(0,i.Z)(n,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"card lg:card-side bordered"},[r("figure",{staticClass:"overflow-hidden"},[r("img",{staticClass:"w-48 max-h-96 object-cover",attrs:{src:t.Image}})]),t._v(" "),r("div",{staticClass:"card-body"},[r("h2",{staticClass:"card-title text-4xl mb-5"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"flex flex-col h-full"},[r("div",{staticClass:"flex flex-col gap-y-6 flex-1"},[r("div",[t.inStock>10?r("p",{staticClass:"badge badge-success"},[t._v("In stock")]):t.inStock<=10&&t.inStock>0?r("p",{staticClass:"badge badge-warning"},[t._v("\n            Almost out!\n          ")]):r("p",{staticClass:"badge badge-error",class:{"line-through":t.inStock<=0}},[t._v("\n            Out of stock\n          ")])]),t._v(" "),r("div",{staticClass:"flex gap-x-4 mb-5"},t._l(t.variants,(function(a,n){return r("div",{key:a.variantId},[r("div",{staticClass:"h-6 w-6 rounded-full border border-white",style:{backgroundColor:a.variantColor},on:{mouseover:function(a){return t.updateProduct(n)}}})])})),0)]),t._v(" "),t.onSale?r("p",{staticClass:"alert alert-success"},[t._v("On sale!")]):t._e(),t._v(" "),r("div",{staticClass:"card-actions"},[r("a",[r("button",{staticClass:"btn btn-primary",attrs:{disabled:t.inStock<=0},on:{click:function(a){return t.buttonClicked()}}},[t._v("\n            Add to Cart\n          ")])])])])])])}),[],!1,null,null,null).exports},methods:{addToCart:function(t){this.$emit("update-cart",t)}},data:function(){return{Productitems:{productone:{brand:"Vue",product:"Socks",selectedVariant:0,variants:[{variantId:2234,variantColor:"green",variantImage:r(31),variantSale:!0,variantQuantity:12},{variantId:2235,variantColor:"blue",variantImage:r(905),variantSale:!1,variantQuantity:0},{variantId:2236,variantColor:"red",variantImage:r(905),variantSale:!1,variantQuantity:4}]},producttwo:{brand:"Vue",product:"Smocks",selectedVariant:0,variants:[{variantId:2235,variantColor:"blue",variantImage:r(905),variantSale:!1,variantQuantity:1},{variantId:2234,variantColor:"green",variantImage:r(31),variantSale:!1,variantQuantity:0},{variantId:2236,variantColor:"red",variantImage:r(905),variantSale:!1,variantQuantity:4}]},productThree:{brand:"Thomas",product:"Hat",selectedVariant:0,variants:[{variantId:2145,variantColor:"Blue",variantImage:r(300),variantSale:!1,variantQuantity:0},{variantId:6421,variantColor:"Pink",variantImage:r(580),variantSale:!0,variantQuantity:99}]}}}}},s=(0,i.Z)(e,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"container px-5 md:px-0"},[r("div",{staticClass:"grid grid-cols-1 lg:grid-cols-2 gap-9 py-10"},t._l(t.Productitems,(function(a){return r("ProductCard",{key:a.product,attrs:{brand:a.brand,product:a.product,selectedVariant:a.selectedVariant,variants:a.variants},on:{"button-clicked":t.addToCart}})})),1)])}),[],!1,null,null,null).exports},300:function(t,a,r){"use strict";t.exports=r.p+"ea391382470b70cf0ff0.jpg"},580:function(t,a,r){"use strict";t.exports=r.p+"538df85b4c2048fb7a75.png"},905:function(t,a,r){"use strict";t.exports=r.p+"3f459ff13d4c5d6510d7.png"},31:function(t,a,r){"use strict";t.exports=r.p+"e20aca3c6f5dde576d03.png"}}]);