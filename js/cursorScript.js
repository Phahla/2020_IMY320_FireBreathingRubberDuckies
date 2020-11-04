
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
			// displayImageHover(currentImageSet, (currentIndex % setSize));
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
		cursor.setAttribute('style', 'top: ' + (event.pageY - offset) + "px; left: " + (event.pageX - offset) + "px;");
		followCursor.setAttribute('style', 'top: ' + (event.pageY - offset) + "px; left: " + (event.pageX - offset) + "px;");
		if(currentImageSet !== '' && ( (previousY - differenceY > 150) || (previousY - differenceY < -150) || (previousX - differenceX > 150) || (previousX - differenceX < -150) ))
		{
			displayImageHover(currentImageSet, (currentIndex++ % setSize), differenceX, differenceY);
			previousX = differenceX;
			previousY = differenceY;
		}
	});
}

function displayImageHover(setName, setIndex, differenceX, differenceY)
{
	// cursor.classList.add('removeCircle');
	// followCursor.classList.add('removeCircle');
	// offset = 50;
	let img = document.createElement('img');
	// text.innerHTML = '<b>click</b>';
	img.setAttribute('style', 'top: ' + differenceY + "px; left: " + differenceX + "px;");
	img.setAttribute('src', 'assets/png/' + setName + '_' + setIndex + '.png');
	img.classList.add('imageCenterHover');
	// cursor.innerHTML = "";
	// cursor.appendChild(img);
	document.querySelector('body').appendChild(img);

	setTimeout(function() {
		img.remove();
	}, 2000);
}

function removeImageHover()
{
	// cursor.classList.remove('removeCircle');
	// followCursor.classList.remove('removeCircle');
	offset = 25;
	// cursor.innerHTML = dot;
}