$.fn.zFit = function(allSameSize){

allSameSize = allSameSize || false;
var sizes = [];
this.each(function(i){
	var $theElement = $(this);
	var theElementHeight = $theElement.height();
	var theElementWidth = $theElement.width();

	$theElement.wrapInner('<div style="display:table;height:'+theElementHeight+'px;width:'+theElementWidth+'px"><div class="zFit" style="width:100%;vertical-align:middle;"></div></div>');

	var $zFit = $theElement.find(".zFit");
	var zFitHeight = $zFit.height();
	var zFitWidth = $zFit.width();

	function makeFit(estimate){

		$zFit.css("font-size",estimate+"em");

		
		if (theElementHeight < $zFit.height() || theElementWidth < $zFit.width()){
			makeFit((estimate *.9))

		}else{
			if(allSameSize){
				sizes.push(estimate);
			}
			$zFit.css("display","table-cell");
		}

	}

	var estimated = [];
//	estimated.push((theElementHeight * theElementWidth) / (zFitHeight * zFitWidth));
	estimated.push((theElementHeight) / (zFitHeight));
	estimated.push((theElementWidth) / (zFitWidth));


	if ($.grep(estimated, function(n,i){return n > 1}).length = 0){
		alert(1/(Math.min.apply(Math, estimated)));
		makeFit(1/(Math.min.apply(Math, estimated)));
	}else{
		alert(1/(Math.max.apply(Math, estimated)));
		makeFit(1/(Math.max.apply(Math, estimated)));
	}
});

if(allSameSize){
this.find(".zFit").css("font-size", Math.min.apply(Math, sizes)+"em");
}

}