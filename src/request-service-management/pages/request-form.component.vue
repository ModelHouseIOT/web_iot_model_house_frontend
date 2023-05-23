<script>
  import {ref} from "vue";
  export default {
    name: "RequestForm",
    data(){
      const visible = ref(false);
      return{
        visible: visible,
      }
    }
  }
</script>
<template>
    <Button class="button" icon="pi pi-send" label="Send Request"
                style="background-color:#02AA8B; border-color: #02AA8B;"  @click="visible = true"/>
    <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Dialog>
</template>

<style scoped>
button{
  margin-right: 20px;
}
</style>