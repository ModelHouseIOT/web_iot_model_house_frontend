  <script>
  import {useField, useForm} from "vee-validate";

  export default {
    name: "Proposal",
    data(){
      const { resetForm } = useForm();
      const { value, errorMessage, value1 } = useField('value', this.validateField);
      return {
        confirmation: false,
        resetForm: resetForm(),
        value: value,
        value1: value1,
        errorMessage: errorMessage,
      }
    }
  }
  </script>

  <template>
    <div class="card flex justify-content-center" style="height: 400px; margin:200px 100px 0px 100px;">
      <form @submit.prevent="confirmation = true" class="flex flex-column gap-2" :reset="resetForm">
        <div class="title-container">
          <h1>Create your proposal</h1>
          <Button label="Save Draft" class="draft-button"/>
        </div>
          <span class="p-float-label">
              <Textarea id="value" v-model="value" :class="{ 'p-invalid': errorMessage }"
                        rows="4" cols="30" aria-describedby="text-error"
                        style="width: 100%; height: 300px;"/>
              <label for="value">Description</label>
          </span>
        <div><small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small></div>
        <div>
          <span class="p-float-label">

            <InputNumber :class="{ 'p-invalid': errorMessage }" id="price" v-model="value1" inputId="currency-us" mode="currency" currency="PEN" locale="en-PE" />
            <label for="price">Price</label>
          </span>
          <div><small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small></div>
        </div>
        <h2>Activites</h2>
<!--        <div v-for="(item, index) in ">-->
<!--          <InputText type="text" v-model="value" />-->
<!--        </div>-->


        <Button type="submit" label="Submit" style="background-color:#02AA8B; border-color: #02AA8B;
              margin-top: 30px; width: 30%;"/>
      </form>
    </div>
  </template>

  <style scoped>
  .title-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .draft-button {
    margin-top: 10px;
  }
  </style>