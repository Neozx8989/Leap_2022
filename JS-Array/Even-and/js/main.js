console.log('--- 1. Хэдэн ширхэг сондгой тоо байгаа вэ? ---')
let arr1 = [5 ,6 ,4 ,12 ,19 ,121, 1 ,7 ,9 ,63];
for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 !==0) {
        console.log(arr1[i])
    }
}

console.log('--- 2. Хэдэн ширхэг тэгш тоо байгаа вэ? ---')
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 == 0) {
        console.log(arr1[i])
    }
}