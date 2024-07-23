import { useLoaderData } from "react-router-dom";
import { useHandleCreatorEdit } from "./hooks";
import Modal from "react-modal";
import "./styles.css";

Modal.setAppElement("#root");

export async function loader({ params }) {
  const creatorId = await params.creatorId;
  return { creatorId };
}

export const EditCreator = () => {
  const { creatorId } = useLoaderData();
  const {
    getCreatorData,
    getCreatorIsLoading,
    register,
    handleSubmit,
    onSubmit,
    confirmModalIsOpen,
    setConfirmModalIsOpen,
    handleDeleteCreator,
    modalStyles,
    errors,
    imageURL,
    setImageURL,
  } = useHandleCreatorEdit({
    creatorId,
  });

  return (
    <>
      <div className="creator-edit">
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
                      backgroundImage: `url('${imageURL}')`,
                    }}
                  ></div>
                  <form className="edit-form" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Personal Information</h1>
                    <label htmlFor="name">
                      <div>
                        <p>Name</p>
                        <img src="/input/name.svg" alt="" />
                      </div>
                      <input
                        type="text"
                        {...register("name", { required: true })}
                        placeholder="Enter creator's name"
                        defaultValue={getCreatorData.name}
                      />
                      {errors.name && (
                        <p className="error">This field is required</p>
                      )}
                      {}
                    </label>
                    <label htmlFor="imageURL">
                      <div>
                        <p>Image</p>
                        <img src="/input/image.svg" alt="" />
                      </div>
                      <input
                        type="text"
                        {...register("imageURL")}
                        placeholder="Enter creator's image URL"
                        defaultValue={getCreatorData.imageURL}
                        onBlur={(e) => {
                          if (e.target.value === "") {
                            setImageURL(getCreatorData.imageURL);
                          } else {
                            setImageURL(e.target.value);
                          }
                        }}
                      />
                    </label>
                    <label htmlFor="description">
                      <div>
                        <p>Description</p>
                        <img src="/input/description.svg" alt="" />
                      </div>
                      <textarea
                        {...register("description")}
                        placeholder="Enter creator's description"
                        defaultValue={getCreatorData.description}
                        rows="4"
                      />
                    </label>
                    <h1 style={{ marginTop: "20px" }}>SOCIAL MEDIA</h1>
                    <label htmlFor="youtubeURL">
                      <div>
                        <p>YouTube</p>
                        <img src="/input/youtube.svg" alt="" />
                      </div>
                      <input
                        type="text"
                        {...register("youtubeURL")}
                        placeholder="Enter creator's YouTube URL"
                        defaultValue={getCreatorData.youtubeURL}
                      />
                    </label>
                    <label htmlFor="twitterURL">
                      <div>
                        <p>Twitter / X</p>
                        <img src="/input/twitter.svg" alt="" />
                      </div>
                      <input
                        type="text"
                        {...register("twitterURL")}
                        placeholder="Enter creator's Twitter / X URL"
                        defaultValue={getCreatorData.twitterURL}
                      />
                    </label>
                    <label htmlFor="instagramURL">
                      <div>
                        <p>Instagram</p>
                        <img src="/input/instagram.svg" alt="" />
                      </div>
                      <input
                        type="text"
                        {...register("instagramURL")}
                        placeholder="Enter creator's Instagram URL"
                        defaultValue={getCreatorData.instagramURL}
                      />
                    </label>
                    <div className="action" style={{ marginTop: "20px" }}>
                      <input
                        type="button"
                        style={{ backgroundColor: "#FF584E" }}
                        value="Delete"
                        onClick={() => setConfirmModalIsOpen(true)}
                      ></input>
                      <input type="submit" value="Save" />
                    </div>
                  </form>
                </>
              )
            )}
          </div>
        </div>
      </div>
      <Modal
        isOpen={confirmModalIsOpen}
        contentLabel="Example Modal"
        style={modalStyles}
        onRequestClose={() => setConfirmModalIsOpen(false)}
      >
        <div className="confirm-modal">
          <div>
            <img src="/caution.svg" alt="" />
            <h1>DELETING CREATOR</h1>
            <img src="/caution.svg" alt="" />
          </div>
          <p>
            Are you sure you want to delete this creator from your universe?
          </p>
          <div>
            <button
              onClick={() => {
                setConfirmModalIsOpen(false);
              }}
            >
              Cancel
            </button>
            <button
              style={{ backgroundColor: "#FF584E" }}
              onClick={() => {
                setConfirmModalIsOpen(false);
                handleDeleteCreator();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
