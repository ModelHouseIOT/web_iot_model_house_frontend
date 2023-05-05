<template>
    <section>
        <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText id="search" v-model="search" placeholder="Search" />
                  <Button icon="pi pi-search" @click="onSearch" />
        </span>
    </section>

    <div class="card">

        <div v-for="business in businesses" :key="business.id" class="card-container-area" @click="detailF" style="cursor:pointer">
            <Card>
                    <template #footer class="text-center"	> {{business.name}}</template>
                <template #content>
                    <img :src= "business.image" class="imgArea" alt="Remodeling a particular area of your house">
                </template>
            </Card>
        </div>
    </div>

</template>
<script>
import {defineComponent} from 'vue'
import {SearchBusinessService} from "@/views/remodeler/service/search-business.service";

export default defineComponent({
    name: "remodeler",
    data() {
        return {
            searchService: null,
            businesses: null,
            search: null,
            items: [
                {
                    id: 1,
                    name:"Painting",
                    url:"https://picsum.photos/id/237/200/300"
                },
                {
                    id: 2,
                    name:"Kitchen",
                    url:"https://picsum.photos/id/237/200/300"
                },
                {
                    id: 3,
                    name:"Random",
                    url:"https://picsum.photos/id/237/200/300"
                }
            ]
        }
    },
    created(){
        this.searchService = new SearchBusinessService();
        this.searchService.searchRemodeler().then(res=>{
            this.businesses = res.data;
            console.log(res.data);
        })
    },
    methods:{
        onSearch(){

        },
        detailF(){
            this.$router.push(name="detail");
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
    grid-template-columns: repeat(3, 1fr);
    margin-top: 80px;
    margin-bottom: 100px;
}

.card-container-area{
    margin: 100px 80px;
}
#search{
    width: 400px;
}
</style>