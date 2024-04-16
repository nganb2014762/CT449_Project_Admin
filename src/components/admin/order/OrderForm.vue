<template>
    <Form @submit="submitOrder" :validation-schema="orderFormSchema" class="my-form border border-dark rounded p-3">
    <div class="form-group row">
        <label for="title" class="col-sm-3 col-form-label "><strong>Tên người mượn sách</strong></label>
        <div class="col-sm-9">
            <Field name="title" type="text" class="form-control" v-model="orderLocal.name" />
            <ErrorMessage name="title" class="error-feedback" />
        </div>
    </div>
    <div class="form-group row">
        <label for="ngayMuon" class="col-sm-3 col-form-label fw-bold"><strong>Ngày mượn</strong></label>
        <div class="col-sm-9">
            <Field name="ngayMuon" type="date" class="form-control" v-model="orderLocal.ngayMuon" />
            <ErrorMessage name="ngayMuon" class="error-feedback" />
        </div>
    </div>
    <div class="form-group row">
        <label for="ngayTra" class="col-sm-3 col-form-label fw-bold"><strong>Ngày trả</strong></label>
        <div class="col-sm-9">
            <Field name="ngayTra" type="date" class="form-control" v-model="orderLocal.ngayTra" />
            <ErrorMessage name="ngayTra" class="error-feedback" />
        </div>
    </div>
    <div v-for="(book, index) in orderLocal.books" :key="index">
        <div class="form-group row">
            <label :for="'bookTitle' + index" class="col-sm-3 col-form-label fw-bold"> <strong>{{ 'Tên sách ' + (index + 1) }} </strong></label>
            <div class="col-sm-9">
                <Field :name="'books[' + index + '].title'" :id="'bookTitle' + index" type="text" class="form-control" v-model="book.title" />
                <ErrorMessage :name="'books[' + index + '].title'" class="error-feedback" />
            </div>
        </div>
        <div class="form-group row">
            <label :for="'bookQuantity' + index" class="col-sm-3 col-form-label fw-bold"> <strong>{{ 'Số lượng sách ' + (index + 1) }} </strong></label>
            <div class="col-sm-9">
                <Field :name="'books[' + index + '].quantity'" :id="'bookQuantity' + index" type="number" class="form-control" v-model="book.quantity" />
                <ErrorMessage :name="'books[' + index + '].quantity'" class="error-feedback" />
            </div>
        </div>
    </div>
    <div class="form-group row">
        <label for="status" class="col-sm-3 col-form-label fw-bold"><strong>Trạng thái</strong></label>
        <div class="col-sm-9">
            <select v-model="orderLocal.status" class="form-control">
                <option disabled value="">Chọn tình trạng</option>
                <option v-for="option in statusOptions" :value="option.value" :key="option.value">{{ option.text }}</option>
            </select>
        </div>
    </div>
    <div class="form-group row">
        <div class="col-sm-9 offset-sm-3">
            <button class="btn btn-primary me-1 w-100" type="submit" @click="submitOrder">
                <i class="fas fa-save"></i> Lưu
            </button>
        </div>
    </div>
</Form>

</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:order", "delete:order"],
    props: {
        order: { type: Object, required: true }
    },
    data() {
        const orderFormSchema = yup.object().shape({
            name: yup
                .string()
                .required('Tên người mượn sách không được để trống.'),
            ngayMuon: '',
            ngayTra: '',
            status: yup
                .string()
                .required('Tình trạng không được để trống.'),
            books: yup.array().of(
                yup.object().shape({
                    title: yup
                        .string()
                        .required('Tên sách không được để trống.'),
                    quantity: yup
                        .number()
                        .required('Số lượng không được để trống.')
                        .positive('Số lượng phải lớn hơn 0.')
                        .integer('Số lượng phải là số nguyên.')
                })
            )
        });

        return {
            orderLocal: this.order,
            orderFormSchema,
            statusOptions: [
                { value: 'Đang đợi duyệt', text: 'Đang đợi duyệt' },
                { value: 'Đang mượn', text: 'Đang mượn' },
                { value: 'Quá hạn trả', text: 'Quá hạn trả' },
                { value: 'Đã trả', text: 'Đã trả' },
                { value: 'Đã hủy', text: 'Đã hủy' }
            ],
        };
    },
    methods: {
        submitOrder() {
            console.log(this.orderLocal);
            this.$emit("submit:order", this.orderLocal);
        }
    },
};
</script>

<style scoped>
.my-form .form-group {
    margin-bottom: 20px;
}
</style>
