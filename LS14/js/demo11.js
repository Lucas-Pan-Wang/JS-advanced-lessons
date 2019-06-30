/**
 * Created by qile on 2017/8/14.
 */
var person = {_name:"Jack"};
Object.defineProperty(person,"name",{
    configurable:false,//若为true会如何
    enumerable:true,
    set:function(val){this._name = val},//set负责赋值，configurable负责删除以及其他设置，不包括赋值
    get:function(){return this._name}
});
console.log(person.name);
person.name = "Lucy";
console.log(person.name);
delete person.name;//delete person.name;
console.log(person.name);