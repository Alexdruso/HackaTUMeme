import os.path
from typing import List, Dict
from binpickle import load
import pandas as pd


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
    :param user_session: the items explored by the user in the current session
    :param user_profile: the items which we know the user has interacted with
    :param candidates: list of the items to rank
    :param topk: the number of items to be returned
    :return: a ranked list of topk items for the user
    """
    return load(model_path).recommend(1, n=10, ratings=pd.Series(data=[5, 5], index=[0, 1]))


def predict(
        user_session: List[int],
        user_profile: Dict[int, float],
        candidates: List[int],
        topk: int
):
    """
    This function predicts a ranked list of topk movies/series based on the user profile of past interactions and the
    current session, taking into account only the candidates.
    :param user_session: the items explored by the user in the current session
    :param user_profile: the items which we know the user has interacted with
    :param candidates: list of the items to rank
    :param topk: the number of items to be returned
    :return: a ranked list of topk items for the user
    """
    return _predict(
        os.path.join('saved_recommenders', 'model.bpk'),
        user_session,
        user_profile,
        candidates,
        topk
    )


if __name__ == '__main__':
    print(
        predict(
            [2, 4],
            {5: 2., 10: 5.},
            [6, 7, 8],
            3
        )
    )
