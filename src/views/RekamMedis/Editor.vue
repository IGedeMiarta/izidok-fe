<template>
    <div>
        <quill-editor ref="myTextEditor"
                      v-model="content"
                      :options="editorOption">
        </quill-editor>
    </div>
</template>

<script>
    // require styles
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'

    import { quillEditor } from 'vue-quill-editor'

    export default {
        name: 'Editor',
        components: {
            quillEditor
        },
        data() {
            return {
                name: '01-example',
                editorOption: {
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            [{ 'indent': '-1' }, { 'indent': '+1' }],
                            [{ 'size': ['small', false, 'large', 'huge'] }],
                            [{ 'font': [] }],
                            [{ 'color': [] }, { 'background': [] }],
                            [{ 'align': [] }],
                            ['clean'],
                        ],
                    }
                }
            }
        },
        computed: {
            editor() {
                return this.$refs.myTextEditor.quill
            },
        },
    }
</script>