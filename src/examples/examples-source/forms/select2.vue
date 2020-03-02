<template>
    <div>
            <v-select :options="options"></v-select>
    </div>
</template>

<script>

    import vSelect from 'vue-select'

    export default {
        components: {
            'v-select': vSelect
        },
        data: () => ({
            options: [
                "Australia",
                "Canada",
                "China",
                "Germany",
                "Japan",
                "Mexico",
                "Switzerland",
                "United States"
            ]
        })
    }

</script>