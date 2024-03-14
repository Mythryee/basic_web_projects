
        const add = (str)=>{
            let inval = document.getElementById('calci')
            inval.value += str;
        }
        const clearfn = ()=>{
            let inval = document.getElementById('calci')
            inval.value = '';
        }
        const evaluatefn = ()=>{
            let inval = document.getElementById('calci')
            inval.value = eval(inval.value);
            
        }
    