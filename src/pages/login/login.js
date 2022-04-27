import React, { useEffect, useState } from "react";
import Button from "../../components/button/button";
import Error from "../../components/error/error";
import Input from "../../components/input/input";
import useForm from "../../hooks/useForm";
import { isAuth, IsEmailValid } from "../../utils/helperFunc";
import Home from "../home/home";
import "./login.css"
const Login = () => {
    const [value, handleChange] = useForm()
    const [error, setError] = useState({ // all errors are captures in this obj
        email: "",
        password: ""
    })
    const [isAuthStatus, setIsAuthStatus] = useState(false)

    const onBtnClick = () => {
        // email validation and error handling
        let isValid = IsEmailValid(value.email) // helper function that helps checking valid email or not
        let obj = { ...error }
        if (value["email"]) {
            console.log("submitted", isValid)
            if (isValid) {
                obj.email = ""
            }
            else {
                obj.email = "not a valid one"
            }
        }
        else {
            obj.email = "Please enter an email"
        }
        // handling password
        if (value["password"]) {
            let isAuthFlag = isAuth(value.password)
            console.log("isAuth", isAuthFlag)
            console.log("obj", obj)

            if (isAuthFlag == 10 &&  isValid) {
                console.log("obj isAuth", obj)

                setIsAuthStatus(true)
            }
            else {
                obj.password = "Password is incorrect. try again!"

            }
        }
        else {
            obj.password = "Please enter your password"
        }
        setError(obj)

    }
    return <>
    {!isAuthStatus ?
        <div className="card">
            <form className="d-flex flex-col gap-1">
                <label>
                    Email:
                </label>
                <Input
                    value={value.email || ""} type="text" name="email" handleChange={handleChange}
                />
                <Error isError={error.hasOwnProperty("email") ? error.email : ""} />
                <label>
                    Password:
                </label>
                <Input
                    value={value.password || ""} type="text" name="password" handleChange={handleChange}
                />
                <Error isError={error.hasOwnProperty("password") ? error.password : ""} />
                <Button label="submit"
                    className="btn--primary"
                    onBtnClick={onBtnClick} />
                    
            </form>
        </div>
        :
        <Home/>
    }
    </>
}
export default Login