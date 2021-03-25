var data = [
  {
    "categLabel": "Enea nella penisola italica"
  },
  {
    "categLabel": "Didone conduce Enea a palazzo"
  },
  {
    "categLabel": "Enea e i sogni rivelatori"
  },
  {
    "categLabel": "Fineo e le arpie"
  },
  {
    "categLabel": "Venere e Anchise"
  },
  {
    "categLabel": "Il ciclope Polifemo"
  },
  {
    "categLabel": "Arianna viene abbandonata da Teseo"
  },
  {
    "categLabel": "Enea verso la penisola italica"
  },
  {
    "categLabel": "Enea abbandona Didone"
  },
  {
    "categLabel": "Enea si rivela a Didone"
  },
  {
    "categLabel": "Venere salva Elena"
  },
  {
    "categLabel": "Nettuno salva Enea"
  },
  {
    "categLabel": "Antigone sul sepolcro di Policine"
  },
  {
    "categLabel": "Didone"
  },
  {
    "categLabel": "Enea contro Turno"
  },
  {
    "categLabel": "Venere e l'armatura di Enea"
  },
  {
    "categLabel": "Enea negli inferi"
  },
  {
    "categLabel": "Enea e Acate sulla costa libica"
  },
  {
    "categLabel": "Enea e Didone innamorati"
  },
  {
    "categLabel": "Enea e i suoi vengono attaccati dalle Arpie"
  },
  {
    "categLabel": "Saghe familiari e epiche"
  },
  {
    "categLabel": "Enea nei Campi Elisi"
  },
  {
    "categLabel": "Vulcano"
  },
  {
    "categLabel": "Morte di Didone"
  },
  {
    "categLabel": "Enea fugge da Troia in fiamme"
  },
  {
    "categLabel": "Gli dèi"
  },
  {
    "categLabel": "Didone allestisce un banchetto in onore di Enea"
  },
  {
    "categLabel": "Enea presenta Cupido nei panni di Ascanio a Didone"
  },
  {
    "categLabel": "Arianna e Dioniso s'incontrano"
  }
]

var listDiv = document.getElementById('list-puntate');
var ul=document.createElement('ul');
for (var i = 0; i < data.length; ++i) {
      var li=document.createElement('li');
      li.innerHTML = data[i].categLabel;   // Use innerHTML to set the text
      ul.appendChild(li);                                 
}
listDiv.appendChild(ul); 