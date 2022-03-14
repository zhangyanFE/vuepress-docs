import{e as p,k as r,l as c,I as s,J as e,M as l,K as i,L as o,p as n}from"./vendor.c0e21dd6.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";var d="/docs/images/hero.png";const D={},u=o(`<h1 id="\u9759\u6001\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u8D44\u6E90" aria-hidden="true">#</a> \u9759\u6001\u8D44\u6E90</h1><h2 id="\u76F8\u5BF9\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5BF9\u8DEF\u5F84" aria-hidden="true">#</a> \u76F8\u5BF9\u8DEF\u5F84</h2><p>\u4F60\u53EF\u4EE5\u5728\u4F60\u7684 Markdown \u5185\u5BB9\u4E2D\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u6765\u5F15\u7528\u9759\u6001\u8D44\u6E90\uFF1A</p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">\u56FE\u7247</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">(</span><span style="color:#D4D4D4;text-decoration:underline;">./image.png</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u63A8\u8350\u4F60\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u6765\u5F15\u7528\u56FE\u7247\uFF0C\u56E0\u4E3A\u4EBA\u4EEC\u901A\u5E38\u4F1A\u628A\u56FE\u7247\u653E\u5728\u5F15\u7528\u5B83\u7684 Markdown \u6587\u4EF6\u9644\u8FD1\u3002</p><h2 id="public-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#public-\u6587\u4EF6" aria-hidden="true">#</a> Public \u6587\u4EF6</h2><p>\u4F60\u53EF\u4EE5\u628A\u4E00\u4E9B\u9759\u6001\u8D44\u6E90\u653E\u5728 Public \u76EE\u5F55\u4E2D\uFF0C\u5B83\u4EEC\u4F1A\u88AB\u590D\u5236\u5230\u6700\u7EC8\u751F\u6210\u7684\u7F51\u7AD9\u7684\u6839\u76EE\u5F55\u4E0B\u3002</p><p>\u9ED8\u8BA4\u7684 Public \u76EE\u5F55\u662F <code>.vuepress/public</code> \uFF0C\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u6765\u4FEE\u6539\u3002</p><p>\u5728\u4E0B\u5217\u8FD9\u4E9B\u60C5\u51B5\u4E2D\uFF0C\u4F60\u53EF\u80FD\u4F1A\u7528\u5230\u5B83\uFF1A</p><ul><li>\u4F60\u53EF\u80FD\u9700\u8981\u63D0\u4F9B\u4E00\u4E9B\u9759\u6001\u8D44\u6E90\uFF0C\u4F46\u662F\u5B83\u4EEC\u5E76\u4E0D\u76F4\u63A5\u88AB\u4F60\u7684 Markdown \u6587\u4EF6\u5F15\u7528\uFF0C\u6BD4\u5982 favicon \u548C PWA \u56FE\u6807\u3002</li><li>\u4F60\u53EF\u80FD\u60F3\u8981\u6258\u7BA1\u4E00\u4E9B\u5171\u4EAB\u7684\u9759\u6001\u8D44\u6E90\uFF0C\u751A\u81F3\u53EF\u80FD\u9700\u8981\u5728\u4F60\u7684\u7F51\u7AD9\u5916\u90E8\u5F15\u7528\u5B83\uFF0C\u6BD4\u5982 Logo \u56FE\u7247\u3002</li><li>\u4F60\u53EF\u80FD\u60F3\u5728\u4F60\u7684 Markdown \u5185\u5BB9\u4E2D\u901A\u8FC7\u7EDD\u5BF9\u8DEF\u5F84\u6765\u5F15\u5165\u56FE\u7247\u3002</li></ul><p>\u4EE5\u6211\u4EEC\u6587\u6863\u7684\u6E90\u6587\u4EF6\u4E3A\u4F8B\uFF0C\u6211\u4EEC\u628A VuePress \u7684 Logo \u653E\u5728\u4E86 Public \u76EE\u5F55\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\u2514\u2500 docs</span></span>
<span class="line"><span style="color:#D4D4D4;">   \u251C\u2500 .vuepress</span></span>
<span class="line"><span style="color:#D4D4D4;">   |  \u2514\u2500 public</span></span>
<span class="line"><span style="color:#D4D4D4;">   |     \u2514\u2500 images</span></span>
<span class="line"><span style="color:#D4D4D4;">   |        \u2514\u2500 hero.png  </span><span style="color:#6A9955;"># &lt;- Logo \u6587\u4EF6</span></span>
<span class="line"><span style="color:#D4D4D4;">   \u2514\u2500 guide</span></span>
<span class="line"><span style="color:#D4D4D4;">      \u2514\u2500 assets.md       </span><span style="color:#6A9955;"># &lt;- \u6211\u4EEC\u5728\u8FD9\u91CC</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u5728\u5F53\u524D\u9875\u9762\u5F15\u7528 Logo \uFF1A</p><p><strong>Input</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">VuePress Logo</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">(</span><span style="color:#D4D4D4;text-decoration:underline;">/images/hero.png</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>Output</strong></p><p><img src="`+d+'" alt="VuePress Logo"></p>',17),b={class:"custom-container tip"},m=s("p",{class:"custom-container-title"},"\u63D0\u793A",-1),h=n("\u914D\u7F6E\u53C2\u8003\uFF1A "),y=n("public"),g=s("h3",{id:"base-helper",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#base-helper","aria-hidden":"true"},"#"),n(" Base Helper")],-1),_=n("\u5982\u679C\u4F60\u7684\u7F51\u7AD9\u90E8\u7F72\u5728\u975E\u6839\u8DEF\u5F84\u4E0B\uFF0C\u5373 "),v=n("base"),E=n(" \u4E0D\u662F "),k=s("code",null,'"/"',-1),f=n(" \uFF0C\u4F60\u9700\u8981\u628A "),x=s("code",null,"base",-1),C=n(" \u6DFB\u52A0\u5230 Public \u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\u524D\u3002"),w=o(`<p>\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u5982\u679C\u4F60\u60F3\u8981\u628A\u7F51\u7AD9\u90E8\u7F72\u5230 <code>https://foo.github.io/bar/</code> \uFF0C\u90A3\u4E48\u5E94\u8BE5\u628A <code>base</code> \u8BBE\u7F6E\u4E3A <code>&quot;/bar/&quot;</code> \uFF0C\u6B64\u65F6\u4F60\u5FC5\u987B\u5728 Markdown \u6587\u4EF6\u4E2D\u8FD9\u6837\u5F15\u7528 Public \u6587\u4EF6\uFF1A</p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">VuePress Logo</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">(</span><span style="color:#D4D4D4;text-decoration:underline;">/bar/images/hero.png</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u663E\u7136\uFF0C\u4E00\u65E6\u67D0\u4E00\u5929\u4F60\u4FEE\u6539\u4E86 <code>base</code>\uFF0C\u8FD9\u6837\u7684\u8DEF\u5F84\u5F15\u7528\u5C06\u4F1A\u663E\u5F97\u5F02\u5E38\u8106\u5F31\u3002\u8FD9\u4E5F\u662F\u6211\u4EEC\u63A8\u8350\u4F60\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u6765\u5F15\u7528\u9759\u6001\u6587\u4EF6\u7684\u539F\u56E0\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CVuePress \u63D0\u4F9B\u4E86\u5185\u7F6E\u7684\u4E00\u4E2A Helper <code>$withBase</code> \uFF0C\u5B83\u53EF\u4EE5\u5E2E\u52A9\u4F60\u751F\u6210\u6B63\u786E\u7684\u8DEF\u5F84\uFF1A</p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">&lt;img :src=&quot;$withBase(&#39;/images/hero.png&#39;)&quot; alt=&quot;VuePress Logo&quot;&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5728 Markdown \u4E2D\u4F7F\u7528\u8FD9\u4E2A Helper \u4F1A\u663E\u5F97\u6709\u4E9B\u5197\u957F\uFF0C\u56E0\u6B64\u5B83\u53EF\u80FD\u5BF9\u4E3B\u9898\u548C\u63D2\u4EF6\u4F5C\u8005\u66F4\u6709\u5E2E\u52A9\u3002</p>`,6),P={class:"custom-container tip"},L=s("p",{class:"custom-container-title"},"\u63D0\u793A",-1),V=n("\u914D\u7F6E\u53C2\u8003\uFF1A "),B=n("base"),M=o(`<h2 id="\u4F9D\u8D56\u5305\u548C\u8DEF\u5F84\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u5305\u548C\u8DEF\u5F84\u522B\u540D" aria-hidden="true">#</a> \u4F9D\u8D56\u5305\u548C\u8DEF\u5F84\u522B\u540D</h2><p>\u5C3D\u7BA1\u8FD9\u4E0D\u662F\u5E38\u89C1\u7528\u6CD5\uFF0C\u4F46\u662F\u4F60\u53EF\u4EE5\u4ECE\u4F9D\u8D56\u5305\u4E2D\u5F15\u7528\u56FE\u7247\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm install -D package-name</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">\u6765\u81EA\u4F9D\u8D56\u5305\u7684\u56FE\u7247</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">(</span><span style="color:#D4D4D4;text-decoration:underline;">package-name/image.png</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BBE\u7F6E\u7684\u8DEF\u5F84\u522B\u540D\u4E5F\u540C\u6837\u652F\u6301\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">alias:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;@alias&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/some/dir&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">\u6765\u81EA\u8DEF\u5F84\u522B\u540D\u7684\u56FE\u7247</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">(</span><span style="color:#D4D4D4;text-decoration:underline;">@alias/image.png</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,7),q={class:"custom-container tip"},A=s("p",{class:"custom-container-title"},"\u63D0\u793A",-1),F=n("\u914D\u7F6E\u53C2\u8003\uFF1A "),j=n("alias");function N(H,I){const a=p("RouterLink");return r(),c(i,null,[u,s("div",b,[m,s("p",null,[h,e(a,{to:"/reference/config.html#public"},{default:l(()=>[y]),_:1})])]),g,s("p",null,[_,e(a,{to:"/reference/config.html#base"},{default:l(()=>[v]),_:1}),E,k,f,x,C]),w,s("div",P,[L,s("p",null,[V,e(a,{to:"/reference/config.html#base"},{default:l(()=>[B]),_:1})])]),M,s("div",q,[A,s("p",null,[F,e(a,{to:"/reference/config.html#alias"},{default:l(()=>[j]),_:1})])])],64)}var J=t(D,[["render",N]]);export{J as default};
