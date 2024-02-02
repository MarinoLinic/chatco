const socket = new WebSocket('ws://localhost:3000')

function sendMessage(e) {
	// Prevent page from reloading
	e.preventDefault()
	const input = document.querySelector('input')
	// If there is any input value
	if (input.value) {
		socket.send(input.value)
		// Return to empty field
		input.value = ''
	}
	// Focus the input field
	input.focus()
}

document.querySelector('form').addEventListener('submit', sendMessage)

// Listen for messages, destructure the event listener to "data"
socket.addEventListener('message', ({ data }) => {
	const li = document.createElement('li')
	li.textContent = data
	// Append the new item to the list
	document.querySelector('ul').appendChild(li)
})
