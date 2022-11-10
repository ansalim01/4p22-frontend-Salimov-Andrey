'use strict'

// fetch('https://reqres.in/api/users')
// .then((response)=>{
//     return response.json();
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })

async function fetchData() {
    let result = null;
    try{
        const response=await fetch('https://reqres.in/api/users?per_page=12');
        result = await response.json();
    } catch(e){
        console.log(e);
    }
    console.log(result);
    console.log(result.data.length);


    //2. Вывести в консоль фамилии всех пользователей в цикле
    console.log('-2---------------------');
    let index=0;
    while (index<result.data.length) {
        console.log(result.data[index].last_name);
        index+=1;
    }

    // 3. Вывести все данные всех пользователей, 
    // фамилия которых начинается на  F
    console.log('-3---------------------');
    for (let index = 0; index < result.data.length; index++) {
        if (result.data[index].last_name[0]==='F') {
            console.log(result.data[index]);
        }
    }

    // 4.Вывести следующее предложение: Наша база содержит данные 
    // следующихпользователей: и далее в этой же строке через запятую 
    // имена и фамилии всехпользователей. Использовать метод reduce
    console.log('-4---------------------');
    const basa = result.data.reduce((accumulator, item, index, array)=>{
        accumulator+=` ${item.first_name} ${item.last_name}${item.id<result.data.length ? ',' : '.'} `;
        
        return accumulator;
    },'Наша база содержит данные следующихпользователей:');
    console.log(basa);


    //5. Вывести названия всех ключей в объекте пользователя.
    console.log('-5---------------------');

   console.log(Object.keys(result.data[0]) ); 
   console.log(Object.keys(result.data[0]).join());
}


fetchData();
