function rot13(str) {
    return str.replace(/[a-zA-Z]/g, function(char) {
      var offset = char <= 'Z' ? 65 : 97;
      return String.fromCharCode((char.charCodeAt(0) - offset + 13) % 26 + offset);
    });
  }
  
  function encrypt() {
    var input = document.getElementById("input").value;
    var output = rot13(input);
    document.getElementById("output").value = output;
  }
  