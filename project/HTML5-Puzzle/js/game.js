var time = 0;   //初始化时间

var d = new Array(10);

//保存div可移动的位置编号
var d_mark = new Array(
    [0],
    [2,4],
    [1,3,5],
    [2,6],
    [1,5,7],
    [2,4,6,8],
    [3,5,9]
    [4,8],
    [5,7,9],
    [6,8]
);
//保存div可移动的实际位置
var g_divXY = new Array(
    [0],
    [0,0],
    [0,120],
    [0,240],
    [120,0],
    [120,120],
    [120,240],
    [240,0],
    [240,120],
    [240,120],
)
//获取点击的div编号


var shuz = new Array(1,2,3,4,5,6);
alert(shuz[1]);

function move(value){
    alert(value);
};