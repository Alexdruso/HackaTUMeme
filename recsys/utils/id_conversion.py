import pandas as pd
from .datasets import datasets

"""""
links.head()

--------------------

         imdbId  tmdbId
item                   
1        114709     862
2        113497    8844
3        113228   15602
4        114885   31357
5        113041   11862

--------------------

Where item is the Movielens id and imdbId is the imdbId

"""""
links = datasets['small']().links

movielens_to_imdb = {
    index: row['imdbId'] for index, row in links.iterrows()
}

imdb_to_movielens = {
    value: key for key, value in movielens_to_imdb.items()
}