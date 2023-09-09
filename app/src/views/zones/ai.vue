<script setup lang="ts">
const chats = ref<{
  role: 'user' | 'ai'
  content: string
}[]>([{
  role: 'user',
  content: `    color: rgb(0, 0, 0);
    background-color: rgb(228, 230, 235);
    margin-left: 0px;
    margin-right: auto;`,
},
{
  role: 'ai',
  content: `简单业务场景
针对简单场景，无极内置的组件就可以满足业务需求，通过简单拖拉拽的方式拖拽内置的组件快速完成页面的搭建，通过配置就可以实现页面的逻辑

◎ 一般业务场景
针对一般业务场景，内置组件可能无法满足页面交互的需求，此时可以采用 本地组件开发的方式实现复杂的页面交互；而通过配置可能也无法满足 UI 逻辑的需求，此时可以采用 lesscode 的方式用代码实现复杂的页面逻辑

◎ 复杂业务场景
针对复杂场景，本地组件开发和 lesscode 开发虽然可以满足需求，但是大量的代码零散化不利于维护，此时可以采用 本地页面开发 的方式实现整个页面全部本地化代码开发`,
},

])
</script>

<template>
  <section block w-100 h-140 overflow-y-scroll m-y-4>
    <div v-for="(item, i) in chats" :key="i" class="msg-box">
      <div
        style="overflow-wrap:break-word"
        :class="item.role === 'ai' ? 'msg-ai' : 'msg-user'"
        class="msg-item"
      >
        {{ item.content }}
      </div>
    </div>
  </section>
  <div flex justify-between p-x-8>
    <input l-input w-60>
    <button l-btn-p w-20>
      click
    </button>
  </div>
</template>

<style scoped lang="scss">
.msg-item{
    margin-top: 10px;
    overflow-wrap: break-word;
    width: fit-content;
    max-width: 60%;
    border-radius: 10px;
    padding: 0.42em 0.55em;
    height: fit-content;
    &.msg-user{
        color: rgb(255, 255, 255);
    background-color: rgb(0, 132, 255);
    margin-right: 0px;
    margin-left: auto;
    }
    &.msg-ai{
        color: rgb(0, 0, 0);
    background-color: rgb(228, 230, 235);
    margin-left: 0px;
    margin-right: auto;
    }
}
.msg-box{
    display: flex;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
}
</style>
