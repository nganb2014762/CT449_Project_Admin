<template>
    <div  >
        <div v-for="(order) in orders" :key="order._id" class="col-10 border border-dark rounded mb-3" style="padding: 20px;">
            <h5 class="mb-3 text-center"> Tên người mượn: {{ order.name }}</h5>
            <div class="d-flex w-100 justify-content-between list-group-item">                
                <h6>Ngày mượn: {{ order.ngayMuon }}</h6>                
                <p class="mb-1">
                <h6> Trạng thái:
                    <span :class="{
                        'text-warning': order.status === 'Đang đợi duyệt',
                        'text-info': order.status === 'Đang mượn',
                        'text-primary': order.status === 'Đã trả',
                        'text-danger': order.status === 'Đã hủy' || order.status === 'Quá hạn trả'
                    }">
                        {{ order.status }}
                    </span>
                </h6>
                </p>
            </div>
            <div class="d-flex w-100 justify-content-between list-group-item">
                <h6>Ngày trả: {{ order.ngayTra }}</h6>
            </div>


            <div class="table-responsive">
                <table class="table table-bordered">

                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tựa sách</th>
                        <th scope="col">Số lượng</th>                        
                    </tr>

                    <tbody>
                        <tr v-for="(book, bookIndex) in order.books" :key="book.bookId">
                            <td>{{ bookIndex + 1 }}</td>
                            <td>{{ book.title }}</td>
                            <td>{{ book.quantity }}</td>                           

                        </tr>
                    </tbody>
                </table>
                <div class="col-2 d-flex justify-content-end align-items-center">
                        <router-link :to="{ name: 'order.edit', params: { id: order._id }, }">
                            <button class="btn btn-sm btn-success" style="white-space: nowrap;">
                                <i class="fas fa-plus"></i> Duyệt
                            </button>
                        </router-link>
                    </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        orders: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    },

};
</script>
