import Vue from "vue";

export default class Store {
	constructor({states, actions, mutations}){
		// 狀態
		this.states = Vue.observable(states || {});
		// 異步函數
		this.actions = Vue.observable(actions || {});
		// 同步函數
		this.mutations = Vue.observable(mutations || {});
	}
	// 調用 mutations 中的同步函數
	commit = (fun, params) => {
  		this.mutations[fun](this.states, params);
	};
	// 調用 actions 中的異步函數
	dispatch  = (fun, params) => {
		this.actions[fun](this.states, params)
	};
	// 更新 states 的狀態
	update = (key, value) => {
		this.states[key] = value
	};
}