import { useEffect } from "react";
import { useAuth } from "../src/contexts/AuthContext"
import { api } from "../src/services/api";

export default function Dashboard() {
  const { user } = useAuth();

  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }, [])

  return (
    <h1> Dashboard: {user.email} </h1>
  )
}