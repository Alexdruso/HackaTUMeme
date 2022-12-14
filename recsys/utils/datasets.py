from lenskit.datasets import MovieLens, ML1M

datasets = {
    '1M': ML1M,
    '20M': MovieLens,
    'small': lambda: MovieLens(path='data/ml-small')
}
