let elevator = {
    floor: 1,
    minFloor:1,
    maxFloor:16,

    printFloor:function(){
        console.log("Лифт на " + this.floor + " этаже")
    },

    upOneFloor:function(){
        if(this.floor < this.maxFloor){
            this.floor++;
            this.printFloor()
        }else{
            console.log("error")
        }
    },
    downOneFloor:function(){
        if(this.floor > this.minFloor){
            this.floor--;
            this.printFloor()
        }else{
            console.log("error")
        }
    }
}

//     toFloor: function(floor){
//         if(this.floor < 4){
//             this.floor++
//             this.printFloor()
//         }else{
//             console.log("лифт на" + toFloor + "этаже")
//         }
//     },
//     toFloor1: function(floor){
//         if(this.floor > 4){
//             this.floor++
//             this.printFloor()
//         }else{
//             console.log("error")
//         }
//     }
// }
