
<template>
    <div class="list-group">
        <router-link v-for="(product, index) in products" :key="product._id" :to="{ name: 'product.edit', 
        params: { id: product._id }, }" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center mb-5" 
        :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)" style="border: 1px solid #ccc; 
        border-radius: 5px; padding: 10px; width: 150%;">
            <img :src="product.imageUrl" alt="Hình ảnh" class="rounded ml-2" style="max-width: 130px; max-height: 130px;" />
            <div>
                <h5 class="mb-1">{{ product.title }}</h5>
                <p class="mb-1">Tác giả: {{ product.author }}</p>
                <p class="mb-1">Nhà xuất bản: {{ product.nxb }}</p>
                <p class="mb-1">Năm xuất bản: {{ product.namxb }}</p>
                <p class="mb-1">Số lượng: {{ product.quantity }}</p>
            </div>
            
            <span class="btn btn-sm btn-success">
                <i class="fas fa-pencil-alt"></i> Edit
            </span>          
            
        </router-link>       
    </div>
</template>


<script>
export default {
    props: {
        products: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    }
};
</script>

<style scoped>
.table {
    width: 100%;
}

.table th,
.table td {
    vertical-align: middle;
}

.table tbody tr:hover {
    background-color: #f2f2f2;
}

.active {
    background-color: #d3d3d3;
}
</style>
