<template>
    <div class="col-12 border mb-5">
        <Form @submit="submitProduct" :validation-schema="ProductFormSchema" class="my-form " >
        <div class="form-group">
            <label for="title">Tiêu đề</label>
            <Field name="title" type="text" class="form-control" v-model="productLocal.title" />
            <ErrorMessage name="title" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="author">Tác giả</label>
            <Field name="author" type="text" class="form-control" v-model="productLocal.author" />
            <ErrorMessage name="author" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="nxb">Nhà xuất bản </label>
            <Field name="nxb" type="text" class="form-control" v-model="productLocal.nxb" />
            <ErrorMessage name="nxb" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="namxb">Năm xuất bản </label>
            <Field name="namxb" type="text" class="form-control" v-model="productLocal.namxb" />
            <ErrorMessage name="namxb" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="imageUrl">Hình ảnh (URL)</label>
            <Field name="imageUrl" type="text" class="form-control" v-model="productLocal.imageUrl" />
            <ErrorMessage name="imageUrl" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="quantity">Số lượng</label>
            <Field name="quantity" type="tel" class="form-control" v-model="productLocal.quantity" />
            <ErrorMessage name="quantity" class="error-feedback" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary me-1" type="submit">
                <i class="fas fa-save"></i> Lưu
            </button>
            <button v-if="productLocal._id" class="btn btn-danger" @click="deleteContact">
                <i class="fas fa-trash"></i> Xóa
            </button>
        </div>
    </Form>
    </div>
    
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
    emits: ["submit:product", "delete:product"],
    props: {
        product: { type: Object, required: true }
    },
    data() {
        const ProductFormSchema = yup.object().shape({
            title: yup
                .string()
                .required("Tiêu đề phải có giá trị.")
                .min(2, "Tiêu đề phải ít nhất 2 ký tự.")
                .max(50, "Tiêu đề có nhiều nhất 50 ký tự."),
            author: yup
                .string()
                .required("Tác giả phải có giá trị.")
                .max(50, "Tác giả có nhiều nhất 50 ký tự."),
            nxb: yup
                .string()
                .required("Nhà xuất bản phải có giá trị.")
                .max(50, "Nhà xuất bản có nhiều nhất 50 ký tự."),
            namxb: yup
                .number()
                .required("Số lượng phải có giá trị.")
                .positive("Số lượng phải lớn hơn 0.")
                .integer("Số lượng phải là số nguyên."),
            imageUrl: yup.string().url("Hình ảnh không hợp lệ."),
            quantity: yup
                .number()
                .required("Số lượng phải có giá trị.")
                .positive("Số lượng phải lớn hơn 0.")
                .integer("Số lượng phải là số nguyên.")
        });
        return {
            productLocal: this.product,
            ProductFormSchema,
        };
    },
    methods: {
        submitProduct() {
            this.$emit("submit:product", this.productLocal);
        },
        deleteContact() {
            this.$emit("delete:product", this.productLocal.id);
        }
    },
};
</script>

<style scoped>
.my-form .form-group {
    margin-bottom: 20px;
}
</style>
