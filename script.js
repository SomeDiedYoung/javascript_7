// function multipleFuncs() {
//     var bg = document.getElementsByClassName("result");
//     var input = document.getElementsByTagName("input")[0];
//     let value = parseInt(input.value);

//     switch (value) {
//         case 1:
//             bg[0].style.backgroundColor = "red";
//             break;
//         case 2:
//             bg[0].style.backgroundColor = "red";
//             bg[1].style.backgroundColor = "red";
//             break;
//         case 3:
//             bg[0].style.backgroundColor = "red";
//             bg[1].style.backgroundColor = "red";
//             bg[2].style.backgroundColor = "red";
//             break;
//         case 4:
//             bg[0].style.backgroundColor = "red";
//             bg[1].style.backgroundColor = "red";
//             bg[2].style.backgroundColor = "red";
//             bg[3].style.backgroundColor = "red";
//             break;
//     }
// }






function get_random_color(){
    var r = Math.floor(Math.random() *256)
    var g = Math.floor(Math.random() *256)
    var b = Math.floor(Math.random() *256)
    
    var color = `rgb(${r},${g},${b})`
    return color
}

let counter = 1;

function change_color_divs(){
    counter+=1;
    console.log(counter)
    var d_ind = document.getElementById("divIndex").value
    var div_s = document.getElementsByClassName("results")

    if(counter%2==0){
        // console.log(d_ind)
        // console.log(div_s)
        if (d_ind >= 1) {
            for (let i = 0; i < d_ind && i < div_s.length; i++) {
                var color = get_random_color();
                div_s[i].style.backgroundColor = color;
            }
        }
    }else{
            for (let i = 0; i < d_ind && i < div_s.length; i++) {
                div_s[i].style.backgroundColor = "transparent";
    }
}}










// function get_random_color(){
//     var r = Math.floor(Math.random() *256)
//     var g = Math.floor(Math.random() *256)
//     var b = Math.floor(Math.random() *256)
    
//     var color = `rgb(${r},${g},${b})`
//     return color
// }
// function change_color_d_1(){
//     var div_s = document.getElementsByClassName("controls")
//     var color = get_random_color();
//     if(div_s[0].style.backgroundColor == ""){
//         div_s[0].style.backgroundColor = color
//     }else{
//         div_s[0].style.backgroundColor = ""
//     }
// }

// function change_color_divs(){
//     var d_ind = document.getElementById("divIndex").value
//     // console.log(d_ind)
//     var div_s = document.getElementsByClassName("results")
//     // console.log(div_s)
//     if(d_ind >= 1){
//         // if(d_ind > div_s.length){
//         //    d_ind = div_s.length
//         // }
//         for(let i=0; i<d_ind && i<div_s.length; i++){
//             div_s[i].style.backgroundColor = "green"
//         }
//     }
// }