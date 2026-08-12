document.getElementById('title').setAttribute('class' ,"test")
document.getElementById('title').setAttribute('class' ,"test heading")
const title = document.getElementById('title')
title.style.backgroundColor = "white"
title.style.backgroundColor = "blue"
title.style.backgroundColor = "chocolate"


title.textContent
' DOM Learning on Chai or code test text'
title.innerText
'DOM Learning on Chai or code'

// Inner Text Shows only those tags which is visible but text content shows hidden text . 
// which is hidden through html ,css , js property ....// Agar Jab Mujhe Lage Mujhe Hidden Text Bhi Chahiye toh inner text use karunga .
//  or agar mujhe lage jo dikh raha hai uske hisab se hi visual change karna hai toh text content use karenge.