/**
 * Created by qile on 2017/8/14.
 */

//Part 000000000
//字符串比较
console.log("A" > "a"); //false
console.log("B".localeCompare("A")); //1
//考虑本地化的字符排序，返回0或非0 
console.log("A".localeCompare("A")); //0
//考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("B")); //-1

//字符串链接
var a = "abc";
var b = "def";
var c = a+b;

//Part 111111111 字符串提取
//String.prototype.charAt(pos);
//String.prototype.charCodeAt(pos);
//String.prototype.slicjiae(start,end?);
//String.prototype.substr(start,length?)
//String.prototype.substring(start,end?);
//String.prototype.split(separator?,limit?);

//字符串常用方法，字符串的方法源于String.prototype

var str2 = "abcdef".slice(2);
var str3 = "abcdef".slice(2,5);
var str4 = "abcdef".slice(-2);
var str5 = "abcdef".slice(2,-2);

var arr6 = "abcdef".split("c"); //["ab", "def"]
var arr7 = "abcdef".split("c",1); //["ab"]
var arr8 = "abcdef".split("c",2); //["ab", "def"]

var str9 = "abcdef".charAt(2);
var str10 = "abcdef".charCodeAt(3);
var str11 = "abcdefabcdef".indexOf("d",1);
var str12 = "abcdefabcdef".indexOf("d",4);//从第4个开始找

//substr 与 substring的区别
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度
console.log(str13,str14);//str13 未受到破坏

var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str13,str15);//str13 未受到破坏



//Part 222222222 字符串变换
//String.prototype.trim( ); 删除左右空格
//String.prototype.concat(str1?,str2?);  //将str1和str2组合成一个字符串并赋值给String
//String.prototype.toLowerCase( );
//String.prototype.toLocaleLowerCase( );//将字母全部转化为小写
//String.prototype.toUpperCase( );
//String.prototype.toLocaleUpperCase( );//将字母全部转为大写
var str16 = "aaa".concat("bbb");//返回字符串 "aaabbb"
var str17 = "    abc def     \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串
var str18 = "abcDEF".toLowerCase();
var str19 = "abcDEF".toUpperCase();

//Part 333333333 检索和比较
//String.prototype.indexOf(searchingString,position?); 检索position之后的需要搜索的字符
//String.prototype.lastIndexOf(searchingString,position?);
//String.prototype.localeCompare(other); 将String于Other进行比较，根据ASCII码值比大小，String较大为1，相等为0，小于为-1
var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6); //9
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");//15

//Part 444444444 与正则相关的方法 详细内容参见正则表达式章节
//String.prototype.search(regexp);
//String.prototype.match(regexp);
//String.prototype.replace(regexp);

//其余部分参见《深入理解JS》第12章