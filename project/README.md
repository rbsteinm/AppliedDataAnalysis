# Do the United Nations peace agreements have an impact on conflicts resolution around the world ?

# Read the data story and explore the map
The result of our study can be found [here](https://rbsteinm.github.io/AppliedDataAnalysis). If you want to follow our data analysis process, please refer to *FinalNotebook.ipynb*.

# Abstract
The United Nations often gets criticised for all the wars it could not prevent and its impact in our society has often been questioned. The UN exist since 1945, although until today the amount of conflicts around the world has not significantly diminished, does this mean that the UN is inefficient ? The Israelo-Palestinian conflict is allmost as old as the UN and no Peace Agreements (PA) could completely stop it as of today, so does the efforts made through the UN organization are worth the results ? Such a question would request more than a statistical study to be answered. Hence, we will focus on studying the impact of the UN in the domain of conflict resolution. 
Our study aims at giving an objective analysis of the impact of UN peace agreements on the evolution of conflicts around the world. We present the results of our analysis as a data story. Information relative to both conflicts and peace treaties are displayed on a world map in order to get an insight on the impact they have on one another. 

To perform this, we used the [UCDP dataset](http://ucdp.uu.se/downloads/) which provides information about the conflicts from 1945 to 2016 and peace agreements from 1975 to 2011.

# Research questions
Here are some problematics we address in our analysis:

- What kind of conflicts benefit the most from peace agreements? 
- What percentage of conflicts benefited from UN peace agreements?
- What impact do peace agreements have on conflicts? 
  - Do they bring stability? 
  - For how long?

# Dataset
To fulfil our research goals, we used the Uppsala Conflict Data Program (UCDP) dataset. The UCDP is a data collection project on organised violence that has been collecting information on armed conflicts since 1946. Since the UN has been created in 1945, the dataset allows us to answer our problematic correctly. However, note that we only have information on peace agreements from 1975 to 2011.

We mainly used
- The *UCDP/PRIO Armed Conflict Dataset* which provides information about every armed conflict where at least one party is the government of a state from 1946 to 2016.
- The *UCDP peace agreement Dataset* that gives information on how these conflicts were solved from 1975 to 2011. We can link peace agreements to conflict events thanks to the conflict ID. We used the codebooks available on the UCDP website to fully understand these datasets, the data that is available and how it is organised.

The full research is made in the *FinalNotebook.ipynb* file. We present the results of our research in the form of a [data story and an interactive map](https://rbsteinm.github.io/AppliedDataAnalysis/).


## Visual representation of the information

We created an interactive interface to present a wide view of the conflicts around the world with the possibility to get a deep insight into one conflict. This visualization shows the evolution of armed conflicts around the world and the different peace treaties signed as part of these conflicts, with a particular focus on the United Nations' interventions. It allows the user to travel through time and observe the evolution of conflicts and peace agreements around the world.

This interactive visualization is implemented in Javascript, mostly using Mike Bostock's famous **D3.js** library.

Our data story presents the results of our explorations and the statistical study of the impact of the UN in conflicts resolution. To do so we computed a propensity score on a smart matching of the treated and control group of our study. We then computed the Fishr exact test to get the p-value.



## What can we conclude about the impact of the UN?

Our study showed that after matching on the peace agreements and on the conflicts, the UN seems to perform better than other third party actors. Indeed, only 33% of the UN Peace agreements were broken while this number goes up to 42% for the other actors.

However, it is important to note that performing a Fisher exact test on these proportions outputed a p-value of 0.37 which means that we cannot reject the null hypothesis that the UN and other parties are equally likely to have their peace agreement broken. If you are interested in these technical p-values analysis, you can have a look at our notebook.

In the domain of conflict resolution, our study showed that the UN might have an impact although the relatively high p-value we obtained in the Fisher test cannot prove this impact 'scientifically'. It should be noted that UN biggest challenges does not land in the resolution of existing conflicts but rather in the settlement of communication channels to avoid the creation of tensions between countries. For further research, An analysis of the interactions between state leaders and the tension level between countries could be made.

## Contributions 

- [Raphaël Steinmann](https://github.com/rbsteinm): Preprocessing of the data, implentation of the [interactive map](https://rbsteinm.github.io/AppliedDataAnalysis/project/frontend/map/map.html), specific data processing/preparation for the map, data story design.
- [Louis Duvigneau](https://github.com/Loduv): Preprocessing of the data, analysis of the conflicts distributions, propensity score matchings and other statistical analysis of the results, redaction of the data story.
- [Malo Grisard](https://github.com/mgelsm): Preprocessing of the data, analysis of the peace agreements distributions and interactions, redaction of the data story.
