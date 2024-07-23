import { useLoaderData } from "react-router-dom";
import { useHandleCreatorAddNew } from "./hooks";
import Modal from "react-modal";
import "./styles.css";

Modal.setAppElement("#root");

export const AddCreator = () => {
  const {
    creator,
    register,
    handleSubmit,
    onSubmit,
    confirmModalIsOpen,
    setConfirmModalIsOpen,
    modalStyles,
    imageUrl,
    setImageUrl,
    navigate,
  } = useHandleCreatorAddNew();

  return (
    <>
      <div className="creator-add-new">
        <div className="content-wrapper">
          <div className="content">
            <div
              className="creator-image"
              style={{
                backgroundImage: `url('${imageUrl}')`,
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
                />
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
                  onBlur={(e) => {
                    if (e.target.value === "") {
                      setImageURL("/placeholder.png");
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
                  rows="4"
                />
              </label>
              <h1 style={{ marginTop: "10px" }}>SOCIAL MEDIA</h1>
              <label htmlFor="youtubeURL">
                <div>
                  <p>YouTube</p>
                  <img src="/input/youtube.svg" alt="" />
                </div>
                <input
                  type="text"
                  {...register("youtubeURL")}
                  placeholder="Enter creator's YouTube URL"
                />
              </label>
              <label htmlFor="twitter">
                <div>
                  <p>Twitter / X</p>
                  <img src="/input/twitter.svg" alt="" />
                </div>
                <input
                  type="text"
                  {...register("twitterURL")}
                  placeholder="Enter creator's Twitter / X URL"
                />
              </label>
              <label htmlFor="instagram">
                <div>
                  <p>Instagram</p>
                  <img src="/input/instagram.svg" alt="" />
                </div>
                <input
                  type="text"
                  {...register("instagramURL")}
                  placeholder="Enter creator's Instagram URL"
                />
              </label>
              <div className="action" style={{ marginTop: "20px" }}>
                <input
                  type="button"
                  style={{ backgroundColor: "#FF584E" }}
                  value="Cancel"
                  onClick={() => setConfirmModalIsOpen(true)}
                ></input>
                <input type="submit" value="CREATE" />
              </div>
            </form>
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
            <h1>CANCELLING</h1>
            <img src="/caution.svg" alt="" />
          </div>
          <p>
            Are you sure you want to cancel adding a new Creator to your
            universe?
          </p>
          <div>
            <button
              onClick={() => {
                setConfirmModalIsOpen(false);
              }}
            >
              KEEP GOING
            </button>
            <button
              style={{ backgroundColor: "#FF584E" }}
              onClick={() => {
                setConfirmModalIsOpen(false);
                navigate("/");
              }}
            >
              CANCEL PROCESS
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
