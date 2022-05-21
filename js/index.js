

const bilet=500*10896.61

const hotel=250*10896.61

const muzey=120*12247.79

const list=prompt(`Bilet narxi-${bilet}so'm
Mehmonxona narxi-${hotel}so'm
Muzey va boshqa ko'ngil ochar joylar-${muzey}so'm
Sizda bor summani kiriting iltimos!`)

if(list>=bilet+hotel+muzey){
console.log(`Oq yo’l, Alisher!`);
}else{
    console.log(`Alisher, ozgina sabr qilish kerak bo’lar ekan.`);
}
