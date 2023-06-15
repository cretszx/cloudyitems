const arr = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7",
    "item8",
    "item9",
    "item10",
    "item11",
    "item12",
    "item13",
    "item14",
    "item15",
]
arr.reverse();
let msg = +prompt("Какой индекс пожелаете удалить?");
let position = arr.indexOf("item");
arr.splice(msg,1);
let text = arr.join(" ☁ ");

console.log(text);