import "./Login.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useDispatch } from "react-redux";
import { LoginResponse, login_thunk } from "../../redux-store/slices/UserInfoSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Login() {
  const dispatch = useDispatch()
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const [open, setOpen] = useState(true);
  const handleClose = async (data: { username: string; password: string; }) => {
    dispatch(login_thunk(data)).then((res: LoginResponse)=>{
      dispatch({'type':"SET_WEBSOCKET_CONNECTION", 'payload': { 'token': res.payload.access}})
    })
    setOpen(false);
  };


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-info-container">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Login
            </Typography>
            <form className="modal-info-container" onSubmit={handleSubmit(handleClose)}>
              <input
                type="text"
                placeholder="username"
                {...register("username", {
                  required: {
                    value: true,
                    message: "field is required",
                  },
                })}
              />
              <p className="error">{errors.username?.message}</p>
              <input
                type="password"
                placeholder="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "field is required",
                  },
                })}
              />
              <p className="error">{errors.password?.message}</p>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
            <DevTool control={control} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
