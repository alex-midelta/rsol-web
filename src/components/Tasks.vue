<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/firebase';

const todosCollectionRef = collection(db, 'todos')
const todosCollectionQuery = query(todosCollectionRef, orderBy('content', 'asc'), limit(3));

const todos = ref([
    // {
    //     id: 'id1',
    //     content: 'Testing task.',
    //     done: false
    // },
    // {
    //     id: 'id2',
    //     content: 'Also a testing task.',
    //     done: true
    // },
    // {
    //     id: 'id3',
    //     content: 'Last one.',
    //     done: false
    // }
])

onMounted(async() => {
    const querySnapshot = await getDocs(todosCollectionQuery);
    let fbTodos: any = []

    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const todo = {
            id: doc.id,
            content: doc.data().content,
            done: doc.data().done
        }
        fbTodos.push(todo)
    });
    todos.value = fbTodos
})

const newTodoContent = ref('');

const addTodo = () => {
    const newTodo = {
        id: 'id1',
        content: newTodoContent.value,
        done: false
    }
    // console.log('newTodo:', newTodo);
    todos.value.unshift(newTodo);
    newTodoContent.value = '';
}

const deleteTodo = (id: any) => {
    todos.value = todos.value.filter(todo => todo.id !== id)
}

const toggleDone = (id: any) => {
    const index = todos.value.findIndex(todo => todo.id === id)
    todos.value[index].done = !todos.value[index].done;
}

</script>

<template>
    <h1 class="title">Tasks</h1>

    <div>
        <form @submit.prevent="addTodo">
            <div class="field is-grouped mb-5">
                <p class="control is-expanded">
                    <input v-model="newTodoContent" class="input" type="text" placeholder="Add a todo">
                </p>
                <p class="control">
                    <button :disabled="!newTodoContent" class="button is-info">
                        Add
                    </button>
                </p>
            </div>
        </form>

        <div v-for="todo in todos" class="card mb-5" :class="{ 'has-background-success-light': todo.done }">
            <div class="card-content">
                <div class="content">
                    <div class="columns is-mobile is-vcentered">
                        <div class="column is-5 has-text-left" :class="{ 'has-text-success line-through': todo.done }">
                            {{ todo.content }}
                        </div>
                        <div class="column">
                            <button @click="toggleDone(todo.id)" class="button"
                                :class="todo.done ? 'is-success' : 'is-light'">
                                &check;
                            </button>
                            <button @click="deleteTodo(todo.id)" class="button is-danger ml-2">
                                &cross;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
.line-through {
    text-decoration: line-through;
}
</style>