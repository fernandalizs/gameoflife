(function(){"use strict";var t={572:function(t,n,e){var r=e(144),i=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("life-game")],1)},o=[],u=function(){var t=this,n=t._self._c;return n("div",{staticClass:"board"},[n("h1",[t._v("Jogo da Vida de Conway")]),n("table",t._l(t.grid,(function(e,r){return n("tr",{key:r},t._l(e,(function(t,e){return n("td",{key:e,class:{alive:1==t}})})),0)})),0),t._m(0)])},l=[function(){var t=this,n=t._self._c;return n("p",[t._v("Por "),n("a",{attrs:{href:"https://github.com/fernandalizs/gameoflife",target:"_blank"}},[t._v("Fernanda Liz")])])}],a=(e(7658),{data(){return{grid:[[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}},methods:{turnAlive(){this.grid=this._nextState(this.grid)},_count_neighboors_alive(t,n,e){const[r,i]=[e.length,e[0].length],o=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];let u=[];for(let a=0;a<o.length;a++)u.push([t+o[a][0],n+o[a][1]]);let l=u.filter((t=>t[0]>=0&&t[0]<r&&t[1]>=0&&t[1]<i&&1==e[t[0]][t[1]]));return l.length},_nextState(t){const[n,e]=[t.length,t[0].length];let r=JSON.parse(JSON.stringify(this.grid));for(let i=0;i<n;i++)for(let n=0;n<e;n++){let e=this._count_neighboors_alive(i,n,t);1==t[i][n]?r[i][n]=2==e||3==e?1:0:r[i][n]=3==e?1:0}return r}},mounted(){setInterval((()=>{this.turnAlive()}),1200)}}),f=a,c=e(3736),s=(0,c.Z)(f,u,l,!1,null,"b882cb4c",null),h=s.exports,v={name:"App",components:{LifeGame:h}},p=v,d=(0,c.Z)(p,i,o,!1,null,null,null),g=d.exports;r.ZP.config.productionTip=!1,new r.ZP({render:t=>t(g)}).$mount("#app")}},n={};function e(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return t[r](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,r,i,o){if(!r){var u=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],o=t[c][2];for(var l=!0,a=0;a<r.length;a++)(!1&o||u>=o)&&Object.keys(e.O).every((function(t){return e.O[t](r[a])}))?r.splice(a--,1):(l=!1,o<u&&(u=o));if(l){t.splice(c--,1);var f=i();void 0!==f&&(n=f)}}return n}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,i,o]}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var i,o,u=r[0],l=r[1],a=r[2],f=0;if(u.some((function(n){return 0!==t[n]}))){for(i in l)e.o(l,i)&&(e.m[i]=l[i]);if(a)var c=a(e)}for(n&&n(r);f<u.length;f++)o=u[f],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(c)},r=self["webpackChunkgameoflife"]=self["webpackChunkgameoflife"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(572)}));r=e.O(r)})();
//# sourceMappingURL=app.21eb4a1b.js.map