import axios from "axios";
import {
  IUserUpdate,
  UserUpdateDTO,
} from "../interfaces/IUserUpdate";
import useUser from "@/context/Auth/useUser";

const UserUpdateService = (): IUserUpdate => {
  const { user } = useUser();

  const token = user?.token;
  const id = user?.id;
  const url = `https://mentores-backend.onrender.com/mentor/${id}`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handle = async (data: UserUpdateDTO) => {
    try {
      const response = await axios.put(url, data, config)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  };



  return { handle };
};

export default UserUpdateService;