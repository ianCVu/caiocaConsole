# Caioca Console
Caioca Console 1.0 is a open-source TUSD Scratch attack tool. Caioca Console 1.0 is designed to load Scratch Members from the TUSD's information.
Attackers with this tool can reset Scratch passwords, find private projects, and more!
# Setting up Caioca Console 1.0
Setting up Caioca Console 1.0 only requires simple steps. First, you'll need to fetch the JSON from our Github Repo. To do that, you'll need a fetch API.
```javascript
let response = await fetch("https://github.com/ianCVu/caiocaConsole/raw/refs/heads/main/data.json", { method : "GET" });
```
After `response` is defined, the value must be parsed into JSON.
```javascript
await response.json();
```
This should log the JSON to the console allowing you to read the current information.
