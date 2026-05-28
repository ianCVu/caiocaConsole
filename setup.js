let caiocaData = null;
async function setUpCaiocaConsole() {
  try {
    var data = await fetch("https://iancvu.github.io/caiocaConsole/data.json", {
      method : "GET",
      redirect : "follow"
    });
    caiocaData = await data.json();
  } catch (e) {
    console.error(e);
  }
}
