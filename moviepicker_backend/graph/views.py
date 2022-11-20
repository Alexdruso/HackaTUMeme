import json
from django.http import HttpResponse
from graph.utils.predict import *


def get_all(request):
    graph = []
    nodes = json.load(open("nodes.json", "r"))
    for node in nodes:
        if nodes[node]["type"] == "movie":
            graph.append(node)
    return HttpResponse(json.dumps(graph))


def get_info(request):
    node_id = request.GET.get("node_id")
    nodes = json.load(open("nodes.json", "r"))
    return HttpResponse(json.dumps(nodes[node_id]))


def get_node(request):
    node_id = request.GET.get("node_id")
    node_history = request.GET.get("user_session")
    if len(node_history) == 0:
        node_history = []
    nodes = json.load(open("nodes.json", "r"))
    graph = {"nodes": [], "links": []}
    graph["nodes"].append(nodes[node_id])
    for link in nodes[node_id]["links"]:
        graph["nodes"].append(nodes[link])
        for sub_link in nodes[link]["links"]:
            graph["nodes"].append(nodes[sub_link])
            graph["links"].append({"source": sub_link, "target": link})
            graph["links"].append({"source": link, "target": sub_link})
        graph["links"].append({"source": node_id, "target": link})
        graph["links"].append({"source": link, "target": node_id})
    imdb_ids = []
    for node in graph["nodes"]:
        if node["type"] == "movie":
            imdb_ids.append(int(node["imdb"]))
    predicted_nodes = predict(node_history,
                              {112792: 1.0, 108052: 1.0, 115956: 1.0, 114048: 1.0, 118114: 1.0, 116225: 1.0, 58385: 1.0,
                               101761: 1.0, 82846: 1.0, 77416: 1.0, 66206: 1.0, 91203: 1.0, 97351: 1.0, 79945: 1.0,
                               82198: 1.0, 34492: 1.0, 48280: 1.0, 76618: 1.0, 84827: 1.0, 84787: 1.0, 128853: 1.0,
                               81454: 1.0, 78087: 1.0, 83929: 1.0, 82694: 1.0, 180093: 1.0, 95488: 1.0, 281373: 1.0,
                               80836: 1.0, 82431: 1.0, 82677: 1.0, 83557: 1.0, 99699: 1.0, 82000: 1.0, 72913: 1.0,
                               72856: 1.0, 78062: 1.0, 105643: 1.0, 1190080: 1.0}, imdb_ids, 5)
    for predicted_node in predicted_nodes:
        for node in graph["nodes"]:
            if node["type"] == "movie" and node["imdb"] == str(predicted_node) and node["id"] != node_id:
                graph["nodes"].append(node)
                graph["links"].append({"source": node_id, "target": node["id"]})
                graph["links"].append({"source": node["id"], "target": node_id})
                break
    return HttpResponse(json.dumps(graph))

#
# @csrf_exempt
# def login_view(request):
#     username = request.POST.get('username')
#     password = request.POST.get('password')
#     user = authenticate(request, username=username, password=password)
#     if user is not None:
#         login(request, user)
#         message = "ok"
#     else:
#         message = "error"
#     return HttpResponse({message})
