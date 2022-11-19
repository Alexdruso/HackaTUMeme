import pandas as pd

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

def imdb_to_movielens(links: pd.DataFrame, id: int) -> int:
    """
    This function takes as input an imdb id and returns the equivalent Movielens id
    :param id: the imdb id
    :return: the Movielens id
    """
    return


def movielens_to_imdb(links: pd.DataFrame, id: int):
    """
    This function takes as input a Movielens id and returns the equivalent imdb id
    :param id: the Movielens id
    :return: the imdb id
    """
    return
