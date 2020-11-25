import Layout from "../components/layout";
import { useFetchUser } from "../utils/user";
import Router from "next/router";

export default function Profile() {
  const { user, loading } = useFetchUser();

  if (loading) {
    return (
      <Layout>
        <p>Loading....</p>
      </Layout>
    );
  }

  if (!user && !loading) {
    Router.replace("/");
  }

  return (
    <Layout>
      {user ? (
        <div>
          <div>Hi This is My profile</div>
          <div>
            name: {user ? user.name : ""}
            <br />
            nickname: {user ? user.nickname : ""}
          </div>
        </div>
      ) : null}
    </Layout>
  );
}
