import { useLoaderData } from "react-router-dom";
import { Social } from "./components";
import { useHandleCreator } from "./hooks";
import "./styles.css";

export async function loader({ params }) {
  const creatorId = await params.creatorId;
  return { creatorId };
}

export const ViewCreator = () => {
  const { creatorId } = useLoaderData();
  const {
    getCreatorData,
    getCreatorIsLoading,
    expandText,
    setExpandText,
    navigate,
  } = useHandleCreator({
    creatorId,
  });

  return (
    <div className="creator">
      <div className="content-wrapper">
        <div className="content">
          {getCreatorIsLoading ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="loading-spinner"></div>
            </div>
          ) : (
            getCreatorData && (
              <>
                <div
                  className="creator-image"
                  style={{
                    backgroundImage: `url('${
                      getCreatorData?.imageURL?.length > 0
                        ? getCreatorData.imageURL
                        : "/placeholder.png"
                    }')`,
                  }}
                ></div>
                <div className="info">
                  <div>
                    <h1>{getCreatorData.name}</h1>
                    <button
                      className="edit-button"
                      onClick={() =>
                        navigate(`/creators/edit/${getCreatorData.id}`)
                      }
                    >
                      <img src="/edit-button.svg" alt="" />
                    </button>
                  </div>
                  <Social creator={getCreatorData} />
                  <p
                    style={
                      expandText
                        ? { whiteSpace: "pre-wrap" }
                        : {
                            display: "-webkit-box",
                            WebkitLineClamp: "10",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            whiteSpace: "pre-wrap",
                          }
                    }
                  >
                    {getCreatorData.description}
                  </p>
                  <button onClick={() => setExpandText((prev) => !prev)}>
                    {expandText ? "Collapse" : "Read More"}
                  </button>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};
