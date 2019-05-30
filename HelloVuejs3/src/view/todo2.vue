<template>
    <div>
        <legend>查看您的代办事项：</legend>
        <ol>
            <li v-for="(item, index) in todoItems" v-bind:key="index">
                <span>{{ item }}</span>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'Todo2',
    
    computed: {
        todoItems: function () {
            return this.$store.state.todo.todoItems;
        }
    }
}
</script>
