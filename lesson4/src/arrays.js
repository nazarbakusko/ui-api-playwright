const strArr = ['one', 'two', 'three', 'nine'];
const numArr = [1, 2, 3, 5, 7, 9];
const boolArr = [true, false, false, true];
const anyArr = [1, 'rain', true, ['naz'], 124];

//forEach
strArr.forEach(element => {
    console.log('String array:', element);
});

//map
const squares = numArr.map(num => num * num);
console.log('Square number:', squares);

//filter
const oddArr = numArr.filter(element => element % 2 !== 0);
console.log('Numbers array:', oddArr);

//unity + concat
const unitedArr = [...boolArr, ...anyArr];
console.log('United arrays:', unitedArr);
console.log('Concat two arrays:', unitedArr.concat(boolArr));

//includes + find
const inclArr = anyArr.includes('rain');
console.log('Includes rain:', inclArr);
console.log('Includes 0:', unitedArr.find(el => el == 0));

//join
console.log('Joined', strArr.join('-'));
