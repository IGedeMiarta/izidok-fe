<template>
    <div class="card card-box mb-5">
        <div class="card-header">
            <h5 class="my-3">
                {{ title }}
            </h5>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
        }
    }
</script>