$.fn.zFit = function(allSameSize){
allSameSize = allSameSize || false;
var sizes = [];
this.each(function(i){
	var $theElement = $(this);
	var theElementHeight = $theElement.height();
	var theElementWidth = $theElement.width();

	$theElement.wrapInner('<div style="display:table;height:'+theElementHeight+'px;width:'+theElementWidth+'px"><div class="zFit" style="vertical-align:middle;display:inline-block;"></div></div>');
	var $zFit = $theElement.find(".zFit");

	function makeFit(estimate){
	

		$zFit.css("font-size",(estimate)+"em");

		if ((theElementHeight < $zFit.height()) || (theElementWidth < $zFit.width())){

			var oldEM = estimate * (1/1.05);
			sizes.push(oldEM);
			$zFit.css("font-size",oldEM+"em");
			$zFit.css("display","table-cell");
			
		}else{
		
		makeFit(estimate * 1.05);
		
		}
	}


	makeFit(.01);

});

if(allSameSize){
this.find(".zFit").css("font-size", Math.min.apply(Math, sizes)+"em");
}

}