from lenskit.algorithms import item_knn, Recommender
from lenskit.datasets import MovieLens

if __name__=='__main__':
    dataset = MovieLens()
    print('Data loaded!')
    recommender = Recommender.adapt(item_knn.ItemItem(20))

    urm = dataset.ratings[['user', 'item', 'rating']]
    recommender.fit(urm)

    print('Recommender fitted!')