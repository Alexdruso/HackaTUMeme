import os.path

import pandas as pd
from lenskit.algorithms import item_knn, Recommender
from binpickle import dump

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

    print('Recommender fitted!')

    if save_path:
        if verbose: print('Saving the model to file...')
        dump(recommender, os.path.join(save_path, 'model.bpk'))


if __name__ == '__main__':
    train('1M', save_path='saved_recommenders')
