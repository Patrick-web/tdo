var study = new Vue({
  el: "#vue-app",
  data: {
    heading: "Vue.js",
    todos:['Do the CAT','Clean up the room']
  },
  methods:{
    addTodo(){ 
      const newTodo = document.querySelector("#todo");
      
      this.todos.unshift(newTodo.value);
      newTodo.value=''
      console.log(this.todos)
    }
  }
});
console.log("This editor is amazing");
