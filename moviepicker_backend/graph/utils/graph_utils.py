import json
import traceback


def generate_nodes():
    json_file = open('../../db.json')
    result = {}
    movies = json.load(json_file)
    for movie in movies:
        links = []
        generate_links(movie, "actors", links, result)
        generate_links(movie, "directors", links, result)
        generate_links(movie, "year", links, result)
        result[movie["title"]] = {
                "id": movie["title"],
                "name": movie["id"],
                "provider": movie["provider"],
                "image": movie["posters"].split(", ")[0] if movie["posters"] is not None else None,
                "type": "movie",
                "links": links,
                "imdb": movie["imdb_id"],
                "year": movie["year"],
                "genres": movie["genres"]
            }
    return result


def generate_links(movie, link_type, links, result):
    print(movie)
    if movie[link_type] is not None:
        for actor in movie[link_type].split(", "):
            temp_type = "actor"
            if link_type == "directors":
                temp_type = "director"
            if link_type == 'year':
                temp_type = "year"
            if actor not in result:
                result[actor] = {
                    "id": actor,
                    "type": temp_type,
                    "links": [movie["title"]]
                }
            else:
                result[actor]["links"].append(movie["title"])
            links.append(actor)


if __name__ == '__main__':
    file = open("../../nodes.json", "w")
    file.write(json.dumps(generate_nodes()))
