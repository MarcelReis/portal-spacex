import { render, RenderResult } from "@testing-library/vue";
import { State, storeOptions } from "@/store";
import { createStore, Store } from "vuex";
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

export const createMockedStore = (): Store<State> => {
  return createStore(storeOptions);
};

export const renderWithPlugins = async (
  Component: unknown
): Promise<[RenderResult, { router: Router; store: Store<State> }]> => {
  const store = createMockedStore();
  const router = createMockedRouter(Component);

  const wrapper = render(Component, {
    global: { plugins: [router, store] },
  });

  await router.isReady();

  return [wrapper, { router, store }];
};
