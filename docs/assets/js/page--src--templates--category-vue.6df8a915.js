(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{nldV:function(t,e,a){"use strict";a.r(e);a("ma9I");var o=a("+6fq"),n=a("g0NP"),s=a("q+Vw"),l={components:{Pagination:n.a,CardItem:o.a,ContentHeader:s.a},computed:{postLabel:function(){return a("dhqo")("post",this.$page.category.belongsTo.totalCount)},subTitle:function(){return"A collection of ".concat(this.$page.category.belongsTo.totalCount," ").concat(this.postLabel)}},metaInfo:function(){return{title:this.$page.category.title}}},r=a("KHd+"),c=null,i=Object(r.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("content-header",{attrs:{title:t.$page.category.title,sub:t.subTitle}}),a("div",{staticClass:"container mx-auto"},[a("div",{staticClass:"flex flex-wrap my-4"},t._l(t.$page.category.belongsTo.edges,(function(t){return a("CardItem",{key:t.node.id,attrs:{record:t.node}})})),1),a("div",{staticClass:"pagination flex justify-center mb-8"},[t.$page.category.belongsTo.pageInfo.totalPages>1?a("Pagination",{attrs:{baseUrl:t.$page.category.path,currentPage:t.$page.category.belongsTo.pageInfo.currentPage,totalPages:t.$page.category.belongsTo.pageInfo.totalPages,maxVisibleButtons:5}}):t._e()],1)])],1)}),[],!1,null,null,null);"function"==typeof c&&c(i);e.default=i.exports}}]);