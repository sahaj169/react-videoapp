import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "01a7ffdc667d4d268c2075c44050e8cf";
// 01a7ffdc667d4d268c2075c44050e8cf
const token =
  "Hello";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
