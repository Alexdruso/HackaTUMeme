import json
import os

from lenskit.datasets import MovieLens, ML1M

datasets = {
    '1M': ML1M,
    '20M': MovieLens,
    'small': lambda: MovieLens(path='data/ml-small')
}

links = datasets['small']().links

imdbIds = {
    str(row['imdbId']) for index, row in links.iterrows()
}


def load_json(path: str):
    with open(path) as f:
        return json.load(f)


def preprocess(
        data_dir: str,
        output_dir: str
):
    files = os.listdir(data_dir)
    files = filter(lambda filename: '.json' in filename, files)
    files = map(lambda filename: os.path.join(data_dir, filename), files)
    files = map(load_json, files)
    files = (item for catalogue in files for item in catalogue)
    files = filter(lambda item: item['serie'] == '0', files)
    files = list(filter(lambda item: item['imdb_id'] in imdbIds, files))

    with open(os.path.join(output_dir, 'dataset.json'), 'w') as f:
        json.dump(files, f)


if __name__ == '__main__':
    preprocess('data', 'out')
