var xhr = new XMLHttpRequest();
xhr.open('GET','data.json', true);
xhr.send();

xhr.onreadystatechange = processRequest;
var response = [];

function processRequest(e) {
  if (xhr.readyState === 4 && xhr.status === 200){
    var response = JSON.parse(xhr.responseText);
    var configurations = response.configurations;

    for(i=0; i< configurations.length;i++){
      var card = document.createElement('div');
      card.className = 'card';

      function cardContent(text){
        var P = document.createElement('P');
        P.appendChild(document.createTextNode(text));
        return P;
      }

      var values = [
        cardContent(configurations[i].name),
        cardContent(configurations[i].hostname),
        cardContent(configurations[i].port),
        cardContent(configurations[i].username)
      ]

      var docFrag = document.createDocumentFragment();
        for(var x = 0; x < values.length; x++) {
          docFrag.appendChild(values[x])
        }



      var container = document.getElementById('mainContainer');
      card.appendChild(docFrag);
      container.appendChild(card);
      console.log(i);
    }
  }
}
