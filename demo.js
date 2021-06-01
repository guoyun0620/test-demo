
window.onload=function(){
    let box=document.getElementsByClassName('box')[0];
    box.addEventListener('click',() => {
        alert("这是一ggggg个测试代码");
        alert("冲突1")
        alert('冲突2')
        alert('冲突3')
        alert("冲突33333")
        alert("冲突33dddd333")
    })
}