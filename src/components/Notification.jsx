import React from "react";
import { Button, notification } from "antd";
const openNotification = () => {
  notification.open({
    message: "Notification Title",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};
const Notification = () => (
  <Button type="primary" onClick={openNotification} danger>
    Press to get notification
  </Button>
);
export default Notification;
