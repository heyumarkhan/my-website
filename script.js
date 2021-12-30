jQuery(document).ready(function ($) {
	/** ******************************
		* Simple WYSIWYG
		****************************** **/
	$('#editControls a').click(function (e) {
		e.preventDefault();
		switch ($(this).data('role')) {
			case 'h1':
			case 'h2':
			case 'h3':
			case 'p':
				document.execCommand('formatBlock', false, $(this).data('role'));
				break;
			default:
				document.execCommand($(this).data('role'), false, null);
				break;
		}

		var textval = $("#editor").html();
		$("#editorCopy").val(textval);
	});

	$("#editor").keyup(function () {
		var value = $(this).html();
		$("#editorCopy").val(value);
	}).keyup();

	$('#checkIt').click(function (e) {
		e.preventDefault();
		alert($("#editorCopy").val());
	});
});



/* 
------------------------------------------------------------------------------
For Copy Button
------------------------------------------------------------------------------
*/

// *** copy text as a plain text not as an html
/* function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
} */


function copyToClip(str) {
	function listener(e) {
		e.clipboardData.setData("text/html", str);
		e.clipboardData.setData("text/plain", str);
		e.preventDefault();
	}
	document.addEventListener("copy", listener);
	document.execCommand("copy");
	document.removeEventListener("copy", listener);
};


setTimeout(function () {
	document.getElementById("editor").focus();
}, 0);