import componentMap from "@/components/index";

const RenderBlocksHelper = ({ data }) => {
    const blocks = data?.page?.blocks || [];

    return (
        <div>
            {blocks &&
                blocks.map((block, index) => {
                    const Component = componentMap[block.name];
                    if (!Component) {
                        if (process.env.NODE_ENV === 'development') {
                            console.warn(`Component not found for block "${block.name}"`);
                        }
                        return null;
                    }

                    // if (Component) {
                    //     if (process.env.NODE_ENV === 'development') {
                    //         console.log(`Rendered Components "${block.name}"`);
                    //     }
                    // }

                    const data = JSON.parse(block.attributesJSON)?.data;
                    return <Component key={index} data={data} />;
                })}
        </div>
    )
}

export default RenderBlocksHelper
