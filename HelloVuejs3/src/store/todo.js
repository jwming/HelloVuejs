//import Axios from "axios"

export default {
    state: {
        todoItems: []
    },

    // mutations中只允许同步操作，一般就是更新state
    // 文档建议actions做异步操作，同步更新state的操作commit给mutations
    // 但actions实际没有限制，在其内部更新state也是可以的

    // mutations: {
    //     loadItems: function(state, items) {
    //         state.todoItems = items;
    //     },
        
    //     addItem: function (state, item) {
    //         state.todoItems.push(item);
    //     },
        
    //     removeItem: function (state, index) {
    //         state.todoItems.splice(index, 1);
    //     }
    // },

    actions: {        
        loadItems: function (context) {
            // Axios.get("http://localhost:54716/api/todos")
            //     .then(function (response) {
            //         window.console.log(response);
            //         context.state.todoItems = response.data;
            //     })
            //     .catch(function (error) {
            //         window.console.log(error);
            //     });
            
            context.state.todoItems = JSON.parse(window.localStorage.getItem('todoItems') || '[]');        
        },

        addItem: function (context, item) {
             context.state.todoItems.push(item);             
        },
        
        removeItem: function (context, index) {
            context.state.todoItems.splice(index, 1);
        },

        saveItems: function (context) {
            // Axios.post("http://localhost:54716/api/todos", context.state.todoItems)
            //     .then(function (response) {
            //         window.console.log(response);
            //     })
            //     .catch(function (error) {
            //         window.console.log(error);
            //     });

            window.localStorage.setItem('todoItems', JSON.stringify(context.state.todoItems));
        }
    }
};
