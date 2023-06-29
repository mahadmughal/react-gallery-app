import { useMemo, useContext } from "react";
import { Context } from "../context/firebaseContext";
import { useAuthContext } from "../context/authContext";
import Firestore from "../handlers/firestore";
import Storage from "../handlers/storage";

const Preview = ({ path }) => {
  return (
    path &&
      <div
        className="rounded p-1 m-5"
        style={{
          width: "30%",
          height: "300px",
          backgroundImage: `url(${path}`,
          backgroundSize: 'cover'
        }}
      >
      </div>
  );
};

function UploadForm() {
  const { state, dispatch, read } = useContext(Context);
  const { currentUser } = useAuthContext();

  const isDisabled = useMemo(() => {
    return !!Object.values(state.input).some((value) => !value)
  }, [state.input]);

  const handleOnChange = (e) => {
    if (e.target.type === 'file') {
      dispatch({ type: 'setInput', payload: { file: e.target.files[0], path: URL.createObjectURL(e.target.files[0]) } });
    } else {
      dispatch({ type: 'setInput', payload: { title: e.target.value } });
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { uploadFile, downloadFile } = Storage;
    const { writeDoc, readDocs } = Firestore;

    uploadFile(state.input)
      .then(downloadFile)
      .then((url) => {
        writeDoc({ ...state.input, path: url, user: currentUser?.displayName }, 'stocks')
          .then(() => {
            read();
          });
      });
  };

  return (
    <>
      <p className="display-6 text-center mb-3">Upload Stock Image</p>
      <div className="mb-5 d-flex align-items-center justify-content-center">
        <Preview {...state.input} />
        <form className="mb-2" style={{ textAlign: "left" }} onSubmit={handleOnSubmit
        }>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="title"
              aria-describedby="text"
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <input type="file" className="form-control" name="file" onChange={handleOnChange}/>
          </div>
          <button
            type="submit"
            className="btn btn-success float-end"
            disabled={isDisabled}
          >
            Save changes
          </button>
        </form>
      </div>
    </>
  );
};

export default UploadForm;