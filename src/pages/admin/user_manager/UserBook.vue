<!-- <template>
    <div class="page row ">
        <div class="col-8">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-12">
            
            <ContactList v-if="filteredContactsCount > 0" :contacts="filteredContacts"
                v-model:activeIndex="activeIndex" />
            <p v-else class="text-muted" style="min-width: 750px;">Không có liên hệ nào.</p>
        </div>
    </div>
</template>

<script>
import InputSearch from "@/components/admin/InputSearch.vue";
import ContactList from "@/components/admin/user/UserList.vue";
import AuthService from "@/services/auth.service";
export default {
    components: {
        InputSearch,
        ContactList,
    },
    data() {
        return {
            users: [],
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
            return this.users.map((user) => {
                const { name, email, address, phone } = user;
                return [name, email, address, phone].join("");
            });
        },
        filteredContacts() {
            if (!this.searchText) return this.users;
            return this.users.filter((_user, index) =>
                this.contactStrings[index].includes(this.searchText)
            );
        },
        activeContact() {
            if (this.activeIndex < 0) return null;
            return this.filteredContacts[this.activeIndex];
        },
        filteredContactsCount() {
            return this.filteredContacts.length;
        },
    },
    methods: {
        async retrieveContacts() {
            try {
                this.users = await AuthService.getAll();
                console.log(await AuthService.getAll());
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveContacts();
            this.activeIndex = -1;
        }
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
</style> -->
<template>
    <div class="page row ">
        <h3 class="text-center mb-3" style="min-width: 750px;">Tổng số người dùng: {{ filteredContactsCount }}</h3>
        <div class="col-8">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-12">
            <ContactList v-if="filteredContactsCount > 0" :contacts="filteredContacts"
                v-model:activeIndex="activeIndex" />
            <p v-else class="text-muted" style="min-width: 750px;">Không có liên hệ nào.</p>
            
        </div>
    </div>
</template>

<script>
import InputSearch from "@/components/admin/InputSearch.vue";
import ContactList from "@/components/admin/user/UserList.vue";
import AuthService from "@/services/auth.service";

export default {
    components: {
        InputSearch,
        ContactList,
    },
    data() {
        return {
            users: [],
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
            return this.users.map((user) => {
                const { name, email, address, phone } = user;
                return [name, email, address, phone].join("");
            });
        },
        filteredContacts() {
            if (!this.searchText) return this.users;
            return this.users.filter((_user, index) =>
                this.contactStrings[index].includes(this.searchText)
            );
        },
        activeContact() {
            if (this.activeIndex < 0) return null;
            return this.filteredContacts[this.activeIndex];
        },
        filteredContactsCount() {
            return this.filteredContacts.length-1;
        },
    },
    methods: {
        async retrieveContacts() {
            try {
                this.users = await AuthService.getAll();
                console.log(await AuthService.getAll());
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveContacts();
            this.activeIndex = -1;
        }
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
