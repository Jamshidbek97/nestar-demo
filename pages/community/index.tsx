import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";

const Community: NextPage = () => {
  console.log("Community component - pages router");

  return (
    <div>
      Community
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        {" "}
        press me
      </button>
    </div>
  );
};

export default withLayoutBasic(Community);
