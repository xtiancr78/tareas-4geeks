 
function excuseme(){
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    var whoxAzar = Math.ceil(Math.random() * who.length);
    var valorWho = who[whoxAzar];
    
    let action = ['ate', 'peed', 'crushed', 'broke'];
    var actionAzar = Math.ceil(Math.random() * action.length);
    var valorAction = action[actionAzar];
    
    let what = ['my homework', 'the keys', 'the car'];
    var whatAzar = Math.ceil(Math.random() * what.length);
    var valorWhat = what[whatAzar];
    
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
    var whenAzar = Math.ceil(Math.random() * when.length);
    var valorWhen = when[whenAzar];

    var excusas = valorWho + " " + valorAction + " " + valorWhat + " " + valorWhen;
    return excusas;
}

excuseme()

// document.getElementById("excuse").innerHTML = cambiaExcusa;
