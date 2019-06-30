//Promise静态方法 Promise.all
const p1 = new Promise((resolve, reject) => {
	resolve('hello');
}).then(answer => answer);

const p2 = new Promise((resolve, reject) => {
	resolve('world');//若都是resolve，则返回所有Promise对象成功时的传值
	//reject("error!");//若有reject，则返回reject传的值
}).then(answer => answer);

Promise.all([p1, p2]) //数组里若不是Promise对象的话，会调用resolve转成Promise对象
	.then(answer => console.log("xx",answer))
  .catch(e => console.log("yy",e));

//Promise静态方法 Promise.race
var p1 = new Promise((resolve,reject)=>{setTimeout(resolve,Math.random()*5000,"aaa")});
var p2 = new Promise((resolve,reject)=>{setTimeout(reject,Math.random()*5000,"bbb")});
var p3 = Promise.race([p1,p2]).then(
	(val)=>{console.log("val:",val)},
	(err)=>{console.log("err:",err)}
);
  
