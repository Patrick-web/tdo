var study = new Vue({
  el: "#vue-app",
  data: {
    heading: "Vue.js",
    todos:[],
    target:null
  },
  methods:{
    addTodo(){ 
      const todo = document.querySelector("#todo");
      const newTodo = {
        id: Date.now(),
        todo: todo.value,
        isDone:false
      }
      if(todo.value!=''){
        this.todos.unshift(newTodo);
      }
      todo.value=''
    },
    deleteTodo(index){
      this.todos.splice(index,1);
    },
    editTodo(index){
      this.target = index
      const input = document.querySelector("#todo")
      input.value = this.todos[index].todo
      document.querySelector('.form').classList.add('editMode')
      document.querySelector('#todo').focus()
    },
    saveEdit(){
      const editedTodo = document.querySelector("#todo");
      this.todos[this.target].todo = editedTodo.value;
      editedTodo.value='';
      document.querySelector('.editMode').classList.remove('editMode')
      document.querySelector('.showActions').classList.remove('showActions')
    },
    addOrEdit(){
      if(document.querySelector('.form').classList.contains('editMode')){
        this.saveEdit()
      }else{
        this.addTodo()
      }
    },
    markAsDone(id){
      const targetID= this.todos.map(todo=>todo.id).indexOf(id)
      this.todos[targetID].isDone=!this.todos[targetID].isDone
      console.log(this.todos[targetID].isDone)
    },
    showActions(e){
      let todo;
      if(e.target.classList.contains('todo')){
        todo = e.target; 
        todo.classList.toggle('showActions')

      }else if(e.target.classList.contains('todoName')){
        todo=e.target.parentElement;      
        todo.classList.toggle('showActions')

      }

    }
  }
});