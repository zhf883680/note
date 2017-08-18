<template>
  <div id="app">
    <!-- 工具栏,列表栏,编辑框模块 -->
    <toolbar></toolbar>
    <note-list></note-list>
    <editor></editor>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import NoteList from './components/NoteList'
import Editor from './components/Editor'

export default {
  name: 'app',
  components: {
    Toolbar,
    NoteList,
    Editor
  }
}
</script>

<style>
html, #app {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
}
</style>
