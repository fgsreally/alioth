import{_ as e,o,c as s,U as a}from"./chunks/framework.08bb9a2c.js";const D=JSON.parse('{"title":"节点","description":"","frontmatter":{},"headers":[],"relativePath":"core/node.md","filePath":"core/node.md","lastUpdated":1698990937000}'),n={name:"core/node.md"},t=a(`<h1 id="节点" tabindex="-1">节点 <a class="header-anchor" href="#节点" aria-label="Permalink to &quot;节点&quot;">​</a></h1><blockquote><p>这是一定的，无论你是自制平台，还是使用默认平台</p></blockquote><p>玉衡本质是操作一个树状的<code>virtualDocument</code>实例，树上的节点为<code>virtualNode</code>实例，详见源码</p><p>这和<code>web</code>中的<code>document</code>和<code>node</code>很像，同样通过<code>insert/remove/set</code>的方式操作</p><p>然后将<code>virtualNode</code>实例通过<a href="./engine.html">引擎</a>转换为<code>vnode</code>， 从而渲染or更新</p><p>这没有什么复杂的，需要注意的是，为了保证<code>yjs</code>的协同/撤回功能，请通过以下方式调用</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> node1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> doc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createNode</span><span style="color:#A6ACCD;">()</span><span style="color:#676E95;font-style:italic;">// 直接操作virtualDocument</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">doc</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">insert</span><span style="color:#A6ACCD;">(node1)</span></span>
<span class="line"><span style="color:#A6ACCD;">doc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(node1)</span><span style="color:#676E95;font-style:italic;">// 直接操作virtualDocument</span></span></code></pre></div>`,7),c=[t];function l(p,r,d,i,_,A){return o(),s("div",null,c)}const u=e(n,[["render",l]]);export{D as __pageData,u as default};
