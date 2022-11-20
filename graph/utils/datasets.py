import os

from lenskit.datasets import MovieLens, ML1M

small_dataset = os.path.join(os.path.join(os.path.join(os.path.join(os.path.join(os.getcwd(), 'graph'), 'utils'), 'data'), "ml-small"))
datasets = {
    '1M': ML1M,
    '20M': MovieLens,
    'small': lambda: MovieLens(small_dataset)
}
