let san = prompt("1-99 аралығында сан жазыңыз ):");
        if (san <100 && san >=0) {
            if(san.length == 1){
                alert("Бірінші сан:" + san)
            }else
            alert("Бірінші сан:" + san[0] + "\n Екінші сан:" + san[1]);
        }
        else {
            alert("Дұрыс жазбадыңыз! қайталап көріңіз")
        }