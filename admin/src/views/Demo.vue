<template>
    <div>
        <ul>
            <li v-for="(value, index) in arr" :key="index">
                <span>{{ index }}</span>
            </li>
        </ul>
        <el-button @click="handleDelete">删除</el-button>
    </div>
</template>

<script>
export default {
    components: {

    },

    data() {
        return {
            arr: [1, 2, 3]
        };
    },

    methods: {
        handleDelete() {
            this.arr.splice(0, 1); // 删除第一个元素
        }
    },

    created() {

    },

    mounted() {

    }
}
</script>

<style>

</style>