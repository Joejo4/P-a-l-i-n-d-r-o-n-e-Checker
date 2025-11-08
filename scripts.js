const input = document.getElementById("input");

function reverstring(str) {
  return str.split("").reverse().join("");
}

function check() {
  const raw = input.value || "";
  const value = raw.toLowerCase().trim();
  const reversed = reverstring(value);

  if (value === reversed) {
    alert("P A L I N D R O M E");
  } else {
    alert("N O T  A  P A L I N D R O M E");
  }

  input.value = "";
}
