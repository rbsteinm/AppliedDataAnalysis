# Do the United Nations peace agreements have an impact on conflicts resolution around the world ?

# Abstract
The United Nations often gets criticized for all the wars it could not prevent and its impact in our society has often been questionned. Our study will aim at giving a rational analysis of the impact of UN peace agreements on the evolution of conflicts around the world. The results of our analysis will be presented as a data story: we will display information relative to both conflicts and peace treaties on a world map to have an insight on the impact they have on one another. We will use a time slider to show the evolution of the aforementioned data through time. Therefore, this worldmap will show if a peace treaty brings some kind of stability in a region that was struggling with conflicts

To perform this, we will use the UCDP dataset which provides the information we need about conflicts and peace agreements from 1975 to 2011. 


# Research questions
Here are the problematics we would like to adress:

- What are the biggest conflicts?
  - What are the casualties?
  - How do they evolve? 
- What percentage of conflicts benefited from UN peace agreements?
- What impact do peace agreements have on conflicts? 
  - Do they bring stability? 
  - For how long?

# Dataset
To fulfill our research goals, we will use the Uppsala Conflict Data Program (UCDP) dataset. The UCDP is a data collection project on organized violence that has been collecting information on armed conflict since 1946. As the UN has been created in 1945, the data set allows us to answer our problematic correctly. However, note that we only have informations on peace agreements from 1975 to 2011.

We will mainly use the UCDP Georeferenced Event Dataset (GED) which gives a lot of informations (including geographical coordinates) about every conflicts that happened from 1946 and the UCDP peace agreement dataset that gives us informations on how these conflicts were solved from 1975 to 2011. We can link peace agreements to conflict events thanks to the conflict ID. We used the codebooks available on the UCDP website to fully understand these datasets, the data that is available and how it is organised. 

Our first idea is to use the UCDP GED to get informations about all the conflicts (mainly casualties and location) and then use the UCDP peace agreements dataset to see which of theses conflicts were resolved and if some new conflicts appears at the same location shortly after.

At the moment, these datasets seem to have all the information we need to answer our problematics. However, if it turns out to be necessary, we can always enrich the data with the GDELT datasets. 


# A list of internal milestones up until project milestone 2
Here is what we would like to perform for the second milestone:

- Get a clean dataset
- Perform descriptive statistics on the different conflicts and peace agreements (average number of deaths, group by countries/regions , % of peace agreements, correlations etc...)
- Prepare the data so it is easy to plot it on a map 
- Display the events on a map for a single year

# Questions for TAs

- Do you find this problematic appropriate for the project's needs?
- Will we be introduced on how to make a proper data story? 
