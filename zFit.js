$.fn.zFit = function(allSameSize){

allSameSize = allSameSize || false;
var sizes = [];
this.each(function(i){
	var $theElement = $(this);
	var theElementHeight = $theElement.height();
	var theElementWidth = $theElement.width();

	$theElement.wrapInner('<div style="display:table;height:'+theElementHeight+'px;width:'+theElementWidth+'px"><div class="zFit" style="vertical-align:middle;display:inline-block;"></div></div>');
	var $zFit = $theElement.find(".zFit");
	var zFitHeight = $zFit.height();
	var zFitWidth = $zFit.width();

	function makeFit(estimate){
	
		if (estimate < .6){

		$zFit.css("white-space","normal");
		$zFit.addClass("zTiny");

		}

		$zFit.css("font-size",estimate+"em");

		
		if (theElementHeight < $zFit.height() || theElementWidth < $zFit.width()){
			makeFit((estimate *.8).toFixed(2))

		}else{
			if(allSameSize && estimate >= .6){
				sizes.push(estimate);
			}
			$zFit.css("display","table-cell");
		}

	}

	var estimated;
	
	if ((theElementWidth / zFitWidth) == 1){
	estimated = (theElementHeight / zFitHeight);
//	alert("ratio:" + estimated + "\nElement Height:" + theElementHeight + "\nzHeight:" + zFitHeight);
	}
	else
	{
	
	estimated = (theElementWidth / zFitWidth);
//	alert("ratio:" + estimated + "\nElement Width:" + theElementWidth + "\nzWidth:" + zFitWidth);
	}



makeFit(estimated.toFixed(2));

});

if(allSameSize){
this.find(".zFit").not(".zTiny").css("font-size", Math.min.apply(Math, sizes)+"em");
}

}