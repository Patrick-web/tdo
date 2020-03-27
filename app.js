var study = new Vue({
  el: "#vue-app",
  data: {
    heading: "Vue.js",
    todos:[]
  },
  methods:{
    addTodo(){ 
      const todo = document.querySelector("#todo");
      const newTodo = {
        id: Date.now(),
        todo: todo.value,
        isDone:false
      }
      this.todos.unshift(newTodo);
      todo.value=''
      console.log(this.todos)
    },
    deleteTodo(index){
      this.todos.splice(index,1);
    },
    markAsDone(id){
      const targetID= this.todos.map(todo=>todo.id).indexOf(id)
      this.todos[targetID].isDone=!this.todos[targetID].isDone
      console.log(this.todos[targetID].isDone)
    },
    showActions(e){
      console.log(e.target)
      let todo;
      if(e.target.classList.contains('todo')){
        todo = e.target; 
      }else if(e.target.classList.contains('todoName')){
        todo=e.target.parentElement;      
        
      }
      
      todo.classList.toggle('showActions')
    }
  }
});