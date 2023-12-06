import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Landing = () => {
    const [token, setToken] = useState(localStorage.getItem("_token"))
    const [isLoading, setIsLoading] = useState(true)

    const nav = useNavigate()

    function goToLink(){
        window.location.href = "http://hysportx.com/application/login"
    }


          React.useEffect(() => {
            const fetchData = async () => {
              try {
                if (token) {
                  const response = await fetch(
                    "https://hysportx.com/application/api/validate",
                    {
                      method: "GET",
                      headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  )
                  const data = await response.json()
                  console.log(localStorage.getItem("_token"))
                  

                  if (data.status === "true") {
                    console.log(data)
                    // nav("/admin/dashboard")
                    nav("/login")
                    return
                  } else {
                    localStorage.setItem("_token", "")
                  }
                } else {
                  console.log("we will send to fittest warrior.")
                  console.log(localStorage.getItem("_token"))
                  window.location.href = "http://localhost:3000/"
                }
              } catch (error) {
                console.error("Error fetching data:", error)
              } finally {
                setIsLoading(false)
              }
            }

            fetchData()
          }, [token])

          // function fetchData(){
          //   console.log("ASGYFUDahfi")
          // }

  return (
    <div>
        Landing Page 123
        <button onClick={goToLink} >Go to this link</button>
    </div>
  )
}

export default Landing