import AxiosWrapper from "../services/ApiConfig";

export const RegisterUser = async (body) =>{
    return AxiosWrapper.post({
        endpoints : "api/user/register",
        body,
    })
    .then((response) =>{
        return {
            status : response.status,
            data : response.data,
        };
    })
    .catch((err) => {
        throw err;
    });
};

export const LoginUser = async (body) => {
  return AxiosWrapper.post({
    endpoints: "api/user/login",
    body,
  })
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((err) => {
      throw err;
    });
};