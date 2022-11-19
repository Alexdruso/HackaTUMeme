import pandas as pd
from lenskit.algorithms import item_knn, Recommender

from utils.datasets import datasets


def train(dataset_name: str, save_path: str = None, verbose: bool = True):
    if verbose:
        print('Loading the data...')
    dataset = datasets[dataset_name]()
    if verbose:
        print('Data loaded!')

    print(dataset.ratings)
    recommender = Recommender.adapt(item_knn.ItemItem(20))

    urm = dataset.ratings[['user', 'item', 'rating']]
    recommender.fit(urm)

    print(recommender.recommend(1, n=10, ratings=pd.Series(data=[5, 5], index=[0, 1])))

    print()

    print('Recommender fitted!')

    if save_path:
        if verbose:
            print()


if __name__ == '__main__':
    train('1M')
