// Number
 var a = 9;
 var b = 10;

//  string ( có 3 cách khai báo str. 1:'', 2: "", 3:template
C1: var text = 'My Name Tuan';
C2: var text = "My Name Tuan";
C3: var text = `My Name Tuan`;

// boolean ( true, flase) 
var ismale = true;
var isfemale = false;

// undefined
var a;
console.log(a) => undefined ( vì khai báo biến a mà k gán giá trị gọi là undefined. k xác định ) 

// null
var d = null ( rỗng )

// object ( key: value,) 
var me = {
 name: 'tuan',
 length: '15cm',
 age: 24,
 gender: 'male'
};
console.log(me.name)

// Array ( mảng có thể chứa 1: number, 2: object, 3: mảng, 4: string, 5: boolean )
VD1: var mobie = ['samsung', 'apple', 'oppo'] 
VD2: var number = [1,3,5,7]
var motor1 = {
    name: 'wave'   
}

var motor2 = {
    name: 'sh'
}

var motor = [motor1,motor2] 
console.log(motor);
console.log(motor[0])       ( lấy thành phần trong mảng theo thứ tự 0 1 2... ) kết quả: {name: 'wave'}
console.log(motor[1].name)  ( truy xuất vào thuộc tính của thành phần trong mảng ) kết quả:  sh

