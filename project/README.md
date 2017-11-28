# Do the United Nations peace agreements have an impact on conflicts resolution around the world ?

# Abstract
The United Nations often gets criticised for all the wars it could not prevent and its impact in our society has often been questioned. Our study aims at giving an objective analysis of the impact of UN peace agreements on the evolution of conflicts around the world. The results of our analysis will be presented as a data story: we will display information relative to both conflicts and peace treaties on a world map in order to have an insight on the impact they have on one another. We will use a time slider to show the evolution of the aforementioned data through time. Therefore, the world map will, for example, show if a peace treaty brings some kind of stability in a region that was struggling with conflicts.

To perform this, we will use the UCDP dataset which provides the information we need about conflicts and peace agreements from 1975 to 2011. 


# Research questions
Here are the problematics we would like to address:

- What are the biggest conflicts?
  - How do they evolve? 
  - What are the (human) casualties? 
- What percentage of conflicts benefited from UN peace agreements?
- What impact do peace agreements have on conflicts? 
  - Do they bring stability? 
  - For how long?

# Dataset
To fulfil our research goals, we will use the Uppsala Conflict Data Program (UCDP) dataset. The UCDP is a data collection project on organised violence that has been collecting information on armed conflicts since 1946. Since the UN has been created in 1945, the dataset allows us to answer our problematic correctly. However, note that we only have information on peace agreements from 1975 to 2011.

We will mainly use the *UCDP Georeferenced Event Dataset* (GED) which gives a lot of information (including geographical coordinates) about every conflict that happened from 1946 and the *UCDP peace agreement Dataset* that gives information on how these conflicts were solved from 1975 to 2011. We can link peace agreements to conflict events thanks to the conflict ID. We used the codebooks available on the UCDP website to fully understand these datasets, the data that is available and how it is organised. 

We plan to use the *UCDP GED* to get information about all the conflicts (mainly casualties and location) and then use the *UCDP peace agreement dataset* to see which of theses conflicts were resolved and if some new conflicts appear at the same location shortly after.

At the moment, these datasets seem to have all the information we need to answer our problematic. However, if it turns out to be necessary, we will enrich the data with the *GDELT datasets*. 


# What will we do until the final milestone?

## Visual representation of the information

The next big step is to represent the evolution of the warring countries and the peace aggreements on a world map. We plan to build an interactive visualization in javascript, most likely using Mike Bostock's famous 'D3JS' library. There will be a timeline and the data on the map will evolve over time. We are not sure yet how time will flow. It could be triggered by the user, for example just by scrolling, or moving a slider or it could flow automatically with some timer.

At the moment, we are still experimenting and don't know exactly how we are going to represent the conflicts on the map. We have two main ideas in mind:
- pinpoint each single conflict event as a point that appears and disappears on the map at the right time. This is more precise but might make the map really crowded and the information less clear.
- Aggregate the conflicts at the level of countries, and constantly update the color that fills each country by changing the shade of red/green/... to clearly express how long each country has been in war and/or the intensity of the conflict. Although in the scenario we loose precision, aggregating the information makes it easier to read and understand.

We plan to experiment with D3JS to find out which solution is the closest to what we want to achieve.

Of course, we will also add to our data story the results of our data exploration and the propensity score that we computed from the data. Then, depending on how long all this will take, we might also add some kind of information panel that would display insights about the peace treaties and conflicts while the user scrolls though time.
