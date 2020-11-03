
let offset, dot;
let puzzleIndex = 0;
let setSize = 5;
let currentImageSet = "";
let previousX, previousY;

window.onload = function()
{
	const cursor = document.querySelector('#cursor');
	const followCursor = document.querySelector('#followCursor');
	const clickableElements = document.querySelectorAll('.clickable');
	const puzzleImageHoverElements = document.querySelectorAll('.puzzles');
	offset = 25;
	dot = cursor.innerHTML;
	previousY = previousX = 0;
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

	for(puzzleImageHoverElement of puzzleImageHoverElements)
	{
		puzzleImageHoverElement.addEventListener('mouseover', (event) =>
		{
			currentImageSet = 'puzzles';
			currentIndex = puzzleIndex++;
			displayImageHover(currentImageSet, (currentIndex % setSize));
		});

		puzzleImageHoverElement.addEventListener('mouseout', (event) =>
		{
			currentImageSet = '';
			removeImageHover();
		});
	}

	document.addEventListener('mousemove', event => {
		let differenceX = (event.pageX - offset);
		let differenceY = (event.pageY - offset);
		cursor.setAttribute('style', 'top: ' + differenceY + "px; left: " + differenceX + "px;");
		followCursor.setAttribute('style', 'top: ' + differenceY + "px; left: " + differenceX + "px;");
		if(currentImageSet !== '' && ( (previousY - differenceY > 75) || (previousY - differenceY < -75) || (previousX - differenceX > 75) || (previousX - differenceX < -75) ))
		{
			displayImageHover(currentImageSet, (currentIndex++ % setSize));
			previousX = differenceX;
			previousY = differenceY;
		}
	});
}

function displayImageHover(setName, setIndex)
{
	// cursor.classList.add('removeCircle');
	// followCursor.classList.add('removeCircle');
	// offset = 50;
	let img = document.createElement('img');
	// text.innerHTML = '<b>click</b>';
	img.setAttribute('src', 'assets/png/' + setName + '_' + setIndex + '.png');
	img.classList.add('imageCenterHover');
	cursor.innerHTML = "";
	cursor.appendChild(img);
}

function removeImageHover()
{
	cursor.classList.remove('removeCircle');
	followCursor.classList.remove('removeCircle');
	offset = 25;
	cursor.innerHTML = dot;
}