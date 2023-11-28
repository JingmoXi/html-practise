<template>
    <div style="width: 100%;overflow-y: auto;">
        <el-header>
            <el-breadcrumb id="pppp" separator="/">
                <el-breadcrumb-item id="ppp1p" :to="{ path: '/manage/firstPage' }">数据管理</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/manage/userList">文本编辑</a></el-breadcrumb-item>
            </el-breadcrumb>
            <img id="user-icon" src="../assets/logo.png">
        </el-header>
        <el-main>
            <quill-editor ref="myQuillEditor" v-model="content" :options="editorOption" @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)" @ready="onEditorReady($event)" />
                <el-button id="tijiao" type="primary">提交</el-button>
            <!-- Or manually control the data synchronization -->
        </el-main>


    </div>
</template>

<script>

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
    data() {
        return {
            content: '<h2>I am Example</h2>',
            editorOption: {
                // Some Quill options... 
            }
        }
    },
    methods: {
        onEditorBlur(quill) {
            console.log('editor blur!', quill)
        },
        onEditorFocus(quill) {
            console.log('editor focus!', quill)
        },
        onEditorReady(quill) {
            console.log('editor ready!', quill)
        },
        onEditorChange({ quill, html, text }) {
            console.log('editor change!', quill, html, text)
            this.content = html
        }
    },
    components: {
        quillEditor
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill
        }
    },
    mounted() {
        console.log('this is current quill instance object', this.editor)
    }
}
</script>

<style>
.ql-container {
 height: 400px;   
}
#tijiao {
    position: relative;
    left: 96%;
    top: 5px;
}
</style>