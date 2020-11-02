export const state = () => ({
    category: []
})

export const mutations = {
    ADD_PARENT(state, payload){
        state.category.unshift(payload)
    },
    ADD_CHILD(state, payload){
        state.category[payload.index].child.unshift(payload)
    },
    TOGGLE(state, payload){
        const index = state.category.findIndex(function (v){return v.id === payload})
        console.log(index)
        state.category[index].toggle = !state.category[index].toggle 
    },
    DELETE_CATEGORY(state, payload){
        const index = state.category.findIndex(function (v){return v.id === payload})
        state.category.splice(index, 1)
    },
    ADD_PARENT_DATA(state, payload){
        console.log(state.category)
        console.log(payload)
        const index = state.category.findIndex(function (v){return v.id === payload.id})
        console.log(index)
        state.category[index].content.push(payload)
    },
    ADD_CHILD_DATA(state, payload){
        console.log(state.category)
        console.log(payload)
        const index = state.category.findIndex(function (v){return v.id === payload.parentId})
        console.log(index)
        state.category[index].child[0].content.push(payload)
    },

}

export const actions= {
    addParent({commit}, payload){         // from category(Parent)
        commit('ADD_PARENT', payload)
    },
    addChild({commit}, payload){      // from category(child)
        commit('ADD_CHILD', payload)
    },
    toggle({commit}, payload){          // admin toggle
        commit('TOGGLE', payload)
    },
    delete({commit}, payload){          // admin only / remove Parent 
        commit('DELETE_CATEGORY', payload)
    },
    addChildData({commit}, payload){  // from Form
        commit('ADD_CHILD_DATA', payload)
    },
    addParentData({commit}, payload){  // from Form
        commit('ADD_PARENT_DATA', payload)
    },
}