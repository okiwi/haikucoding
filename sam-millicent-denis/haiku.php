<?php
class Screen{
    function is_readable($place){
        return false;
    }
}
$screen = new Screen();
function turn_off_computer(){}
function enjoy_sunshine(){}








if (!$screen->is_readable("outside")){
    turn_off_computer();
    enjoy_sunshine();
}




