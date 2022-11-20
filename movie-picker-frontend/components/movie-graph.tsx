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

        }
    };

    const onClickLink = function (source: any, target: any) {
        window.alert(`Clicked link between ${source} and ${target}`);
    }

    return (
        graphConfig ? <div className='w-full h-full shadow-xl graph-container'>
            <Graph
                id="graph-id"
                data={graphData}
                className="max-h-full max-w-full bg-grey-dark"
                config={graphConfig}
                onClickNode={onClickNode}
                onClickLink={onClickLink}
            />
        </div> : null
    )
}

export default MovieGraph
