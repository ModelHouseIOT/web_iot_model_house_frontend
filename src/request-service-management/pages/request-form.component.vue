<script>
  import {ref} from "vue";
  import {useToast} from "primevue/usetoast";
  import {useField, useForm} from "vee-validate";
  import {RequestService} from "@/request-service-management/service/request.service";
  export default {
    name: "RequestForm",
    props:{
      businessId: Number,
    },
    data(){
      const { handleSubmit, resetForm } = useForm();
      const { value, errorMessage } = useField('value', this.validateField);
      return {
        toast: useToast(),
        handleSubmit: handleSubmit,
        resetForm: resetForm(),
        value: value,
        errorMessage: errorMessage,
        visible: ref(false),
        requestService: null,
        request: null,
      }
    },
    created() {
      this.requestService = new RequestService();
    },
    methods: {
     validateField(value) {
      if (!value) {
        return 'Description is required.';
      }
        return true;
      },
      onSubmit(){
          if (this.value) {
            this.value = '';
            this.visible=false;
            this.toast.add({severity: 'info', summary: 'Form Submitted', detail: this.value, life: 3000});
            this.requestService.sendRequest(JSON.parse(localStorage.getItem("account")).id, this.businessId, {
              "status": "IN_PROCESS",
              "description": this.value,
              "accepted": false
            }).then(res=>{
              this.request = res.data;
              console.log(res.data);
            });
          }
      },
    }
  }
</script>
<template>
    <Button class="button" icon="pi pi-send" label="Send Request"
                style="background-color:#02AA8B; border-color: #02AA8B;"  @click="visible = true"/>
    <Dialog v-model:visible="visible" modal header="Complete Your Request" :style="{ width: '50vw' }">
      <div class="card flex justify-content-center">
        <form @submit.prevent="onSubmit" class="flex flex-column gap-2" :reset="resetForm">
        <span class="p-float-label">
            <Textarea id="value" v-model="value" :class="{ 'p-invalid': errorMessage }" rows="4" cols="30" aria-describedby="text-error" />
            <label for="value">Description</label>
        </span>
          <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
          <Button type="submit" label="Send" style="background-color:#02AA8B; border-color: #02AA8B;"/>
        </form>
      </div>
    </Dialog>
    <Toast />
</template>

<style scoped>
button{
  margin-right: 20px;
}
</style>