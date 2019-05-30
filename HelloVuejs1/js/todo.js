Vue.component('u-todo', {
    template: '\
        <div>\
            <legend>您的代办事项：</legend>\
            <input type="text" v-model="newItem" placeholder="新增代办事项"/>\
            <button v-on:click="addItem()" class="btn btn-default">新增</button>\
            <ol>\
                <li v-for="(item, index) in todoItems" v-bind:key="index">\
                    <span>{{ item }}</span>\
                    <button v-on:click="removeItem(index)" class="btn btn-link glyphicon glyphicon-remove"></button>\
                </li>\
            </ol>\
        </div>',

    data: function () {
        return {
            todoItems: [],
            newItem: ''
        }
    },

    methods: {
        addItem: function () {
            if (this.newItem.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '').length > 0)
                this.todoItems.push(this.newItem);
            this.newItem = '';
        },

        removeItem: function (index) {
            this.todoItems.splice(index, 1);
        }
    }
});