import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";

export const createMockedRouter = (Component: unknown): Router => {
  const routes: Array<RouteRecordRaw> = [
    {
      path: "/:catchAll(.*)",
      name: "mock",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      component: Component as any,
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  return router;
};
