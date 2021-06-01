
window.onload=function(){
    let box=document.getElementsByClassName('box')[0];
    box.addEventListener('click',() => {
        alert("这是一ggggg个测试代码");
        alert("冲突1")
        alert('冲突2')
    })
}