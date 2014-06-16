$.fn.zFit = function(tolerance, allSameSize){

tolerance = tolerance || 30;
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
	

		$zFit.css("font-size",(estimate)+"em");

//		alert("theElementHeight:"+theElementHeight+"\n$zFit.height():"+$zFit.height()+"\ntheElementWidth:"+theElementWidth+"\n$zFit.width():"+$zFit.width());
		if ((theElementHeight) >= $zFit.height() && (theElementWidth) >= $zFit.width()){
//			alert("true");
//			alert(zestimate);
			makeFit(estimate * 1.1);

		}
		else{
		$zFit.css("font-size",(estimate * (1/1.1))+"em");
		$zFit.css("display","table-cell");
		}
	}

	var estimated;
	
	if ((theElementWidth / zFitWidth) <= 1){
	estimated = (theElementHeight / zFitHeight);
//	alert("ratio:" + estimated + "\nElement Height:" + theElementHeight + "\nzHeight:" + zFitHeight);
	}
	else
	{
	
	estimated = (theElementWidth / zFitWidth);
//	alert("ratio:" + estimated + "\nElement Width:" + theElementWidth + "\nzWidth:" + zFitWidth);
	}



makeFit(estimated.toFixed(2));
//alert($zFit.attr("style"));
});

if(allSameSize){
this.find(".zFit").css("font-size", Math.min.apply(Math, sizes)+"em");
}

}