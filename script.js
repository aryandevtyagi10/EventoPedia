async function searchHolidays() {
  const dateInput = document.getElementById("dateInput").value;
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = "";

  if (!dateInput) {
    resultDiv.innerHTML = "<p>Please select a date.</p>";
    return;
  }

  const [year, month, day] = dateInput.split("-");
  const country = "IN";
  const apiKey = "YOUR_API_KEY";  // Replace with your actual key

  const url = `https://holidays.abstractapi.com/v1/?api_key=${apiKey}&country=${country}&year=${year}&month=${month}&day=${day}`;

  resultDiv.innerHTML = "<p>Fetching data...</p>";

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.length === 0) {
      resultDiv.innerHTML = "<p>No holidays or festivals found on this date.</p>";
    } else {
      let output = `<h3>Special Days on ${dateInput}:</h3><ul>`;
      data.forEach(item => {
        output += `<li><strong>${item.name}</strong> (${item.type}) - ${item.week_day}</li>`;
      });
      output += `</ul>`;
      resultDiv.innerHTML = output;
    }

  } catch (err) {
    resultDiv.innerHTML = "<p>There was an error fetching the data.</p>";
    console.error(err);
  }
}
