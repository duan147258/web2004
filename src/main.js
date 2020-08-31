import $  from 'jquery'
import"./css/index.css"
import"./css/index.less"

class person{
    static info={name:"张三",age:"23"}
}
console.log(person.info)
$(function(){
    $('li:odd').css('backgroundColor',"red")
    $('li:even').css('backgroundColor',"yellow")})