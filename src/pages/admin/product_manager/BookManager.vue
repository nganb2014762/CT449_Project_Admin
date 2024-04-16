
<template>
    <div class="container">
        <h3 class="text-center" style="min-width: 750px;">Tổng số sản phẩm: {{ filteredProductsCount }}</h3>
        <div class="col-4">
            <InputSearch v-model="searchText" />
        </div>
        <div class="page row">
            <div class="col-10 mt-3">
                <button class="btn btn-primary mt-3 mb-3" @click="goToAddProduct">
                    <i class="fas fa-plus"></i> Thêm sản phẩm
                </button>
                <ProductList v-if="filteredProductsCount > 0" :products="filteredProducts"
                    v-model:activeIndex="activeIndex" />
                <p v-else class="text-muted" style="min-width: 750px;">Không có sản phẩm nào.</p>
                
            </div>
        </div>
    </div>
</template>

<script>
import InputSearch from "@/components/admin/InputSearch.vue";
import ProductList from "../../../components/admin/product/ProductList.vue";
import ProductService from "@/services/product.service";

export default {
    components: {
        InputSearch,
        ProductList,
    },
    data() {
        return {
            Products: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        contactStrings() {
            return this.Products.map((user) => {
                const { title, author, nxb, imageurl, quantity } = user;
                return [title, author, nxb, imageurl, quantity].join("");
            });
        },
        filteredProducts() {
            if (!this.searchText) return this.Products;
            return this.Products.filter((_user, index) =>
                this.contactStrings[index].includes(this.searchText)
            );
        },
        activeProduct() {
            if (this.activeIndex < 0) return null;
            return this.filteredProducts[this.activeIndex];
        },
        filteredProductsCount() {
            return this.filteredProducts.length;
        },
    },
    methods: {
        async retrieveProducts() {
            try {
                this.Products = await ProductService.getAll();
                console.log(await ProductService.getAll());
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveProducts();
            this.activeIndex = -1;
        },
        goToAddProduct() {
            this.$router.push({ name: "product.add" });
        },
    },
    mounted() {
        this.refreshList();
    },
};
</script>

<style scoped>
.page {
    text-align: left;
    max-width: 750px;
}
</style>
