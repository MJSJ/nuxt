import api from "../api/index"

export const state = () => ({
  list: []
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text: text,
      done: false
    })
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}

export const actions = {
  add(context,text){
    api.fetchSubjectList().then((d)=>{
      console.log(d)
      context.commit('add',text)
    }).catch((e)=>{
      console.error(e)
    });
    
  }
}