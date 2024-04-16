<!-- <template>
    <div class="container">
        <div class="col-4">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-10">
            
            <OrderList v-if="filteredOrdersCount > 0" :orders="filteredOrders" v-model:activeIndex="activeIndex" />
            <p v-else class="text-muted" style="min-width: 750px;">Không có đơn mượn nào.</p>
        </div>
    </div>
</template>


<script>
import InputSearch from '@/components/admin/InputSearch.vue';
import OrderService from '@/services/order.service';
import OrderList from '@/components/admin/order/OrderList.vue';

export default {
    components: {
        InputSearch,
        OrderList,
    },
    data() {
        return {
            orders: [],
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
        orderStrings() {
            return this.orders.map((order) => {
                const { name, status } = order;
                return [name, status].join("");
            });
        },
        filteredOrders() {
            if (!this.searchText) return this.orders;
            return this.orders.filter((_order, index) =>
                this.orderStrings[index].includes(this.searchText)
            );
        },
        activeOrder() {
            if (this.activeIndex < 0) return null;
            return this.filteredOrders[this.activeIndex];
        },
        filteredOrdersCount() {
            return this.filteredOrders.length;
        },
    },
    methods: {
        async retrieveOrders() {
            try {
                this.orders = await OrderService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveOrders();
            this.activeIndex = -1;
        }
    },
    mounted() {
        this.refreshList();
    },

};
</script> -->
<template>
    <div class="container">
        <h3 class="text-center" style="min-width: 750px;">Tổng số đơn hàng: {{ filteredOrdersCount }}</h3>
        <div class="col-4">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-10">
            <OrderList v-if="filteredOrdersCount > 0" :orders="filteredOrders" v-model:activeIndex="activeIndex" />
            <p v-else class="text-muted" style="min-width: 750px;">Không có đơn mượn nào.</p>
            
        </div>
    </div>
</template>

<script>
import InputSearch from '@/components/admin/InputSearch.vue';
import OrderService from '@/services/order.service';
import OrderList from '@/components/admin/order/OrderList.vue';

export default {
    components: {
        InputSearch,
        OrderList,
    },
    data() {
        return {
            orders: [],
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
        orderStrings() {
            return this.orders.map((order) => {
                const { name, status } = order;
                return [name, status].join("");
            });
        },
        filteredOrders() {
            if (!this.searchText) return this.orders;
            return this.orders.filter((_order, index) =>
                this.orderStrings[index].includes(this.searchText)
            );
        },
        activeOrder() {
            if (this.activeIndex < 0) return null;
            return this.filteredOrders[this.activeIndex];
        },
        filteredOrdersCount() {
            return this.filteredOrders.length;
        },
    },
    methods: {
        async retrieveOrders() {
            try {
                this.orders = await OrderService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveOrders();
            this.activeIndex = -1;
        }
    },
    mounted() {
        this.refreshList();
    },
};
</script>
