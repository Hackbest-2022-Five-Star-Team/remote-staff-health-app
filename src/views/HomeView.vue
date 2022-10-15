<template>
  <div class="hero mr-auto pr-5 w-50">
    <p class="text-left">
      Hire a <span class="text-secondary1">Health</span> worker Today.
    </p>
    <div class="input-group">
      <input
        type="text"
        class="form-control p-3 rounded-lg"
        placeholder="Type something"
      />
      <div class="input-group-append ml-1">
        <span class="input-group-text px-3 py-3 bg-primary1 rounded-xl">
          <b-icon-search variant="light"></b-icon-search>
        </span>
      </div>
    </div>
    <div class="mt-3 d-flex justify-content-between">
      <span class="rounded-lg px-3 border border-secondary p-2"
        >Neurologists</span
      >
      <span class="rounded-lg px-3 border border-secondary p-2"
        >Anesthesiologists</span
      >
      <span class="rounded-lg px-3 border border-secondary p-2"
        >Internists</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {},
});
</script>

<style lang="scss">
.hero {
  margin-top: 100px;
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-size: 64px;
    line-height: 96px;
    color: #000;
  }
  input[type='text'] {
    font-size: 25px;
  }
}
</style>
