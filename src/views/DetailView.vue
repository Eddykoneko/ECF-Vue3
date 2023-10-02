<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const API_ENDPOINT = 'https://metallo.ew.r.appspot.com/monsters/';
const routeId = useRoute().params.id;
const localMonster = ref({});
const newAPI = API_ENDPOINT + routeId;

onBeforeMount(async () => {
  const monster = await axios.get(newAPI);
  const { data, status } = monster;
  if (status === 200) {
    localMonster.value = data;
  } else {
    console.error('OUPS 😣');
  }
});
</script>


<template>
           <template>
  <div class="container-fluid d-flex align-items-center justify-content-center">
    <div class="mx-auto">
      <div class="card border-primary mb-3" style="max-width: 32rem;">
        <div class="card-header">{{ localMonster._id }}</div>
        <img :src="localMonster.image" alt="Monster Image">
        <div class="card-body text-primary">      
          <h5 class="card-title">{{ localMonster.name }}</h5>
          <p class="card-text">
            *description* These heavyweight monsters can be found all over Hyrule. 
            They're much tougher than their standard counterparts and often have much stronger weapons equipped.
          </p>
          <ul class="list mt-2">
            <li>[Drops 1]</li>
            <li>[Drops 2]</li>
            <li>[Drops 3]</li>
          </ul>
        </div>
      </div>
    </div>
  </div> 
</template>

</template>