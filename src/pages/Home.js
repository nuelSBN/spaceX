import React from "react";
import AllShips from "../components/AllShips";
import Search from "../components/Search";

export default function Home({ data, isPending }) {
  return (
    <main>
      <Search data={data} />
      {isPending && (
        <div
          style={{
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "14vmin",
              textTransform: "capitalize",
            }}
          >
            loading....
          </p>
        </div>
      )}
      {data && <AllShips data={data} />}
    </main>
  );
}
