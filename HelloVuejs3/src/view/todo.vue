<template>
    <div>
        <legend>编辑您的代办事项：</legend>
        <input type="text" v-model="newItem" placeholder="新增代办事项"/>
        <Button icon="plus" v-on:click="addItem()">新增</Button>
        <Button icon="refresh" v-on:click="loadItems()">加载</Button>
        <Button icon="upload" v-on:click="saveItems()">保存</Button>
        <ol>
            <li v-for="(item, index) in todoItems" v-bind:key="index">
                <span>{{ item }}</span>
                <Button type="text" icon="close" v-on:click="removeItem(index)"></Button>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'Todo',
    
    data: function () {
        return {
            newItem: ''
        }
    },

    computed: {
        todoItems: function () {
            return this.$store.state.todo.todoItems;
        }
    },

    methods: {
        addItem: function () {
            if (this.newItem.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '').length > 0)
                this.$store.dispatch('addItem', this.newItem)
            this.newItem = '';
        },
        
        removeItem: function (index) {
            this.$store.dispatch('removeItem', index)
        },
        
        loadItems: function () {
            this.$store.dispatch('loadItems');
        },

        saveItems: function () {
            this.$store.dispatch("saveItems")
        }
    }
}
</script>
