import React from "react";
import { Tabs } from "antd";
import Notification from "./Notification";
import Text from "./Text";
import Cal from "./Cal";
import Photo from "./Photo";

const onChange = (key) => {
  console.log(key);
};

const TabC = () => {
  return (
    <div className="tab">
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        items={[
          {
            label: "Notification",
            key: "1",
            children: <Notification />,
          },
          {
            label: "Photo",
            key: "2",
            children: <Photo />,
          },
          {
            label: `Text`,
            key: "3",
            children: <Text />,
          },
          {
            label: `Calculator`,
            key: "4",
            children: <Cal />,
          },
        ]}
      />
    </div>
  );
};

export default TabC;
