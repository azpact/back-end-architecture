import axios from 'axios';
import { toLogin, to403Page } from "./jump.js"
import api from './apis.js'


axios.defaults.timeout = 3000;
axios.defaults.baseURL = "http://localhost:3200/api/v1" // 域名
// HTTP request 攔截
axios.interceptors.request.use(
	config => {
		config.data = JSON.stringify(config.data);
				config.headers = { //如果沒有 CORS 的問題則可以都不加
					"Access-Control-Allow-Origin": "http://localhost:3200",
					"Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
					"Access-Control-Max-Age": "86400"
				};
				return config
			},
			error => {
				return Promise.reject(error);
			}
			);
// 異常處理
axios.interceptors.response.use(
	response => {
		return response;
	},
	err => {
		if(err && err.response){
			switch (err.response.status) {
				case 403:
				to403Page();
				break;
				case 404:
				console.log("找不到該頁面");
				break;
				case 500:
				console.log("伺服器出錯");
				break;
				case 503:
				console.log("服務失效");
				break;
				default:
				console.log(`連接錯誤${err.response.status}`);
				break;
			}
		}else{
			console.log("連接到服務器失敗");
		}
		return Promise.resolve(err.response);
	}
	)
export function GET(url, params = {}){
	return new Promise((resolve, reject)=>{
		axios
		.get(url,{
			params: params
		})
		.then(response => {
			resolve(response);
		})
		.catch(err=>{
			rejrct(err);
		})
	})
}
export function POST(url, data = {}){
	return new Promise((resolve, reject) => {
		let theData = JSON.stringify(data)
		axios
		.post(url, data,{
			headers:{
				'Content-Type': 'application/json;charset=UTF-8'
			}
		})
		.then(
			response => {
				resolve(response);
			})
		.catch(err=>{
			rejrct(err);
		})
	})
}
export function DELETE(url, data = {}){
	return new Promise((resolve, reject) => {
		console.log(data)
		axios
		.delete(url, data)
		.then(response=>{
			resolve(response);
		}),
		err => {
			reject(err);
		}
	})
}
export function PUT(url, data = {}){
	return new Promise((resolve, reject) => {
		axios
		.put(url, data)
		.then(response=>{
			resolve(response);
		}),
		err => {
			reject(err);
		}
	})
}

export const UserServer = {
	GET: function(paramObj){
		return GET(api.URLUserServer)
	},
	POST: function(paramObj){
		return POST(api.URLUserServer,paramObj)
	},
  	DELETE: function(paramObj){
  		return DELETE(api.URLUserServer,paramObj)
  	},
  	PUT: function(paramObj){
  		return PUT(api.URLUserServer,paramObj)
  	}
}
export const UserMovie = {
	GET: function(url, paramObj){
		return GET(url)
	},
	POST: function(url, paramObj){
		return POST(url,paramObj)
	},
  	DELETE: function(url, paramObj){
  		return DELETE(url, paramObj)
  	},
  	PUT: function(url, paramObj){
  		return PUT(url, paramObj)
  	}
}
