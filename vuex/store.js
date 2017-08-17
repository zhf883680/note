import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	notes: [],
	activeNote: {}
}
const mutations = {
	add_note(state) {
		const newNote = {
			text: "new Note",
			favorite: false
		}
		state.notes.push(newNote)
		state.activeNote = newNote
	},
	edit_note(state, text) {
		state.activeNote.text = text
	},
	set_active_note(state, note) {
		state.activeNote = note
	},
	toggle_favorite(state) {
		state.activeNote.favorite = !state.activeNote.favorite
	},
	delete_note(state) {
		for (var i = 0; i < state.notes.length; i++) {
			if (state.notes[i] == state.activeNote) {
				state.notes.splice(i, 1)
			}
		}
		state.activeNote = state.notes[0]
	}
}

const actions = {
	/*
        actions处理函数接受一个 context 对象
        {
          state,     // 等同于 store.state, 若在模块中则为局部状态
          rootState, // 等同于 store.state, 只存在于模块中
          commit,    // 等同于 store.commit
          dispatch,  // 等同于 store.dispatch
          getters    // 等同于 store.getters
        }
		*/
	addNote({ commit }) {
		commit('add_note')
	},
	editNote({ commit }, text) {
		commit('edit_note', text)
	},
	updateActiveNote({ commit }, note) {
		commit('set_active_note', note)
	},
	toggleFavorite({ commit }) {
		commit('toggle_favorite')
	},
	deleteNote({ commit }) {
		commit('delete_note')
	}
}
const getters = {
	/*
	 Getters 接受 state 作为其第一个参数
	 state => state.notes为箭头函数等价于：
	 function (state){
			 return state.notes
	 }
*/
	notes: state => state.notes,
	activeNote: state => state.activeNote
}
export default new Vuex.Store({
	state,
	mutations,
	actions, getters
})