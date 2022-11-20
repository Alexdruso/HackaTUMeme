import {MovieData} from '../models/movie'
// @ts-ignore
import {Graph} from "react-d3-graph";
import {useEffect, useState} from "react";


const MovieGraph = ({ graphData }: { graphData: Graph }) => {
    const [graphConfig, setGraphConfig] = useState<Object>()

    useEffect(() => {
        setGraphConfig({
            focusZoom: 1,
            panAndZoom: true,
            staticGraphWithDragAndDrop: true,
            node: {
                size: 400,
            },
            link: {
                highlightColor: "lightblue",
            },
        })
    }, [])

    const onClickNode = function (nodeId: any) {
        console.log(nodeId)
        if (nodeId !== graphData.focusedNodeId) {
            for (let node in graphData.nodes) {
                // @ts-ignore
                if(node[nodeId]!=undefined && node["type"]=="movie"){
                    alert("Hi")
                }
            }
            console.log(graphData.nodes)
        }
    };

    return (
        graphConfig ? <div className='w-full h-full shadow-xl graph-container'>
            <Graph
                id="graph-id"
                data={graphData}
                className="max-h-full max-w-full bg-grey-dark"
                config={graphConfig}
                onClickNode={onClickNode}
            />
        </div> : null
    )
}

export default MovieGraph
