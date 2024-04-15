<template>
    <nav class="navbar navbar-expand navbar-light  justify-content-lg-around"
        style="background-color: #73C6D9 ; color: black; font-weight: bold; ">
        <!-- <a href="/admin/product_manager" class="navbar-brand">Books Store</a> -->
        <a href="/admin/product_manager" class="navbar-brand">
            <img src="https://media.istockphoto.com/id/1338909550/vi/vec-to/m%E1%BB%9F-s%C3%A1ch-logo-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-cho-m%E1%BB%99t-hi%E1%BB%87u-s%C3%A1ch-ho%E1%BA%B7c-ki%E1%BB%83u-ch%E1%BB%AF-theo-phong-c%C3%A1ch-t%E1%BB%91i-thi%E1%BB%83u-c%E1%BB%A7a-c%C3%A1c.jpg?s=612x612&w=0&k=20&c=SS5ZqUy6U04BSA6DmvMGA9Pdb-CRMFi4FQk2C_pWoxg="
                alt="My Library Logo" style="max-height: 60px; border-radius: 50%;">
        </a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item ml-5">
                <router-link :to="{ name: 'book_manager' }" class="nav-link">
                    Sản phẩm
                </router-link>
            </li>
            
            <li class="nav-item ml-5">
                <router-link :to="{ name: 'order_manager' }" class="nav-link">
                    Duyệt đơn
                </router-link>
            </li>
            <li class="nav-item ml-5">
                <router-link :to="{ name: 'contactbook' }" class="nav-link">
                    Khách hàng
                </router-link>
            </li>
            <li class="nav-item ml-5" v-if="userName">
                <router-link to="#" class="nav-link" @click="confirmLogout">
                    <i class="fas fa-user mr-2"></i>                                       
                    <span> {{ userName }}</span>
                </router-link>
            </li>
        </div>
    </nav>
    
</template>

<script>
import Cookies from 'js-cookie';

export default {
    data() {
        return {
            userName: ''
        };
    },
    mounted() {
        this.getUserNameFromCookie();
    },
    methods: {
        getUserNameFromCookie() {
            const userName = Cookies.get('userName');
            if (userName) {
                this.userName = userName;
            }
        },
        confirmLogout() {
            if (confirm("Bạn có chắc muốn đăng xuất không?")) {
                this.logout();
            }
        },
        logout() {
            Cookies.remove('userName');
            Cookies.remove('userId');
            this.userName = '';
            this.$router.push({ name: 'login' });
        }
    }
};
</script>
