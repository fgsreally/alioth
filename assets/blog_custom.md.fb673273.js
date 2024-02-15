import{_ as e,o as a,c as o,U as t}from"./chunks/framework.08bb9a2c.js";const b=JSON.parse('{"title":"自定义功能","description":"","frontmatter":{},"headers":[],"relativePath":"blog/custom.md","filePath":"blog/custom.md","lastUpdated":1707989327000}'),c={name:"blog/custom.md"},p=t('<h1 id="自定义功能" tabindex="-1">自定义功能 <a class="header-anchor" href="#自定义功能" aria-label="Permalink to &quot;自定义功能&quot;">​</a></h1><p>玉衡有两个比较特殊的功能：<code>自定义渲染</code>以及<code>自定义物料</code></p><h2 id="自定义渲染" tabindex="-1">自定义渲染 <a class="header-anchor" href="#自定义渲染" aria-label="Permalink to &quot;自定义渲染&quot;">​</a></h2><p>自定义渲染即，同样的物料在平台（先暂时称其为平台，虽然其可能简陋得可怕）和生产环境中，渲染出的东西是自定义的，即</p><ol><li>布局系统自定义</li><li>编辑器自定义</li><li>渲染自定义</li><li>属性盘自定义</li></ol><h3 id="布局系统自定义" tabindex="-1">布局系统自定义 <a class="header-anchor" href="#布局系统自定义" aria-label="Permalink to &quot;布局系统自定义&quot;">​</a></h3><p>不同的平台业务方向不同，如果是制作表单，可能“平铺直叙”就可以了，每一个元素占百分之一百的宽度，然后一个竖排下来，如果是追求一比一设计图，可能需要如<code>figma</code>般拖拽，如果是制作商品页，可能还需要一些特殊的布局。</p><p>同一份json数据（假设是一个页面的所有视图数据），在以上这几个平台中的效果显然是不同的，而因为这一点的不同再去重写一个新平台，实在是过于奢侈。</p><p>玉衡只需要开发者编写一个<code>引擎</code>，就能完全更改布局，比如从表单的布局转成灵活布局</p><h3 id="编辑器自定义" tabindex="-1">编辑器自定义 <a class="header-anchor" href="#编辑器自定义" aria-label="Permalink to &quot;编辑器自定义&quot;">​</a></h3><p>好吧，只更改布局其实意义不大，这只抹平了生产环境的差异，平台中的不同布局显然意味着不同的操作模式。</p><p>假如从表单的布局转成灵活布局，那么显然允许点击画布内的组件进行拖拽，只更改布局的css，显然意义不大。</p><p>就算可以只更改布局，有的平台可能需要使用者进行一些特殊的操作，比如画布中的组件可能需要一个框包裹，通过拖动框可以更改大小（非常常见的功能，但在表单相关的平台可能就不需要），为此写一个新平台，还是不值得</p><p>上面玉衡提供的<code>引擎</code>，将同时处理掉这两个问题，既是处理了布局，也能提供自定义的编辑器，或者说，玉衡把这两个问题当成了同一个。</p><h3 id="渲染自定义" tabindex="-1">渲染自定义 <a class="header-anchor" href="#渲染自定义" aria-label="Permalink to &quot;渲染自定义&quot;">​</a></h3><p>即使是同一个平台（我们假设只需要表单的产出），也是需要不同的渲染结果的</p><p>比如在平台时和在生产环境时，渲染结果可能有不同，或许在平台开发时，物料可以包含一些指引的文字，在生产环境中这些文字则不需要。</p><p>可能平台只是单纯产出组件/模块到生产环境（而非上线一整个项目），我们可能需要粒度自由的渲染</p><p>其实这还是<code>引擎</code>的功能</p><h3 id="属性盘自定义" tabindex="-1">属性盘自定义 <a class="header-anchor" href="#属性盘自定义" aria-label="Permalink to &quot;属性盘自定义&quot;">​</a></h3><p>一般而言，平台的右侧会有一个属性盘，里面会有非常多的输入框，按钮，姑且可以看成一个表单</p><p>大部分人都知道，不同的物料，其对应的属性盘不同，但真实的情况不止于此：即使是相同的物料，在不同的项目，不同的使用者手上，对应的属性盘仍不同</p><p>比如一个按钮，假设设计者考虑了方方面面，提供了尺寸、颜色、点击事件等等功能，可能大部分使用者（或者说是使用者大部分时候）只需要点击事件这一项功能，而有个别可能需要动画这个功能。结果就是，设计者为了提供一个全面配置的物料疲于奔命，使用者却觉得没有自己需要的配置项/觉得配置项过于繁杂 不好理解。</p><p>还有一种情况是，有些开发者可能不满足于简单的输入框，他们可能需要特殊的控件，比如渐变色的物料的背景，那么就需要一个能够拉出渐变色的控件，而往往平台没有提供</p><p>玉衡通过开发的时候，可以决定某个物料应该对应哪些控件，并创建平台原本不存在的控件，注意这是在开发阶段，意味着你可以随时调整它</p><blockquote><p>目前玉衡默认提供的平台是简陋的（这完全是<code>@ark/ui</code>的问题！我他妈尽力了），但由于<code>自定义渲染</code>的特性，开发一个自己的平台是一个非常容易的事情 玉衡的想法就是：与其开发一个极度复杂的平台去支持多种用途，不如将创建新平台的成本降到最低，通过搭建多个平台从而应付不同的需求，统一开发体验。</p></blockquote><h2 id="自定义物料" tabindex="-1">自定义物料 <a class="header-anchor" href="#自定义物料" aria-label="Permalink to &quot;自定义物料&quot;">​</a></h2><p>可能平台提供了很多的常见的物料，但这并不足以覆盖全部需求，即使其提供了添加物料的功能，步骤也较为复杂，比较常见的情况是：先创建一个脚手架，用特定的格式，和一些提供的工具函数编写组件，在慢悠悠的打包，上传到服务器并登记在数据库中，再到平台中刷新拉取。</p><p>一旦遇到报错或需要调试，就只能反复重复这个流程，体验极差</p><p>玉衡原则上不提供任何物料，但同样为开发者保留了最多的自由度，开发者在开发时只需要打开一个<code>vite</code>服务（任何基于<code>vite</code>的脚手架都可以），平台会自动连接它，开发者可以随时随地添加、更新、删除物料/功能，提供标准的热更新。开发者不需要遵守任何格式，物料开发的体验将完全等同于组件开发</p><blockquote><p>玉衡没有强求物料的格式，不过请注意，物料和组件不是完全意义的等同，姑且可以理解为物料==业务级别的组件</p></blockquote>',31),d=[p];function l(r,i,s,h,n,u){return a(),o("div",null,d)}const m=e(c,[["render",l]]);export{b as __pageData,m as default};
