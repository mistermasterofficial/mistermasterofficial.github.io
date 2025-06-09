document.getElementsByTagName("head")[0].innerHTML = document.getElementsByTagName("head")[0].innerHTML + `<link href="/styles/styles.css" rel="stylesheet">
`;
document.getElementById("loading-screen").innerHTML = `
<img src="/images/svg/loading_logo2.svg" style="height: 25em;">
<img id="loading-img" src="/images/svg/loading_logo1.svg" style="height: 25em;">
`;