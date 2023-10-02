<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const API_ENDPOINT = 'https://metallo.ew.r.appspot.com/monsters';
const router = useRouter();
const localMonsters = ref([]);

onBeforeMount(async () => {
  const monsters = await axios.get(API_ENDPOINT);
  const { data, status } = monsters;
  if (status === 200) {
    localMonsters.value = data.slice(0, 3);
  } else {
    console.error('OUPS 😣');
  }
});
</script>



<template>
    <div class="container-fluid">
      <div class="wrapper">
        <div class="row title-section">
          <h2 class="mbr-section-title mbr-fonts-style display-2"><strong>Monsters</strong></h2>
        </div>
        <div class="row justify-content-center">
          <div class="col-4 col-md-2 mb-2 mb-md-5" v-for="monster in localMonsters" :key="monster._id">
            <div class="card">
              <img :src="monster.image" alt="" class="card-img-top h-100">
              <div class="card-body">
                <h3 class="card-title mbr-section-subtitle mbr-fonts-style"><strong>{{ monster.name }} </strong></h3>
                <ul class="list mbr-fonts-style display-7">
                  <li>{{ monster.drops }}</li>
                  <li>{{ monster.drops }}</li>
                  <li>{{ monster.drops }}</li>
                </ul>
                <div class="mbr-section-btn">
                  <button @click="goToDetail(monster._id)" class="justify-content-center btn btn-primary display-4">
                    VOIR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  