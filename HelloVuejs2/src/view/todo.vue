<template>
    <div>
        <legend>您的代办事项：</legend>
        <input type="text" v-model="newItem" placeholder="新增代办事项"/>
        <button v-on:click="addItem()" class="btn btn-primary">新增</button>
        <button v-on:click="loadItems()" class="btn btn-default">加载</Button>
        <button v-on:click="saveItems()" class="btn btn-default">保存</Button>
        <ol>
            <li v-for="(item, index) in todoItems" v-bind:key="index">                
                <span>{{ item }}</span>
                <button v-on:click="removeItem(index)" class="btn btn-link glyphicon glyphicon-remove"></button>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'Todo',

    data: {
        function() {
            return {
                todoItems: [],
                newItem: ''
            }
        }
    },

    methods: {
        loadItems: function () {
            this.todoItems = JSON.parse(window.localStorage.getItem('todoItems') || '[]');      
        },

        addItem: function () {
            if (this.newItem.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '').length > 0)
                this.todoItems.push(this.newItem);
            this.newItem = '';
        },

        removeItem: function (index) {
            this.todoItems.splice(index, 1);
        },

        saveItems: function () {
            window.localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
        }
    }
}
</script>
