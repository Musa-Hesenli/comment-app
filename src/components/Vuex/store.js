import axios from 'axios';
import { createStore } from 'vuex';
var uniqid = require("uniqid");

const store = createStore({
    state: {
        hello: "Message from vuex",
        comments: [],
        singleComment : []
    },
    getters: {
        allComments(state) {
            return state.comments;
        },
        singleComments(state) {
            return state.singleComment
        }
    },
    mutations: {
        setComments(state, payload) {
            state.comments = payload
        },
        postMutation(state, payload) {
            state.comments.push(payload);
        },
        
    },
    actions: {
        async getComments({ commit }) {
            const responses = [];
            await axios.get("https://comment-data-c02e0-default-rtdb.firebaseio.com/comments-list.json").
            then(response => {
                console.log(response.data)
                for (let i in response.data) {
                    responses.push(response.data[i]);
                }
            });
            commit("setComments", responses);
        },
        postComment({commit},payload) {
            const post_id = uniqid();
            axios.post("https://comment-data-c02e0-default-rtdb.firebaseio.com/comments-list.json", {
                id : post_id,
                title: payload.title,
                message: payload.message
            }).then(response => {
                payload.id = post_id;
                console.log(response.data);
                commit("postMutation", payload);
            });
        },

    }
});

export default store;