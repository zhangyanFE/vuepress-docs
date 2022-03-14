import{e as o,k as p,l as D,J as n,M as l,I as s,K as i,L as c,p as e}from"./vendor.c0e21dd6.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const u={},y=c(`<h1 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h1><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><p>\u5982\u679C\u6CA1\u6709\u4EFB\u4F55\u914D\u7F6E\uFF0C\u4F60\u7684 VuePress \u7AD9\u70B9\u4EC5\u6709\u4E00\u4E9B\u6700\u57FA\u7840\u7684\u529F\u80FD\u3002\u4E3A\u4E86\u66F4\u597D\u5730\u81EA\u5B9A\u4E49\u4F60\u7684\u7F51\u7AD9\uFF0C\u8BA9\u6211\u4EEC\u9996\u5148\u5728\u4F60\u7684\u6587\u6863\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A <code>.vuepress</code> \u76EE\u5F55\uFF0C\u6240\u6709 VuePress \u76F8\u5173\u7684\u6587\u4EF6\u90FD\u5C06\u4F1A\u88AB\u653E\u5728\u8FD9\u91CC\u3002\u4F60\u7684\u9879\u76EE\u7ED3\u6784\u53EF\u80FD\u662F\u8FD9\u6837\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\u251C\u2500 docs
\u2502  \u251C\u2500 .vuepress
\u2502  \u2502  \u2514\u2500 config.js
\u2502  \u2514\u2500 README.md
\u251C\u2500 .gitignore
\u2514\u2500 package.json
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>VuePress \u7AD9\u70B9\u5FC5\u8981\u7684\u914D\u7F6E\u6587\u4EF6\u662F <code>.vuepress/config.js</code>\uFF0C\u5B83\u5E94\u8BE5\u5BFC\u51FA\u4E00\u4E2A JavaScript \u5BF9\u8C61\u3002\u5982\u679C\u4F60\u4F7F\u7528 TypeScript \uFF0C\u4F60\u53EF\u4EE5\u5C06\u5176\u66FF\u6362\u4E3A <code>.vuepress/config.ts</code> \uFF0C\u4EE5\u4FBF\u8BA9 VuePress \u914D\u7F6E\u5F97\u5230\u66F4\u597D\u7684\u7C7B\u578B\u63D0\u793A\u3002</p>`,5),m=s("div",{class:"language-javascript ext-js line-numbers-mode"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4EC9B0"}},"module"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#4EC9B0"}},"exports"),s("span",{style:{color:"#D4D4D4"}}," = {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#6A9955"}},"// \u7AD9\u70B9\u914D\u7F6E")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"lang:"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"'zh-CN'"),s("span",{style:{color:"#D4D4D4"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"title:"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"'\u4F60\u597D\uFF0C VuePress \uFF01'"),s("span",{style:{color:"#D4D4D4"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"description:"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"'\u8FD9\u662F\u6211\u7684\u7B2C\u4E00\u4E2A VuePress \u7AD9\u70B9'"),s("span",{style:{color:"#D4D4D4"}},",")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#6A9955"}},"// \u4E3B\u9898\u548C\u5B83\u7684\u914D\u7F6E")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"theme:"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"'@vuepress/theme-default'"),s("span",{style:{color:"#D4D4D4"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"themeConfig:"),s("span",{style:{color:"#D4D4D4"}}," {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#9CDCFE"}},"logo:"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"'https://vuejs.org/images/logo.png'"),s("span",{style:{color:"#D4D4D4"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  },")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br")])],-1),b=s("div",{class:"language-typescript ext-ts line-numbers-mode"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"import"),s("span",{style:{color:"#D4D4D4"}}," { "),s("span",{style:{color:"#9CDCFE"}},"defineUserConfig"),s("span",{style:{color:"#D4D4D4"}}," } "),s("span",{style:{color:"#C586C0"}},"from"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"'vuepress'")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"import"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#C586C0"}},"type"),s("span",{style:{color:"#D4D4D4"}}," { "),s("span",{style:{color:"#9CDCFE"}},"DefaultThemeOptions"),s("span",{style:{color:"#D4D4D4"}}," } "),s("span",{style:{color:"#C586C0"}},"from"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"'vuepress'")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"export"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#C586C0"}},"default"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#DCDCAA"}},"defineUserConfig"),s("span",{style:{color:"#D4D4D4"}},"<"),s("span",{style:{color:"#4EC9B0"}},"DefaultThemeOptions"),s("span",{style:{color:"#D4D4D4"}},">({")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#6A9955"}},"// \u7AD9\u70B9\u914D\u7F6E")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"lang:"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"'en-US'"),s("span",{style:{color:"#D4D4D4"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"title:"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"'Hello VuePress'"),s("span",{style:{color:"#D4D4D4"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"description:"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"'Just playing around'"),s("span",{style:{color:"#D4D4D4"}},",")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#6A9955"}},"// \u4E3B\u9898\u548C\u5B83\u7684\u914D\u7F6E")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"theme:"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"'@vuepress/theme-default'"),s("span",{style:{color:"#D4D4D4"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"themeConfig:"),s("span",{style:{color:"#D4D4D4"}}," {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#9CDCFE"}},"logo:"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"'https://vuejs.org/images/logo.png'"),s("span",{style:{color:"#D4D4D4"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  },")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"})")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br")])],-1),C={class:"custom-container tip"},h=s("p",{class:"custom-container-title"},"\u63D0\u793A",-1),_=e("\u524D\u5F80 "),g=e("\u914D\u7F6E\u53C2\u8003"),f=e(" \u67E5\u770B\u6240\u6709 VuePress \u914D\u7F6E\u3002"),E=c('<h2 id="\u914D\u7F6E\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u914D\u7F6E\u4F5C\u7528\u57DF</h2><p>\u4F60\u53EF\u80FD\u5DF2\u7ECF\u6CE8\u610F\u5230\u4E86\uFF0C\u5728 VuePress \u914D\u7F6E\u4E2D\u6709\u4E00\u9879 <code>themeConfig</code> \u914D\u7F6E\u9879\u3002</p><p>\u5728 <code>themeConfig</code> \u5916\u90E8\u7684\u914D\u7F6E\u9879\u5C5E\u4E8E <strong>\u7AD9\u70B9\u914D\u7F6E</strong> \uFF0C\u800C\u5728 <code>themeConfig</code> \u5185\u90E8\u7684\u914D\u7F6E\u9879\u5219\u5C5E\u4E8E <strong>\u4E3B\u9898\u914D\u7F6E</strong>\u3002</p><h3 id="\u7AD9\u70B9\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7AD9\u70B9\u914D\u7F6E" aria-hidden="true">#</a> \u7AD9\u70B9\u914D\u7F6E</h3><p>\u7AD9\u70B9\u914D\u7F6E\u7684\u610F\u601D\u662F\uFF0C\u65E0\u8BBA\u4F60\u4F7F\u7528\u4EC0\u4E48\u4E3B\u9898\uFF0C\u8FD9\u4E9B\u914D\u7F6E\u9879\u90FD\u53EF\u4EE5\u751F\u6548\u3002</p><p>\u6211\u4EEC\u77E5\u9053\uFF0C\u6BCF\u4E00\u4E2A\u7AD9\u70B9\u90FD\u5E94\u8BE5\u6709\u5B83\u7684 <code>lang</code>, <code>title</code> \u548C <code>description</code> \u7B49\u5C5E\u6027\uFF0C\u56E0\u6B64 VuePress \u5185\u7F6E\u652F\u6301\u4E86\u8FD9\u4E9B\u5C5E\u6027\u7684\u914D\u7F6E\u3002</p><h3 id="\u4E3B\u9898\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898\u914D\u7F6E" aria-hidden="true">#</a> \u4E3B\u9898\u914D\u7F6E</h3><p>\u4E3B\u9898\u914D\u7F6E\u5C06\u4F1A\u88AB VuePress \u4E3B\u9898\u6765\u5904\u7406\uFF0C\u6240\u4EE5\u5B83\u53D6\u51B3\u4E8E\u4F60\u4F7F\u7528\u7684\u4E3B\u9898\u662F\u4EC0\u4E48\u3002</p><p>\u5982\u679C\u4F60\u6CA1\u6709\u8BBE\u7F6E VuePress \u914D\u7F6E\u7684 <code>theme</code> \u914D\u7F6E\u9879\uFF0C\u5219\u4EE3\u8868\u4F7F\u7528\u7684\u662F\u9ED8\u8BA4\u4E3B\u9898\u3002</p>',9),v={class:"custom-container tip"},x=s("p",{class:"custom-container-title"},"\u63D0\u793A",-1),V=e("\u524D\u5F80 "),F=e("\u9ED8\u8BA4\u4E3B\u9898 > \u914D\u7F6E"),k=e(" \u67E5\u770B\u9ED8\u8BA4\u4E3B\u9898\u7684\u914D\u7F6E\u3002");function P(j,A){const a=o("CodeGroupItem"),t=o("CodeGroup"),r=o("RouterLink");return p(),D(i,null,[y,n(t,null,{default:l(()=>[n(a,{title:"JS",active:""},{default:l(()=>[m]),_:1}),n(a,{title:"TS"},{default:l(()=>[b]),_:1})]),_:1}),s("div",C,[h,s("p",null,[_,n(r,{to:"/reference/config.html"},{default:l(()=>[g]),_:1}),f])]),E,s("div",v,[x,s("p",null,[V,n(r,{to:"/reference/default-theme/config.html"},{default:l(()=>[F]),_:1}),k])])],64)}var N=d(u,[["render",P]]);export{N as default};
