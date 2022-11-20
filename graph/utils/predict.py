import os.path
from typing import List, Dict
from binpickle import load
import pandas as pd
from graph.utils.id_conversion import imdb_to_movielens, movielens_to_imdb
import random


def _predict(
        model_path: str,
        user_session: List[int],
        user_profile: Dict[int, float],
        candidates: List[int],
        topk: int
) -> List[int]:
    """
    This function predicts a ranked list of topk movies/series based on the user profile of past interactions and the
    current session, taking into account only the candidates.
    :param model_path: the path to the model to load to perform the prediction
    :param user_session: the item ids in movielens convention explored by the user in the current session
    :param user_profile: the item ids in movielens convention which we know the user has interacted with
    :param candidates: list of the items to rank
    :param topk: the number of items to be returned
    :return: a ranked list of topk items for the user
    """
    item = list(user_profile.keys()) + user_session
    rating = list(user_profile.values()) + [1. for _ in range(len(user_session))]

    return load(model_path).recommend(1, n=topk, ratings=pd.Series(data=rating, index=item), candidates=candidates)


def predict(
        user_session: List[int],
        user_profile: Dict[int, float],
        candidates: List[int],
        topk: int
):
    """
    This function predicts a ranked list of topk movies/series based on the user profile of past interactions and the
    current session, taking into account only the candidates.
    :param user_session: the item ids in imdb convention explored by the user in the current session
    :param user_profile: the item ids in imdb convention which we know the user has interacted with
    :param candidates: list of the items to rank
    :param topk: the number of items to be returned
    :return: a ranked list of topk items for the user
    """

    if len(candidates) <=topk: return candidates

    prediction = [
        movielens_to_imdb[item_id]
        for item_id in
        _predict(
            os.path.join(os.path.join(os.path.join(os.path.join(os.path.join(os.getcwd(), 'graph'), 'utils'), 'saved_recommenders'),
                                      "model.bpk")),
            [imdb_to_movielens[item] for item in user_session],
            {imdb_to_movielens[item]: rating for item, rating in user_profile.items()},
            [imdb_to_movielens[item] for item in candidates],
            topk
        )['item']
    ]

    return random.sample(candidates, k=topk) if len(prediction) < topk else prediction


if __name__ == '__main__':
    print(
        predict(
            [6397426, 8391976],
            {7349662: 2., 1665744: 5.},
            [3778644, 6397426, 8391976],
            3
        )
    )
