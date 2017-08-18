import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	/*
			 notes:存储note项
			 activeNote:当前正在编辑的note项
	 */
	notes: [],//对象集合
	activeNote: {}//初始化对象
}
//更改store 中的状态(不可异步)
const mutations = {
	//新建
	add_note(state) {
		//新建对象
		const newNote = {
			/*
							text:默认文字内容
							favorite:收藏
					*/
			text: "new Note",
			favorite: false
		}
		state.notes.push(newNote)//将新增写入集合中
		state.activeNote = newNote//将新增的设为当前活动项
	},
	//编辑
	edit_note(state, text) {
		state.activeNote.text = text//改变text
	},
	//设置当前
	set_active_note(state, note) {
		state.activeNote = note
	},
	//切换是否喜欢
	toggle_favorite(state) {
		state.activeNote.favorite = !state.activeNote.favorite
	},
	//删除
	delete_note(state) {
		for (var i = 0; i < state.notes.length; i++) {
			if (state.notes[i] == state.activeNote) {
				state.notes.splice(i, 1)
			}
		}
		state.activeNote = state.notes[0]
	}
}
//可异步
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
	//{commit} 表示 只需要commit方法
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
	actions,
	getters
})