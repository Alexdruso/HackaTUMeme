import os.path

import pandas as pd
from lenskit.algorithms import item_knn, Recommender
from lenskit.algorithms.basic import Fallback, Popular
from binpickle import dump

from utils.datasets import datasets


def train(dataset_name: str, save_path: str = None, verbose: bool = True):
    if verbose:
        print('Loading the data...')
    dataset = datasets[dataset_name]()
    if verbose:
        print('Data loaded!')

    recommender = Recommender.adapt(item_knn.ItemItem(nnbrs=100, feedback='implicit'))

    urm = dataset.ratings[['user', 'item', 'rating']]
    recommender.fit(urm)

    print('Recommender fitted!')

    if save_path:
        if verbose: print('Saving the model to file...')
        dump(recommender, os.path.join(save_path, 'model.bpk'))


if __name__ == '__main__':
    train('small', save_path='saved_recommenders')
