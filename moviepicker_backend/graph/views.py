from django.http import HttpResponse
import json


def get_node(request):
    node_id = request.GET.get("node_id")
    nodes = json.load(open("nodes.json", "r"))
    graph = {"nodes": [], "links": []}
    graph["nodes"].append(nodes[node_id])
    for link in nodes[node_id]["links"]:
        graph["nodes"].append(nodes[link])
        graph["links"].append({"source": node_id, "destination": link})
        graph["links"].append({"source": link, "destination": node_id})
    return HttpResponse(json.dumps(graph))

from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def login_view(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        message = "ok"
    else:
        message = "error"
    return HttpResponse({message})


