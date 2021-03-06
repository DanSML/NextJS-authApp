import { useEffect } from "react";
import { Can } from "../src/components/Can";
import { useAuth } from "../src/contexts/AuthContext"
import { setupAPIClient } from "../src/services/api";
import { api } from "../src/services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user, isAuthenticated, signOut } = useAuth();

  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }, []);


  return (
    <>
      <h1> Dashboard: {user.email} </h1>

      <button onClick={signOut}> Sign Out </button>

      <Can permissions={['metrics.list']}>
        <div>Métricas</div> 
      </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me');

  console.log(response.data);

  return {
    props: {}
  }
})