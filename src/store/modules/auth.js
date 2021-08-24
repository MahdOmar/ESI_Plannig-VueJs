import axios from "axios";
import Cookies from "js-cookie";


import * as types from "../mutation_types.js";


// state
const state = {
    user: null,
    token: Cookies.get("token"),
    reftoken: Cookies.get("reftoken"),
    isLogged : false,
    semesterId:'',
    moduleId:'',
    cour:null
}

//gettters 
const getters ={
    user : state => state.user,
    token : state => state.token,
    check : state => state.isLogged,
    semesterId: state => state.semesterId,
    moduleId: state => state.moduleId,
    cour:  state => state.cour

    
}

//mutations

const mutations = {

    [types.SAVE_TOKEN ](state, {token , reftoken}){
        state.token = token
        Cookies.set("token",token);
        Cookies.set("reftoken",reftoken);
        state.isLogged = true

      
    },

    [types.FETCH_USER_SUCCESS](state ,{user}){
        state.user = user,
     
        state.isLogged = true

    },

    [types.FETCH_USER_FAILURE](state){
        state.token = null;
        Cookies.remove('token');
        Cookies.remove('reftoken');
        state.isLogged = false

    },

    [types.LOGOUT](state){
        state.user = null;
        state.token = null;
        Cookies.remove('token');
        Cookies.remove('reftoken');
        state.isLogged = false

    },

    [types.SAVE_SEMESTER_ID](state ,{semesterId}){
        state.semesterId = semesterId

    },

    [types.SAVE_MODULE_ID](state ,{moduleId}){
        state.moduleId = moduleId

    },

    [types.SAVE_COUR](state ,{cour}){
        state.cour = cour

    }




   

};

//Actions

const actions ={
    saveToken({ commit }, payload ){
        commit( types.SAVE_TOKEN, payload );


    },

    async  fetchUser( {commit}) {
        try{
           const token =Cookies.get("token");
           const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
          }



        const {data} =  await axios.post('http://localhost:4000/getuser',{},{
            headers: headers

          })
       //   console.log(data);
          commit(types.FETCH_USER_SUCCESS, {user: data})

        }
        catch(err){
            console.log(err);
            
           commit(types.FETCH_USER_FAILURE)

        }
    },
    
    logout({commit}){
        commit (types.LOGOUT)
    },

    saveId({commit}, payload){

        commit(types.SAVE_SEMESTER_ID , payload)
    },

    saveModuleId({commit}, payload){

        commit(types.SAVE_MODULE_ID , payload)
    },

    saveCour({commit}, payload){

        commit(types.SAVE_COUR , payload)
    },





}

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}