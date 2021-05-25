import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  failedLaunchMock,
  successfulLaunchMock,
  futureLaunchMock,
  firstRocketMock,
  inDevelopmentRocketMock,
} from "./api";

export const handlers = [
  rest.get("https://api.spacexdata.com/v4/launches", (_, res, ctx) => {
    return res(
      ctx.delay(200),
      ctx.status(200),
      ctx.json([failedLaunchMock, successfulLaunchMock, futureLaunchMock])
    );
  }),
  rest.get("https://api.spacexdata.com/v4/rockets", (_, res, ctx) => {
    return res(
      ctx.delay(200),
      ctx.status(200),
      ctx.json([firstRocketMock, inDevelopmentRocketMock])
    );
  }),
];

const server = setupServer(...handlers);

export default server;
