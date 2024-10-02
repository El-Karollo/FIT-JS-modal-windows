# FIT-JS-modal-windows
Hey. You are just looking at a JS class with which you can make cool modal windows on your site with a little CSS. Its weight is only 5-6kb which is why it is called FIT. It supports animations based on [aniamte.css](https://animate.style).

## CSS
To use this modal, you only need a few lines of CSS. This is the basic styling:
```css
		.window-draggable {
			cursor: move;
		}

		.window {
			position: absolute;
			z-index: 9;
			text-align: center;
			display: none;
			background: rgba(255, 255, 255, 0.2);
			box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
			backdrop-filter: blur(13px);
			border-radius: 10px;
		}

		.window-header {
			padding: 10px;
			z-index: 10;
			background-color: #2196F3;
			color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.close-btn {
			background-color: red;
			border: none;
			color: white;
			padding: 5px 10px;
			cursor: pointer;
		}
```
## JS
The entire class script is located in the ``js/fitmodalwindows.js`` folder. We just need to add ``<script src=“fitmodalwindows.js”></script>`` to our page.

## Animations
As I said earlier, all animations are based on aniamte.css. In order for them to work we need to add this CSS sheet to our page. We can use CDN:
```html
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>
```

# Usage
Using FIT modal windows is trivial and limited to creating a single command. It looks like this:
```html
<script>
		var temporary_variable = new CreateWindow('WINDOW_NAME', {
			OPTIONS_ARRAY
		});
</script>.
```

To create a basic window that will open as soon as the page loads with default style settings - we use code:
```html
<script>
		var win1 = new CreateWindow('window1', {
			headerText: 'Header 1',
			content: '<p>This is the content of Window 1</p>',
		});
</script>
```

## What options we have?
In the options table, we have several options for setting up a particular window. Here they are:

| Option         | What does she do?                                                                              | Additional info                                                                                                                                                            |
|----------------|------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| windowClass    | We pass the CSS class to the entire window                                                     | If we don't use it the CSS class will be .window                                                                                                                           |
| headerClass    | We pass the CSS class to the header of the window                                              | If not used, the CSS class will be .window-header                                                                                                                          |
| closeClass     | Pass CSS class to “close” button                                                               | If we don't use it the CSS class will be .close-btn                                                                                                                        |
| closeIcon      | HTML code of the closing icon                                                                  | We can set something other than the classic “x”. For example, we can add an image as a closing icon.                                                                       |
| width          | Window width                                                                                   | When we do not specify the width the window will be as big as its content                                                                                                  |
| height         | Height of window                                                                               | When we do not specify the height the window will be as big as its content                                                                                                 |
| top            | Top position where the window will open                                                        | If you do not specify any position (top, bottom, left, right) then the window will open in the middle of the page                                                          |
| bottom         | Bottom position where the window will open                                                     | If you do not specify any position (top, bottom, left, right) then the window will open in the middle of the page                                                          |
| left           | Left position where the window will open                                                       | If you do not specify any position (top, bottom, left, right) then the window will open in the middle of the page                                                          |
| right          | Right position where the window will open                                                      | If you do not specify any position (top, bottom, left, right) then the window will open in the middle of the page                                                          |
| openAnimation  | Window opening animation from animate.css                                                                      | If we do not indicate any animation - it will be fadeIn and fadeOut                                                                                                        |
| closeAnimation | Window closing animation from animate.css                                                                      | If we do not indicate any animation - it will be fadeIn and fadeOut                                                                                                        |
| draggable      | If set to “true” then the window can be dragged                                                | When we do not add this option - the window will not be draggable                                                                                                          |
| headerText     | HTML code of the text in the header                                                            | We specify the text to be in the headline. We can use styled HTML for example                                                                                              |
| content        | HTML code of the window content                                                                | Here we put the HTML code of the window content. To make it convenient for us to edit it, it is a good idea to put the content of this option inside these characters: ` ` |
| showAfter      | Specify in milliseconds after what time you want the window to appear from loading the website | If we do not specify this option the window will open as soon as the page loads                                                                                            |

## Demo code of all the options:
```html
<script>
		var window1337 = new CreateWindow('window1337', {
			windowClass: 'window-alt',
			headerClass: 'window-header-alt',
			closeClass: 'close-btn-alt',
			closeIcon: '<span style="font-size: 20px; color: black;">CLOSE</span>',
			width: '500px',
			height: '50vh',
			top: '350px',
			left: '50vw',
			openAnimation: 'animate__lightSpeedInRight',
			closeAnimation: 'animate__rotateOut',
			draggable: true,
			headerText: `
      <b>Super header<b> of
      this <i>website</i>
      `,
			content: `
      <p>This is the content of awesome window</p>
      <br>
      <p>Visit creator of this script at Karol Sarbiewski - https://sarbiewski.org/</p>
      <span class="close-window-button">close</span>
      <br>
      `,
			showAfter: 3000
		});
</script>
```

## Button for closing window inside content
To create a button, text, image in the middle of the window content to close the window, give it the CSS class ``close-window-button``. For example:
```js
[...]
  content: `
  <p>Window content...</p>
  <br>
  <br>
  <br>
  <span class="close-window-button">Click here to close this window</span>
      `,
[...]
```

## Showing window when something is clicked
In order to open a window when you click on a button/link/whatever, you need to throw the window opening code into the function. Then refer to this function in ``onclick=""`` in a specific element of the page. For example:
```html
<button onclick="openwindowonclick()">Click here to open window</button>

<script>
		function openwindowonclick() {
			var winonclick = new CreateWindow('windowonclick', {
				width: '500px',
				top: '0px',
				right: '0px',
				draggable: true,
				headerText: 'Window shows on click',
				content: `<p>Content of window</p>`
			});
		}
</script>
```

# For now, that's all :)
I'm glad that somewhere my script helped someone to do something cool on the website :)
I allow you to change the script, distribute it, etc. It would be nice to mention somewhere that the author of this script is [Karol Sarbiewski](https://sarbiewski.org) :)
