::: warning 提示
确保存储ref实例的itemRefArr中，避免有重复的ref实例
:::

``` html
<!-- vue2 -->
<div  v-for="(item,index) in list" :key="item.id" :ref="item.name"></div>
console.log(this.$refs)

<!-- vue3 -->
<div v-for="(item,index) in list" :key="item.id">
    <div :ref="el => itemRefArr[index] = el"></div>
</div>

const itemRefArr = ref([])
const list = ref([
    {
        id:"0001",
        name:"ref1"
    },{
        id:"0002",
        name:"ref2"
    }])
```