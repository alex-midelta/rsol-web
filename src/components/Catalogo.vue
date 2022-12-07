<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/firebase';
import ModalVue from '@/components/Modal.vue'

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

        <div class="columns is-mobile is-multiline is-centered">
            <div v-for="producto in catalogo" class="column"
                :class="{ 'has-background-success-light': producto.disponibilidad }">
                <div class="card box">

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

                    <div class="card-image">
                        <figure class="image is-128x128">
                            <img :src="producto.imagen" alt="">
                        </figure>
                    </div>

                    <div class="card-content">
                        <div class="columns is-mobile is-vcentered">

                            <!-- <div class="column is-one-quarter has-text-left">
    
                                <div class="row">
                                    <strong>Marca:</strong>
                                    <p>{{ producto.marca }}</p>
                                </div>
                                <div class="row">
                                    <p>{{ producto.manual }}</p>
                                </div>
                            </div> -->

                            <div class="has-text-left">
                                <!-- {{ producto.descripcion }} -->
                                {{ producto.precio }}
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

                <ModalVue :modelo="producto.modelo" :descripcion="producto.descripcion" :imagen="producto.imagen">
                </ModalVue>

            </div>
        </div>

    </div>


</template>

<style>
.line-through {
    text-decoration: line-through;
}
</style>