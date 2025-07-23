function task1(callback){
    setTimeout(()=>{
        console.log("Step 1 Done");
        callback();
    },1000);
}

function loading1(callback){
    setTimeout(()=>{
        console.log("Loading..");
        callback();
    },1500);
}

function task2(callback){
    setTimeout(()=>{
        console.log("Step 2 Done");
        callback();
    },1000);
}

function loading2(callback){
    setTimeout(()=>{
        console.log("Loading...");
        callback();
    },2000);
}

function task3(callback){
    setTimeout(()=>{
        console.log("Step 3 Done");
    },1000);
}

task1(()=>{
    loading1(()=>{
        task2(()=>{
            loading2(()=>{
                task3();
            });
        });
    });
});
