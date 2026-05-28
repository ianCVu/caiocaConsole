let caiocaData = null;
async function setUpCaiocaConsole() {
  var data = await fetch("https://iancvu.github.io/caiocaConsole/data.json", {
    method : "GET",
    redirect : "follow"
  });
}
