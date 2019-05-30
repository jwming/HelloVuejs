new Vue({
    el: "#todo",

    data: {
        todoItems: [],
        newItem: ''
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