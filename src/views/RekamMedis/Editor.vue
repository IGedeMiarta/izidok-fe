<template>
    <div>
        <quill-editor ref="myTextEditor"
                      v-model="content"
                      :options="editorOption"
                      style="height: 300px; margin-bottom:50px">
        </quill-editor>
        <!-- <button @click="save">save</button> -->
    </div>
</template>

<script>
    // require styles
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'

    import { quillEditor } from 'vue-quill-editor'

    export default {
        props: ['editorContent'],
        components: {
            quillEditor
        },
        data() {
            return {
                name: '01-example',
                content: this.editorContent,
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
        watch:{
            content: function(){
                this.$emit('update-content', this.content);
            }
        }
    }
</script>