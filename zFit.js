$.fn.zFit = function(){



var $theElement = this;
var theElementHeight = $theElement.height();
var theElementWidth = $theElement.width();


$theElement.wrapInner('<div class="zFit" style="height:'+theElementHeight+'px;width:'+theElementWidth+'px"><div class="zFitInner"></div></div>');

var $zFitInner = $theElement.find(".zFitInner");

function makeFit(estimate){

$zFitInner.css("font-size",estimate+"em");

if (theElementHeight < $zFitInner.height() || theElementWidth < $zFitInner.width()){

makeFit((estimate - .1))

}else{
$zFitInner.css("display","table-cell");
}

}

var estimated = [];
estimated.push((theElementHeight * theElementWidth) / ($zFitInner.height() * $zFitInner.width()));
estimated.push((theElementHeight) / ($zFitInner.height()));
estimated.push((theElementWidth) / ($zFitInner.width()));


//$.each(estimated, function(){alert(this)});


if ($.grep(estimated, function(n,i){return n > 1}).length = 0){
makeFit(Math.min.apply(Math, estimated),true);
}
makeFit(Math.max.apply(Math, estimated),false);


}