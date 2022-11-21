## Inspiration
The solution to this challenge has roots in our own professional and personal experience. On the one hand, the increasing fragmentation of the market has made it more and more difficult for streaming platforms to provide meaningful recommendations limited to their catalog. On the other hand, as computer engineers, we are always fascinated by technically challenging solutions and beautiful data structures, i.e. graphs.
However impossible it might seem to mix the two things, in our own way we propose to merge the two things to curb the dread of today's streaming experience while discovering a bit about ourselves and the world in the meanwhile.

## What it does
Our solution effectively gamifies the recommendation experience to lead the user to the perfect recommendation. Instead of providing the user with a meager carousel of top k recommendations, we let them play with the system and go as deep as they want in the search for the perfect movie to watch. The user is helped by a graph visualization which effectively creates unique paths from a starting recommendation to the final one, engaging the user with trivia and meaningful connections between the given recommendations and the context in which the user lives, comprising the activity of their social group.

## How we built it
The beating heart of our system is the recommendation engine, which relies on training on the Movielens dataset to provide a first educated guess with the library [Lenskit](https://lenskit.org/). We then incorporate the subsequent conversational steps in the recommendation by temporarily expanding the user profile. Due to a lack of data, other more nuanced context-aware recommendations were precluded, but as the user base of Moviepick expands, new and exciting algorithms can be unlocked. For the rest of the backend managing the movie's metadata, we leveraged Django for its wide set of functionalities. The frontend, on the other hand, is created with ne

## Challenges we ran into
The past few days have been quite intensive and full of challenges, but the ideation part certainly took the most time and brain power. It was clear from the beginning that providing a simple recommendation would not have been good enough to capture the attention of the judges. However, at the same time, it seemed unreasonable to completely exclude this kind of personalization from our final solution. How to reconcile the two things was subject to much discussion.

## Accomplishments that we're proud of
We managed to train our recommender and build the whole prototype comprising the front end.

1. A novel and fun way to represent conversational recommender systems. 
2. We managed to do something :D
3. We survived.

## What we learned
1. Prioritize.
2. Prioritize.
3. Prioritize.

## What's next for MoviePicker
1. Refine the design of the UI to make the UX more pleasant.
2. Expand the recommendations to TV series by exploiting content-based recommendations.
3. Once more user data is available, test and deploy neural models to improve [serendipity](https://eugeneyan.com/writing/serendipity-and-accuracy-in-recommender-systems/) in the session-based recommendations. 
