(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{300:function(t,e,r){"use strict";r.r(e);r(41);var n=r(2),o=r(102),l=r(233),c=r(234),d={components:{Hero:l.a,ListingCarousel:c.a},head:function(){return{title:"TV Shows",meta:[{hid:"og:title",property:"og:title",content:"TV Shows"},{hid:"og:url",property:"og:url",content:"".concat("http://localhost:3000").concat(this.$route.path)}]}},computed:{popularTitle:function(){return Object(o.d)("tv","popular").title},popularUrl:function(){return{name:"tv-category-name",params:{name:"popular"}}},topRatedTitle:function(){return Object(o.d)("tv","top_rated").title},topRatedUrl:function(){return{name:"tv-category-name",params:{name:"top_rated"}}},onAirTitle:function(){return Object(o.d)("tv","on_the_air").title},onAirUrl:function(){return{name:"tv-category-name",params:{name:"on_the_air"}}},airingTodayTitle:function(){return Object(o.d)("tv","airing_today").title},airingTodayUrl:function(){return{name:"tv-category-name",params:{name:"airing_today"}}}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,c,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.error,e.prev=1,e.next=4,Object(o.n)("popular");case 4:return n=e.sent,e.next=7,Object(o.n)("top_rated");case 7:return l=e.sent,e.next=10,Object(o.n)("on_the_air");case 10:return c=e.sent,e.next=13,Object(o.n)("airing_today");case 13:return d=e.sent,e.next=16,Object(o.k)(n.results[0].id);case 16:return m=e.sent,e.abrupt("return",{popular:n,topRated:l,onAir:c,airingToday:d,featured:m});case 20:e.prev=20,e.t0=e.catch(1),r({statusCode:504,message:"Data not available"});case 23:case"end":return e.stop()}}),e,null,[[1,20]])})))()}},m=r(4),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main"},[r("Hero",{attrs:{item:t.featured}}),t._v(" "),t.popular&&t.popular.results.length?r("ListingCarousel",{attrs:{title:t.popularTitle,"view-all-url":t.popularUrl,items:t.popular}}):t._e(),t._v(" "),t.topRated&&t.topRated.results.length?r("ListingCarousel",{attrs:{title:t.topRatedTitle,"view-all-url":t.topRatedUrl,items:t.topRated}}):t._e(),t._v(" "),t.onAir&&t.onAir.results.length?r("ListingCarousel",{attrs:{title:t.onAirTitle,"view-all-url":t.onAirUrl,items:t.onAir}}):t._e(),t._v(" "),t.airingToday&&t.airingToday.results.length?r("ListingCarousel",{attrs:{title:t.airingTodayTitle,"view-all-url":t.airingTodayUrl,items:t.airingToday}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);