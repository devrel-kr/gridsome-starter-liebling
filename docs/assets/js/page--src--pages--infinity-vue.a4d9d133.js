(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+6fq":function(t,e,a){"use strict";a("oVuX"),a("sMBO");var r={props:{record:{}},computed:{authors:function(){for(var t=[],e=0;e<this.record.author.length;e++)0==e?t.push("Posted by ".concat(this.record.author[e].name)):1==e?t.push("<br> Among with ".concat(this.record.author[e].name)):t.push(", ".concat(this.record.author[e].name));return t.join("")}}},o=a("KHd+"),s=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-full md:w-1/2 lg:w-1/3 px-4 my-4"},[a("div",{staticClass:"post-card border-gray-200 dark:border-gray-900 bg-white dark:bg-black rounded-lg hover:shadow-xl z-100 dark:bg-gray-900",attrs:{id:t.record.id}},[a("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{classes:"card-author-tooltip",content:this.authors,placement:"right"},expression:"{classes:'card-author-tooltip', content:this.authors, placement:'right'}"}],staticClass:"post-card-author pt-4 pl-4"},[a("g-link",{attrs:{to:t.record.author[0].path},on:{mouseover:function(e){t.showTooltip=!0},mouseleave:function(e){t.showTooltip=!1}},nativeOn:{mouseover:function(e){t.showTooltip=!0},mouseleave:function(e){t.showTooltip=!1}}},[a("g-image",{staticClass:"w-8 h-8 rounded-full bg-gray-200 border-2 border-white",attrs:{src:t.record.author[0].image,alt:t.record.author[0].name}})],1)],1),a("g-link",{staticClass:"post-card-image-link",attrs:{to:t.record.path}},[t.record.featured?a("div",{staticClass:"absolute top-0 right-0 pr-4 pt-4 z-10"},[a("span",{staticClass:"w-6 h-6 relative block text-center leading-tight bg-white border border-gray-300 text-black rounded-full"},[a("font-awesome",{attrs:{icon:["fas","star"],size:"xs"}})],1)]):t._e(),a("g-image",{staticClass:"post-card-image",attrs:{src:t.record.image,alt:t.record.title}})],1),a("div",{staticClass:"post-card-content bg-white dark:bg-gray-900 h-full rounded-b-lg"},[a("div",{staticClass:"flex-col relative flex justify-between px-6 pt-4"},[a("p",{staticClass:"text-xs tracking-wide font-medium mt-3 dark:text-white"},[a("g-link",{attrs:{to:t.record.category.path}},[t._v(t._s(t.record.category.title))])],1)]),a("g-link",{staticClass:"flex-col relative flex justify-between rounded-b-lg px-6 h-40 mt-2 dark:text-white",attrs:{to:t.record.path}},[a("h3",{staticClass:"post-card-title tracking-wide mt-0"},[t._v(t._s(t.record.title))]),a("div",{staticClass:"text-xs leading-none absolute bottom-0 pb-6"},[a("p",[a("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.humanTime))]),t._v("\n             • \n            "+t._s(t.record.timeToRead)+" min read\n          ")])])])],1)],1)])}),[],!1,null,null,null);e.a=s.exports},"98NV":function(t,e,a){"use strict";a("RPQ5")},DaJ5:function(t,e,a){"use strict";a("oVuX"),a("sMBO");var r=a("p6sL"),o={props:{records:{}},components:{VueSlickCarousel:a.n(r).a},methods:{authors:function(t){for(var e=[],a=0;a<t.author.length;a++)0==a?e.push("Posted by ".concat(t.author[a].name)):1==a?e.push("<br> Among with ".concat(t.author[a].name)):e.push(", ".concat(t.author[a].name));return e.join("")}}},s=a("KHd+"),i=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-full lg:w-2/3 px-4 my-4 items-stretch"},[a("div",{staticClass:"featured-post-card bg-gray-200 rounded-lg hover:shadow-xl z-100 h-half-screen lg:h-full"},[a("VueSlickCarousel",{staticClass:"h-full rounded-lg",attrs:{arrows:!0,dots:!1},scopedSlots:t._u([{key:"prevArrow",fn:function(){return[a("div",{staticClass:"w-16 h-16 mr-10 z-40"},[a("font-awesome",{attrs:{icon:["fas","arrow-left"],size:"lg"}})],1)]},proxy:!0},{key:"nextArrow",fn:function(){return[a("div",{staticClass:"w-16 h-16 z-50"},[a("font-awesome",{attrs:{icon:["fas","arrow-right"],size:"lg"}})],1)]},proxy:!0}])},t._l(t.records,(function(e){return a("div",{key:e.node.id,staticClass:"h-full relative"},[a("g-link",{attrs:{to:e.node.path}},[a("div",{staticClass:"h-full relative",attrs:{id:e.node.id}},[a("g-image",{staticClass:"rounded-lg object-cover absolute -z-10 h-full w-full",attrs:{src:e.node.image,alt:e.node.title}}),a("div",{staticClass:"featured-label absolute top-0 right-0 pr-10 pt-10 z-10"},[a("span",{staticClass:"p-1 relative block text-center text-xs leading-tight bg-white border border-gray-300 text-black rounded-full"},[a("font-awesome",{attrs:{icon:["fas","star"]}}),t._v("Featured\n              ")],1)]),a("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{classes:"card-author-tooltip",content:t.authors(e.node),placement:"right"},expression:"{classes:'card-author-tooltip', content:authors(edge.node), placement:'right'}"}],staticClass:"post-card-author pt-4 mt-6 pl-10"},[a("g-link",{attrs:{to:e.node.author[0].path},on:{mouseover:function(e){t.showTooltip=!0},mouseleave:function(e){t.showTooltip=!1}},nativeOn:{mouseover:function(e){t.showTooltip=!0},mouseleave:function(e){t.showTooltip=!1}}},[a("g-image",{staticClass:"w-10 h-10 rounded-full bg-gray-200 border-2 border-white",attrs:{src:e.node.author[0].image,alt:e.node.author[0].name}})],1)],1),a("div",{staticClass:"post-card-content bg-white bg-opacity-70"},[a("p",{staticClass:"tracking-wide font-semibold mt-3"},[a("g-link",{attrs:{to:e.node.category.path}},[t._v(t._s(e.node.category.title))])],1),a("h3",{staticClass:"tracking-wider mt-3 mb-3 text-4xl max-w-xl"},[t._v(t._s(e.node.title))]),a("p",[t._v(t._s(e.node.description))])]),a("div",{staticClass:"post-card-footer bg-white bg-opacity-70"},[a("p",[a("time",{attrs:{datetime:e.node.datetime}},[t._v(t._s(e.node.humanTime))]),t._v("\n                 • \n                "+t._s(e.node.timeToRead)+" min read\n              ")])])],1)])],1)})),0)],1)])}),[],!1,null,null,null);e.a=i.exports},GSoK:function(t,e,a){var r={"./hero.png":"LxDG"};function o(t){var e=s(t);return a(e)}function s(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=s,t.exports=o,o.id="GSoK"},LxDG:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/gridsome-starter-liebling/assets/static/hero.42db587.c053efde2e2abc8663a347969a2d6a23.png",size:{width:2560,height:1438},sizes:"(max-width: 2560px) 100vw, 2560px",srcset:["/gridsome-starter-liebling/assets/static/hero.82a2fbd.c053efde2e2abc8663a347969a2d6a23.png 480w","/gridsome-starter-liebling/assets/static/hero.cbab2cf.c053efde2e2abc8663a347969a2d6a23.png 1024w","/gridsome-starter-liebling/assets/static/hero.2665e34.c053efde2e2abc8663a347969a2d6a23.png 1920w","/gridsome-starter-liebling/assets/static/hero.42db587.c053efde2e2abc8663a347969a2d6a23.png 2560w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 2560 1438' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-5bb1d5b74dfd50d198a0e0891b39cc5d'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-5bb1d5b74dfd50d198a0e0891b39cc5d)' width='2560' height='1438' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAkCAYAAAA5DDySAAAACXBIWXMAAAsSAAALEgHS3X78AAAcOElEQVRo3iV5Z3Cbd34mP%2bXLzWQme85cxkm2yk1WF3sHSfTeeyEqAQJsIAiSIEGQaKxg70WkKIpUcZO9lmR5vZZXjtdrX3Y99l2yu3OZTJK9vbncTWbuvtzMfXjuAe8DRqII4H3/v99TX1UoggLIB8VoTUlRNyiCdFIOe8kE6ZQSV30NeMNViytdTbhkqcV0yYWBbQfs0wr0rOswumvG4LIZ8SUT%2bpeNMI4rEZ8xo3/aDEdGDdeIEsNZGzrjKjR5W1Flq0Vhxg/3qAztwSbMz0bx4ekcUlNOuHztiA2rMVAyI7GlweKZFQv37MjeNmJwQ49%2bXq9vRYngjBidRRHk0TpcNl/Ff2i7gJfbL%2bKH6uuoDdyEoKsWP5BexSVe63uCC/iz2h/jL%2bWv4fvaS7gRqMe1QB3%2bneBVvNT8Gn7iqEbFdtGDwVEjLAk5kksemBZM0BT1uOhtwmuOWgiGRKgbaId6VIn5/S6Yi0q45xToXtdi4aEPkRk97GkFGrpacNXThuawGH2zRgzMWJCe9kA3pIJuUAGhTwgVf3fnYBxr232Ijstxe2sI9/bHkZrthKy/HcE1A1yLKiS39Zg7MWP%2btgnpXT2MaSkUI0LIkq2ILEhhSbcjMimCb7AZfyl%2bHX9SdwEvCV7By9LXIIk2QBrifUeq0B6uxl/JLuIvZJfwvfbX8ZrlGlrirXhJfBEVb/wV/qTqAip2SlGcrMWwWPCilHOhe9mOqngH/kxxlQioQ8eQEDdDTbCOqrC8FUT/vhWuWSUiaxoU7ngQmNLClVFBPCjERTsRY22GaEAI5ZAEuY0IMjOd0PUpIeoSQh0TozdlQGSKyOGAhncd8Mxr4Vk0wFxQQTrYDs24BO5FNaa5/al9I8Y4gMi8DIrhNtinJOhblMJfFMM1LkB%2bRonkhBhV%2bmv4kZIokF7GK%2brLCGY7YEq0oDOngDEjRkukGVVeIkN3CW84b6AqWIOXVZc5mDdRUcgEkMzYEUppMZw2IbplQ21vC%2bq5kepoK656G/iBJoj6JJje8SK2aUbXmhaDu0ZM3rKhe8YI54QG%2blE1LloaYRxT86JqeAtGBAouTKxFsHUwiHTJj/z5y4PknBW9JQt8y1ok9kmfVb43o4NjRA1znDDP6ZC5Y0PhrhXheTmC00KiSolQTozYogT6MQE8wx3oS4mwOmfE5rwRrv5WmGMNqHfcgCrRDF9WCnWyDdYJESxZIcLLakhGOvBD4xW8ar4O5aSY6G5BRVWAhxuQoIkQc3ObgaIBLQkhqntacSPSgtbedrTGxdAMyzG57oFzRg07adC/acDQphHpbTdv0gZlQsaXAi1RITq6W%2bDjAGKlTt6wjwcMYHy7G8n1MJIbQaQ2HQguktMHNoSW9LCMKhDJ2RBfdKN/0YWhBSfG1qwY39QhvixH17QYE5t69I4ooB8WwM2DLxatyGa1MPQ0wDTcCm%2b6A2NzclKLSDRfg2aokchrRAM539rTDCmH4ZvXozJUj5e4%2bQb%2bzp4TokIYF8E5q4FjjlBcM6GbF%2b5btJ0j4Kq/EW8GWzkEIbJrPgyW7FCTj%2bE1HabOnOhb1WFoxcGbdiC54kJg2oSbFM56fw2Moxp0z3sQXw8gtRtGaifCVxgjmyH0rDrhnzHAOqmCK6%2bEi%2b/tKXDbGT168hbSyoxwga9JPQKTUn6HHNNHJqQmTNC72%2bGNdsAx0AbTAGGeaENbuB4yHsiTaUc8y2XaqnCdUJdGW3DR2oC6QCtsEwq4cyrU9zThFftNXPHcQEN3DSqGdjywFwwQJSXnXLQt6OFNKCGLiPHvZZehTylR3Avh8G78fFCRDQPCPHi0fPgtMyZ3y0JoQ3LNg868HorBDoh7OhCe9aBnoROhWQd6FwPoL5FqayEk1kNUcx%2bi1BpDSkFxJbp6hLCOyWGiE3VRT7onTTy4AcE8F5I1IpRWYZDbnpi2QxkRQEpkCulMInLbONAKU7wZyjiRMNSKjS0rbF3teNNajetU%2bQvGKtRyKaoBAcxjUiipMZqMBNWRGjT1NqAif0ZbKlqgndChY0CEatqiJCRENKVDvasJE%2bsurO1F4MrqEFk3ILpuhK%2bkRf%2b2GUtvd3EAXiRX3Vg9DmJ8w45gyYDuJSuiCxzMLDWDvB/aDGJ0iwdf9CM674dlXAdrVs3rauCcIsSXtGih7tR2NUMx1I6BBR46ZyYSeK2MEf5xI9wJNXT%2bFpgH2yANtkDM%2b2zxNUEcaYSCB7EmW%2bAfFXKAMtRYbuLPha/jR3pan78Kcm7dnxFRD%2bRQ8T2uWS2Uo%2b0U9zpUTJ12khtWCpcK7YR9W58AgkQHdEk5nCk5N6FBkdw0ZGXoWtFjcMeG/GkARQ4uTsrkmQsmyemeBR1Sa2aYRiQwTWh5MT06s2aMrAcpYm5I41LYJyzw5izonNZAxK33cED57Qg/78fkWifc4yY0hJopqrxWVg/3mBERUiHCYfgo0KG0EeahDiioMQJnA2ShRsjD3D51IJDrIH0kUNMa3WXH4HsuaN7Em6brEPB9QW7dzu8V8fP6MRkHIcIF601UxKjovpIGVnLRMCVDG3klTJD/rhp8T/oGuSzF1KIdvdsmJHdtmD/rweieB%2bk9WhitS0w%2bauJt5FwNxGXxS0tg4JebeBEfBTNQoE1SXFuYAToickg4YD2nr2E26F8MIsohdGVdyK14eVAnRL0KOFLqc9v1Tho5PP48LoNnXI2hJQv8dBxbWgwTRc3b0wZHtB3GXtJgtIUUEiCUFfO9IgTHJGim9V12VFILmhCfo9bwfKYxEQx8NVLkayiOFda8ECYKR32kCXWc5hUXRSwswA8M1ykYrYhumtA5wwMwyfVuWrD/OIH4phuunIEHolMwLLWE6yCKNaLFXQ8bJ6xOtkNEAVIQru28uITw1o/IYB7RQ8yMUd1ZC3OCtrsaRHzBj%2b6iG6ZBJeShdmgHdbCNEf5ZOxLUm85pCYKzciZBDXyzEoqZlBYnJ587IOE9xxnCxvvlkPPvCgqheqAZGgYmcbwJ6j66WGcTNUqC0Aw1hoKqHm2DgXSo7m7C1WAVKpooIFU8yF/rbuL7mkq84W4mdyoZGq6jlVRwzZlRHyAqYhS3fgESHEiUaVHB4GPLKOm5DBpdDaj1VPOCAgyNUW15U629AsiIDA3tVU%2bbU/G73BnaGIVPyegdydsxshbEyEoAUSbGUNqKnoQKypgUWvLdlzXBn9fBTGU3ZujnWREUHKyY96Hs5yHKyZACaKW3x/qk0Pc3U%2bgamf4a%2bJ46aIebUNggXWft0A81U4zVENA5zByEgO/TTHTAQ3ut%2bLGlBj%2byVeKCqQqX/Q34ofYmbExclYR0LW1QPirBFXcdD98GBben6hdB2N0OfVIM%2bbAEMm66lzQZo7AcUdn/6XYKL3ZjmKWK26gHzZEGwl3O7fAzw2LIODgDHaefupBcCWKQThGdcSPO0LSYd0MXU0IYbuMQ6ThFGzVDRRRI6RhCaFNECOGrJYVMzAJ%2bRvLyvwnLWaaL2%2bcyDVR7ZayZ91hHZxDAxUT6iraScV2FRi7qsufmOaLytwy0ZTUqXlZfwUsdLAvyS7jeWY8qdw2/lEGI1qGnUtfQcuooIqYxFeQDYjgIPzX7gbCH26ZAfnaUxB/fncYfnqzgD5/u4A%2bfHeB//M1d/MuzdTzYiWKaB7HQusoUCE/TSUpG%2bjuL1IaL1ujmADwUOhdV2oLJggPhlB7C3g74JtXonWVQOk%2bUzBTTamS2LAjTpiMLKthJWx21wFaQ4JqDGd9fBwNhr%2bNLP1APBfkt6m5ApacedX4h71sHPWOzbKAJxUMDSnfLXcOMip8Yr%2bOvpRdx0XgTTcz8NZ01CK/ooBwWop4B6FW2KlNGyOm1wDKhQj%2b9X8TYWco78S8fL%2bO7p0v4%2bsEk/v40g39%2bUMAf3prBvz5ew//8/AT/%2b8UZ/u8XD/Ht27NIUMlNRM3YjuM8O5y9HUeWFmtLKuGjzfly7BjUBVeKGy/qKKYaOpAe0aKZidCA7I4RC7ccmGFJGt%2bQMUqruXGGoqwC1ikhpL2ksukGtaeWZaiaGaEWwQkhLNE2DoDWTuQ2dDMiL7E/bGj4XSbMHRlQUR2owU8U1/Gqroq8IJcYFLyz5OkQExa5eo11uCw4QiqtOimFN6/A3roff/x4HQe3Y1ANMmCQmxYGoF1G4l8s%2b7FEjVhctuIhy9OLexn826dH%2bNcXp/j0wQyW97pQ3HLh/toASnNhaPql/DyHQATY%2btUUViH8U2qEcwxkaT3GWLXvPAni9r0gfv2zZXzzyxXcv5/AMXtJqYyieR0HpkaMfcA%2bxtIVKVOi8VxoO5laiydLCBe1qPNW46a7Fsa8CI6cCIUtPYq7WlS86arG6%2bT99/X1uOSoR4AZPUqI2TJS1HDrGvJb0ttGPWimwrZjZ9mHf/jZBjb2fBTCRjimRJASEaZUB5WWLTEngZOZwUUd8cwo0DkhwV1qw3cPc/i3F3fw3z87wdePFvHB0RDObkUxxQreGmrlzZoRY9S1D6kxPMeixO33TZuRWTBj%2b04nfvXJCv749Tv45uMt/MdPNvH7n2/h%2bGQAg1smqNldjFkN3LyOc95JkWRDtNXRmhsg6CO6SCEdbfkN1mFxogHREgezryOyqAF/2nyJwtCA6/56XHMSOn3NuGG%2bQctgEGKdLMdTEb2%2bo1uADSa%2b//x0Bc/uDCJJa7SkKUgsJ7IYbY61uSxyOv5sLQsWLVCXaOXvW9E1q0KOOePDvX5S4j7%2b29MNasURvni/iDuHYWoCDzxiQGhci439IPIrHg5Ai2jeiOK6GV9%2bsoj/%2btVDvDgbxty6CVlmkJk9Nx6cxPGrh5M4Wg3R/1Vw0JHKga6bw/Bm5Ljq5BBMTWiPMBgVWbry1IzZdgRmpZi7ZcbEDhFQVvhKqmhdZx2cBTWUtJcabw10PHgHm6CAiq8gFfa23PhPT0p4dJrAKIWoe0YD8zgtKU71pbKXt9jkroSZhzcmaZFUaw8rqWm0g3GXNZbfPTtvoS2Z0TMux122wv/z9ft48HAU%2bTknBrlxz5QSYYamTkLZyTDUO63F4f0u/MMXp/jy7WmsrxmRpOiNUAxj7C2DS0as7gXw9r0RfPPeNF4cjGJ71omVLUbuySBuGmyoM7kg8VC8M7TMgh7OohijR1IsnBiQZkWu0DEe1gTonX30SPb4H%2bhv0AqvQk9OSxhX3/Q2I5CS4duP5vDswQhvSgEhfdSWFtIJmqEjLYwDHahhA%2btiFbUnJNCSMt4RMX2ZwslUZh0Twkm0dM%2broKK2iGLM%2bwUlHpMGn/50HskdPVOmmRokpt6IkGRtHWBbHF1W4rNnRXzz0TIWV0gH0m1ivBWZdS36lhyI0SUCFNc4NWfrVgDPH6bxFQX31x8s4%2b5eHgtLWcyvzCER98ERZ6Lkd5rGpQx0MqJIhQW6QYUhLSNPWnGV9nfFVYX6IAUkUE/%2bVDPEyFBJa7xP6H50liJnCbW8DO3dtYy7FMV4K/nGGsoOIaB7%2bFimQkMMPVTeSUJOzARY46pnFBUgwsEFcjKoGaaMVG8bm5mYNfbz92dwyg0ObjnQvWxGR6wJPdSS0T1u6ECH736xi589HOcAdFjeNpICCizuWTG15sU4KdmzZEP/sgP5TSs2%2bR1HRz4c7nfh2b00fvfRBn7/yQFfh3h0J80wpGEKVKGHld%2bXa0d6XYiKmlADD6NiyJGgkTdqJWxVKTEu8cYNUxpCP4LvuKXD/QAVvJNIYfMiTXrm6O90BylvWNHFQzJ8yEMt6KF4jo%2bq8YAlKM2GKWfDE3jr4OZ2y9RQMKioKJqSmABCDmph349vHq0gv%2b9E35YBkrK1LWrQf0uPxbMA/vGLI%2bwdBbB624rjdz3YPPUis8zwVNAhv%2b7F2LobQxS/iZIN2TUbMixnxVt2hOe02N7z4%2be3B/DlBzP4O4rnzmYfk6gEAwcmpPb1cGXKA%2bhuJd%2bVULNsvGqvgZre2ciI%2bQpLRB/z/vFRP%2ba2PIysFh5AhI5wI9uaBL1zKsRYdoJTtEzmh/FJJfopRHNpLc6mbdhddmKkIMdgTslqLUEnD69PNJNaApamRkbnmxx6Gyx0j1%2beTuCLRzOwMatbSI2BfRN6D41463EWf/NeHhP07a23XRimh8cXDJha9iBBOB8edCPPv5cf1PSx0fYulJ9QWzC2RjTNmzHA9jq6RmdiaNq85cXj01E8PB3D8u1uFI7ZNdZUqPiB8gqnIseNkIC2RyHMSZmalJgqefDJowmM7TtQG6ljqWlGM6uqiH/qkoybhHJfyYSdVT9uzwSwmDNhltBcPrCTdybEKZIaZvAyTVwsHxFmCy0Pbx1uZymie7A0BXJyRlQRdpfstNYDPDpMIbVtwQADytJpN/7L5/soLFoQnOnAwAaHPS9FF9Pn2AJFs2jFUNGO8RkbEgsWJBZJhZKZQzAhtmDE6LYNUwcuBAsK%2bGfFLHCs9Tx0ftuJs/cSePhoCh8%2bzaPiMl3Awk1FCOldWtJbVPnTewnCPcw8wE7O34kpZhI2KykFr8HbiGZ/DUwxMe4SUh9u9eL5bgIfzHfhnfUw1jftCBEhhsFWBIplW2wjbZrg5hbMFMS2YAMU/U3nqdJI2wzRIrNU%2b9/sjOB/PT/B80cZ3H%2bcwm9/dYR7RzGkWGImD/RI7WkJdSVmV53IlBwYm2NFnzIhkWfoYjudOfCQDlZMUCzzmzY2TSsG%2bfd%2b5prF%2b0TjDuM3rW%2bECTB3ZsDqWx7cPUuiYmTJjf07fXhCBb13Oogcu36E9lB%2baPi67QZFsZ5e3oFmtiwJD9IYIBq6mjCds%2bM3ZwX80/15fLs/jk%2bWe9GbViIxpoaOAWpyQIKNIlV3%2bP/3f/cExbG/5RwBznwHZMkWFhwRQ1Yrxud0eJ%2b94OnRMP7x50f4u0%2b2cHbSje01O9Z3bMjd0mL5kRVbxx6sUfBGGJQGsmaEqTGTJQuW1zuRWy1HbCsK%2b1ZMb1uR3eZnT7yYPrZg4x0nNh85kT4yInfXir5NPSb2Ddg%2bDKDiyb08tm9HML3vRifhYp6SoZE8r/RU0g3qcEF3BW9or%2bCK9QYb4nXYKWaqRBvCI0p8dTqJXx9P4tPdIQzltGijGA6OyzDFIaQnNJjKqzGWYJKk0Db5qqGlfc7eNWD5HQcW33HxhngIIq%2bsBUL2%2bPKg372Vwi12hYElGZZOXJg%2bY2a/b8T2Ay/Tp%2bf8cCsbToxyCD0ZDmDBinkiILdpwcIDJ9YeeTB/6kCBvWHzXieWHnBAvNb8Q6KA2jLITuFdKCNKh6m7JlQkVnVIbukQpvJ2DLbgBiuxiLbWEKzFVXr766breEV3GS%2bLL9L%2b%2bLto07kGeJgDJmZM%2bHg3js8O4uhKy9Hmq0FgVAwv%2b4SDfi%2bN1sPcw7pcfng51IjhTTnW37Vh/4kX2z/1onhK0WIm97DulsWw/By/b8qK1IoVRnb15CF1hdu79ziOxx%2bPYvbQjsIBh7HvQX7DjNEVDXLzJozOmLH3MICT0xAO6Conb0WxetKJSQ5rZFuBvhUp5s9smH/gwPQDUocImDw2YIKvijYeuvw4TEZotrFRlR9gCGhtP9Zd47/L8arlJi4QAa3MB6GCFq3csibJDjDextoswETGhN/cncDdVfoyI%2bjkNDN8kYLXzUFFG9EYvMmg1ITZBQ1W73BbvIHdnzoxc4/xd14O14wcqngL0kx54WklOofl8OUlUDBCO2ZEOHgaJZQjyJ84kD7WIrkmxeSGHoOrWszsGnHAg27f8WFj1oNSrx3vrw/i%2bdsFnB0NYILfWSTUx7bVyNJWZ3nNEt2kcN%2bOYSKg/KpQjknO/9PAUoZ2qh0mqrIi0Q41BaqF%2bf9V9RV2hFpUsjT5J2UwcUBWvk/Ayqni8EzDLbjP1vd0M4Y7JXKxZIBrrA0q6oWenNcyKLVF66DlMLLL9O67FvKQSs1gE11UILQoZp1lbCb1XBMiDBLS3RTFLrrG0K4e8/tepOYJcYaelVs2jNC6xqlR8ZKKLqSkRliwXfJixKfDfs6Fj45H8d2nm/j2WYnLMKKLAaywZaSNs2HOSHh9E6ZOLfDy890cUIWbgUHLVCZgCbKxyXUt6ChaYupAE8tENZopeI1djbhkq%2bEAJIQVb35Ri5vWK4jNydn2BNhll/9idwD3WIXHmLaMQy1w0gXKT2vFkXrUum6g0XcdnkkBRjaUTG9SpLY0mDk1YfyEfDw2QcqMoE02wzMqgq5His4UVZ/ePpC30/ZcLEU%2b7DHu7t534eRJBMvHTtqcBafHMWykXbi3FMQHd7rx7u0efM3O8tvP9/DgeBD%2bad7zHkPVPTumDy0YYuxO7OpIPQ1Cq3pUVHpq0dTVygjaCsOwEAZamI7ZvbmXeT8rQmOkCTd4gGvOG0itGbB%2bSpfIKiDuakCoKIeGv59jbb215cV8wYzUhBY6flZF/petUBKpRVuoEoryv/XXUTva4c8KkTlQo2dDBX9JTmvS03lkGNhUILnKuNongTfFpJbUIpQ2IEKaJabJ3bwZwwxZa6cBrGwyFc4FcbgQZeqM4JN7bIZP5/HR/QS%2bfraM3315jF98UGDcVaNIsR1l8ytw85kjOgiD1dC2ivGbZeiys4oUEMEcF5w/quqc0UPGBldHEezoE7Dv61HdJcBleyWGF/XYoBXlmaWbfeX/eamEMFYL42gzrNzc4TQ3RW8WD9Sde72%2b/AyR0VnH%2bKulyrcFq2BjWwwQSWVrK28%2bTn9P7Kj5onYwrLinGMSSKlgSCrhGNHCkKGL0cv%2b4CclZF%2bJzDuQKHgQcCownjMiPWbE%2bYcEZu8Hz93L4/YsD/O6LW/j9V3fxt59t4937o3j/bARbrNmeghj9vMbwFqv2kgT9RGNFgEHDn1egm3wqP3Ds6KF6M6dLh5rO/1tcntLhoqMKhpEOhgvGTMKma5bhqL/%2b/MFja7iKfbsSNRxIPkdej8pww3GdkbesE/Vo7aw9f15Xw%2bjbOSJAfkHFCKrExLYGpYcOZBlKMhs6pPfoCLtMj3QY%2b6ACTh7ezWuHskbYKIxx5o6HO0MoTfmwz81vZbx4ZyOAZ4f9588VntyO4ylL1eeP5/CCm3/BP7/95W38%2bvkOvnqyTGSMIcbKbSsKWbSINAqjryBDRXSeFlhkXma2fsNRg9ds16jejLrhFrpBO/5ceZV6UHv%2bf/LBWRm6CfvhzfIzw3qYkmx1DDOC6E0OoQYz5UfZSQnqvJUQMEC1hWqhiNWjkT%2b38ucQKbWwYsQmPXn1YSeWzzxIsZLOHnpQ3HTRlvSIzWvgTyiJADVsSQ0i5YclKQPis3YsFUPo8WhwXPLj%2bckInh4n8Pe/3Mcff/sePnuYwZO7I3j2ThaP30rj3bsDeP4kh8dP8vjZRzP47MMiPjgZRjBH6q2zU2wpEWSyrBhaM8E0JoaaOf2qqxKNsUYoxwTM8VLU22ohDrLoUGlHqKTdrKlxqnOWzUzW38BML0DPrB6CripoeNBYVo3GUA1aumo5kDp0RKqJgjpUc/vicA1EPU2w0UWmN0x469Nu3P1sCOP7FoRXlMjcMWKCHcBJ/dH2CGHm9U1DMgQn9PCl9UjPsfQE2fuzATxYC%2bF4sRO/ejKPf/72LTy/n8b%2bvAsri1YcHkbx4bNpfPnzRTx5bxzv/TSD7fsxPH6WxTv3hrG5E6F7qBAuSdG7bcD/A8p5Mv2p9UZlAAAAAElFTkSuQmCC' /%3e%3c/svg%3e"}},RPQ5:function(t,e,a){},WWT4:function(t,e,a){"use strict";a.r(e);a("07d7"),a("3bBZ"),a("ls82");var r=a("HaE+"),o=a("a3WO");var s=a("BsWD");function i(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(s.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=a("+6fq"),c=a("DaJ5"),l=a("q+Vw"),d={metaInfo:{title:"Hello, world!"},components:{CardItem:n.a,FeaturedCard:c.a,ContentHeader:l.a},data:function(){return{loadedPosts:[],currentPage:1}},created:function(){var t;(t=this.loadedPosts).push.apply(t,i(this.$page.entries.edges))},methods:{infiniteHandler:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function a(){var r,o,s;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e.currentPage+1>e.$page.entries.pageInfo.totalPages)){a.next=4;break}t.complete(),a.next=9;break;case 4:return a.next=6,e.$fetch("/infinity/".concat(e.currentPage+1));case 6:r=a.sent,(o=r.data).entries.edges.length?(e.currentPage=o.entries.pageInfo.currentPage,(s=e.loadedPosts).push.apply(s,i(o.entries.edges)),t.loaded()):t.complete();case 9:case"end":return a.stop()}}),a)})))()}}},b=(a("98NV"),a("KHd+")),u=null,h=a("Kw5r"),g=h.a.config.optionMergeStrategies.computed,f={metadata:{siteName:"Gridsome",siteDescription:"An open-source framework to generate awesome pages"}},m=function(t){var e=t.options;e.__staticData?e.__staticData.data=f:(e.__staticData=h.a.observable({data:f}),e.computed=g({$static:function(){return e.__staticData.data}},e.computed))},p=Object(b.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("content-header",{attrs:{title:t.$static.metadata.siteName,sub:t.$static.metadata.siteDescription,image:"hero.png"}}),a("div",{staticClass:"container mx-auto"},[a("transition-group",{staticClass:"flex flex-wrap my-4",attrs:{name:"fade",tag:"div"}},[t.$page.featured.totalCount>0?a("FeaturedCard",{key:"featured_post",attrs:{records:t.$page.featured.edges}}):t._e(),t._l(t.loadedPosts,(function(t){var e=t.node;return a("CardItem",{key:e.id,attrs:{record:e}})}))],2),a("ClientOnly",[a("infinite-loading",{attrs:{spinner:"spiral"},on:{infinite:t.infiniteHandler}},[a("div",{attrs:{slot:"no-more"},slot:"no-more"}),a("div",{attrs:{slot:"no-results"},slot:"no-results"})])],1)],1)],1)}),[],!1,null,"07d23f13",null);"function"==typeof u&&u(p),"function"==typeof m&&m(p);e.default=p.exports},"q+Vw":function(t,e,a){"use strict";a("qePV");var r={props:{title:{type:String,default:null},sub:{type:String,default:null},image:{type:String|Object,default:null},staticImage:{type:Boolean,default:!0},opacity:{type:Number,default:50}},computed:{hasImage:function(){return!!this.image}}},o=a("KHd+"),s=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.hasImage?t._e():r("div",{staticClass:"z-100 text-center bg-gray-200 dark:bg-gray-900 py-10 md:py-20"},[null!=t.title?r("h1",{staticClass:"h1 font-extrabold dark:text-gray-400"},[t._v(t._s(t.title))]):t._e(),null!=t.sub?r("p",{staticClass:"text-gray-600 text-light font-sans"},[t._v(t._s(t.sub))]):t._e()]),t.hasImage?r("div",{staticClass:"z-100 relative mt-0 h-auto"},[t.hasImage&&t.staticImage?r("g-image",{staticClass:"object-cover absolute -z-10 h-full w-full",attrs:{src:a("GSoK")("./"+t.image),width:"1400",height:"400"}}):t._e(),t.hasImage&&!t.staticImage?r("g-image",{staticClass:"object-cover absolute -z-10 h-full w-full",attrs:{src:t.image,width:"1400",height:"400"}}):t._e(),t._t("default",[r("div",{staticClass:"text-center text-white bg-gray-800 lg:py-48 md:py-32 py-24",class:"bg-opacity-"+t.opacity},[null!=t.title?r("h1",{staticClass:"h1 font-extrabold"},[t._v(t._s(t.title))]):t._e(),null!=t.sub?r("p",{staticClass:"h5 font-sans"},[t._v(t._s(t.sub))]):t._e()])])],2):t._e()])}),[],!1,null,null,null);e.a=s.exports}}]);