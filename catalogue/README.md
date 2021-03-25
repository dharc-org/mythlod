# MythLOD Catalogue

## The catalogue data
The data shown in the catalogue has been extracted from mythlod dataset via three main SPARQL queries: 
* Items (and contextual metadata belonging to the graphs <code>factual_data</code>, <code>assertions</code> and respective <code>provenaces</code>) corresponding to a source association interpretative act;
* Items (and contextual metadata belonging to the graphs <code>factual_data</code>, <code>assertions</code> and respective <code>provenaces</code>) corresponding to a hermeneutic act;
* All the works (references) expressed in the items along with their metadata (stored into <code>factual_data</code> graph). 

The three results as been grouped into 2 variables into <code>cat_ex.js</code> file and used as source for the catalogue interface.  

## The catalogue GUI
The catalogue structure has been developed on the top of two open-source javascript libraries: 
* [eikes faceted search](https://eikes.github.io/facetedsearch/), which provides the faceted search function.
* The [sidebar](https://bootstrapious.com/p/bootstrap-sidebar)  provides the possibility to close the sidebar (after faceted search or if no search needed) and browse manually the catalogue in screen full-width. 
The two libraries has been integrated to create a user-friendly enviroment despite the huge amount of browsanble entities involved in faceted search.

## Additional information 
* The spinner when the page loads (same as the favicon) comes from [font awesom](https://fontawesome.com/)
* Thanks again to [FrameLAB](https://patrimonioculturale.unibo.it/) which is the responsible entity for [Mythologiae Dataset](https://patrimonioculturale.unibo.it/mythologiae/). 



