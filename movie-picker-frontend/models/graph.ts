import {NodeGraph} from "./node";
import {Link} from "./link";

export type Graph = {
    "nodes": Array<NodeGraph>
    "links": Array<Link>,
    "focusedNodeId": string
}
