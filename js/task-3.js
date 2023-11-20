
function getElementWidth(content, padding, border) {
    
let borderBox = 0;
    
content = Number(content.replace("px", ""));
padding = Number(padding.replace("px", ""));
border = Number(border.replace("px", ""));
    
borderBox = content + 2 * padding + 2 * border;
return borderBox
    
}
    
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
    