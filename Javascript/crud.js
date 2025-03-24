let alldata = []

const saveData = ()=>{
    // let nm = document.frm.uname.value
    let existUsers = JSON.parse(localStorage.getItem("userinfo"))
    let len = existUsers!=null? existUsers.length+1 : 1
    
    let nm = $("#uname").val()
    let id = $("#uid").val()
    let age = $("#age").val()
    if(id!=''){
        //update
        let res = existUsers.map((i)=>{
                if(i.id == id){
                    i.name = nm
                    i.age = age
                }
                return i
        })
        alldata = res
    // localStorage.setItem("userinfo",JSON.stringify(res))
    } else {
        //insert
        let obj = {
            id:len,
            name:nm,
            age:age
        }
        alldata.push(obj)
    // localStorage.setItem("userinfo",JSON.stringify(alldata))

    }
    console.log(alldata);
    
    localStorage.setItem("userinfo",JSON.stringify(alldata))
        // let nm = document.getElementById('uname').value
        // let age = document.getElementById('age').value
        // ["dfgdf","56"]
        // {
        //     name:"dfhg"
        // }
        // document.frm.reset()
    $("#frm").trigger("reset")
    $("#uid").val('')
    dispData()
}
const dispData = ()=>{
    let tr = ''
    let data = JSON.parse(localStorage.getItem('userinfo'))
    data.map((i)=>{
        tr += `
                <tr>
                    <td>${i.id}</td>
                    <td>${i.name}</td>
                    <td>${i.age}</td>
                    <td>
                        <button onclick="editData(${i.id})">Edit</button>
                        <button onclick="delData(${i.id})">Delete</button>
                    </td>
                </tr>
        `
    })
    // $("#alldata").html(tr)
    document.getElementById("alldata").innerHTML = tr
}
const delData = (id)=>{ //3  -- 1 2 3 4 5
    let data = JSON.parse(localStorage.getItem('userinfo'))
    let res = data.filter((i)=>{
            return i.id != id
    })
    j = 1
    let res1 = res.map((i)=>{
        i.id = j++
        return i
    })
    alldata = res1
    localStorage.setItem("userinfo",JSON.stringify(res1))
    dispData()
}
const editData = (id)=>{
    let data = JSON.parse(localStorage.getItem('userinfo'))
    let res = data.find((i)=>{
            return i.id == id
    })
    console.log(res);
    
    $("#uname").val(res.name)
    $("#age").val(res.age)
    $("#uid").val(res.id)
    // document.frm.uname.value = res.name
    // res[0].name
    // res[0].age
}
dispData()