function checkOddEven() {
  var number = document.getElementById("numberInput").value;
  if (number < 0) {
    document.getElementById("result").innerHTML =
      "<p class='text-red-500 border border-red-500 p-2 rounded'>Angka tidak boleh negatif.</p>";
  } else if (number % 2 === 0) {
    document.getElementById("result").innerHTML =
      "<p class='text-green-500 border border-green-500 p-2 rounded'>" +
      number +
      " adalah bilangan Genap.</p>";
  } else {
    document.getElementById("result").innerHTML =
      "<p class='text-blue-500 border border-blue-500 p-2 rounded'>" +
      number +
      " adalah bilangan Ganjil.</p>";
  }
}

function generateSeries() {
  var number = document.getElementById("numberInput").value;
  if (number < 0) {
    document.getElementById("seriesResult").innerHTML =
      "<p class='text-red-500 border border-red-500 p-2 rounded'>Angka tidak boleh negatif.</p>";
    return;
  }
  var result = "";
  for (var i = 1; i <= number; i++) {
    result += i + " ";
  }
  document.getElementById("seriesResult").innerHTML =
    "<p class='text-green-500 border border-green-500 p-2 rounded'>Deret bilangan: " +
    result +
    "</p>";
}

function generateMultiplicationTable() {
  var number = document.getElementById("numberInput").value;
  if (number < 0) {
    document.getElementById("tableResult").innerHTML =
      "<p class='text-red-500 border border-red-500 p-2 rounded'>Angka tidak boleh negatif.</p>";
    return;
  }
  var result =
    "<table class='table-auto w-full text-center border-collapse border border-gray-300 mt-4'>";
  result += "<thead><tr>";
  for (var i = 1; i <= number; i++) {
    result +=
      "<th class='border border-gray-300 p-2 bg-gray-200'>" + i + "</th>";
  }
  result += "</tr></thead><tbody>";
  for (var i = 1; i <= number; i++) {
    result += "<tr>";
    for (var j = 1; j <= number; j++) {
      result += "<td class='border border-gray-300 p-2'>" + i * j + "</td>";
    }
    result += "</tr>";
  }
  result += "</tbody></table>";
  document.getElementById("tableResult").innerHTML = result;
}
