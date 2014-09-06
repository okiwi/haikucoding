var computer = {
    turn_off: function(){
        return true;
    }
}
var enjoy_sunshine = function(){
    return "yes please";
};
var screen = {
    readable: function(place){
        throw "Too bright";
    };
};
try{
    screen.readable("outside");
}catch(){
    computer.turn_off();
    enjoy_sunshine();
}




