let offset, dot;

window.onload = function()
{
	const cursor = document.querySelector('#cursor');
	const followCursor = document.querySelector('#followCursor');
	const clickableElements = document.querySelectorAll('.clickable');
	offset = 25;
	dot = cursor.innerHTML;

	for(clickableElement of clickableElements)
	{
		clickableElement.addEventListener('mouseover', (event) =>
		{
			cursor.classList.add('cursorHover');
			offset = 50;
			let text = document.createElement('div');
			text.innerHTML = '<b>click</b>';
			text.classList.add('cursorCenterHover');
			cursor.innerHTML = "";
			cursor.appendChild(text);
		});

		clickableElement.addEventListener('mouseout', (event) =>
		{
			cursor.classList.remove('cursorHover');
			offset = 25;
			cursor.innerHTML = dot;
		});
	}

	document.addEventListener('mousemove', event => {
		cursor.setAttribute('style', 'top: ' + (event.pageY - offset) + "px; left: " + (event.pageX - offset) + "px;");
		followCursor.setAttribute('style', 'top: ' + (event.pageY - offset) + "px; left: " + (event.pageX - offset) + "px;");
	});
}