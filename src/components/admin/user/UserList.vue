
<template>
    <div class="col-12">
        <ul class="list-group">
            <li v-for="(contact, index) in filteredContacts" :key="contact._id" 
                :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)"
                class="list-group-item d-flex justify-content-between align-items-center mb-3 border">
                <div>
                    <h5 class="mb-1">Người dùng: {{ contact.name }}</h5>
                    <p class="mb-1">Email: {{ contact.email }}</p>
                    <p class="mb-1">Địa chỉ: {{ contact.address }}</p>
                    <p class="mb-1">Số điện thoại: {{ contact.phone }}</p>
                </div>
                <div class="btn-group" role="group">
                    <router-link :to="{ name: 'contact.edit', params: { id: contact._id }, }" class="nav-link">
                        <span class="btn btn-sm btn-success">
                            <i class="fas fa-plus"></i> Hiệu chỉnh
                        </span>
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    props: {
        contacts: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
    },
    computed: {
        filteredContacts() {
            return this.contacts.filter(contact => contact.role === false);
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
