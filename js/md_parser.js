function renderMarkdown(fileName) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var text = this.responseText,
				target = document.getElementById('targetDiv'),
				converter = new showdown.Converter(),
				html = converter.makeHtml(text);
		 target.innerHTML = html;
    }
  };
  xhttp.open("GET", fileName, true);
  xhttp.send();
}