
function change() {
    
    var qn = document.getElementById("qn").value;
    var qnum = String(qn);    
    var qnConvert = '00000' + qn;
    qn = qnConvert.slice(qnum.length, qnConvert.length);
    
    var doi = document.getElementById("doi").value;
    doi = doi.split('-').reverse().join('-');
    var dd = document.getElementById("dd").value;
    dd = dd.split('-').reverse().join('-');
    
    var cname = document.getElementById("c-name").value;
    var stNoName = document.getElementById("c-no").value;
    var citY = document.getElementById("c-city").value;
    var disT = document.getElementById("c-dist").value;
    var sT = document.getElementById("c-st").value;

    document.getElementById("q-no").innerHTML = qn;    
    document.getElementById("doi-1").innerHTML = doi;
    document.getElementById("dd-1").innerHTML = dd;
    
    document.getElementById("c1-name").innerHTML = cname;    
    document.getElementById("c1-no").innerHTML = stNoName;
    document.getElementById("c1-city").innerHTML = citY;
    document.getElementById("c1-dist").innerHTML = disT;
    document.getElementById("c1-st").innerHTML = sT;

}

var list1 = [];
var list2 = [];
var list3 = [];

// var n = 1;
var x = 0;


function addRow() {
    var newRow = document.getElementById('table-descrip');  
    n = newRow.rows.length-2;  
    newRow = newRow.insertRow(n);

    list1[x] = document.getElementById("description").value;
    list2[x] = document.getElementById("rate").value;
    list3[x] = document.getElementById("qty").value;

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    
    cel1.innerHTML = list1[x];
    cel2.innerHTML = parseInt(list2[x]).toFixed(2);
    cel3.innerHTML = parseInt(list3[x]).toFixed(2);
    cel4.innerHTML = parseInt(list2[x] * list3[x]).toFixed(2);
    
    x++;
}

function remRow() {

    var table = document.getElementById('table-descrip');
    console.log(table.rows.length);
    var remove = table.rows.length;
    
    if(table.rows.length > 3) {
        table.deleteRow(remove - 3);
    } 
    else {
        alert("reached default table size");
    }
}

var tc = 0;
function subT() {
    var newRow1 = document.getElementById('table-tax');
    var subTotal = 0;
    for(i = 0; i < list2.length; i++) {
        subTotal += (list2[i] * list3[i]);
    }    
    var a = document.getElementById("st").innerHTML = subTotal.toFixed(2);
    var toBC = subTotal * 0.9;
    var b = document.getElementById("sgst").innerHTML = toBC.toFixed(2);
    var c = document.getElementById("cgst").innerHTML = b;
    
    a = parseFloat(a);
    b = parseFloat(b);
    c = b;
    var toABC = a + b + c;
    tc = document.getElementById("totalc").innerHTML = Math.round(toABC);
}


function convertNum() {
    document.getElementById("word-status").innerHTML =toWords(tc);
    
    function toWords(num) {
        //max 9 digit numbers
        //if out range
        if((num = num.toString()).length > 9) return 'overflow';
        
        var a = ['',
            'one', 'two', 'three', 'four', 'five', 
            'six', 'seven', 'eight', 'nine', 'ten', 
            'eleven', 'twelve', 'thirteen', 'fourteen', 
            'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen '];
        var b = ['', '', 
            'twenty ', 'thirty ', 'fourty ', 'fifty ', 
            'sixty ', 'seventy ', 'eighty ', 'ninety '];
        
        //00,00,00,0,00 - 12 - 00,00,00,0,12 stored in n as array
        var s3 = String(num);
        
        var nStr = '000000000' + num;
        var sl = nStr.slice(s3.length, nStr.length);
        var n1,n2,n3,n4,n5;
        n1 = sl.slice(0,2);
        n2 = sl.slice(2,4);
        n3 = sl.slice(4,6);
        n4 = sl.slice(6,7);
        n5 = sl.slice(7,9);
        var n = ['',n1,n2,n3,n4,n5];
    
        if(!n) return;
        var str = '';
        //example: console.log(3 > 2 ? true : false);
    
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + ' crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + ' lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + ' thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + ' hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? ' ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + ' only ' : ' only ';
    
        return str == ' only ' ? '' : str;
    }
}

function printSheet() {
    window.print();
}

// function pStatus1() {
//     var p1 = document.getElementById("p-status").value;
//     document.getElementById('s-status').innerHTML= p1;
//     document.getElementById('pt-status').innerHTML= tc;

// }
// function pStatus2() {
//     var u1 = document.getElementById("up-status").value;
//     document.getElementById('s-status').innerHTML= u1;
//     document.getElementById('pt-status').innerHTML= tc;
// }