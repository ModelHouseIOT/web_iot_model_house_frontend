<template>
    <section>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText id="search" v-model="search" placeholder="Search" />
          <Button icon="pi pi-search" @click="onSearch" />
        </span>
    </section>

    <div class="card">
        <div v-for="business in businesses" :key="business.id" class="card-container-area" style="cursor:pointer">
            <Card style="min-height: 620px;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);" id="elevator">
              <template #header>
                <img :src= "business.image" class="imgArea" alt="Remodeling a particular area of your house">
              </template>
              <template #title class="text-center"> {{business.name}}</template>
              <template #subtitle class="text-center">{{business.address}}</template>
              <template #content class="text-center">
                {{business.description}}
                  <Rating style="margin-top: 50px;" v-model="value" :cancel="false" :model-value="3" readonly/>
              </template>
              <template #footer >
                <Button @click="addToCart" icon="pi pi-shopping-cart" label="Add To Cart"
                        style="background-color:#02AA8B; border-color: #02AA8B;"/>
                <Button @click="goIntoDetails(business.accountId)" icon="pi pi-caret-right" label="See More"
                        style="background-color:#004A63; border-color: #004A63;
                        margin-left:60px;"/>
              </template>
            </Card>
        </div>
    </div>
</template>
<script>
import {defineComponent} from 'vue'
import {BusinessListService} from "@/request-service-management/service/business-list.service";
import { ref } from 'vue';

export default defineComponent({
    name: "remodeler",
    data() {
        return {
            searchService: null,
            businesses: null,
            search: null,
            value: null,
        }
    },
    created(){
        this.searchService = new BusinessListService();
        this.searchService.searchRemodeler().then(res=>{
            this.businesses = res.data;
            console.log(res.data);
        });
        this.value = ref(null);
    },
    methods:{
        onSearch(){

        },
        goIntoDetails(id){
            this.$router.push("/detail/" + id);
        },
        addToCart(){
          this.$router.push(name="sign-up");
        }
    }
})
</script>
<style scoped>
section{
    display: flex;
    justify-content: center;
    text-transform: capitalize;
    position:  relative;
    top: 125px;
    margin: 0 auto;
    width: 50%;
}
.card{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 80px;
    margin-bottom: 100px;
    max-height: 300px;
}

.card-container-area{
    margin: 100px 20px 30px 20px;
}
#search{
    width: 400px;
}
#elevator {
  transition: transform 0.1s ease;
}

#elevator:hover {
  //transform: translateY(-5px);
  transform: scale(1.03);
}

</style>