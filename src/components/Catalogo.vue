<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/firebase';

const catalogoCollectionRef = collection(db, 'productos')
// const catalogoCollectionQuery = query(catalogoCollectionRef, orderBy('modelo', 'asc'), limit(3));
const catalogoCollectionQuery = query(catalogoCollectionRef, orderBy('modelo', 'asc'));


const catalogo = ref([
    {
        id: '',
        categoria: '',
        descripcion: '',
        disponibilidad: '',
        imagen: '',
        manual: '',
        marca: '',
        modelo: '',
        precio: 0.0
    }
])

onMounted(async () => {
    const querySnapshot = await getDocs(catalogoCollectionQuery);
    let fbCatalogo: any = []

    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        const catalogo = {
            id: doc.id,
            categoria: doc.data().categoria,
            descripcion: doc.data().descripcion,
            disponibilidad: doc.data().disponibilidad,
            imagen: doc.data().imagen,
            manual: doc.data().manual,
            marca: doc.data().marca,
            modelo: doc.data().modelo,
            precio: doc.data().precio,
        }
        fbCatalogo.push(catalogo)
    });
    catalogo.value = fbCatalogo
})

const newCatalogoContent = ref('');

// const addTodo = () => {
//     const newTodo = {
//         id: 'id1',
//         content: newTodoContent.value,
//         done: false
//     }
//     // console.log('newTodo:', newTodo);
//     catalogo.value.unshift(newTodo);
//     newTodoContent.value = '';
// }

// const deleteTodo = (id: any) => {
//     catalogo.value = catalogo.value.filter(todo => todo.id !== id)
// }

// const toggleDone = (id: any) => {
//     const index = catalogo.value.findIndex(todo => todo.id === id)
//     catalogo.value[index].done = !catalogo.value[index].done;
// }

</script>

<template>

    <div>
        <form>
            <div class="field is-grouped mb-5">
                <p class="control is-expanded">
                    <input v-model="newCatalogoContent" class="input" type="text" placeholder="Add a todo">
                </p>
                <p class="control">
                    <button :disabled="!newCatalogoContent" class="button is-info">
                        Add
                    </button>
                </p>
            </div>
        </form>

        <div v-for="producto in catalogo" class="card mb-5"
            :class="{ 'has-background-success-light': producto.disponibilidad }">
            <div class="card-content">
                <header class="card-header">
                    <p class="card-header-title">
                        {{ producto.modelo }}
                    </p>
                    <!-- <button class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button> -->
                </header>

                <div class="content">
                    <div class="columns is-mobile is-vcentered">
                        <div class="column has-text-left">
                            <figure class="image is-128x128">
                                <img :src="producto.imagen" alt="">
                            </figure>
                            <div class="row">
                                <!-- <strong>Marca:</strong> -->
                                <p>{{ producto.marca }}</p>
                            </div>
                            <div class="row">
                                <p>{{ producto.manual }}</p>
                            </div>
                        </div>

                        <div class="column has-text-left">
                            {{ producto.descripcion }}
                        </div>

                        <!-- <div class="column">
                            <button class="button"
                                :class="producto.disponibilidad ? 'is-success' : 'is-light'">
                                &check;
                            </button>
                            <button class="button is-danger ml-2">
                                &cross;
                            </button>
                        </div> -->
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