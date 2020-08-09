var quill = new Quill('#editor', {
	theme: 'snow',
	modules: {
		toolbar: '#toolbar'
	}
});

document.getElementById("post-button").addEventListener("click", () => {
	console.log('click');
	console.log(quill.getContents());
})

document.getElementById("clear-comment").addEventListener("click", () => {
	quill.deleteText(0, quill.getLength())
})